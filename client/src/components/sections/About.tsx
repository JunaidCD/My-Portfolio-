import { Reveal } from "../Reveal";
import { Code2, Cpu, Lock, Network } from "lucide-react";

export function About() {
  const focuses = [
    { icon: Code2, title: "EVM Internals", desc: "Deep understanding of Ethereum Virtual Machine mechanics and gas optimization." },
    { icon: Network, title: "DeFi Systems", desc: "Building scalable on-chain logic with decentralized indexing (The Graph)." },
    { icon: Lock, title: "Smart Contract Security", desc: "Implementing reentrancy guards and following OpenZeppelin best practices." },
    { icon: Cpu, title: "Layer 2 Scaling", desc: "Optimizing execution on Arbitrum, Polygon, and other L2 environments." },
  ];

  return (
    <section id="about" className="py-24 relative border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">01. Initialization</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold">About <span className="text-glow-purple text-secondary">Me</span></h3>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mt-6 rounded-full" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="right">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I build Web3 systems with a deep focus on core blockchain and EVM fundamentals. I write and test smart contracts using <strong className="text-white font-medium">Solidity and Rust</strong>, and leverage development environments like <strong className="text-white font-medium">Foundry, Hardhat</strong> and interaction libraries such as Viem and web3 SDKs for reliable contract workflows.
              </p>
              <p>
                I connect on-chain logic with off-chain systems using decentralized indexing and storage (The Graph, IPFS) and scalable RPC infrastructure. I work with Layer-2 environments for performance and cost-efficient execution. 
              </p>
              <p>
                I’m focused on advancing smart contract delivery and tooling while engaging with teams pushing Web3 technology forward.
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
