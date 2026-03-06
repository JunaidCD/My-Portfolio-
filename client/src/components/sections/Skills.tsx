import { Reveal } from "../Reveal";
import { motion } from "framer-motion";
import { Code2, Shield, Database, Globe, Cpu, Layers, Zap, FileCode } from "lucide-react";

const skills = [
  "Solidity", "EVM Internals", "Hardhat", "Foundry",
  "OpenZeppelin", "Chainlink", "IPFS", "The Graph",
  "React", "Node.js", "Javascript", "TypeScript",
  "Gas Optimization", "Reentrancy Guards", "Auditing",
  "Arbitrum", "Polygon", "Layer 2 Scaling", "Web3.js", "Ethers.js", "Wagmi"
];

const categories = [
  { 
    name: "Smart Contracts", 
    icon: Code2,
    skills: ["Solidity", "EVM Internals", "Foundry", "Hardhat"],
    color: "from-cyan-500 to-blue-500"
  },
  { 
    name: "Security", 
    icon: Shield,
    skills: ["Reentrancy Guards", "Auditing", "Gas Optimization", "OpenZeppelin"],
    color: "from-emerald-500 to-teal-500"
  },
  { 
    name: "Infrastructure", 
    icon: Database,
    skills: ["The Graph", "IPFS", "Chainlink", "Arbitrum"],
    color: "from-purple-500 to-pink-500"
  },
  { 
    name: "Frontend", 
    icon: Layers,
    skills: ["React", "Wagmi", "Ethers.js", "Web3.js"],
    color: "from-orange-500 to-red-500"
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col items-start mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-primary/50" />
              <span className="text-sm font-mono text-primary tracking-widest uppercase">02. Capabilities</span>
              <span className="w-8 h-px bg-primary/50" />
            </div>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Tech <span className="gradient-text-animated">Stack</span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-transparent mt-2 rounded-full" />
          </div>
        </Reveal>

        {/* Category-based skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <Reveal key={category.name} delay={index * 0.1}>
              <motion.div
                className="group relative"
                whileHover={{ y: -5 }}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
                <div className="relative glass-card p-6 rounded-2xl h-full bg-background/60">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">{category.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-2 py-1 text-xs font-mono text-muted-foreground bg-white/5 rounded-md border border-white/5 group-hover:border-white/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* All skills grid with animated tags */}
        <Reveal delay={0.4}>
          <div className="p-6 rounded-2xl glass-card border border-white/5">
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-muted-foreground">All Technologies</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.02 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'rgba(0, 240, 255, 0.1)',
                    borderColor: 'rgba(0, 240, 255, 0.3)'
                  }}
                  className="px-4 py-2 rounded-xl glass-card text-sm md:text-base font-mono font-medium text-muted-foreground cursor-default border border-white/5 hover:text-primary transition-all"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Stats row */}
        <Reveal delay={0.6}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { label: "Years Experience", value: "2+" },
              { label: "Smart Contracts", value: "20+" },
              { label: "Hackathons", value: "6+" },
              { label: "Technologies", value: "20+" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 rounded-xl glass-card"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-3xl font-bold gradient-text-animated mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Decorative scan lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-1/4 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute inset-x-0 bottom-1/4 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>
    </section>
  );
}
