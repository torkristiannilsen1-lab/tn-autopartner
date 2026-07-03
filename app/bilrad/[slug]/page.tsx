import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BilradGuideContent } from "@/components/BilradGuideContent";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";
import { bilradGuides, getBilradGuide } from "@/lib/data/bilrad-guides";
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
        <div className="container-main space-y-10">
          <FadeIn>
            <BilradGuideContent sections={guide.sections} cta={guide.cta} />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mx-auto max-w-3xl">
              <Link
                href="/bilrad"
                className="text-sm text-muted transition-colors hover:text-white"
              >
                ← Tilbake til Bilråd
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
