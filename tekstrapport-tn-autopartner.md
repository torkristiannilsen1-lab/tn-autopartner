# Tekstrapport – TN Autopartner

Gjennomgang av all statisk tekst på nettsiden (sider, komponenter, metadata, Bilråd-artikler og skjematekster). Billink-bilbeskrivelser er ikke vurdert, siden de kommer fra ekstern kilde.

**Status:** Kun rapport – ingen endringer er gjort i kodebasen.

---

## Prioritet 1: Tillit, juridisk forsiktighet og faktafeil

### Forside / Tjenester (`lib/data/services.ts`)

#### Problem
«Alle bilene blir sjekket før salg» er en absolutt påstand. Kunder kan tolke det som teknisk kontroll eller verkstedssjekk. Hvis dere gjør en enklere vurdering, kan det undergrave tilliten ved reklamasjon.

**Hvorfor dette er et problem:** Erfarne bilkjøpere og juridisk vurdering ser på «kontrollert/sjekket» som en konkret ytelser. Uklarhet her er et av de vanligste tillitsbruddene i bruktbil.

#### Forslag
> «Vi går gjennom bilene før salg og forteller deg om tilstand og historikk så langt vi kjenner den. Vi pynter ikke på fakta.»

---

### Forside / Finansiering (`components/Finance.tsx`)

#### Problem
«Fra 3 490 kr/mnd» basert på 400 000 kr over 5 år, uten effektiv rente, total kostnad eller eksempelvilkår. I Norge skal forbrukslån markedsføres med standardisert eksempel (eff. rente, totalkostnad m.m.).

**Hvorfor dette er et problem:** Kan oppfattes som villedende markedsføring. Kunder som sammenligner tilbud vil også savne tall de forventer å se.

#### Forslag
> «Fra 3 490 kr/mnd*  
> *Eksempel: lån 400 000 kr, nedbetaling 5 år, nominell rente X %, eff. rente X,X %, totalt X XXX kr. Tallene avhenger av bil, egenkapital og kredittvurdering.»

*(Rente og total må settes inn med faktiske tall fra samarbeidspartner.)*

---

### Forside / Finansiering (`components/Finance.tsx`, `lib/data/services.ts`)

#### Problem
«Rask behandling», «raskt svar» og «Enkel søknad» er generiske markedsfraser uten innhold.

**Hvorfor dette er et problem:** Høres AI-generert ut og sier ingenting konkret. Kunder lurer mer på *hva som skjer* enn at det er «raskt».

#### Forslag
> «Vi hjelper deg gjennom søknaden og formidler den til samarbeidspartnerne våre. Du får vanligvis svar i løpet av samme dag på hverdager.»

---

### Om oss (`app/om-oss/page.tsx`)

#### Problem
«Det vi kan love deg, er at vi skal være en seriøs og ryddig samarbeidspartner» + «gode garantiordninger» er formulert som løfter uten presisering.

**Hvorfor dette er et problem:** Ord som «love» og «gode garantiordninger» kan forstås juridisk. Kunder som får en feil utenfor garantien kan føle seg lurt.

#### Forslag
> «Det vi streber etter, er å være en ryddig samarbeidspartner også etter levering. Vi tilbyr garanti etter avtale, og behandler reklamasjoner profesjonelt i tråd med avtalen og gjeldende regelverk. Hva som dekkes, står i kjøpekontrakten.»

---

### Forside / Kundeomtaler (`lib/data/testimonials.ts`)

#### Problem
Tre kundeomtaler med generiske navn (Erik Johansen, Maria Larsen, Thomas Berg), alle 5 stjerner, uten kilde (Google, Facebook, e-post).

**Hvorfor dette er et problem:** Ser ut som plassholdertekst. Mange kunder mistenker at slike omtaler ikke er ekte – det svekker tilliten mer enn det hjelper.

#### Forslag
Enten:
- Fjern seksjonen til dere har ekte omtaler, **eller**
- Bruk faktiske sitater med fornavn + sted + kilde:

> «Grei og ryddig handel …»  
> — Maria, Sarpsborg *(Google-anmeldelse)*

---

