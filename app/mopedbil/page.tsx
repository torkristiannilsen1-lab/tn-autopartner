import { ArrowDown, ArrowRight, Check, Phone } from "lucide-react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { ContactSection } from "@/components/ContactSection";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";
import { SectionTitle } from "@/components/SectionTitle";
import { CONTACT } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Mopedbil fra Ligier",
  "Sort, elektrisk Ligier JS60 Ultimate er bestilt som demobil hos TN Autopartner i Sarpsborg. Levering tidligst 2027. Meld interesse for visning og prøvekjøring.",
  "/mopedbil",
);

const steps = [
  {
    number: "01",
    title: "Fortell oss hva du ser etter",
    text: "Din første bil, en enklere skolevei eller litt mer frihet i hverdagen? Vi hjelper deg med spørsmålene før du bestemmer deg.",
  },
  {
    number: "02",
    title: "Få oversikt over bilene",
    text: "Ta kontakt for informasjon om bilene vi har bestilt. Vi bekrefter modell, utstyr, pris og levering før en eventuell bestilling.",
  },
  {
    number: "03",
    title: "Avtal et besøk",
    text: "Når bilene er på plass, avtaler vi visning og eventuell prøvekjøring. Du finner oss på Borgenhaugen i Sarpsborg.",
  },
];

const questions = [
  {
    title: "Har dere mopedbiler på lager nå?",
    answer: "Vi har bestilt en sort, elektrisk Ligier JS60 Ultimate som demobil, med levering tidligst i 2027. Den er ennå ikke på plass. Meld interesse, så tar vi kontakt når vi kan avtale visning og prøvekjøring.",
  },
  {
    title: "Hvilke merker og modeller tilbyr dere?",
    answer: "Vår bestilte demobil er en elektrisk Ligier JS60 Ultimate i sort, med klimaanlegg, servostyring, oppvarmet førersete og vinterpakke.",
  },
  {
    title: "Kan jeg avtale visning eller prøvekjøring?",
    answer: "Ja, ta kontakt med oss, så avtaler vi det når en aktuell bil er tilgjengelig. Vi hjelper deg også med spørsmål om bilen og hva du trenger før en prøvekjøring.",
  },
];

export default function MopedbilPage() {
  return (
    <>
      <PageHeader
        title="Mopedbil fra Ligier"
        subtitle="Vår sorte, elektriske JS60 Ultimate er bestilt som demobil. Levering tidligst i 2027."
      />

      <section className="section-padding" aria-labelledby="ligier-heading">
        <div className="container-main">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <aside aria-label="Vår bestilte demobil" className="rounded-2xl border border-white/15 border-t-4 border-t-primary bg-secondary/50 p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff7373]">TN Autopartner · Demobil bestilt</p>
              <p className="mt-8 text-6xl font-semibold tracking-tight text-white sm:text-7xl">JS60<span className="block text-3xl text-primary sm:text-4xl">Ultimate.</span></p>
              <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-white/15 pt-6">
                {[['Drivlinje', 'Elektrisk'], ['Farge', 'Sort'], ['Levering', 'Tidligst 2027'], ['Status', 'Bestilt']].map(([label, value]) => (
                  <div key={label}><dt className="text-xs uppercase tracking-widest text-muted">{label}</dt><dd className="mt-2 font-medium text-white">{value}</dd></div>
                ))}
              </dl>
              <p className="mt-8 text-sm leading-relaxed text-muted">Vi legger ut egne bilder når demobilen er på plass.</p>
            </aside>

            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-white">
                <Check size={16} className="text-primary" aria-hidden="true" />
                Sort, elektrisk demobil bestilt
              </p>
              <h2 id="ligier-heading" className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Ligier JS60 Ultimate.<br />Vår nye demobil.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Elektrisk drivlinje, sort farge og komfortutstyr vi gleder oss
                til å vise frem. Nå har vi bestilt demobilen til vår Ligier-satsing.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Bilen er bestilt med klimaanlegg, servostyring, oppvarmet førersete
                og vinterpakke. Levering er tidligst i 2027. Meld interesse,
                så tar vi kontakt når den er klar for visning eller prøvekjøring.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="/mopedbil/ligier-js60-ultimate" size="lg">
                  Se vår JS60 Ultimate <ArrowRight size={18} aria-hidden="true" />
                </Button>
                <Button href={CONTACT.phoneHref} variant="outline" size="lg">
                  <Phone size={18} aria-hidden="true" /> Ring oss
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-white/10 bg-secondary/30" aria-labelledby="start-heading">
        <div className="container-main">
          <div id="start-heading">
            <SectionTitle
              title="Vi hjelper deg i gang"
              subtitle="God veiledning, tydelige svar og en avtale som passer deg."
            />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <FadeIn key={step.number}>
                <Card className="h-full p-7 lg:p-8">
                  <span className="text-sm font-semibold tracking-widest text-primary">{step.number}</span>
                  <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{step.text}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-white/10" aria-labelledby="questions-heading">
        <div className="container-main grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <h2 id="questions-heading" className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Lurer du på noe?
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
              Her er status for den nye mopedbilsatsingen vår. Du er alltid
              velkommen til å ta kontakt.
            </p>
          </div>
          <div className="space-y-3">
            {questions.map((question) => (
              <details key={question.title} className="group rounded-2xl border border-white/10 bg-secondary/60 p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-white [&::-webkit-details-marker]:hidden">
                  {question.title}
                  <ArrowDown size={18} className="shrink-0 text-muted transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="mt-4 leading-relaxed text-muted">{question.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactSection
        title="La oss snakke mopedbil"
        subtitle="Spør oss om Ligier, bilene som er bestilt eller muligheten for et besøk."
        initialMessage="Hei! Jeg er interessert i en mopedbil fra Ligier og ønsker mer informasjon."
      />
    </>
  );
}
