import Image from "next/image";
import Link from "next/link";
import { CONTACT, NAV_LINKS, OPENING_HOURS, SITE_NAME, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-secondary/50">
      <div className="container-main section-padding !pb-8 !pt-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="relative mb-6 inline-block h-10 w-44">
              <Image
                src="/images/logo.png"
                alt={SITE_NAME}
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-sm leading-relaxed text-muted">
              Bruktbilforhandler i Østfold. Vi kjøper og selger biler med fokus på
              ryddig handel og riktig informasjon.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Sider</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Kontakt</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li>{CONTACT.address}</li>
              <li>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Åpningstider</h4>
            <ul className="space-y-2 text-sm text-muted">
              {OPENING_HOURS.map((item) => (
                <li key={item.day}>
                  {item.day}: {item.hours}
                </li>
              ))}
            </ul>
            <h4 className="mb-4 mt-8 font-semibold text-white">Følg oss</h4>
            <ul className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-muted md:flex-row">
          <p>© {new Date().getFullYear()} {SITE_NAME}. Alle rettigheter reservert.</p>
          <p>Org.nr. {CONTACT.orgNr}</p>
        </div>
      </div>
    </footer>
  );
}
