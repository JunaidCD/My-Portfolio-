import { AnimatedBackground } from "../components/AnimatedBackground";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/sections/Projects";
import { Footer } from "../components/Footer";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <div className="pt-20">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
