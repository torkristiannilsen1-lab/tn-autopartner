import Image from "next/image";

const posterPath = "/images/mopedbil/demobil/ligier-js60-ultimate-demobil-plakat-sort";

export function MopedbilPoster({ priority = false }: { priority?: boolean }) {
  return (
    <figure className="mx-auto w-full min-w-0 max-w-md">
      <a href={`${posterPath}.png`} target="_blank" rel="noopener noreferrer" aria-label="Åpne reklameplakaten for Ligier JS60 Ultimate i full størrelse">
        <Image
          src={`${posterPath}.webp`}
          alt="Reklameplakat fra TN Autopartner: Sort, elektrisk Ligier JS60 Ultimate bestilt som demobil. Levering tidligst 2027."
          width={1122}
          height={1402}
          sizes="(max-width: 479px) 100vw, 448px"
          unoptimized
          priority={priority}
          className="h-auto w-full rounded-2xl border border-white/15 object-contain"
        />
      </a>
      <figcaption className="mt-4 text-xs leading-relaxed text-muted">
        Modellfoto med farge og bakgrunn digitalt endret. Avbildet modell har
        dieselmotor; vår demobil er bestilt med elektrisk drivlinje.
        <span className="mt-2 block">
          Foto: <a href="https://commons.wikimedia.org/wiki/File:2026_Ligier_JS60_Ultimate.jpg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">Js60ultim / Wikimedia Commons</a>
          {" · "}<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">CC BY 4.0</a>.
          {" "}Bearbeidet av TN Autopartner.
        </span>
        <a href={`${posterPath}.png`} download="TN-Autopartner-Ligier-JS60-demobil.png" className="mt-3 inline-block font-medium text-white underline decoration-primary underline-offset-4">
          Last ned plakaten
        </a>
      </figcaption>
    </figure>
  );
}
