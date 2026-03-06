import { Reveal } from "../Reveal";
import { motion } from "framer-motion";
import { Trophy, Code2, Mic2, ShieldCheck, BookOpen, ExternalLink, Award, Calendar, Hash } from "lucide-react";

const achievements = [
  {
    id: "ACH-001",
    icon: Trophy,
    title: "2× Winner – Inter-College Business Idea Competitions",
    desc: "Secured first place in multiple inter-college business idea competitions, demonstrating entrepreneurial skills and innovative thinking.",
    date: "2024-03-15",
    status: "confirmed",
  },
  {
    id: "ACH-002",
    icon: Code2,
    title: "6× Hackathon Participant – Web3, prototyping projects",
    desc: "Actively participated in 6 hackathons focusing on Web3 technologies and rapid prototyping, building innovative blockchain solutions.",
    date: "2023-12-20",
    status: "confirmed",
  },
  {
    id: "ACH-003",
    icon: Mic2,
    title: "2× Debate Competitor – Public speaking events",
    desc: "Competed in debate competitions, showcasing strong communication skills and ability to articulate complex technical concepts.",
    date: "2024-01-10",
    status: "confirmed",
  },
  {
    id: "ACH-004",
    icon: ShieldCheck,
    title: "NSPE Member (2025–2027)",
    desc: "Active member of the National Society of Professional Engineers, committed to professional development and engineering excellence.",
    date: "2025-01-01",
    status: "confirmed",
  },
  {
    id: "ACH-005",
    icon: BookOpen,
    title: "PDH Course Completed – Reserve Studies & Community Associations",
    desc: "Successfully completed Professional Development Hours course in Reserve Studies & Community Associations.",
    date: "2024-06-30",
    status: "confirmed",
  },
  {
    id: "ACH-006",
    icon: Award,
    title: "Coding Fest Participant – Smart Coder 2.23 & 2.24",
    desc: "Participated in intra-college coding festivals, demonstrating programming proficiency and competitive coding skills.",
    date: "2024-02-15",
    status: "confirmed",
  },
  {
    id: "ACH-007",
    icon: ShieldCheck,
    title: "GDG BPPIMT Core Marketing Member (2025–2026)",
    desc: "Serving as a core marketing member of Google Developer Groups at BPPIMT, promoting tech events and community engagement.",
    date: "2025-01-15",
    status: "confirmed",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col items-start mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-primary">04.</span>
              <span className="text-sm font-mono text-muted-foreground tracking-widest uppercase">Achievements</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold">
              Key <span className="text-primary">Achievements</span>
            </h3>
          </div>
        </Reveal>

        {/* Achievements Data Table */}
        <Reveal>
          <div className="block-card rounded-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-[10px] font-mono uppercase w-24">ID</th>
                    <th className="px-4 py-3 text-left text-[10px] font-mono uppercase">Achievement</th>
                    <th className="px-4 py-3 text-left text-[10px] font-mono uppercase w-32">Date</th>
                    <th className="px-4 py-3 text-center text-[10px] font-mono uppercase w-24">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {achievements.map((item, index) => (
                    <tr key={item.id} className="data-row">
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <Hash className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs font-mono text-primary">{item.id}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 shrink-0 rounded-sm bg-primary/10 flex items-center justify-center mt-0.5">
                            <item.icon className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <div className="text-sm font-mono text-white mb-1">{item.title}</div>
                            <div className="text-xs text-muted-foreground font-mono leading-relaxed">{item.desc}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {item.date}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span className="status-badge status-confirmed">
                          {item.status === 'confirmed' ? '●' : '○'} {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* Summary Stats */}
        <Reveal delay={0.4}>
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="block-card p-4 rounded-sm text-center">
              <div className="text-2xl font-mono text-primary mb-1">{achievements.length}</div>
              <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Total Records</div>
            </div>
            <div className="block-card p-4 rounded-sm text-center">
              <div className="text-2xl font-mono text-emerald-400 mb-1">
                {achievements.filter(a => a.status === 'confirmed').length}
              </div>
              <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Confirmed</div>
            </div>
            <div className="block-card p-4 rounded-sm text-center">
              <div className="text-2xl font-mono text-yellow-400 mb-1">7</div>
              <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">2024-2025</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="mt-8 block-card p-4 rounded-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h4 className="text-sm font-mono text-white mb-1">Want to See More?</h4>
                <p className="text-xs text-muted-foreground font-mono">Access all certificates and awards</p>
              </div>
              <a 
                href="https://drive.google.com/drive/folders/1m8zcciOoGQmo_aZ2wSZp-WW2ouVhXiUI" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-primary text-primary-foreground text-xs font-mono hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                View Documents
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
