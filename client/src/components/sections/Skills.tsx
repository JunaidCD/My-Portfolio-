import { Reveal } from "../Reveal";
import { motion } from "framer-motion";

const skills = [
  { name: "Solidity", level: 95 },
  { name: "Ethereum Ecosystem", level: 90 },
  { name: "JavaScript / TypeScript", level: 85 },
  { name: "Web3.js / Ethers.js", level: 88 },
  { name: "Hardhat / Foundry", level: 92 },
  { name: "DeFi Architecture", level: 80 },
  { name: "Layer 2 Solutions", level: 75 },
  { name: "Zero Knowledge Proofs", level: 60 },
  { name: "Smart Contract Auditing", level: 85 },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col items-start mb-16">
            <h2 className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">02. Capabilities</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold">Tech <span className="text-glow-cyan text-primary">Stack</span></h3>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mt-6 rounded-full" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Reveal key={skill.name} delay={index * 0.1} direction="up">
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex justify-between items-end mb-4">
                  <h4 className="text-lg font-bold text-white font-mono">{skill.name}</h4>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                
                {/* Progress bar background */}
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  {/* Progress bar fill with animation */}
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + (index * 0.1), ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-accent relative"
                  >
                    <div className="absolute top-0 right-0 w-4 h-full bg-white/50 blur-[2px]" />
                  </motion.div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
