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
                TN Autopartner drives av Tor Nilsen, som har jobbet i bilbransjen i 17
                år og med kjøp og salg av bruktbiler de siste 10 årene. Som utdannet
                bilmekaniker har han et solid teknisk grunnlag, noe som gjør det
                enklere å vurdere bilenes tilstand og kvalitet før de legges ut for
                salg.
              </p>
              <p className="leading-relaxed text-muted">
                Gjennom mange år i bransjen har han lært at en god bilhandel handler om
                mer enn selve bilen. Det handler om å gi ærlige råd, skape realistiske
                forventninger og være tilgjengelig når kunden trenger hjelp. Målet er
                at du skal føle deg trygg gjennom hele prosessen, enten du kjøper din
                første bil eller har handlet mange ganger tidligere.
              </p>
              <p className="leading-relaxed text-muted">
                Vi ønsker selvsagt å selge biler. Samtidig mener vi at den beste måten
                å lykkes på er å bygge langsiktige kundeforhold basert på tillit,
                ryddige avtaler og god oppfølging. En fornøyd kunde kommer gjerne
                tilbake neste gang og anbefaler oss videre til familie, venner og
                bekjente.
              </p>
              <p className="leading-relaxed text-muted">
                En bruktbil er nettopp det – en brukt bil. Ingen kan garantere at den
                aldri får en feil, eller at slitedeler ikke må skiftes underveis.
                Regelmessig vedlikehold er en naturlig del av det å eie bil, og enkelte
                reparasjoner vil komme som følge av normal slitasje over tid. Det er en
                del av bilholdet, uansett hvor bilen er kjøpt.
              </p>
              <p className="leading-relaxed text-muted">
                Det vi kan love deg, er at vi skal være en seriøs og ryddig
                samarbeidspartner også etter at bilen er levert. Vi tilbyr gode
                garantiordninger, tydelige avtaler og behandler reklamasjoner på en
                profesjonell måte i tråd med avtalen og gjeldende regelverk. Skulle noe
                uforutsett oppstå, ønsker vi å finne gode løsninger og behandle saken på
                en ryddig og rettferdig måte.
              </p>
              <p className="leading-relaxed text-muted">
                Hos TN Autopartner ønsker vi at du skal oppleve en enkel, ærlig og
                forutsigbar bilhandel – fra første kontakt til bilen står hjemme på
                gårdsplassen.
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
