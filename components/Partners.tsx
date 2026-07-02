import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import { partners } from "@/lib/data/partners";
import { cn } from "@/lib/utils";

interface PartnersProps {
  className?: string;
}

export function Partners({ className }: PartnersProps) {
  return (
    <section className={cn("section-padding", className)}>
      <div className="container-main">
        <FadeIn>
          <SectionTitle
            title="Vi samarbeider med"
            subtitle="Vi ordner finansiering og forsikring gjennom etablerte samarbeidspartnere."
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16">
            {partners.map((partner) => (
              <li key={partner.name}>
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={partner.name}
                  className="group inline-flex items-center"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    loading="lazy"
                    className="h-7 w-auto opacity-60 grayscale transition-all duration-300 [filter:brightness(0)_invert(1)] group-hover:opacity-100 group-hover:grayscale-0 group-hover:[filter:none] sm:h-8"
                  />
                </a>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
