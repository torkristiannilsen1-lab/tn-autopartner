import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Om bildet",
  "Fotokreditering og bildeinformasjon for Ligier JS60-plakaten hos TN Autopartner.",
  "/mopedbil/bildeinformasjon",
);

export default function BildeinformasjonPage() {
  return (
    <>
      <PageHeader title="Om bildet" subtitle="Fotokreditering og informasjon om modellbildet." />
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-2xl space-y-9 leading-relaxed text-muted">
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-white">Originalfoto</h2>
              <p>
                «2026 Ligier JS60 Ultimate» av Js60ultim, hentet fra Wikimedia Commons.
                Originalfotoet er publisert under lisensen Creative Commons Navngivelse 4.0 Internasjonal (CC BY 4.0).
              </p>
              <p className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                <a href="https://commons.wikimedia.org/wiki/File:2026_Ligier_JS60_Ultimate.jpg" target="_blank" rel="noopener noreferrer" className="text-white underline decoration-primary underline-offset-4">Se originalfoto og fotograf</a>
                <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-white underline decoration-primary underline-offset-4">Les lisensen</a>
              </p>
            </div>
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-white">Bearbeiding</h2>
              <p>Karosserifargen er digitalt endret fra grått til sort. Bakgrunnen er erstattet, og fotografiet er satt sammen med TN Autopartners logo og reklametekst. Bearbeiding og plakat: TN Autopartner.</p>
            </div>
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-white">Modellfoto</h2>
              <p>Originalfotoet viser en Ligier JS60 Ultimate 2026 med dieselmotor. Vår demobil er bestilt i sort med elektrisk drivlinje. Utstyr og detaljer kan avvike. Bildet viser ikke den faktiske bestilte demobilen; egne bilder legges ut når bilen er levert.</p>
            </div>
            <Link href="/mopedbil" className="inline-block font-medium text-white underline decoration-primary underline-offset-4">Tilbake til mopedbil</Link>
          </div>
        </div>
      </section>
    </>
  );
}
