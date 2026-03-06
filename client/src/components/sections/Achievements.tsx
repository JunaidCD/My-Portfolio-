import { Reveal } from "../Reveal";
import { motion } from "framer-motion";
import { Trophy, Code2, Mic2, ShieldCheck, BookOpen, ExternalLink, Award, Calendar, Hash, Terminal, CheckCircle, FileText } from "lucide-react";

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
    <section id="achievements" className="py-24 relative border-t border-[#00ff41]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col items-start mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-[#00ff41]">04.</span>
              <span className="text-sm font-mono text-[#00ff41]/60 tracking-widest uppercase">Achievements</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold font-mono">
              Key <span className="text-[#00ff41]">Achievements</span>
            </h3>
          </div>
        </Reveal>

        {/* Terminal log style */}
        <Reveal>
          <div className="bg-black/80 border border-[#00ff41]/30 rounded-sm overflow-hidden mb-6">
            <div className="flex items-center justify-between px-3 py-2 bg-[#00ff41]/10 border-b border-[#00ff41]/20">
              <div className="flex items-center gap-2">
                <Terminal className="w-3 h-3 text-[#00ff41]" />
                <span className="text-xs font-mono text-[#00ff41]/70">root@achievements:~/logs</span>
              </div>
              <span className="text-[10px] font-mono text-[#00ff41]/50">
                {achievements.length} entries
              </span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#00ff41]/20">
                    <th className="px-4 py-3 text-left text-[10px] font-mono uppercase text-[#00ff41]/50 w-24">ID</th>
                    <th className="px-4 py-3 text-left text-[10px] font-mono uppercase text-[#00ff41]/50">Achievement</th>
                    <th className="px-4 py-3 text-left text-[10px] font-mono uppercase text-[#00ff41]/50 w-32">Date</th>
                    <th className="px-4 py-3 text-center text-[10px] font-mono uppercase text-[#00ff41]/50 w-24">Status</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-xs">
                  {achievements.map((item, index) => (
                    <tr key={item.id} className="border-b border-[#00ff41]/10 hover:bg-[#00ff41]/5 transition-colors">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <Hash className="w-3 h-3 text-[#00ff41]/50" />
                          <span className="text-[#00ff41]">{item.id}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 shrink-0 rounded-sm bg-[#00ff41]/10 flex items-center justify-center mt-0.5">
                            <item.icon className="w-3 h-3 text-[#00ff41]" />
                          </div>
                          <div>
                            <div className="text-white mb-1">{item.title}</div>
                            <div className="text-[10px] text-[#00ff41]/50 leading-relaxed">{item.desc}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1.5 text-[#00ff41]/70">
                          <Calendar className="w-3 h-3" />
                          {item.date}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="px-2 py-0.5 text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-sm">
                          ● {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* Summary stats - Terminal style */}
        <Reveal delay={0.4}>
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-black/60 border border-[#00ff41]/20 p-3 rounded-sm text-center">
              <div className="text-xl font-mono text-[#00ff41] mb-1">{achievements.length}</div>
              <div className="text-[10px] font-mono text-[#00ff41]/50 uppercase tracking-wider">Total Records</div>
            </div>
            <div className="bg-black/60 border border-[#00ff41]/20 p-3 rounded-sm text-center">
              <div className="text-xl font-mono text-emerald-400 mb-1">
                {achievements.filter(a => a.status === 'confirmed').length}
              </div>
              <div className="text-[10px] font-mono text-[#00ff41]/50 uppercase tracking-wider">Confirmed</div>
            </div>
            <div className="bg-black/60 border border-[#00ff41]/20 p-3 rounded-sm text-center">
              <div className="text-xl font-mono text-yellow-400 mb-1">7</div>
              <div className="text-[10px] font-mono text-[#00ff41]/50 uppercase tracking-wider">2024-2025</div>
            </div>
          </div>
        </Reveal>

        {/* View documents link - Terminal style */}
        <Reveal delay={0.6}>
          <div className="bg-black/80 border border-[#00ff41]/30 rounded-sm overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4">
              <div className="text-center md:text-left">
                <h4 className="text-sm font-mono text-white mb-1">Want to See More?</h4>
                <p className="text-xs text-[#00ff41]/50 font-mono">Access all certificates and awards</p>
              </div>
              <a 
                href="https://drive.google.com/drive/folders/1m8zcciOoGQmo_aZ2wSZp-WW2ouVhXiUI" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#00ff41] text-black text-xs font-mono hover:bg-[#00ff41]/90 transition-colors"
              >
                <FileText className="w-3 h-3" />
                ./view-certificates.sh
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
