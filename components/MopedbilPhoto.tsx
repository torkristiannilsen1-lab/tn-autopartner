import Image from "next/image";

const photographs = {
  front: {
    file: "ligier-js60-ultimate-2026-sort-front-cc-by.webp",
    width: 1356,
    height: 1160,
    source: "https://commons.wikimedia.org/wiki/File:2026_Ligier_JS60_Ultimate.jpg",
    alt: "Ligier JS60 Ultimate 2026 sett skrått forfra, modellfoto med karosserifargen digitalt endret til sort",
  },
  side: {
    file: "ligier-js60-ultimate-2026-sort-side-cc-by.webp",
    width: 1448,
    height: 1086,
    source: "https://commons.wikimedia.org/wiki/File:Ligier_JS60_2026_Ultimate.jpg",
    alt: "Ligier JS60 Ultimate 2026 sett fra siden, modellfoto med karosserifargen digitalt endret til sort",
  },
};

export function MopedbilPhoto({ priority = false, view = "front" }: { priority?: boolean; view?: keyof typeof photographs }) {
  const photograph = photographs[view];
  return (
    <figure className="min-w-0">
      <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#191719]">
        <Image
          src={`/images/mopedbil/demobil/${photograph.file}`}
          alt={photograph.alt}
          width={photograph.width}
          height={photograph.height}
          sizes="(max-width: 1023px) 100vw, 700px"
          unoptimized
          priority={priority}
          className="h-auto w-full object-contain"
        />
        <span className="absolute top-4 left-4 rounded-full border border-white/20 bg-black/85 px-3 py-2 text-xs font-semibold uppercase tracking-widest text-white sm:top-5 sm:left-5">
          Modellfoto · Fargeendret
        </span>
      </div>
      <figcaption className="mt-4 text-sm leading-relaxed text-muted">
        Modellfoto med karosserifargen digitalt endret til sort. Avbildet modell
        har dieselmotor; vår demobil er bestilt med elektrisk drivlinje.
        Utstyr og detaljer kan avvike.
        <span className="mt-2 block text-xs">
          Foto: <a href={photograph.source} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">Js60ultim / Wikimedia Commons</a>
          {" · "}<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">CC BY 4.0</a>.
          {" "}Fargeendring: TN Autopartner.
        </span>
      </figcaption>
    </figure>
  );
}
