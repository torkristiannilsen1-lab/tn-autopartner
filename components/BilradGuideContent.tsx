import { Button } from "@/components/Button";
import type { BilradGuideSection } from "@/types/bilrad-guide";

interface BilradGuideContentProps {
  sections: BilradGuideSection[];
  cta: string;
}

export function BilradGuideContent({ sections, cta }: BilradGuideContentProps) {
  return (
    <article className="mx-auto max-w-3xl space-y-6">
      {sections.map((section, index) => {
        switch (section.type) {
          case "heading":
            return (
              <h2
                key={index}
                className="pt-4 text-2xl font-semibold text-white first:pt-0"
              >
                {section.text}
              </h2>
            );
          case "paragraph":
            return (
              <p key={index} className="leading-relaxed text-muted">
                {section.text}
              </p>
            );
          case "list":
            return (
              <ul key={index} className="list-disc space-y-2 pl-6 text-muted">
                {section.items.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            );
        }
      })}
      <div className="mt-10 rounded-2xl border border-white/10 bg-secondary/60 p-8 backdrop-blur-md">
        <p className="leading-relaxed text-muted">{cta}</p>
        <Button href="/kontakt" size="lg" className="mt-6">
          Ta kontakt
        </Button>
      </div>
    </article>
  );
}
