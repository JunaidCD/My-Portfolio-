import { Reveal } from "../Reveal";
import { Trophy, Code2, Mic2, ShieldCheck, BookOpen, UserPlus, ExternalLink } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    title: "2× Winner – Inter-College Business Idea Competitions",
    desc: "Secured first place in multiple inter-college business idea competitions, demonstrating entrepreneurial skills and innovative thinking."
  },
  {
    icon: Code2,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    title: "6× Hackathon Participant – Web3, prototyping projects",
    desc: "Actively participated in 6 hackathons focusing on Web3 technologies and rapid prototyping, building innovative blockchain solutions."
  },
  {
    icon: Mic2,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    title: "2× Debate Competitor – Public speaking events",
    desc: "Competed in debate competitions, showcasing strong communication skills and ability to articulate complex technical concepts."
  },
  {
    icon: ShieldCheck,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    title: "NSPE Member (2025–2027)",
    desc: "Active member of the National Society of Professional Engineers, committed to professional development and engineering excellence."
  },
  {
    icon: BookOpen,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    title: "PDH Course Completed – Reserve Studies & Community Associations (Feb 2025)",
    desc: "Successfully completed Professional Development Hours course in Reserve Studies & Community Associations, enhancing project management skills."
  },
  {
    icon: Trophy,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    title: "Coding Fest Participant – Smart Coder 2.23 & 2.24 (intra-college events)",
    desc: "Participated in intra-college coding festivals, demonstrating programming proficiency and competitive coding skills."
  },
  {
    icon: UserPlus,
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
    title: "GDG BPPIMT Core Marketing Member (2025–2026)",
    desc: "Serving as a core marketing member of Google Developer Groups at BPPIMT, promoting tech events and community engagement."
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-sm font-mono text-accent mb-2 tracking-widest uppercase">04. Recognition</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold">Key <span className="text-glow-purple text-secondary">Achievements</span></h3>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-transparent mt-6 rounded-full" />
          </div>
        </Reveal>

        <div className="space-y-6">
          {achievements.map((item, index) => (
            <Reveal key={index} delay={index * 0.1} direction="up">
              <div className="glass-card p-6 rounded-2xl flex items-start gap-6 border border-white/5 hover:border-white/10 transition-all group">
                <div className={`w-14 h-14 shrink-0 rounded-2xl ${item.bgColor} flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.8}>
          <div className="mt-20 p-8 rounded-3xl glass-card border border-primary/20 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            <div className="relative z-10">
              <h4 className="text-2xl font-bold text-white mb-4">Want to See More?</h4>
              <p className="text-muted-foreground mb-8">Access all certificates, awards, and detailed documentation</p>
              <a 
                href="https://drive.google.com/drive/folders/1m8zcciOoGQmo_aZ2wSZp-WW2ouVhXiUI" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold hover:scale-105 transition-transform box-glow-cyan"
              >
                <ExternalLink className="w-5 h-5" />
                Access All Documents
              </a>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
