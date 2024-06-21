import Header from "@/components/homepage/Header";
import HeroSection from "@/components/homepage/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header/>
      <HeroSection />
    </main>
  )
}
