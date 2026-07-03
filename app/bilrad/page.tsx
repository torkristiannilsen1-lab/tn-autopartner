import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";
import { bilradGuides } from "@/lib/data/bilrad-guides";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Bilråd",
  "Praktiske råd om kjøp, salg og eierskap av bruktbil. TN Autopartner deler erfaringer fra bilbransjen for å hjelpe deg tryggere gjennom bilhandelen.",
  "/bilrad",
);

export default function BilradPage() {
  return (
    <>
      <PageHeader
        title="Bilråd"
        subtitle="Kunnskap og erfaringer fra mange år i bilbransjen – for deg som skal kjøpe, selge eller eie bruktbil."
      />
      <section className="section-padding !pt-0">
        <div className="container-main space-y-16">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-muted">
                Hos TN Autopartner deler vi råd og erfaringer fra mange år som
                bilforhandler. Enten du skal kjøpe din første bruktbil eller har
                handlet biler før, håper vi guider og tipsene våre gjør deg
                tryggere i valget. Vi dekker alt fra servicehistorikk og
                prøvekjøring til billån, innbytte og bruktbilgaranti – med
                fokus på det som er relevant for deg i Sarpsborg, Fredrikstad og
                resten av Østfold.
              </p>
            </div>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {bilradGuides.map((guide, index) => (
              <FadeIn key={guide.slug} delay={index * 0.05}>
                <Card hover glass className="flex h-full flex-col p-8">
                  <h2 className="text-xl font-semibold text-white">
                    {guide.title}
                  </h2>
                  <p className="mt-4 flex-1 leading-relaxed text-muted">
                    {guide.ingress}
                  </p>
                  <Button
                    href={`/bilrad/${guide.slug}`}
                    variant="outline"
                    className="mt-6 w-fit"
                  >
                    Les mer
                  </Button>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
