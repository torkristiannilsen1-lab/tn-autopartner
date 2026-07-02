import Link from "next/link";
import { BillinkCarCard } from "@/components/cars/BillinkCarCard";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import { getBillinkCars } from "@/lib/billink/client";
import { isCarSold } from "@/lib/carStatus";
import type { BillinkCar } from "@/types/billink";

function selectFeatured(cars: BillinkCar[]): BillinkCar[] {
  return [...cars]
    .sort((a, b) => Number(isCarSold(a.status)) - Number(isCarSold(b.status)))
    .slice(0, 3);
}

export async function FeaturedCars() {
  const { cars, error } = await getBillinkCars();

  if (error || cars.length === 0) {
    return null;
  }

  const featured = selectFeatured(cars);

  return (
    <section id="biler" className="section-padding">
      <div className="container-main">
        <FadeIn>
          <SectionTitle
            title="Utvalgte biler"
            subtitle="Et utvalg av bilene vi har inne nå. Ta kontakt hvis du vil vite mer om en bestemt bil."
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((car) => (
              <BillinkCarCard key={car.id} car={car} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/biler"
              className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Se alle biler →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
