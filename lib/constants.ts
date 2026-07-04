export const SITE_NAME = "TN Autopartner AS";
export const SITE_URL = "https://tnautopartner.no";
export const SITE_DESCRIPTION =
  "Bruktbilforhandler på Borgenhaugen i Sarpsborg. Vi kjøper og selger bruktbiler.";

export const CONTACT = {
  street: "Statsminister Torps vei 51",
  postalCode: "1738",
  city: "Borgenhaugen",
  address: "Statsminister Torps vei 51, 1738 Borgenhaugen",
  phone: "97 90 00 24",
  phoneHref: "tel:+4797900024",
  email: "post@tnautopartner.no",
  orgNr: "815 852 702",
} as const;

export const MAP_QUERY = "Statsminister Torps vei 51, 1738 Borgenhaugen";
export const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Statsminister+Torps+vei+51,+1738+Borgenhaugen,+Norway&output=embed";

export const OPENING_HOURS = [
  { day: "Mandag", hours: "10:00 – 17:00" },
  { day: "Tirsdag", hours: "10:00 – 17:00" },
  { day: "Onsdag", hours: "10:00 – 17:00" },
  { day: "Torsdag", hours: "10:00 – 19:00" },
  { day: "Fredag", hours: "10:00 – 17:00" },
  { day: "Lørdag", hours: "Etter avtale" },
  { day: "Søndag", hours: "Stengt" },
] as const;

export const NAV_LINKS = [
  { href: "/biler", label: "Biler" },
  { href: "/finansiering", label: "Finansiering" },
  { href: "/innbytte", label: "Innbytte" },
  { href: "/bilrad", label: "Bilråd" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const SOCIAL_LINKS: { href: string; label: string }[] = [];
