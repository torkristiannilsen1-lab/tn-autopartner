import type { MetadataRoute } from "next";
import { getBillinkCars } from "@/lib/billink/client";
import { bilradGuides } from "@/lib/data/bilrad-guides";
import { SITE_URL } from "@/lib/constants";

export const revalidate = 600;

const routes = [
  "",
  "/biler",
  "/finansiering",
  "/innbytte",
  "/bilrad",
  "/om-oss",
  "/kontakt",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const { cars } = await getBillinkCars();
  const carEntries: MetadataRoute.Sitemap = cars.map((car) => ({
    url: `${SITE_URL}/biler/${car.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const bilradEntries: MetadataRoute.Sitemap = bilradGuides.map((guide) => ({
    url: `${SITE_URL}/bilrad/${guide.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...carEntries, ...bilradEntries];
}
