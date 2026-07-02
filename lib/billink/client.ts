import "server-only";

import { BILLINK_REVALIDATE_SECONDS, buildBillinkUrl } from "./config";
import { parseBillinkXml } from "./parse";
import type { BillinkCar, BillinkResult } from "@/types/billink";

interface BillinkCache {
  cars: BillinkCar[];
  fetchedAt: number;
}

let memoryCache: BillinkCache | null = null;

function isNightWindow(): boolean {
  const hour = Number(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Oslo",
      hour: "2-digit",
      hour12: false,
    }).format(new Date()),
  );

  return hour >= 2 && hour < 6;
}

export async function getBillinkCars(): Promise<BillinkResult> {
  if (isNightWindow() && memoryCache) {
    return { cars: memoryCache.cars, error: false };
  }

  const url = buildBillinkUrl();

  if (!url) {
    return { cars: memoryCache?.cars ?? [], error: !memoryCache };
  }

  try {
    const response = await fetch(url, {
      next: { revalidate: BILLINK_REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      throw new Error(`Billink svarte med status ${response.status}`);
    }

    const xml = await response.text();
    const cars = parseBillinkXml(xml);
    memoryCache = { cars, fetchedAt: Date.now() };

    return { cars, error: false };
  } catch {
    if (memoryCache) {
      return { cars: memoryCache.cars, error: false };
    }

    return { cars: [], error: true };
  }
}

export async function getBillinkCarById(
  id: string,
): Promise<BillinkCar | null> {
  const { cars } = await getBillinkCars();
  return cars.find((car) => car.id === id) ?? null;
}
