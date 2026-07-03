import type { BilradGuideSection } from "@/types/bilrad-guide";
import * as guide10Ting from "./articles/10-ting-du-bor-sjekke-for-du-kjoper-bruktbil";
import * as guideSlikUnnga from "./articles/slik-unngar-du-dyre-feil-ved-bruktbilkjop";
import * as guideServicehistorikk from "./articles/hva-betyr-servicehistorikk";
import * as guideProvekjoring from "./articles/hva-bor-du-se-etter-pa-en-provekjoring";
import * as guideSlitasje from "./articles/hva-er-normal-slitasje-pa-en-bruktbil";
import * as guideInnbytte from "./articles/hvordan-fungerer-innbytte-av-bil";
import * as guideBillan from "./articles/hvordan-fungerer-billan";
import * as guideGaranti from "./articles/hva-dekker-en-bruktbilgaranti";
import * as guideGarantiReklamasjon from "./articles/garanti-eller-reklamasjon-forskjellen";
import * as guideRegisterreim from "./articles/nar-bor-registerreimen-skiftes";
import * as guideService from "./articles/hvor-ofte-bor-bilen-ha-service";
import * as guideElbilVedlikehold from "./articles/hvordan-vedlikeholde-en-elbil";
import * as guideElbilKjop from "./articles/hva-bor-du-vite-for-du-kjoper-elbil";
import * as guideArsgang from "./articles/slik-tar-du-vare-pa-bilen-gjennom-aret";
import * as guideFaq from "./articles/vanlige-sporsmal-ved-kjop-av-bruktbil";

interface GuideArticle {
  sections: BilradGuideSection[];
  cta: string;
}

export interface BilradGuide {
  slug: string;
  title: string;
  ingress: string;
  sections: BilradGuideSection[];
  cta: string;
}

function withContent(
  meta: Pick<BilradGuide, "slug" | "title" | "ingress">,
  article: GuideArticle,
): BilradGuide {
  return { ...meta, ...article };
}

