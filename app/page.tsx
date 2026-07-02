import { AboutPreview } from "@/components/AboutPreview";
import { ContactSection } from "@/components/ContactSection";
import { FeaturedCars } from "@/components/FeaturedCars";
import { Finance } from "@/components/Finance";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { TradeIn } from "@/components/TradeIn";

export const revalidate = 600;

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedCars />
      <Finance />
      <TradeIn />
      <AboutPreview />
      <Testimonials />
      <ContactSection />
    </>
  );
}
