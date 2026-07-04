import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Innbytte",
  "Bytt inn bilen din hos TN Autopartner. Vi vurderer bilen og trekker verdien fra bilen du kjøper.",
  "/innbytte",
);

const steps = [
  {
    step: "01",
    title: "Kontakt oss",
    description:
      "Send oss informasjon om bilen: merke, modell, årsmodell og kilometerstand.",
  },
  {
    step: "02",
    title: "Verdivurdering",
    description:
      "Vi vurderer bilen og gir deg et tydelig tilbud.",
  },
  {
    step: "03",
    title: "Avtale og bytte",
    description:
      "Sier du ja, trekker vi verdien fra bilen du kjøper. Vi ordner papirarbeidet.",
  },
];

export default function InnbyttePage() {
  return (
    <>
      <PageHeader
        title="Innbytte"
        subtitle="Vil du bytte inn bilen din? Vi vurderer den og trekker verdien fra bilen du kjøper."
      />
      <section className="section-padding !pt-0">
        <div className="container-main space-y-16">
          <FadeIn>
            <div className="grid gap-8 md:grid-cols-3">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-white/10 bg-secondary/60 p-8 backdrop-blur-md"
                >
                  <span className="text-3xl font-semibold text-primary">{item.step}</span>
                  <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mx-auto max-w-2xl text-center">
              <p className="leading-relaxed text-muted">
                Vi gir deg et tilbud på innbyttebilen og gjør overgangen til
                ny bil enkel.
              </p>
              <Button href="/kontakt" size="lg" className="mt-8">
                Be om verdivurdering
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
