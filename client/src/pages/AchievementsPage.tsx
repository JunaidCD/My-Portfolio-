import { AnimatedBackground } from "../components/AnimatedBackground";
import { Navbar } from "../components/Navbar";
import { Achievements } from "../components/sections/Achievements";
import { Footer } from "../components/Footer";

export default function AchievementsPage() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <div className="pt-20">
        <Achievements />
      </div>
      <Footer />
    </main>
  );
}
