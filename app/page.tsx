import { Hero } from "@/components/Hero";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { ComeFunziona } from "@/components/ComeFunziona";
import { Pacchetti } from "@/components/Pacchetti";
import { CosaServe } from "@/components/CosaServe";
import { PersuasiveElements } from "@/components/PersuasiveElements";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ComeFunziona />
      <Pacchetti />
      <CosaServe />
      <PersuasiveElements />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}