export const bilradGuides: BilradGuide[] = [
  withContent(
    {
      slug: "10-ting-du-bor-sjekke-for-du-kjoper-bruktbil",
      title: "10 ting du bør sjekke før du kjøper bruktbil",
      ingress:
        "En grundig sjekk før du kjøper bruktbil kan spare deg for ubehagelige overraskelser. Vi går gjennom de viktigste punktene du bør se etter, enten du handler hos en bilforhandler i Østfold eller privat.",
    },
    guide10Ting,
  ),
  withContent(
    {
      slug: "slik-unngar-du-dyre-feil-ved-bruktbilkjop",
      title: "Slik unngår du dyre feil ved bruktbilkjøp",
      ingress:
        "Feil ved bruktbilkjøp handler ofte om det du ikke visste å se etter. Her deler vi erfaringer fra bilbransjen som hjelper deg å ta tryggere valg når du skal kjøpe bruktbil.",
    },
    guideSlikUnnga,
  ),
  withContent(
    {
      slug: "hva-betyr-servicehistorikk",
      title: "Hva betyr servicehistorikk?",
      ingress:
        "Servicehistorikk forteller mye om hvordan en bruktbil er tatt vare på. Vi forklarer hva du bør se etter i historikken, og hvorfor den er viktig når du vurderer bruktbiler hos en bilbutikk.",
    },
    guideServicehistorikk,
  ),
  withContent(
    {
      slug: "hva-bor-du-se-etter-pa-en-provekjoring",
      title: "Hva bør du se etter på en prøvekjøring?",
      ingress:
        "Prøvekjøring er din sjanse til å kjenne på bilen før du bestemmer deg. Vi viser hva du bør legge merke til i kupe, under kjøring og etter turen – uansett om du er i Sarpsborg, Fredrikstad eller andre steder i Østfold.",
    },
    guideProvekjoring,
  ),
  withContent(
    {
      slug: "hva-er-normal-slitasje-pa-en-bruktbil",
      title: "Hva er normal slitasje på en bruktbil?",
      ingress:
        "Alle bruktbiler har slitasje – spørsmålet er hva som er normalt og hva som kan bli dyrt. Vi hjelper deg å skille mellom forventet bilhold og tegn du bør ta på alvor.",
    },
    guideSlitasje,
  ),
  withContent(
    {
      slug: "hvordan-fungerer-innbytte-av-bil",
      title: "Hvordan fungerer innbytte av bil?",
      ingress:
        "Innbytte gjør det enklere å bytte bil uten å selge privat først. Vi forklarer hvordan prosessen fungerer hos en bilforhandler, og hva du kan forvente av verdivurdering og avtale.",
    },
    guideInnbytte,
  ),
  withContent(
    {
      slug: "hvordan-fungerer-billan",
      title: "Hvordan fungerer billån?",
      ingress:
        "Billån er for mange en naturlig del av å kjøpe bruktbil. Her får du en enkel oversikt over hvordan finansiering fungerer, og hva du bør tenke på før du signerer.",
    },
    guideBillan,
  ),
  withContent(
    {
      slug: "hva-dekker-en-bruktbilgaranti",
      title: "Hva dekker en bruktbilgaranti?",
      ingress:
        "Bruktbilgaranti gir ekstra trygghet, men dekningen varierer. Vi forklarer hva en garanti typisk inkluderer, og hva du bør spørre om når du handler bruktbil hos en bilbutikk.",
    },
    guideGaranti,
  ),
  withContent(
    {
      slug: "garanti-eller-reklamasjon-forskjellen",
      title: "Garanti eller reklamasjon – hva er forskjellen?",
      ingress:
        "Garanti og reklamasjon er to ulike begreper som ofte blir blandet sammen. Vi gjør det enklere å forstå hva du har krav på, og hvordan en seriøs bilforhandler håndterer slike saker.",
    },
    guideGarantiReklamasjon,
  ),
  withContent(
    {
      slug: "nar-bor-registerreimen-skiftes",
      title: "Når bør registerreimen skiftes?",
      ingress:
        "Registerreim er en kritisk del av bilholdet. Vi forklarer når beltet bør skiftes, hva som skjer hvis det ryker, og hvordan du sjekker tilstanden på en bruktbil.",
    },
    guideRegisterreim,
  ),
  withContent(
    {
      slug: "hvor-ofte-bor-bilen-ha-service",
      title: "Hvor ofte bør bilen ha service?",
      ingress:
        "Regelmessig service holder bilen i god stand og bevarer verdien. Her får du en praktisk oversikt over anbefalte serviceintervaller og hva som bør gjøres underveis.",
    },
    guideService,
  ),
  withContent(
    {
      slug: "hvordan-vedlikeholde-en-elbil",
      title: "Hvordan vedlikeholde en elbil?",
      ingress:
        "Elbil krever mindre vedlikehold enn biler med forbrenningsmotor, men bilhold er fortsatt viktig. Vi går gjennom det du bør følge med på for å holde elbilen din i god form.",
    },
    guideElbilVedlikehold,
  ),
  withContent(
    {
      slug: "hva-bor-du-vite-for-du-kjoper-elbil",
      title: "Hva bør du vite før du kjøper elbil?",
      ingress:
        "Elbil passer mange, men ikke alle. Vi samler det viktigste du bør vite om rekkevidde, lading og kostnader før du velger bruktbil eller ny elbil.",
    },
    guideElbilKjop,
  ),
  withContent(
    {
      slug: "slik-tar-du-vare-pa-bilen-gjennom-aret",
      title: "Slik tar du vare på bilen gjennom året",
      ingress:
        "Norske årstider setter bilen på prøve. Fra vinterdekk til sommervask – her får du praktiske tips for bilhold som holder bruktbilen din trygg og pålitelig hele året.",
    },
    guideArsgang,
  ),
  withContent(
    {
      slug: "vanlige-sporsmal-ved-kjop-av-bruktbil",
      title: "Vanlige spørsmål ved kjøp av bruktbil",
      ingress:
        "Mange lurer på det samme når de skal kjøpe bruktbil. Vi har samlet svar på de vanligste spørsmålene vi får som bilforhandler i Sarpsborg og Fredrikstad – og i resten av Østfold.",
    },
    guideFaq,
  ),
];

export function getBilradGuide(slug: string): BilradGuide | undefined {
  return bilradGuides.find((guide) => guide.slug === slug);
}
