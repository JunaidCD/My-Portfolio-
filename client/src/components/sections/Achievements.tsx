import { Reveal } from "../Reveal";

const timeline = [
  {
    year: "2023 - Present",
    title: "Protocol Development & Research",
    desc: "Experimenting with modular blockchain architectures, rollup logic, and ZK proofs. Auditing smart contracts and building proof-of-concepts for decentralized derivatives.",
  },
  {
    year: "2022",
    title: "Advanced DeFi Engineering",
    desc: "Built complex yield farming strategies, AMM forks, and flash loan arbitrages. Deep dive into the EVM and gas optimization techniques.",
  },
  {
    year: "2021",
    title: "Web3 Hackathons & Smart Contracts",
    desc: "Participated in global Web3 hackathons. Developed initial ERC-20/ERC-721 contracts, decentralized voting mechanisms, and simple DApps using React and Ethers.js.",
  },
];

export function Achievements() {
  return (
    <section id="experience" className="py-24 relative border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col items-start mb-16">
            <h2 className="text-sm font-mono text-accent mb-2 tracking-widest uppercase">04. Event Log</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold">Experience & <span className="text-glow-purple text-secondary">Achievements</span></h3>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-transparent mt-6 rounded-full" />
          </div>
        </Reveal>

        <div className="relative border-l border-white/10 ml-3 md:ml-0">
          {timeline.map((item, index) => (
            <Reveal key={index} delay={index * 0.2} direction="left">
              <div className="mb-12 relative pl-8 md:pl-10">
                {/* Timeline Dot */}
                <div className="absolute w-4 h-4 rounded-full bg-background border-2 border-accent left-[-8.5px] top-1.5 box-glow-cyan" />
                
                <div className="glass-card p-6 rounded-2xl relative group">
                  <div className="absolute -left-3 top-4 w-3 h-3 bg-white/5 rotate-45 transform border-b border-l border-white/10 group-hover:border-primary/50 transition-colors" />
                  
                  <span className="text-sm font-mono text-primary mb-2 block">{item.year}</span>
                  <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
