import { Car, Handshake, ShieldCheck } from "lucide-react";
import type { ServiceItem } from "@/types/service";

export const services: ServiceItem[] = [
  {
    id: "quality",
    title: "Kontrollerte biler",
    description:
      "Alle bilene blir sjekket før salg. Vi forteller deg om tilstand og historikk, uten å pynte på fakta.",
    icon: ShieldCheck,
  },
  {
    id: "finance",
    title: "Finansiering",
    description:
      "Vi hjelper deg med å ordne billån gjennom samarbeidspartnerne våre. Enkel søknad og raskt svar.",
    icon: Car,
  },
  {
    id: "trust",
    title: "Ryddig handel",
    description:
      "Tydelige avtaler og klar informasjon fra start til slutt. Du skal vite hva du kjøper.",
    icon: Handshake,
  },
];
