import type { Metadata } from "next";
import { CONTACT, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./constants";

const defaultOgImage = `${SITE_URL}/images/logo.png`;

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Bruktbil i Borgenhaugen og Østfold`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "bruktbil",
    "bruktbiler",
    "bruktbil Sarpsborg",
    "bruktbil Østfold",
    "bilforhandler Borgenhaugen",
    "bilforhandler",
    "finansiering",
    "innbytte",
    "TN Autopartner",
    "Østfold",
    "Norge",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Bruktbil i Borgenhaugen og Østfold`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: defaultOgImage,
        width: 800,
        height: 350,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Bruktbil i Borgenhaugen og Østfold`,
    description: SITE_DESCRIPTION,
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    ],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: `${SITE_URL}${path}`,
    },
    twitter: {
      title: `${title} | ${SITE_NAME}`,
      description,
    },
    alternates: {
      canonical: `${SITE_URL}${path}`,
    },
  };
}

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: "+4797900024",
  email: CONTACT.email,
  taxID: CONTACT.orgNr,
  vatID: `NO${CONTACT.orgNr.replace(/\s/g, "")}MVA`,
  identifier: {
    "@type": "PropertyValue",
    propertyID: "orgnr",
    value: CONTACT.orgNr.replace(/\s/g, ""),
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.street,
    addressLocality: CONTACT.city,
    postalCode: CONTACT.postalCode,
    addressCountry: "NO",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Friday"],
      opens: "10:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "10:00",
      closes: "19:00",
    },
  ],
};
