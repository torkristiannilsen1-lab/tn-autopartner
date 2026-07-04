"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/hero/hero.jpg"
          alt="Bruktbil hos TN Autopartner"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-36 lg:px-8 lg:pt-40"
      >
        <FadeIn>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            TN Autopartner AS
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            Bruktbil på Borgenhaugen i Sarpsborg
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Vi kjøper og selger bruktbiler på Borgenhaugen i Sarpsborg.
            Ta gjerne kontakt – vi hjelper deg videre med det du lurer på.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/biler" size="lg">
              Se biler
            </Button>
            <Button href="/kontakt" variant="outline" size="lg">
              Kontakt oss
            </Button>
          </div>
        </FadeIn>
      </motion.div>
    </section>
  );
}
