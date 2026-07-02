import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

const benefits = [
  "Renter og vilkår fra flere samarbeidspartnere",
  "Rask behandling av søknaden",
  "Nedbetaling tilpasset det du har råd til",
  "Finansiering med eller uten egenkapital",
];

export function Finance() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionTitle
              align="left"
              title="Finansiering"
              subtitle="Vi hjelper deg med å ordne billån gjennom samarbeidspartnerne våre. Ta kontakt, så finner vi en løsning som passer."
            />
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-muted">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={20} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <Button href="/finansiering" size="lg" className="mt-8">
              Les mer om finansiering
            </Button>
          </FadeIn>
          <FadeIn delay={0.15} direction="left">
            <div className="rounded-3xl border border-white/10 bg-secondary/60 p-10 shadow-2xl shadow-black/30 backdrop-blur-md">
              <p className="text-sm uppercase tracking-[0.2em] text-primary">
                Eksempel
              </p>
              <p className="mt-4 text-4xl font-semibold text-white">Fra 3 490 kr/mnd</p>
              <p className="mt-4 leading-relaxed text-muted">
                Basert på et lånebeløp på 400 000 kr over 5 år. Månedskostnaden
                avhenger av bil, egenkapital og kredittvurdering.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
