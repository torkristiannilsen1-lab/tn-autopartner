import Image from "next/image";
import Link from "next/link";

const posterPath = "/images/mopedbil/demobil/ligier-js60-ultimate-demobil-plakat-sort-ren";

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
      <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs leading-relaxed text-muted">
        <a href={`${posterPath}.png`} download="TN-Autopartner-Ligier-JS60-demobil.png" className="font-medium text-white underline decoration-primary underline-offset-4">
          Last ned plakaten
        </a>
        <Link href="/mopedbil/bildeinformasjon" className="underline underline-offset-4 hover:text-white">
          Om bildet
        </Link>
      </figcaption>
    </figure>
  );
}
