import { AnimatedBackground } from "../components/AnimatedBackground";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Skills } from "../components/sections/Skills";
import { Projects } from "../components/sections/Projects";
import { Achievements } from "../components/sections/Achievements";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
