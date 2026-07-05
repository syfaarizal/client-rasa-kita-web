import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { CategorySection } from "@/components/sections/category-section";
import { BestSellerSection } from "@/components/sections/best-seller-section";
import { PromoBanner } from "@/components/sections/promo-banner";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TrustBadges } from "@/components/sections/trust-badges";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Beranda",
  description:
    "Belanja camilan lokal, frozen food, katering sehat, dan minuman kekinian berkualitas di RasaKita.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategorySection />
      <BestSellerSection />
      <PromoBanner />
      <WhyUsSection />
      <TestimonialsSection />
      <TrustBadges />
      <CtaSection />
    </>
  );
}