### Footer / Sosiale medier (`lib/constants.ts`)

#### Problem
Lenker peker til `https://facebook.com`, `instagram.com` og `linkedin.com` – ikke TN Autopartner sine profiler.

**Hvorfor dette er et problem:** Klikk som ikke fører til dere virker uprofesjonelt og skader troverdigheten.

#### Forslag
Oppdater til faktiske profiler, eller fjern «Følg oss» til lenkene er klare.

---

### Bilråd / Prøvekjøring (`lib/data/bilrad-guides/articles/hva-bor-du-se-etter-pa-en-provekjoring.ts`)

#### Problem
CTA: «Ta kontakt med TN Autopartner **i Sarpsborg**» – bedriften ligger i **Borgenhaugen** (Statsminister Torps vei 51).

**Hvorfor dette er et problem:** Lokale kunder merker dette med én gang. Feil stedsangivelse kan skape tvil om resten av informasjonen.

#### Forslag
> «Vil du prøvekjøre en bil hos oss? Ta kontakt – vi holder til i Borgenhaugen, like ved Sarpsborg.»

---

### Partners (`components/Partners.tsx`)

#### Problem
«Vi ordner finansiering **og forsikring** gjennom etablerte samarbeidspartnere.»

**Hvorfor dette er et problem:** Hvis dere hovedsakelig formidler finansiering og ikke aktivt hjelper med forsikring, er det en påstand dere bør kunne stå for.

#### Forslag
> «Vi samarbeider med etablerte aktører innen finansiering og forsikring, og hjelper deg videre dersom du trenger det.»

---

## Prioritet 2: SEO og gjentakelser (Bilråd + hovedsider)

### Bilråd – alle 15 artikler

#### Problem
Svært likt mønster i innledningene: «hos en bilforhandler i Sarpsborg, en bilbutikk i Fredrikstad eller andre steder i Østfold». Mønsteret gjentas i 10+ artikler.

**Hvorfor dette er et problem:** Leses som keyword stuffing, ikke som naturlig språk. SEO-spesialister og kunder oppfatter det som «SEO-tekst». Google kan også nedprioritere repetitivt innhold.

#### Forslag
Bruk lokale søkeord **maks 2–3 steder totalt** på tvers av Bilråd, og varier formuleringen:

> «Enten du handler hos oss i Borgenhaugen, ser deg om i Sarpsborg og Fredrikstad, eller kjøper privat – dette er verdt å sjekke.»

Flytt lokale søkeord til:
- `/bilrad` intro
- én dedikert avsnitt om «bruktbil i Østfold»
- metadata/tittel

---

### Bilråd – forsiden (`app/bilrad/page.tsx`)

#### Problem
«Vi dekker alt fra servicehistorikk og prøvekjøring til billån, innbytte og bruktbilgaranti – med fokus på det som er relevant for deg i Sarpsborg, Fredrikstad og resten av Østfold.»

**Hvorfor dette er et problem:** For mange søkeord i én setning. Flyten blir tung, og setningen høres skrevet for Google, ikke for mennesker.

#### Forslag
> «Her finner du praktiske guider om alt fra servicehistorikk og prøvekjøring til billån, innbytte og bruktbilgaranti. Vi er bilforhandler i Borgenhaugen og hjelper kunder i hele Østfold – inkludert Sarpsborg og Fredrikstad.»

---

### Metadata / SEO (`lib/metadata.ts`, `lib/constants.ts`)

#### Problem
Keywords og beskrivelser nevner «Østfold» og «bilforhandler», men ikke **Borgenhaugen** eller **Sarpsborg** – der bedriften faktisk ligger.

**Hvorfor dette er et problem:** Lokalt SEO-tap. Folk søker «bruktbil Sarpsborg» og «bilforhandler Borgenhaugen» – dere mister relevans i meta og structured data.

#### Forslag
**SITE_DESCRIPTION:**
> «Bruktbilforhandler i Borgenhaugen nær Sarpsborg. Vi kjøper og selger bruktbiler med ryddig handel og tydelig informasjon.»

**keywords:** legg til `bruktbil Sarpsborg`, `bilforhandler Borgenhaugen`, `bruktbil Østfold`

