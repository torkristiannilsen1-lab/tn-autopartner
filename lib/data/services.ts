import { Car, Handshake, ShieldCheck } from "lucide-react";
import type { ServiceItem } from "@/types/service";

export const services: ServiceItem[] = [
  {
    id: "quality",
    title: "Utvalgte biler",
    description:
      "Se vårt utvalg og ta kontakt hvis du vil vite mer om en bestemt bil.",
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
