import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";
import {
  bilradGuides,
  getBilradGuide,
} from "@/lib/data/bilrad-guides";
import { createPageMetadata } from "@/lib/metadata";

interface BilradGuidePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return bilradGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: BilradGuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getBilradGuide(slug);

  if (!guide) {
    return createPageMetadata("Bilråd", "Guide ikke funnet.", "/bilrad");
  }

  return createPageMetadata(guide.title, guide.ingress, `/bilrad/${guide.slug}`);
}

export default async function BilradGuidePage({ params }: BilradGuidePageProps) {
  const { slug } = await params;
  const guide = getBilradGuide(slug);

  if (!guide) {
    notFound();
  }

  return (
    <>
      <PageHeader title={guide.title} subtitle={guide.ingress} />
      <section className="section-padding !pt-0">
        <div className="container-main">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <Button href="/bilrad" variant="outline">
                Tilbake til Bilråd
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
