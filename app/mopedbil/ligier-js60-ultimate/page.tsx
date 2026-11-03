import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowRight, Check, ChevronRight, Phone, Snowflake } from "lucide-react";
import { Button } from "@/components/Button";
import { ContactSection } from "@/components/ContactSection";
import { CONTACT } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";

const title = "Ligier JS60 Ultimate – sort, elektrisk demobil";
const description = "Vi har bestilt en sort, elektrisk Ligier JS60 Ultimate som demobil. Med klimaanlegg, servostyring, oppvarmet førersete og vinterpakke. Levering tidligst 2027.";
const imagePath = "/images/mopedbil/demobil/ligier-js60-sort.webp";

export const metadata = {
  ...createPageMetadata(title, description, "/mopedbil/ligier-js60-ultimate"),
  openGraph: {
    title: "Vår nye Ligier-demobil er bestilt | TN Autopartner",
    description,
    url: "https://tnautopartner.no/mopedbil/ligier-js60-ultimate",
    images: [{ url: imagePath, width: 1100, height: 720, alt: "Sort Ligier JS60 Ultimate, modellbilde fra Ligier" }],
  },
  twitter: { card: "summary_large_image" as const, title, description, images: [imagePath] },
};

const equipment = [
  { number: "01", title: "Klimaanlegg", text: "En behagelig kupé på varme dager. Klimaanlegg er med i bestillingen vår." },
  { number: "02", title: "Servostyring", text: "Et komfortvalg for de små manøvrene i hverdagen – fra parkering til en tur gjennom byen." },
  { number: "03", title: "Oppvarmet førersete", text: "Litt ekstra komfort når morgenen er kjølig. Førersetet er bestilt med varme." },
  { number: "04", title: "Vinterpakke", text: "Demobilen er bestilt med Ligiers vinterpakke. Vinterhjul er et eget, valgfritt tilvalg." },
];

const questions = [
  { title: "Når kan jeg se og prøve demobilen?", text: "Bilen er bestilt, med levering tidligst i 2027. Meld interesse, så tar vi kontakt når bilen er klar og vi kan avtale visning eller prøvekjøring." },
  { title: "Er bilen på bildene den faktiske demobilen?", text: "Bildene er modellbilder fra Ligier. Vår demobil er bestilt i sort, med elektrisk drivlinje og Ultimate-utstyr. Vi legger ut egne bilder når den er på plass. Detaljer i modellbildene kan avvike." },
  { title: "Følger vinterhjul med vinterpakken?", text: "Nei. Vinterpakken er utstyr på bilen. Et sett vinterhjul er et eget tilvalg til 10 000 kr." },
  { title: "Hvordan får jeg pris og leveringstid på en ny bil?", text: "Ta kontakt, så gir vi deg et konkret tilbud med totalpris, utstyr og forventet levering. Avgifter og registreringskostnader bekreftes i tilbudet. Levering er tidligst i 2027." },
];

