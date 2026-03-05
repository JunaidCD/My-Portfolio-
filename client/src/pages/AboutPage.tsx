import { AnimatedBackground } from "../components/AnimatedBackground";
import { Navbar } from "../components/Navbar";
import { About } from "../components/sections/About";
import { Footer } from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </main>
  );
}
