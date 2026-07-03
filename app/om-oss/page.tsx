import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Om oss",
  "TN Autopartner AS er en bruktbilforhandler i Østfold. Vi kjøper og selger biler med fokus på ryddig handel.",
  "/om-oss",
);

const values = [
  {
    title: "Ærlighet",
    description:
      "Vi forteller det vi vet om bilens tilstand, historikk og pris. Ingen skjulte overraskelser.",
  },
  {
    title: "Kvalitet",
    description:
      "Bilene blir sjekket før salg, og vi selger bare biler vi kan stå for.",
  },
  {
    title: "Service",
    description:
      "Vi er tilgjengelige for spørsmål og oppfølging, også etter at bilen er levert.",
  },
  {
    title: "Enkel prosess",
    description:
      "Vi holder prosessen enkel og forutsigbar, fra første kontakt til levering.",
  },
];

export default function OmOssPage() {
  return (
    <>
      <PageHeader
        title="Om TN Autopartner"
        subtitle="En bruktbilforhandler i Østfold. Vi kjøper og selger biler, og legger vekt på ryddig handel."
      />
      <section className="section-padding !pt-0">
        <div className="container-main space-y-16">
          <FadeIn>
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <p className="text-lg leading-relaxed text-muted">
                TN Autopartner AS er en bruktbilforhandler i Østfold. Vi kjøper og
                selger bruktbiler, og har som mål at handelen skal være enkel og ryddig
                for kunden.
              </p>
              <p className="leading-relaxed text-muted">
                Vi selger biler vi kan stå for, og forteller deg om tilstand og
                historikk før du kjøper. Har du spørsmål, er det bare å ta kontakt —
                vi hjelper deg både før og etter at handelen er gjort.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid gap-8 md:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-white/10 bg-secondary/60 p-8 backdrop-blur-md"
                >
                  <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted">{value.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="text-center">
              <Button href="/kontakt" size="lg">
                Ta kontakt med oss
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
