import { Reveal } from "../Reveal";
import { motion } from "framer-motion";
import { Trophy, Code2, Mic2, ShieldCheck, BookOpen, UserPlus, ExternalLink, Award, Medal, Crown, Gem } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    gradient: "from-amber-500 to-orange-500",
    title: "2× Winner – Inter-College Business Idea Competitions",
    desc: "Secured first place in multiple inter-college business idea competitions, demonstrating entrepreneurial skills and innovative thinking."
  },
  {
    icon: Code2,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    gradient: "from-blue-500 to-cyan-500",
    title: "6× Hackathon Participant – Web3, prototyping projects",
    desc: "Actively participated in 6 hackathons focusing on Web3 technologies and rapid prototyping, building innovative blockchain solutions."
  },
  {
    icon: Mic2,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    gradient: "from-purple-500 to-pink-500",
    title: "2× Debate Competitor – Public speaking events",
    desc: "Competed in debate competitions, showcasing strong communication skills and ability to articulate complex technical concepts."
  },
  {
    icon: ShieldCheck,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    gradient: "from-emerald-500 to-teal-500",
    title: "NSPE Member (2025–2027)",
    desc: "Active member of the National Society of Professional Engineers, committed to professional development and engineering excellence."
  },
  {
    icon: BookOpen,
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    gradient: "from-orange-500 to-red-500",
    title: "PDH Course Completed – Reserve Studies & Community Associations (Feb 2025)",
    desc: "Successfully completed Professional Development Hours course in Reserve Studies & Community Associations, enhancing project management skills."
  },
  {
    icon: Award,
    color: "text-pink-400",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/30",
    gradient: "from-pink-500 to-rose-500",
    title: "Coding Fest Participant – Smart Coder 2.23 & 2.24 (intra-college events)",
    desc: "Participated in intra-college coding festivals, demonstrating programming proficiency and competitive coding skills."
  },
  {
    icon: Crown,
    color: "text-sky-400",
    bgColor: "bg-sky-500/10",
    borderColor: "border-sky-500/30",
    gradient: "from-sky-500 to-indigo-500",
    title: "GDG BPPIMT Core Marketing Member (2025–2026)",
    desc: "Serving as a core marketing member of Google Developer Groups at BPPIMT, promoting tech events and community engagement."
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative border-t border-white/5 bg-white/[0.01]">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[150px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-accent/50" />
              <span className="text-sm font-mono text-accent tracking-widest uppercase">04. Recognition</span>
              <span className="w-8 h-px bg-accent/50" />
            </div>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Key <span className="gradient-text-animated">Achievements</span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-accent via-secondary to-transparent mt-2 rounded-full" />
          </div>
        </Reveal>

        <div className="space-y-4">
          {achievements.map((item, index) => (
            <Reveal key={index} delay={index * 0.1} direction="up">
              <motion.div 
                className="group relative"
                whileHover={{ x: 5 }}
              >
                {/* NFT-style card effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
                
                <div className="relative glass-card p-6 rounded-2xl flex items-start gap-6 border border-white/5 hover:border-white/10 transition-all bg-background/80">
                  <div className={`relative w-16 h-16 shrink-0 rounded-2xl ${item.bgColor} flex items-center justify-center border ${item.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                    {/* Shimmer effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`} />
                    <item.icon className={`w-8 h-8 ${item.color} relative z-10`} />
                    
                    {/* Badge indicator */}
                    <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center`}>
                      <Gem className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  
                  {/* Rarity indicator */}
                  <div className="hidden md:flex flex-col items-end gap-1">
                    <div className={`px-2 py-1 rounded-md bg-gradient-to-r ${item.gradient} text-white text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity`}>
                      {index < 3 ? 'LEGENDARY' : index < 6 ? 'EPIC' : 'RARE'}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.8}>
          <div className="mt-20 p-8 rounded-3xl glass-card border border-primary/20 relative overflow-hidden group">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            <motion.div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.1) 0%, transparent 50%)'
              }}
            />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h4 className="text-2xl font-bold text-white mb-2">Want to See More?</h4>
                <p className="text-muted-foreground">Access all certificates, awards, and detailed documentation</p>
              </div>
              <a 
                href="https://drive.google.com/drive/folders/1m8zcciOoGQmo_aZ2wSZp-WW2ouVhXiUI" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 text-white font-bold hover:scale-105 transition-transform box-glow-cyan group-hover:animate-pulse"
              >
                <ExternalLink className="w-5 h-5" />
                Access All Documents
              </a>
            </div>
          </div>
        </Reveal>

        {/* Achievement stats */}
        <Reveal delay={1}>
          <div className="mt-12 grid grid-cols-3 gap-4">
            {[
              { icon: Medal, label: "Total Awards", value: "15+" },
              { icon: Trophy, label: "First Places", value: "4+" },
              { icon: Crown, label: "Certifications", value: "10+" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 rounded-xl glass-card"
                whileHover={{ scale: 1.02 }}
              >
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Reveal>

      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
