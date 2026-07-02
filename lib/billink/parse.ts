import "server-only";

import { XMLParser } from "fast-xml-parser";
import type {
  BillinkCar,
  BillinkImage,
  BillinkSpec,
} from "@/types/billink";

const parser = new XMLParser({
  ignoreAttributes: true,
  trimValues: true,
  parseTagValue: false,
  processEntities: true,
});

type XmlValue = string | number | boolean | null | undefined;
type XmlNode = Record<string, unknown>;

function toArray<T>(value: T | T[] | undefined | null): T[] {
  if (value === undefined || value === null) return [];
  return Array.isArray(value) ? value : [value];
}

function text(value: unknown): string {
  if (value === undefined || value === null) return "";
  return decodeEntities(String(value as XmlValue).trim());
}

function toNumber(value: unknown): number | null {
  const raw = text(value).replace(/[^\d]/g, "");
  if (!raw) return null;
  const parsed = Number.parseInt(raw, 10);
  return Number.isNaN(parsed) ? null : parsed;
}

const namedEntities: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  aring: "å",
  Aring: "Å",
  oslash: "ø",
  Oslash: "Ø",
  aelig: "æ",
  AElig: "Æ",
  ndash: "–",
  mdash: "—",
};

function decodeEntities(input: string): string {
  let result = input;
  let previous: string;

  do {
    previous = result;
    result = result
      .replace(/&#x([0-9a-fA-F]+);/g, (_, hex: string) =>
        String.fromCodePoint(Number.parseInt(hex, 16)),
      )
      .replace(/&#(\d+);/g, (_, dec: string) =>
        String.fromCodePoint(Number.parseInt(dec, 10)),
      )
      .replace(/&([a-zA-Z]+);/g, (match, name: string) =>
        name in namedEntities ? namedEntities[name] : match,
      );
  } while (result !== previous);

  return result;
}

function htmlToPlainText(input: string): string {
  const decoded = decodeEntities(input);
  return decoded
    .replace(/<\s*br\s*\/?\s*>/gi, "\n")
    .replace(/<\/\s*(p|div|li|h[1-6])\s*>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}

function buildSpecs(infoNodes: XmlNode[]): BillinkSpec[] {
  return infoNodes
    .map((node) => ({
      id: text(node.ID),
      label: text(node.LEDETEKST),
      value: text(node.VERDI),
    }))
    .filter((spec) => spec.label && spec.value);
}

function findSpec(specs: BillinkSpec[], id: string, labelMatch: string) {
  const byId = specs.find((spec) => spec.id === id);
  if (byId) return byId.value;
  const normalized = labelMatch.toLowerCase();
  return specs.find((spec) => spec.label.toLowerCase().startsWith(normalized))
    ?.value;
}

function buildImages(imageNodes: XmlNode[]): BillinkImage[] {
  return imageNodes
    .map((node) => ({
      url: text(node.URL),
      thumb: text(node.URL_THUMB) || text(node.URL),
    }))
    .filter((image) => image.url);
}

function mapCar(node: XmlNode): BillinkCar {
  const specs = buildSpecs(toArray(node.INFO as XmlNode | XmlNode[]));
  const images = buildImages(toArray(node.BILDE as XmlNode | XmlNode[]));
  const sale = (node.SALG as XmlNode) ?? {};
  const contact = (node.KONTAKT as XmlNode) ?? {};

  const yearValue = findSpec(specs, "129", "årsmodell");
  const mileageValue = findSpec(specs, "156", "kilometer");

  return {
    id: text(node.ID),
    make: findSpec(specs, "123", "merke") ?? "",
    model: findSpec(specs, "115", "modell") ?? "",
    variant: findSpec(specs, "160", "variant"),
    year: yearValue ? toNumber(yearValue) : null,
    mileage: mileageValue ? toNumber(mileageValue) : null,
    price: toNumber(sale.BELOP),
    registrationFee: toNumber(sale.OMREG),
    fuel: findSpec(specs, "111", "drivstoff"),
    transmission: findSpec(specs, "118", "girkasse"),
    bodyType: findSpec(specs, "144", "karosseri"),
    color: findSpec(specs, "126", "farge"),
    drive: findSpec(specs, "159", "hjuldrift"),
    power: findSpec(specs, "125", "effekt"),
    firstRegistered: findSpec(specs, "138", "1. gang"),
    status: text(node.STATUS) || "Til salgs",
    finnCode: text(node.FINN_KODE) || undefined,
    images,
    description: node.BESKRIVELSE
      ? htmlToPlainText(String(node.BESKRIVELSE))
      : undefined,
    specs,
    contact: {
      name: text(contact.NAVN) || undefined,
      phone: text(contact.TELEFON) || undefined,
      mobile: text(contact.MOBIL) || undefined,
      email: text(contact.EPOST) || undefined,
    },
  };
}

export function parseBillinkXml(xml: string): BillinkCar[] {
  const parsed = parser.parse(xml) as XmlNode;
  const billink = parsed.BILLINK as XmlNode | undefined;
  const body = billink?.BODY as XmlNode | undefined;

  if (!body) return [];

  const annonser = toArray(body.ANNONSE as XmlNode | XmlNode[]);
  return annonser.map(mapCar).filter((car) => car.id);
}
