import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Education from "@/components/sections/Education";
import AlgorithmShowcase from "@/components/sections/AlgorithmShowcase";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <Education />
      <AlgorithmShowcase />
      <Skills />
      <Contact />
    </main>
  );
}
