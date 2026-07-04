import { Car, Handshake, ShieldCheck } from "lucide-react";
import type { ServiceItem } from "@/types/service";

export const services: ServiceItem[] = [
  {
    id: "quality",
    title: "Kontrollerte biler",
    description:
      "Vi går gjennom bilene før salg og forteller deg om tilstand og historikk så langt vi kjenner den. Vi pynter ikke på fakta.",
    icon: ShieldCheck,
  },
  {
    id: "finance",
    title: "Finansiering",
    description:
      "Vi hjelper deg gjennom søknaden og formidler den til samarbeidspartnerne våre. Du får vanligvis svar samme dag på hverdager.",
    icon: Car,
  },
  {
    id: "trust",
    title: "Klare avtaler",
    description:
      "Tydelige avtaler og klar informasjon fra start til slutt. Du skal vite hva du kjøper.",
    icon: Handshake,
  },
];
