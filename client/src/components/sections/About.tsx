import { Reveal } from "../Reveal";
import { motion } from "framer-motion";
import { Code2, Cpu, Lock, Network, Layers, Database, Zap, Globe } from "lucide-react";

export function About() {
  const focuses = [
    { icon: Code2, title: "EVM Internals", desc: "Deep understanding of Ethereum Virtual Machine mechanics and gas optimization.", color: "from-cyan-500 to-blue-500" },
    { icon: Network, title: "DeFi Systems", desc: "Building scalable on-chain logic with decentralized indexing (The Graph).", color: "from-purple-500 to-pink-500" },
    { icon: Lock, title: "Smart Contract Security", desc: "Implementing reentrancy guards and following OpenZeppelin best practices.", color: "from-emerald-500 to-teal-500" },
    { icon: Cpu, title: "Layer 2 Scaling", desc: "Optimizing execution on Arbitrum, Polygon, and other L2 environments.", color: "from-orange-500 to-red-500" },
  ];

  const techStack = [
    { icon: Layers, label: "Solidity", desc: "Smart Contracts" },
    { icon: Database, label: "The Graph", desc: "Decentralized Indexing" },
    { icon: Zap, label: "Foundry", desc: "Testing Framework" },
    { icon: Globe, label: "IPFS", desc: "Storage Layer" },
  ];

  return (
    <section id="about" className="py-24 relative border-t border-white/5 bg-white/[0.01]">
      {/* Section background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-primary/50" />
              <span className="text-sm font-mono text-primary tracking-widest uppercase">01. Initialization</span>
              <span className="w-8 h-px bg-primary/50" />
            </div>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-4">
              About <span className="gradient-text-animated">Me</span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-transparent mt-2 rounded-full" />
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
                  className="group relative"
                >
                  {/* Gradient border effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
                  
                  <div className="relative glass-card p-6 rounded-2xl h-full bg-background/60">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Tech Stack Highlight */}
        <Reveal delay={0.4}>
          <div className="mt-16 p-8 rounded-3xl glass-card border border-white/5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h4 className="text-2xl font-bold text-white mb-2">Core Technologies</h4>
                <p className="text-muted-foreground">The stack I work with daily</p>
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <tech.icon className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm font-medium text-white">{tech.label}</div>
                      <div className="text-xs text-muted-foreground">{tech.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Bottom scan line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
