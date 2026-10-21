"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/Button";
import { NAV_LINKS } from "@/lib/constants";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";

export function Header() {
  const scrolled = useScrolled();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-background/80 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="relative h-10 w-44 shrink-0">
          <Image
            src="/images/logo.png"
            alt="TN Autopartner AS"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav aria-label="Hovedmeny" className="hidden items-center gap-5 lg:flex xl:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className="whitespace-nowrap text-sm font-medium text-white/80 transition-colors hover:text-white aria-[current=page]:text-white aria-[current=page]:underline aria-[current=page]:decoration-primary aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-8"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/kontakt" size="lg">
            Kontakt oss
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-white/10 p-2 text-white lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Lukk meny" : "Åpne meny"}
          aria-expanded={mobileOpen}
          aria-controls="mobilmeny"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-background/95 px-6 py-6 backdrop-blur-xl lg:hidden">
          <nav id="mobilmeny" aria-label="Mobilmeny" className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className="text-base font-medium text-white/90"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/kontakt" size="lg" className="mt-2 w-full" onClick={() => setMobileOpen(false)}>
              Kontakt oss
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
