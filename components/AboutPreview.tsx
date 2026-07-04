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
              subtitle="TN Autopartner AS er en bruktbilforhandler i Borgenhaugen, nær Sarpsborg. Vi kjøper og selger biler, og legger vekt på ærlig informasjon og klare avtaler."
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="leading-relaxed text-muted">
              Vi selger biler vi kan stå for, og forteller deg det du trenger å
              vite om tilstand og historikk før du kjøper. Har du spørsmål
              underveis, er det bare å ta kontakt — vi er tilgjengelige både før
              du kjøper og etter at bilen er levert.
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
