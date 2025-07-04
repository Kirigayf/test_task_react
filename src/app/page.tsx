import CarouselSection from "./components/carousel/CarouselComp";
import ClientsSection from "./components/clients/ClientsSection";
import FeaturesSection from "./components/features/FeaturesSection";
import HeroSection from "./components/hero/HeroSection";
import Hero2Section from "./components/hero/Hero2Section";
import StatsSection from "./components/stats/StatsSection";
import TestimonialsSection from "./components/testimonials/TestimonialsSection";
import CTASection from "./components/CTA/CTASection";
import MarketingSection from "./components/marketing/MarketingSection";

export default function Home() {
  return (
    <main>
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36">
        <CarouselSection />
        <ClientsSection />
        <FeaturesSection />
        <HeroSection />
        <StatsSection />
        <Hero2Section />
        <TestimonialsSection />
        <MarketingSection />
        <CTASection />
      </section>
    </main>
  );
}