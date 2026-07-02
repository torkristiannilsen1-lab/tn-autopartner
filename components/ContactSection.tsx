import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import { CONTACT, MAP_EMBED_URL, OPENING_HOURS } from "@/lib/constants";

interface ContactSectionProps {
  showTitle?: boolean;
}

export function ContactSection({ showTitle = true }: ContactSectionProps) {
  return (
    <section id="kontakt" className="section-padding">
      <div className="container-main">
        {showTitle && (
          <FadeIn>
            <SectionTitle
              title="Kontakt"
              subtitle="Har du spørsmål om en bil, finansiering eller innbytte? Ta kontakt, så hjelper vi deg."
            />
          </FadeIn>
        )}
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn direction="right">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 shrink-0 text-primary" size={20} />
                  <div>
                    <p className="font-medium text-white">Adresse</p>
                    <p className="text-muted">{CONTACT.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 shrink-0 text-primary" size={20} />
                  <div>
                    <p className="font-medium text-white">Telefon</p>
                    <a href={CONTACT.phoneHref} className="text-muted hover:text-white">
                      {CONTACT.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 shrink-0 text-primary" size={20} />
                  <div>
                    <p className="font-medium text-white">E-post</p>
                    <a href={`mailto:${CONTACT.email}`} className="text-muted hover:text-white">
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="mt-1 shrink-0 text-primary" size={20} />
                  <div>
                    <p className="font-medium text-white">Åpningstider</p>
                    <ul className="mt-1 space-y-1 text-muted">
                      {OPENING_HOURS.map((item) => (
                        <li key={item.day}>
                          {item.day}: {item.hours}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  title="Kart til TN Autopartner AS"
                  src={MAP_EMBED_URL}
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1} direction="left">
            <div className="rounded-2xl border border-white/10 bg-secondary/60 p-8 backdrop-blur-md">
              <h3 className="mb-6 text-xl font-semibold text-white">Send oss en melding</h3>
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
