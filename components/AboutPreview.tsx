import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

export function AboutPreview() {
  return (
    <section id="om-oss" className="section-padding bg-secondary/30">
      <div className="container-main">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <SectionTitle
              title="Om oss"
              subtitle="TN Autopartner AS er en bruktbilforhandler i Østfold. Vi kjøper og selger biler, og legger vekt på ærlig informasjon og ryddig handel."
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="leading-relaxed text-muted">
              Vi selger biler vi kan stå for, og forteller deg det du trenger å
              vite om tilstand og historikk før du kjøper. Har du spørsmål
              underveis, er det bare å ta kontakt — vi hjelper deg både før og etter
              at handelen er gjort.
            </p>
            <Button href="/om-oss" variant="outline" size="lg" className="mt-8">
              Les mer om oss
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
