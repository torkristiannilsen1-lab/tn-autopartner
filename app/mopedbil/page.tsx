import Image from "next/image";
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
  "TN Autopartner satser på mopedbil fra Ligier. De første bilene er bestilt. Kontakt oss på Borgenhaugen i Sarpsborg for informasjon om utvalg og levering.",
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
    answer: "De første bilene er bestilt. Vi oppdaterer siden med tilgjengelige biler når de er på plass. Ta kontakt hvis du vil vite mer om status og forventet levering.",
  },
  {
    title: "Hvilke merker og modeller tilbyr dere?",
    answer: "Mopedbilsatsingen vår er rettet mot Ligier. Vi legger ut de konkrete modellene med utstyr og priser når dette er klart. Bilen på bildet er en Ligier JS50 og er vist som illustrasjon.",
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
        subtitle="Mer frihet i hverdagen. Nå satser TN Autopartner på mopedbil – og de første bilene er bestilt."
      />

      <section className="section-padding" aria-labelledby="ligier-heading">
        <div className="container-main">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <figure>
              <div className="relative overflow-hidden rounded-2xl bg-[#f4f4f4] px-4 pt-6 pb-2 sm:px-8 sm:pt-8">
                <span className="inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold tracking-widest text-white">
                  LIGIER
                </span>
                <Image
                  src="/images/mopedbil/ligier-js50.webp"
                  alt="Blå Ligier JS50 mopedbil sett skrått forfra"
                  width={1191}
                  height={842}
                  sizes="(max-width: 1023px) 100vw, 560px"
                  priority
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-4 text-sm leading-relaxed text-muted">
                Illustrasjonsfoto: Ligier JS50. Modell, farge og utstyr kan avvike
                fra bilene vi har bestilt.
              </figcaption>
            </figure>

            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-white">
                <Check size={16} className="text-primary" aria-hidden="true" />
                De første bilene er bestilt
              </p>
              <h2 id="ligier-heading" className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                En liten bil.<br />En stor start.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Til skolen, trening eller en tur med venner. En mopedbil kan gi
                mer selvstendighet og gjøre hverdagen enklere.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Vi starter en ny satsing med Ligier og gleder oss til å vise frem
                bilene. Hos oss får du personlig hjelp til å finne ut hva som
                passer for deg. Vi publiserer modeller, priser og levering så
                snart opplysningene er klare.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="#kontakt" size="lg">
                  Spør oss om Ligier <ArrowRight size={18} aria-hidden="true" />
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
