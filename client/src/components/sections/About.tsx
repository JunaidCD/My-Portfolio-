import { Reveal } from "../Reveal";
import { motion } from "framer-motion";
import { Code2, Lock, Network, Cpu } from "lucide-react";

export function About() {
  const focuses = [
    { icon: Code2, title: "EVM Internals", desc: "Deep understanding of Ethereum Virtual Machine mechanics and gas optimization." },
    { icon: Network, title: "DeFi Systems", desc: "Building scalable on-chain logic with decentralized indexing (The Graph)." },
    { icon: Lock, title: "Smart Contract Security", desc: "Implementing reentrancy guards and following OpenZeppelin best practices." },
    { icon: Cpu, title: "Layer 2 Scaling", desc: "Optimizing execution on Arbitrum, Polygon, and other L2 environments." },
  ];

  return (
    <section id="about" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-sm font-mono text-primary tracking-widest uppercase mb-4">01. About</span>
            <h3 className="text-3xl md:text-5xl font-bold mb-4">
              Building <span className="text-primary">Web3</span> Systems
            </h3>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal direction="right">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I build Web3 systems with a deep focus on core blockchain and EVM fundamentals. I write and test smart contracts using <strong className="text-white">Solidity and Rust</strong>, and leverage development environments like <strong className="text-white">Foundry, Hardhat</strong> and interaction libraries such as Viem and web3 SDKs for reliable contract workflows.
              </p>
              <p>
                I connect on-chain logic with off-chain systems using decentralized indexing and storage (The Graph, IPFS) and scalable RPC infrastructure. I work with Layer-2 environments for performance and cost-efficient execution. 
              </p>
              <p>
                I'm focused on advancing smart contract delivery and tooling while engaging with teams pushing Web3 technology forward.
              </p>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {focuses.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-5 rounded-xl"
                >
                  <item.icon className="w-5 h-5 text-primary mb-3" />
                  <h4 className="text-white font-medium mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
