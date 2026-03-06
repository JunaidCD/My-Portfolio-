import { Reveal } from "../Reveal";
import { motion } from "framer-motion";
import { Code2, Shield, Database, Layers, Hash, Package, Terminal, Check, FolderTree } from "lucide-react";

const skillData = [
  { category: "Smart Contracts", icon: Code2, skills: [
    { name: "Solidity", proficiency: 95 },
    { name: "EVM Internals", proficiency: 88 },
    { name: "Foundry", proficiency: 92 },
    { name: "Hardhat", proficiency: 90 },
  ]},
  { category: "Security", icon: Shield, skills: [
    { name: "Reentrancy Guards", proficiency: 94 },
    { name: "Auditing", proficiency: 85 },
    { name: "Gas Optimization", proficiency: 91 },
    { name: "OpenZeppelin", proficiency: 93 },
  ]},
  { category: "Infrastructure", icon: Database, skills: [
    { name: "The Graph", proficiency: 87 },
    { name: "IPFS", proficiency: 82 },
    { name: "Chainlink", proficiency: 89 },
    { name: "Arbitrum", proficiency: 90 },
  ]},
  { category: "Frontend", icon: Layers, skills: [
    { name: "React", proficiency: 92 },
    { name: "Wagmi", proficiency: 88 },
    { name: "Ethers.js", proficiency: 90 },
    { name: "Web3.js", proficiency: 86 },
  ]},
];

const allSkills = [
  "Solidity", "EVM Internals", "Hardhat", "Foundry",
  "OpenZeppelin", "Chainlink", "IPFS", "The Graph",
  "React", "Node.js", "TypeScript",
  "Gas Optimization", "Reentrancy Guards", "Auditing",
  "Arbitrum", "Polygon", "Layer 2", "Web3.js", "Ethers.js", "Wagmi"
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative border-t border-[#00ff41]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col items-start mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-[#00ff41]">02.</span>
              <span className="text-sm font-mono text-[#00ff41]/60 tracking-widest uppercase">Skills</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold font-mono">
              Tech <span className="text-[#00ff41]">Stack</span>
            </h3>
          </div>
        </Reveal>

        {/* Terminal-style package listings */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {skillData.map((category, catIndex) => (
            <Reveal key={category.category} delay={catIndex * 0.1}>
              <div className="bg-black/80 border border-[#00ff41]/30 rounded-sm overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2 bg-[#00ff41]/10 border-b border-[#00ff41]/20">
                  <category.icon className="w-4 h-4 text-[#00ff41]" />
                  <span className="text-sm font-mono text-white uppercase tracking-wider">
                    {category.category}
                  </span>
                </div>
                
                <div className="p-4 font-mono text-xs">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="flex items-center justify-between py-1.5 border-b border-[#00ff41]/10 last:border-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[#00ff41]">├─</span>
                        <span className="text-white">{skill.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-1.5 bg-[#00ff41]/20 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 0.8, delay: skillIndex * 0.1 }}
                            className="h-full bg-[#00ff41] rounded-full"
                          />
                        </div>
                        <span className="text-[#00ff41] w-8 text-right">{skill.proficiency}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* All Skills - npm package list style */}
        <Reveal delay={0.4}>
          <div className="bg-black/80 border border-[#00ff41]/30 rounded-sm overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-[#00ff41]/10 border-b border-[#00ff41]/20">
              <div className="flex items-center gap-2">
                <FolderTree className="w-4 h-4 text-[#00ff41]" />
                <span className="text-sm font-mono text-[#00ff41]/70 uppercase tracking-wider">
                  node_modules
                </span>
              </div>
              <span className="text-xs font-mono text-[#00ff41]/50">
                {allSkills.length} packages
              </span>
            </div>
            
            <div className="p-4 font-mono text-xs">
              <div className="text-[#00ff41]/50 mb-3">
                {'>'} npm ls --depth=0
              </div>
              <div className="flex flex-wrap gap-2">
                {allSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.02 }}
                    viewport={{ once: true }}
                    className="px-3 py-1.5 rounded-sm text-xs font-mono text-[#00ff41] bg-[#00ff41]/5 border border-[#00ff41]/20 hover:border-[#00ff41]/50 hover:bg-[#00ff41]/10 transition-colors cursor-default"
                  >
                    {skill}
                    <span className="text-[#00ff41]/50 ml-1">✓</span>
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Technical Certifications - Terminal install style */}
        <div className="mt-6">
          <Reveal delay={0.5}>
            <div className="bg-black/80 border border-[#00ff41]/30 rounded-sm overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 bg-[#00ff41]/10 border-b border-[#00ff41]/20">
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-[#00ff41]" />
                  <span className="text-sm font-mono text-[#00ff41]/70 uppercase tracking-wider">
                    Certifications & Standards
                  </span>
                </div>
              </div>
              
              <div className="p-4 font-mono text-xs">
                <div className="text-[#00ff41]/50 mb-3">
                {'>'} pip install --certifications
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { name: "OpenZeppelin", desc: "Contracts" },
                    { name: "Chainlink", desc: "CCIP" },
                    { name: "The Graph", desc: "Subgraph" },
                    { name: "Foundry", desc: "Smart Contract" },
                  ].map((cert, i) => (
                    <div key={i} className="px-3 py-2 bg-[#00ff41]/5 rounded-sm border border-[#00ff41]/20">
                      <div className="flex items-center gap-1.5 text-white mb-1">
                        <Check className="w-3 h-3 text-emerald-400" />
                        {cert.name}
                      </div>
                      <div className="text-[10px] text-[#00ff41]/50">{cert.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Command output style */}
        <div className="mt-6">
          <Reveal delay={0.6}>
            <div className="bg-black/80 border border-[#00ff41]/30 rounded-sm overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 bg-[#00ff41]/10 border-b border-[#00ff41]/20">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#00ff41]" />
                  <span className="text-sm font-mono text-[#00ff41]/70">
                    root@skills:~$ neofetch
                  </span>
                </div>
              </div>
              
              <div className="p-4 font-mono text-xs">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <div className="text-[#00ff41]/50 mb-1">OS</div>
                    <div className="text-white">Ethereum VM</div>
                  </div>
                  <div>
                    <div className="text-[#00ff41]/50 mb-1">Kernel</div>
                    <div className="text-white">Solidity 0.8.x</div>
                  </div>
                  <div>
                    <div className="text-[#00ff41]/50 mb-1">Shell</div>
                    <div className="text-white">Foundry</div>
                  </div>
                  <div>
                    <div className="text-[#00ff41]/50 mb-1">Theme</div>
                    <div className="text-white">Terminal Green</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
