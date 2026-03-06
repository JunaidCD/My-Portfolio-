import { Reveal } from "../Reveal";
import { motion } from "framer-motion";
import { Trophy, Code2, Mic2, ShieldCheck, BookOpen, ExternalLink, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "2× Winner – Inter-College Business Idea Competitions",
    desc: "Secured first place in multiple inter-college business idea competitions, demonstrating entrepreneurial skills and innovative thinking."
  },
  {
    icon: Code2,
    title: "6× Hackathon Participant – Web3, prototyping projects",
    desc: "Actively participated in 6 hackathons focusing on Web3 technologies and rapid prototyping, building innovative blockchain solutions."
  },
  {
    icon: Mic2,
    title: "2× Debate Competitor – Public speaking events",
    desc: "Competed in debate competitions, showcasing strong communication skills and ability to articulate complex technical concepts."
  },
  {
    icon: ShieldCheck,
    title: "NSPE Member (2025–2027)",
    desc: "Active member of the National Society of Professional Engineers, committed to professional development and engineering excellence."
  },
  {
    icon: BookOpen,
    title: "PDH Course Completed – Reserve Studies & Community Associations",
    desc: "Successfully completed Professional Development Hours course in Reserve Studies & Community Associations."
  },
  {
    icon: Award,
    title: "Coding Fest Participant – Smart Coder 2.23 & 2.24",
    desc: "Participated in intra-college coding festivals, demonstrating programming proficiency and competitive coding skills."
  },
  {
    icon: ShieldCheck,
    title: "GDG BPPIMT Core Marketing Member (2025–2026)",
    desc: "Serving as a core marketing member of Google Developer Groups at BPPIMT, promoting tech events and community engagement."
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-sm font-mono text-primary tracking-widest uppercase mb-4">04. Achievements</span>
            <h3 className="text-3xl md:text-5xl font-bold mb-4">
              Key <span className="text-primary">Achievements</span>
            </h3>
          </div>
        </Reveal>

        <div className="space-y-3">
          {achievements.map((item, index) => (
            <Reveal key={index} delay={index * 0.1} direction="up">
              <motion.div 
                className="glass-card p-5 rounded-xl flex items-start gap-4"
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-grow">
                  <h4 className="text-white font-medium mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.8}>
          <div className="mt-12 p-6 rounded-xl glass-card border border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h4 className="text-white font-medium mb-1">Want to See More?</h4>
              <p className="text-sm text-muted-foreground">Access all certificates and awards</p>
            </div>
            <a 
              href="https://drive.google.com/drive/folders/1m8zcciOoGQmo_aZ2wSZp-WW2ouVhXiUI" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              View Documents
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
