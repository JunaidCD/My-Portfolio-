import { Reveal } from "../Reveal";
import { Code2, Cpu, Lock, Network } from "lucide-react";

export function About() {
  const focuses = [
    { icon: Code2, title: "Smart Contracts", desc: "Secure, gas-optimized Solidity development." },
    { icon: Network, title: "DeFi Protocols", desc: "Building DEXs, lending platforms, and yield aggregators." },
    { icon: Lock, title: "Zero Knowledge", desc: "Exploring ZK-rollups and privacy-preserving dApps." },
    { icon: Cpu, title: "Layer 2", desc: "Scaling Ethereum with Arbitrum and Optimism ecosystems." },
  ];

  return (
    <section id="about" className="py-24 relative border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">01. Initialization</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold">About the <span className="text-glow-purple text-secondary">Protocol</span></h3>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mt-6 rounded-full" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="right">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a specialized <strong className="text-white font-medium">Blockchain Engineer</strong> with a deep passion for building the trustless infrastructure of tomorrow. 
              </p>
              <p>
                My journey in Web3 started with a fascination for decentralized consensus and has evolved into engineering robust protocol layers, optimizing smart contracts, and exploring the bleeding edge of cryptographic proofs.
              </p>
              <p>
                Whether it's designing complex DeFi mechanisms, auditing smart contracts for vulnerabilities, or building seamless dApp frontends, I bridge the gap between complex blockchain mechanics and usable products.
              </p>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {focuses.map((item, i) => (
                <div key={i} className="glass-card p-6 rounded-2xl group hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors border border-secondary/20 group-hover:border-secondary/50">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
