import { Star } from "lucide-react";
import { Card } from "@/components/Card";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <FadeIn>
          <SectionTitle
            title="Kundeomtaler"
            subtitle="Dette sier noen av kundene våre."
          />
        </FadeIn>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.id} delay={index * 0.1}>
              <Card glass className="flex h-full flex-col p-8">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="flex-1 leading-relaxed text-white/90">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-6 border-t border-white/10 pt-6">
                  <p className="font-medium text-white">{testimonial.name}</p>
                  <p className="text-sm text-muted">{testimonial.location}</p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
