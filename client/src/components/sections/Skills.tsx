import { Reveal } from "../Reveal";
import { motion } from "framer-motion";
import { Code2, Shield, Database, Layers, Hash, Percent, FileCode } from "lucide-react";

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
    <section id="skills" className="py-24 relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col items-start mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-primary">02.</span>
              <span className="text-sm font-mono text-muted-foreground tracking-widest uppercase">Skills</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold">
              Tech <span className="text-primary">Stack</span>
            </h3>
          </div>
        </Reveal>

        {/* Skill Tables by Category */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillData.map((category, catIndex) => (
            <Reveal key={category.category} delay={catIndex * 0.1}>
              <div className="block-card rounded-sm overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-muted/30 border-b border-border">
                  <category.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-mono text-white uppercase tracking-wider">
                    {category.category}
                  </span>
                </div>
                
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left text-[10px] font-mono uppercase text-muted-foreground">Skill</th>
                      <th className="px-4 py-2 text-right text-[10px] font-mono uppercase text-muted-foreground">Proficiency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.skills.map((skill, skillIndex) => (
                      <tr key={skill.name} className="data-row">
                        <td className="px-4 py-3 font-mono text-sm text-white">{skill.name}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center justify-end gap-2">
                            <div className="w-24 h-1.5 bg-muted rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.proficiency}%` }}
                                transition={{ duration: 0.8, delay: skillIndex * 0.1 }}
                                className="h-full bg-primary rounded-full"
                              />
                            </div>
                            <span className="text-xs font-mono text-primary w-8 text-right">{skill.proficiency}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          ))}
        </div>

        {/* All Skills - Data Tags */}
        <Reveal delay={0.4}>
          <div className="block-card p-4 rounded-sm">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
              <FileCode className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                All Skills Registry
              </span>
              <span className="ml-auto text-xs font-mono text-muted-foreground">
                Total: {allSkills.length} items
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {allSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.02 }}
                  viewport={{ once: true }}
                  className="px-3 py-1.5 rounded-sm text-xs font-mono text-muted-foreground bg-muted/50 border border-border hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Technical Certifications */}
        <div className="mt-8">
          <Reveal delay={0.5}>
            <div className="block-card p-4 rounded-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                <Hash className="w-4 h-4 text-primary" />
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Certifications & Standards
                </span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { name: "OpenZeppelin", desc: "Contracts" },
                  { name: "Chainlink", desc: "CCIP" },
                  { name: "The Graph", desc: "Subgraph" },
                  { name: "Foundry", desc: "Smart Contract" },
                ].map((cert, i) => (
                  <div key={i} className="px-3 py-2 bg-muted/30 rounded-sm border border-border">
                    <div className="text-xs font-mono text-white">{cert.name}</div>
                    <div className="text-[10px] font-mono text-muted-foreground">{cert.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
