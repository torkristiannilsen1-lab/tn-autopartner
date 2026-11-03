import Image from "next/image";

const photographs = {
  front: {
    file: "ligier-js60-ultimate-2026-front-cc-by.webp",
    width: 1156,
    height: 989,
    source: "https://commons.wikimedia.org/wiki/File:2026_Ligier_JS60_Ultimate.jpg",
    alt: "Grå Ligier JS60 Ultimate 2026 sett skrått forfra, modellfoto av dieselutgaven",
  },
  side: {
    file: "ligier-js60-ultimate-2026-side-cc-by.webp",
    width: 1130,
    height: 848,
    source: "https://commons.wikimedia.org/wiki/File:Ligier_JS60_2026_Ultimate.jpg",
    alt: "Grå Ligier JS60 Ultimate 2026 sett fra siden, modellfoto av dieselutgaven",
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
          Modellfoto
        </span>
      </div>
      <figcaption className="mt-4 text-sm leading-relaxed text-muted">
        Modellfoto av JS60 Ultimate i grått med dieselmotor. Vår demobil er
        bestilt i sort med elektrisk drivlinje. Utstyr og detaljer kan avvike.
        <span className="mt-2 block text-xs">
          Foto: <a href={photograph.source} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">Js60ultim / Wikimedia Commons</a>
          {" · "}<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">CC BY 4.0</a>.
          {" "}Konvertert til WebP; motivet er uendret.
        </span>
      </figcaption>
    </figure>
  );
}
