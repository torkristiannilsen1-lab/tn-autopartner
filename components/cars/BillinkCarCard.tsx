import Image from "next/image";
import Link from "next/link";
import { Calendar, Fuel, Gauge, Settings2 } from "lucide-react";
import { Card } from "@/components/Card";
import { CarStatusBadge } from "@/components/cars/CarStatusBadge";
import type { BillinkCar } from "@/types/billink";
import { formatMileage, formatPrice } from "@/lib/utils";

interface BillinkCarCardProps {
  car: BillinkCar;
}

export function BillinkCarCard({ car }: BillinkCarCardProps) {
  const cover = car.images[0]?.thumb ?? car.images[0]?.url;
  const title = [car.make, car.model].filter(Boolean).join(" ") || "Bil";

  return (
    <Link href={`/biler/${car.id}`} className="group block">
      <Card hover className="h-full overflow-hidden p-0">
        <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
          {cover ? (
            <Image
              src={cover}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-muted">
              Bilde kommer
            </div>
          )}
          <CarStatusBadge status={car.status} className="absolute left-4 top-4" />
        </div>

        <div className="space-y-4 p-6">
          <div>
            <p className="text-sm text-muted">{car.make}</p>
            <h3 className="text-xl font-semibold text-white">{car.model}</h3>
            {car.variant && (
              <p className="mt-1 line-clamp-1 text-sm text-muted">{car.variant}</p>
            )}
            <p className="mt-2 text-2xl font-semibold text-primary">
              {car.price !== null ? formatPrice(car.price) : "Ta kontakt"}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm text-muted">
            {car.year !== null && (
              <span className="flex items-center gap-2">
                <Calendar size={16} className="text-primary" />
                {car.year}
              </span>
            )}
            {car.mileage !== null && (
              <span className="flex items-center gap-2">
                <Gauge size={16} className="text-primary" />
                {formatMileage(car.mileage)}
              </span>
            )}
            {car.fuel && (
              <span className="flex items-center gap-2">
                <Fuel size={16} className="text-primary" />
                {car.fuel}
              </span>
            )}
            {car.transmission && (
              <span className="flex items-center gap-2">
                <Settings2 size={16} className="text-primary" />
                {car.transmission}
              </span>
            )}
          </div>

          <span className="inline-flex text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
            Les mer →
          </span>
        </div>
      </Card>
    </Link>
  );
}

interface BillinkCarGridProps {
  cars: BillinkCar[];
}

export function BillinkCarGrid({ cars }: BillinkCarGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {cars.map((car) => (
        <BillinkCarCard key={car.id} car={car} />
      ))}
    </div>
  );
}
