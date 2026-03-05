import { Reveal } from "../Reveal";

const skills = [
  "Solidity", "EVM Internals", "Hardhat", "Foundry",
  "OpenZeppelin", "Chainlink", "IPFS", "The Graph",
  "React", "Node.js", "Javascript", "TypeScript",
  "Gas Optimization", "Reentrancy Guards", "Auditing",
  "Arbitrum", "Polygon", "Layer 2 Scaling", "Web3.js", "Ethers.js", "Wagmi"
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <Reveal key={skill} delay={index * 0.05} direction="up">
              <div className="glass-card p-4 rounded-xl flex items-center justify-center text-center border border-white/5 hover:border-primary/30 transition-all group">
                <span className="text-sm md:text-base font-mono font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  {skill}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
