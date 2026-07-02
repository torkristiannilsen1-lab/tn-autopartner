import type { Metadata } from "next";
import { CONTACT, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./constants";

const defaultOgImage = `${SITE_URL}/images/logo.png`;

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Din partner på veien`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "bruktbil",
    "bruktbiler",
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
    title: `${SITE_NAME} | Din partner på veien`,
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
    title: `${SITE_NAME} | Din partner på veien`,
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
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Industriveien 12",
    addressLocality: "Ski",
    postalCode: "1400",
    addressCountry: "NO",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "15:00",
    },
  ],
};
