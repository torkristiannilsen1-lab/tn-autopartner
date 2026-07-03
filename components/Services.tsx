import { Card } from "@/components/Card";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import { services } from "@/lib/data/services";

export function Services() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-main">
        <FadeIn>
          <SectionTitle
            title="Hvorfor velge TN Autopartner"
            subtitle="Vi holder det enkelt: ryddig handel og god oppfølging underveis."
          />
        </FadeIn>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.id} delay={index * 0.1}>
                <Card hover glass className="h-full p-8">
                  <div className="mb-6 inline-flex rounded-2xl bg-primary/10 p-4 text-primary">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted">
                    {service.description}
                  </p>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
