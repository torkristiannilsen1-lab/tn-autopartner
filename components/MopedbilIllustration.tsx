import Image from "next/image";

export function MopedbilIllustration({ priority = false }: { priority?: boolean }) {
  return (
    <figure className="min-w-0">
      <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#191719]">
        <Image
          src="/images/mopedbil/demobil/sort-mopedbil-ai-illustrasjon.webp"
          alt="AI-generert illustrasjon av en sort, elektrisk mopedbil"
          width={1200}
          height={800}
          sizes="(max-width: 1023px) 100vw, 700px"
          unoptimized
          priority={priority}
          className="h-auto w-full"
        />
        <span className="absolute top-4 left-4 rounded-full border border-white/20 bg-black/85 px-3 py-2 text-xs font-semibold uppercase tracking-widest text-white sm:top-5 sm:left-5">
          AI-illustrasjon
        </span>
      </div>
      <figcaption className="mt-4 text-sm leading-relaxed text-muted">
        AI-generert illustrasjon av en elektrisk mopedbil. Utforming og detaljer
        kan avvike fra Ligier JS60. Egne bilder kommer når demobilen er levert.
      </figcaption>
    </figure>
  );
}