export default function LigierDemoPage() {
  return (
    <>
      <section className="overflow-hidden border-b border-white/10 pt-28 pb-12 sm:pt-32 md:pb-20">
        <div className="container-main">
          <nav aria-label="Brødsmuler" className="mb-9 flex flex-wrap items-center gap-2 text-sm text-muted">
            <Link href="/mopedbil" className="inline-flex items-center gap-2 hover:text-white"><ArrowLeft size={15} aria-hidden="true" /> Mopedbil</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page">Ligier JS60 Ultimate</span>
          </nav>
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div className="min-w-0">
              <p className="mb-6 inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] text-white/80">
                <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" /> BESTILT SOM DEMOBIL
              </p>
              <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl xl:text-7xl">
                Ligier JS60<br /><span className="text-primary">Ultimate.</span>
              </h1>
              <p className="mt-7 max-w-xl text-xl leading-relaxed text-white/85">Sort. Elektrisk. Klar for en ny hverdag.</p>
              <p className="mt-4 max-w-lg leading-relaxed text-muted">Vi har bestilt vår nye Ligier som demobil, med komfortutstyret vi ønsker å vise deg. Levering tidligst i 2027.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="#kontakt" size="lg">Meld interesse <ArrowRight size={18} aria-hidden="true" /></Button>
                <Button href="#utstyr" variant="outline" size="lg">Se utstyret <ArrowDown size={17} aria-hidden="true" /></Button>
              </div>
              <p className="mt-4 text-sm text-muted">Vi gir deg beskjed når den er klar for visning og prøvekjøring.</p>
            </div>
            <figure className="min-w-0">
              <div className="relative isolate overflow-hidden rounded-2xl bg-[#f2f2ef]">
                <span className="absolute top-5 left-5 z-10 rounded-full bg-black px-4 py-2 text-xs font-semibold tracking-[0.13em] text-white sm:top-6 sm:left-6">100 % ELEKTRISK</span>
                <Image src={imagePath} alt="Sort Ligier JS60 Ultimate sett skrått forfra, illustrasjonsbilde fra produsenten" width={1100} height={720} sizes="(max-width: 1023px) 100vw, 700px" priority className="h-auto w-full" />
                <div className="flex items-center justify-between gap-4 border-t border-black/10 px-5 py-4 text-xs font-medium text-black/65 sm:px-6"><span>LIGIER JS60 ULTIMATE</span><span>Sort · Demobil bestilt</span></div>
              </div>
              <figcaption className="mt-3 text-xs leading-relaxed text-muted">Modellbilde fra Ligier. Vår demobil er bestilt i sort. Detaljer kan avvike.</figcaption>
            </figure>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/15 pt-7 md:mt-16 md:grid-cols-4">
            {[['Drivlinje', 'Elektrisk'], ['Farge', 'Sort'], ['Utgave', 'Ultimate'], ['Levering', 'Tidligst 2027']].map(([label, value]) => (
              <div key={label}><dt className="text-xs uppercase tracking-[0.15em] text-muted">{label}</dt><dd className="mt-2 text-lg font-medium text-white">{value}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <section id="utstyr" className="section-padding scroll-mt-24" aria-labelledby="equipment-heading">
        <div className="container-main">
          <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:gap-16">
            <div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff7373]">Dette har vi valgt</p><h2 id="equipment-heading" className="text-3xl font-semibold tracking-tight md:text-4xl">Liten bil.<br />Godt med komfort.</h2></div>
            <p className="max-w-xl self-end text-lg leading-relaxed text-muted">Demobilen er bestilt med disse fire tilvalgene. Du skal få muligheten til å bli kjent med bilen og utstyret før du bestemmer deg.</p>
          </div>
          <div className="mt-12 grid gap-x-10 md:grid-cols-2 lg:gap-x-20">
            {equipment.map((item) => (
              <div key={item.number} className="flex gap-5 border-t border-white/15 py-7">
                <span className="pt-1 text-sm font-semibold text-[#ff7373]">{item.number}</span>
                <div><h3 className="text-xl font-semibold">{item.title}</h3><p className="mt-3 max-w-lg leading-relaxed text-muted">{item.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-secondary/30" aria-labelledby="interior-heading">
        <div className="container-main grid items-center gap-10 py-12 md:py-16 lg:grid-cols-2 lg:gap-16">
          <figure><Image src="/images/mopedbil/demobil/ligier-js60-interior.webp" alt="Illustrasjonsbilde av førermiljøet i Ligier JS60 Ultimate" width={1100} height={720} sizes="(max-width: 1023px) 100vw, 600px" className="h-auto w-full rounded-2xl" /><figcaption className="mt-3 text-xs text-muted">Interiørbilde fra Ligier. Utstyr og detaljer kan avvike.</figcaption></figure>
          <div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff7373]">Ultimate-utgaven</p><h2 id="interior-heading" className="text-3xl font-semibold tracking-tight md:text-4xl">Sett deg inn.<br />Kjenn etter.</h2><p className="mt-6 text-lg leading-relaxed text-muted">Et førermiljø med sportslig preg, tydelig skjerm og detaljer som gir JS60 Ultimate sin egen personlighet. Demobilen vår skal gjøre det enkelt å se hva som passer deg.</p><p className="mt-4 leading-relaxed text-muted">Du finner oss på Borgenhaugen i Sarpsborg. Meld interesse, så tar vi kontakt når bilen er klar.</p><a href="#kontakt" className="mt-7 inline-flex items-center gap-2 font-medium text-white underline decoration-primary decoration-2 underline-offset-8">Få beskjed om demobilen <ArrowRight size={17} aria-hidden="true" /></a></div>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="delivery-heading">
        <div className="container-main grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff7373]">Demobil · Visning · Prøvekjøring</p><h2 id="delivery-heading" className="text-3xl font-semibold tracking-tight md:text-4xl">Først demo.<br />Så din tur.</h2><p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">Bilen er bestilt som demobil. Tidligste levering er i 2027, og vi avtaler visning og prøvekjøring når den er på plass.</p><p className="mt-4 max-w-xl leading-relaxed text-muted">Er du interessert i en ny Ligier? Vi hjelper deg med utstyr, totalpris og levering før du bestiller.</p><div className="mt-8"><Button href="#kontakt" size="lg">Be om pris og levering <ArrowRight size={18} aria-hidden="true" /></Button></div></div>
          <div className="rounded-2xl border border-white/15 bg-secondary/50 p-7 sm:p-9">
            <div className="flex items-center gap-3"><Snowflake size={25} className="text-primary" aria-hidden="true" /><h3 className="text-xl font-semibold">Vinterhjul som tilvalg</h3></div>
            <p className="mt-6 text-4xl font-semibold tracking-tight">10 000 kr</p>
            <p className="mt-2 text-sm text-muted">Valgfritt tillegg for et sett vinterhjul.</p>
            <p className="mt-6 border-t border-white/10 pt-6 leading-relaxed text-muted">Vinterpakken i bilbestillingen og vinterhjul er to ulike ting. Vi går gjennom oppsettet med deg, så du vet hva som følger bilen og hva du velger i tillegg.</p>
            <div className="mt-6 flex items-center gap-2 text-sm text-white/80"><Check size={17} className="text-primary" aria-hidden="true" /> Totalpris og utstyr bekreftes før bestilling</div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-secondary/30 py-12 md:py-16" aria-labelledby="questions-heading">
        <div className="container-main grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div><h2 id="questions-heading" className="text-3xl font-semibold tracking-tight">Godt å vite.</h2><p className="mt-4 text-muted">Tydelig status, før vi avtaler noe.</p></div>
          <div>{questions.map((question) => (<details key={question.title} className="group border-b border-white/15 py-5 first:pt-0"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-medium text-white [&::-webkit-details-marker]:hidden">{question.title}<ArrowDown size={18} className="shrink-0 text-primary transition-transform group-open:rotate-180" aria-hidden="true" /></summary><p className="mt-4 max-w-2xl leading-relaxed text-muted">{question.text}</p></details>))}</div>
        </div>
      </section>

      <ContactSection title="Vil du ha første beskjed?" subtitle="Meld interesse for den sorte JS60 Ultimate-demobilen. Vi tar kontakt når vi kan avtale visning eller prøvekjøring." initialMessage="Hei! Jeg ønsker beskjed når den sorte, elektriske Ligier JS60 Ultimate-demobilen er klar for visning eller prøvekjøring. Send meg gjerne også informasjon om totalpris og levering på en ny bil." />
      <div className="container-main pb-10"><a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 text-sm text-muted hover:text-white"><Phone size={16} aria-hidden="true" /> Vil du heller ringe? {CONTACT.phone}</a></div>
    </>
  );
}
