import Hero from "@/components/sections/Hero";
import AlgorithmShowcase from "@/components/sections/AlgorithmShowcase";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AlgorithmShowcase />
      <Skills />
      <Contact />
    </main>
  );
}
