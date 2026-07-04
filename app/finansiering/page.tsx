import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";
import { Partners } from "@/components/Partners";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Finansiering",
  "Vi hjelper deg med å ordne billån gjennom samarbeidspartnerne våre. Ta kontakt for et tilbud.",
  "/finansiering",
);

const options = [
  {
    title: "Billån",
    description:
      "Vi formidler billån gjennom samarbeidspartnere som SpareBank 1 Finans og Santander. Du får oversikt over rente, gebyrer og totalpris før du signerer.",
  },
];

const benefits = [
  "Personlig hjelp gjennom hele søknaden",
  "Du får vanligvis svar samme dag på hverdager",
  "Samarbeid med etablerte banker og finansselskap",
  "Vi går gjennom vilkårene sammen med deg før du signerer",
];

export default function FinansieringPage() {
  return (
    <>
      <PageHeader
        title="Finansiering"
        subtitle="Vi hjelper deg med å finne en finansieringsløsning gjennom samarbeidspartnerne våre."
      />
      <section className="section-padding !pt-0">
        <div className="container-main space-y-16">
          <FadeIn>
            <div className="mx-auto max-w-md">
              {options.map((option) => (
                <Card key={option.title} hover glass className="p-8">
                  <h3 className="text-xl font-semibold text-white">{option.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted">{option.description}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-3xl border border-white/10 bg-secondary/60 p-10 backdrop-blur-md md:p-14">
              <h2 className="text-2xl font-semibold text-white md:text-3xl">
                Slik fungerer det
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                Ta kontakt for en uforpliktende prat om finansiering. Vi går gjennom
                behovet ditt og hjelper deg med søknaden.
              </p>
              <ul className="mt-8 grid gap-4 md:grid-cols-2">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-muted">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={20} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button href="/kontakt" size="lg" className="mt-10">
                Be om finansieringstilbud
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
      <Partners className="!pt-0" />
    </>
  );
}
