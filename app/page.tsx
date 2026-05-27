import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutMeSection } from "@/components/AboutMeSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutMeSection />
      <ServicesGrid />
      <WhyChooseSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
