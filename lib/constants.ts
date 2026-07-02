export const SITE_NAME = "TN Autopartner AS";
export const SITE_URL = "https://tnautopartner.no";
export const SITE_DESCRIPTION =
  "Vi kjøper og selger bruktbiler med fokus på ryddig handel, riktig informasjon og en enkel prosess.";

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
  { day: "Mandag – Fredag", hours: "09:00 – 17:00" },
  { day: "Lørdag", hours: "10:00 – 15:00" },
  { day: "Søndag", hours: "Stengt" },
] as const;

export const NAV_LINKS = [
  { href: "/biler", label: "Biler" },
  { href: "/finansiering", label: "Finansiering" },
  { href: "/innbytte", label: "Innbytte" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const SOCIAL_LINKS = [
  { href: "https://facebook.com", label: "Facebook" },
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://linkedin.com", label: "LinkedIn" },
] as const;