**structuredData addressLocality:** vurder `Borgenhaugen` (eller `Sarpsborg` hvis det er markedsføringsnavnet dere bruker konsekvent)

---

### Forside / Hero + metadata (`components/Hero.tsx`, `lib/metadata.ts`)

#### Problem
«Din partner på veien» sier lite om hva dere faktisk gjør. Ingen lokal forankring.

**Hvorfor dette er et problem:** Svak SEO på forsiden og vag verdiforklaring for nye besøkende som ikke kjenner dere.

#### Forslag
**H1 (vurder å beholde eller justere):**
> «Bruktbil i Borgenhaugen og Østfold»

**Undertekst:**
> «Vi kjøper og selger bruktbiler med ærlig informasjon om tilstand og historikk. Ryddig handel – fra første prat til du kjører hjem.»

---

## Prioritet 3: Språk, flyt og små feil

### Bilråd / Garanti og reklamasjon

#### Problem
«ta bilder om relevant» – ugrammatisk.

#### Forslag
> «ta bilder hvis det er relevant»

---

### Bilråd / Registerreim

#### Problem
«gummibeltre» – feil fagterm. Riktig er «registerreim» eller «gummireim».

#### Forslag
> «Registerreim er et gummireim som driver kamakslingen i motoren.»

---

### Bilråd / forsiden (`app/bilrad/page.tsx`)

#### Problem
«håper vi guider og tipsene våre» – grammatikkfeil.

#### Forslag
> «håper guidene og tipsene våre gjør deg tryggere i valget»

---

### Bilråd / Garanti og reklamasjon

#### Problem
«Reklamasjon … er en lovfestet rettighet» er forenklet. Ved kjøp av bruktbil fra forhandler gjelder **forbrukerkjøpsloven** med særlige regler for bruktvarer.

**Hvorfor dette er et problem:** Kan oppfattes som juridisk rådgivning som er litt for bastant. En kunde som leser dette kan tro de har sterkere rettigheter enn avtalen gir.

#### Forslag
> «Reklamasjon handler om rettighetene du har når varen ikke er som avtalt. Ved kjøp av bruktbil fra forhandler gjelder forbrukerkjøpsloven, men rettighetene avhenger av hva som er avtalt og bilens alder og pris. Vi er ikke jurister – ved tvil anbefaler vi Forbrukerrådet.»

---

### Bilråd / Garanti og reklamasjon

#### Problem
«Vi kan ikke love … men vi kan love å behandle saker profesjonelt» – dobbelt «love» i samme avsnitt, og «profesjonelt» er vagt.

#### Forslag
> «Vi kan ikke garantere at alle saker løses slik du håper – men vi behandler dem ærlig og i tråd med avtalen.»

---

### Om oss (`app/om-oss/page.tsx`)

#### Problem
«En bruktbil er nettopp det – en brukt bil» – smart poeng, men «brukt bil» som to ord er uvanlig på norsk (Bokmål: «bruktbil»).

#### Forslag
> «En bruktbil er nettopp det – brukt.»

---

### Kontakt (`app/kontakt/page.tsx`)

#### Problem
«Ring, send e-post eller fyll ut skjemaet, **så tar vi kontakt**.» – kunden tar jo allerede kontakt.

#### Forslag
> «Ring, send e-post eller fyll ut skjemaet – så svarer vi så raskt vi kan.»

---

### Innbytte – forside vs. underside

#### Problem
Forsiden (`TradeIn.tsx`): Verdivurdering → Tilbud → Bytte.  
Innbyttesiden (`innbytte/page.tsx`): Kontakt oss → Verdivurdering → Avtale.

**Hvorfor dette er et problem:** To ulike prosessbeskrivelser skaper små tillitsglipper («stemmer det de sier?»).

#### Forslag
Velg én rekkefølge og bruk samme steg begge steder, f.eks.:
1. Kontakt oss / send info om bilen  
2. Verdivurdering  
3. Avtale og bytte

---

### Finansiering (`app/finansiering/page.tsx`)

