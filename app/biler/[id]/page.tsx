import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Fuel,
  Gauge,
  Mail,
  Phone,
  Settings2,
} from "lucide-react";
import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CarGallery } from "@/components/cars/CarGallery";
import { CarStatusBadge } from "@/components/cars/CarStatusBadge";
import { FadeIn } from "@/components/FadeIn";
import { getBillinkCarById, getBillinkCars } from "@/lib/billink/client";
import { createPageMetadata } from "@/lib/metadata";
import { formatMileage, formatPrice } from "@/lib/utils";

export const revalidate = 600;
export const dynamicParams = true;

interface CarPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const { cars } = await getBillinkCars();
  return cars.map((car) => ({ id: car.id }));
}

export async function generateMetadata({
  params,
}: CarPageProps): Promise<Metadata> {
  const { id } = await params;
  const car = await getBillinkCarById(id);

  if (!car) {
    return createPageMetadata(
      "Bil",
      "Se detaljer om bilen hos TN Autopartner.",
      `/biler/${id}`,
    );
  }

  const title = [car.make, car.model].filter(Boolean).join(" ") || "Bil";
  const description = [
    title,
    car.year ? `${car.year}` : null,
    car.mileage !== null ? formatMileage(car.mileage) : null,
    car.fuel,
  ]
    .filter(Boolean)
    .join(" · ");

  return createPageMetadata(title, description, `/biler/${car.id}`);
}

const highlightIcons = {
  year: Calendar,
  mileage: Gauge,
  fuel: Fuel,
  transmission: Settings2,
} as const;

export default async function CarDetailPage({ params }: CarPageProps) {
  const { id } = await params;
  const car = await getBillinkCarById(id);

  if (!car) {
    notFound();
  }

  const title = [car.make, car.model].filter(Boolean).join(" ") || "Bil";

  const highlights = [
    car.year !== null
      ? { key: "year", label: "Årsmodell", value: String(car.year) }
      : null,
    car.mileage !== null
      ? { key: "mileage", label: "Kilometer", value: formatMileage(car.mileage) }
      : null,
    car.fuel ? { key: "fuel", label: "Drivstoff", value: car.fuel } : null,
    car.transmission
      ? { key: "transmission", label: "Girkasse", value: car.transmission }
      : null,
  ].filter(
    (item): item is { key: keyof typeof highlightIcons; label: string; value: string } =>
      item !== null,
  );

  return (
    <article className="pt-32 md:pt-36">
      <div className="container-main">
        <FadeIn>
          <Link
            href="/biler"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            Tilbake til biler
          </Link>
        </FadeIn>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <FadeIn>
            <CarGallery images={car.images} title={title} status={car.status} />
          </FadeIn>

          <FadeIn delay={0.1} direction="left">
            <div className="lg:sticky lg:top-28">
              <CarStatusBadge status={car.status} />
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {title}
              </h1>
              {car.variant && (
                <p className="mt-2 text-muted">{car.variant}</p>
              )}
              <p className="mt-6 text-3xl font-semibold text-primary">
                {car.price !== null ? formatPrice(car.price) : "Ta kontakt for pris"}
              </p>
              {car.registrationFee !== null && car.registrationFee > 0 && (
                <p className="mt-1 text-sm text-muted">
                  + {formatPrice(car.registrationFee)} i omregistrering
                </p>
              )}

              <dl className="mt-8 grid grid-cols-2 gap-4">
                {highlights.map((item) => {
                  const Icon = highlightIcons[item.key];
                  return (
                    <div
                      key={item.key}
                      className="rounded-xl border border-white/10 bg-secondary/60 p-4"
                    >
                      <dt className="flex items-center gap-2 text-xs text-muted">
                        <Icon size={14} className="text-primary" />
                        {item.label}
                      </dt>
                      <dd className="mt-1 font-medium text-white">{item.value}</dd>
                    </div>
                  );
                })}
              </dl>

              <div className="mt-8 space-y-3">
                <Button href="/kontakt" size="lg" className="w-full">
                  Kontakt oss om denne bilen
                </Button>
                {car.contact.mobile && (
                  <a
                    href={`tel:${car.contact.mobile.replace(/\s/g, "")}`}
                    className="flex items-center justify-center gap-2 text-sm text-muted transition-colors hover:text-white"
                  >
                    <Phone size={16} className="text-primary" />
                    {car.contact.mobile}
                  </a>
                )}
                {car.contact.email && (
                  <a
                    href={`mailto:${car.contact.email}`}
                    className="flex items-center justify-center gap-2 text-sm text-muted transition-colors hover:text-white"
                  >
                    <Mail size={16} className="text-primary" />
                    {car.contact.email}
                  </a>
                )}
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="mt-16 grid gap-12 pb-24 lg:grid-cols-[1.5fr_1fr]">
          {car.description && (
            <FadeIn>
              <section>
                <h2 className="text-2xl font-semibold text-white">Beskrivelse</h2>
                <div className="mt-4 space-y-4 leading-relaxed text-muted">
                  {car.description
                    .split("\n")
                    .filter((line) => line.trim().length > 0)
                    .map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                </div>
              </section>
            </FadeIn>
          )}

          {car.specs.length > 0 && (
            <FadeIn delay={0.1}>
              <section>
                <h2 className="text-2xl font-semibold text-white">Spesifikasjoner</h2>
                <dl className="mt-4 divide-y divide-white/10 rounded-2xl border border-white/10 bg-secondary/40">
                  {car.specs.map((spec) => (
                    <div
                      key={`${spec.id}-${spec.label}`}
                      className="flex items-center justify-between gap-4 px-5 py-3 text-sm"
                    >
                      <dt className="text-muted">{spec.label}</dt>
                      <dd className="text-right font-medium text-white">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            </FadeIn>
          )}
        </div>
      </div>
    </article>
  );
}
