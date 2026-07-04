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
              subtitle="TN Autopartner AS er en bruktbilforhandler på Borgenhaugen i Sarpsborg. Vi kjøper og selger biler, og legger vekt på klare avtaler og god dialog."
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="leading-relaxed text-muted">
              Vi har et utvalg bruktbiler til salgs. Ta gjerne kontakt hvis du
              lurer på noe om bilene vi har inne, eller om prosessen videre.
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
