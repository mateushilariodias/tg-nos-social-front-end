import Footer from "@/components/common/Footer";
import AboutSection from "@/components/homepage/AboutSection";
import CtaSection from "@/components/homepage/CtaSection";
import FaqSection from "@/components/homepage/FaqSection";
import Header from "@/components/homepage/header";
import HeroSection from "@/components/homepage/HeroSection";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <TestimonialsSection/>
      <FaqSection/>
      <CtaSection/>
      <Footer/>
    </main>
  )
}
