import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

const steps = [
  {
    step: "01",
    title: "Verdivurdering",
    description:
      "Vi vurderer bilen din ut fra tilstand, historikk og hva den er verdt i markedet.",
  },
  {
    step: "02",
    title: "Tilbud og avklaring",
    description:
      "Du får et tydelig tilbud uten skjulte gebyrer. Vi går gjennom detaljene sammen med deg.",
  },
  {
    step: "03",
    title: "Bytte og levering",
    description:
      "Vi ordner papirarbeid og eierskifte, så du slipper å tenke på det.",
  },
];

export function TradeIn() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-main">
        <FadeIn>
          <SectionTitle
            title="Innbytte"
            subtitle="Vil du bytte inn bilen din? Vi vurderer den og trekker verdien fra bilen du kjøper."
          />
        </FadeIn>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((item, index) => (
            <FadeIn key={item.step} delay={index * 0.1}>
              <div className="rounded-2xl border border-white/10 bg-background/50 p-8 transition-all duration-300 hover:border-white/20">
                <span className="text-3xl font-semibold text-primary">{item.step}</span>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">
            <Button href="/innbytte" size="lg">
              Få verdivurdering
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
