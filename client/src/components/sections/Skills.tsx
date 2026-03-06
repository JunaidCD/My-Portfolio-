import { Reveal } from "../Reveal";
import { motion } from "framer-motion";
import { Code2, Shield, Database, Layers } from "lucide-react";

const skills = [
  "Solidity", "EVM Internals", "Hardhat", "Foundry",
  "OpenZeppelin", "Chainlink", "IPFS", "The Graph",
  "React", "Node.js", "TypeScript",
  "Gas Optimization", "Reentrancy Guards", "Auditing",
  "Arbitrum", "Polygon", "Layer 2", "Web3.js", "Ethers.js", "Wagmi"
];

const categories = [
  { 
    name: "Smart Contracts", 
    icon: Code2,
    skills: ["Solidity", "EVM Internals", "Foundry", "Hardhat"],
  },
  { 
    name: "Security", 
    icon: Shield,
    skills: ["Reentrancy Guards", "Auditing", "Gas Optimization", "OpenZeppelin"],
  },
  { 
    name: "Infrastructure", 
    icon: Database,
    skills: ["The Graph", "IPFS", "Chainlink", "Arbitrum"],
  },
  { 
    name: "Frontend", 
    icon: Layers,
    skills: ["React", "Wagmi", "Ethers.js", "Web3.js"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col items-start mb-12">
            <span className="text-sm font-mono text-primary tracking-widest uppercase mb-4">02. Skills</span>
            <h3 className="text-3xl md:text-5xl font-bold">
              Tech <span className="text-primary">Stack</span>
            </h3>
          </div>
        </Reveal>

        {/* Category-based skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {categories.map((category, index) => (
            <Reveal key={category.name} delay={index * 0.1}>
              <motion.div
                className="glass-card p-5 rounded-xl"
                whileHover={{ y: -2 }}
              >
                <category.icon className="w-5 h-5 text-primary mb-3" />
                <h4 className="text-white font-medium mb-3">{category.name}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-2 py-1 text-xs font-mono text-muted-foreground bg-white/5 rounded-md border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* All skills grid */}
        <Reveal delay={0.4}>
          <div className="p-5 rounded-xl glass-card border border-white/5">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.02 }}
                  viewport={{ once: true }}
                  className="px-3 py-1.5 rounded-md text-sm font-mono text-muted-foreground bg-white/5 border border-white/5"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
