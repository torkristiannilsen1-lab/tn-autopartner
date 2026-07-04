import { BillinkCarGrid } from "@/components/cars/BillinkCarCard";
import { CarsUnavailable } from "@/components/cars/CarsUnavailable";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";
import { getBillinkCars } from "@/lib/billink/client";
import { createPageMetadata } from "@/lib/metadata";

export const revalidate = 600;

export const metadata = createPageMetadata(
  "Biler",
  "Se bruktbilene vi har inne nå hos TN Autopartner i Borgenhaugen. Ta kontakt for prøvekjøring eller mer info.",
  "/biler",
);

export default async function BilerPage() {
  const { cars, error } = await getBillinkCars();

  return (
    <>
      <PageHeader
        title="Våre biler"
        subtitle="Bilene vi har inne nå. Kontakt oss hvis du vil vite mer om en av dem."
      />
      <section className="section-padding !pt-0">
        <div className="container-main">
          {error ? (
            <FadeIn>
              <CarsUnavailable />
            </FadeIn>
          ) : cars.length === 0 ? (
            <FadeIn>
              <CarsUnavailable
                title="Ingen biler tilgjengelig akkurat nå"
                message="Vi har ingen biler på lager for øyeblikket. Ta kontakt, så hjelper vi deg med å finne riktig bil."
              />
            </FadeIn>
          ) : (
            <FadeIn>
              <BillinkCarGrid cars={cars} />
            </FadeIn>
          )}
        </div>
      </section>
    </>
  );
}