#### Problem
Kortet sier bare «Billån» uten forklaring. Siden føles tynn sammenlignet med Bilråd og Om oss.

**Hvorfor dette er et problem:** Lite substans for både SEO og kunder som vurderer finansiering.

#### Forslag
Legg til 2–3 setninger under «Billån»:
> «Vi formidler billån gjennom samarbeidspartnere som SpareBank 1 Finans og Santander. Du får oversikt over rente, gebyrer og totalpris før du signerer.»

---

## Prioritet 4: Gjentakelser og mindre forbedringer

### Hele nettsiden

#### Problem
«Ryddig handel» brukes på forsiden, footer, om oss, tjenester, testimonials og metadata (minst 8 ganger).

**Hvorfor dette er et problem:** Ordet mister kraft når det gjentas overalt. Det blir et slogan uten innhold.

#### Forslag
Varier med: «tydelig informasjon», «ærlig fremstilling», «forutsigbar prosess», «klare avtaler».

---

### Footer (`components/Footer.tsx`)

#### Problem
«Bruktbilforhandler i Østfold» – korrekt, men generisk og uten lokal presisjon.

#### Forslag
> «Bruktbilforhandler i Borgenhaugen – Sarpsborg og Østfold.»

---

### Forside / Om oss-preview (`components/AboutPreview.tsx`)

#### Problem
«vi hjelper deg både før og etter at handelen er gjort» – fin setning, men «handelen er gjort» er litt stivt.

#### Forslag
> «vi er tilgjengelige både før du kjøper og etter at bilen er levert»

---

### Bilråd – CTA-er (flere artikler)

#### Problem
Mange CTA-er starter med «Usikker på …? Ta kontakt med TN Autopartner». Variasjonen er liten.

**Hvorfor dette er et problem:** Repetitiv avslutning gjør artiklene mer like hverandre og mer «malbasert».

#### Forslag
Varier avslutningene mer, f.eks.:
- «Lurer du på en bil du har sett hos oss? Send oss en melding.»
- «Skal du bytte bil snart? Vi tar en uforpliktende prat.»
- «Ring oss på 97 90 00 24 hvis du vil gå gjennom alternativer.»

---

### Biler (`app/biler/page.tsx`)

#### Problem
Meta: «Se bruktbilene vi har inne nå» – greit, men ingen lokal SEO.

#### Forslag
> «Se bruktbilene vi har inne nå hos TN Autopartner i Borgenhaugen. Ta kontakt for prøvekjøring eller mer info.»

---

## Oppsummert anbefaling

| Prioritet | Antall funn | Anbefalt handling |
|-----------|-------------|-------------------|
| **1 – Kritisk** | 7 | Rett før neste publisering |
| **2 – SEO** | 4 | Planlegg i én runde |
| **3 – Språk** | 7 | Enkelt å fikse raskt |
| **4 – Polish** | 5 | Når dere har tid |

**Sterke sider:** Om oss-teksten er generelt god – ærlig om slitasje, garanti og reklamasjon. Bilråd-artiklene har solid faglig innhold. Kontaktskjema og feilmeldinger er klare og norske.

---

## Filreferanser (for implementering)

| Område | Fil(er) |
|--------|---------|
| Tjenester | `lib/data/services.ts` |
| Finansiering (forside) | `components/Finance.tsx` |
| Om oss | `app/om-oss/page.tsx` |
| Kundeomtaler | `lib/data/testimonials.ts` |
| Sosiale medier | `lib/constants.ts` |
| Partners | `components/Partners.tsx` |
| Bilråd forsiden | `app/bilrad/page.tsx` |
| Bilråd artikler | `lib/data/bilrad-guides/articles/*.ts` |
| Metadata / SEO | `lib/metadata.ts`, `lib/constants.ts` |
| Hero | `components/Hero.tsx` |
| Kontakt | `app/kontakt/page.tsx` |
| Innbytte | `components/TradeIn.tsx`, `app/innbytte/page.tsx` |
| Finansiering | `app/finansiering/page.tsx` |
| Footer | `components/Footer.tsx` |
| Om oss-preview | `components/AboutPreview.tsx` |
| Biler | `app/biler/page.tsx` |
