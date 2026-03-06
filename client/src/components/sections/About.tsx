import { Reveal } from "../Reveal";
import { motion } from "framer-motion";
import { Code2, Lock, Network, Cpu, Hash, Clock, FileCode, Check } from "lucide-react";

export function About() {
  const focuses = [
    { icon: Code2, title: "EVM Internals", desc: "Deep understanding of Ethereum Virtual Machine mechanics and gas optimization.", hash: "0x1A2B" },
    { icon: Network, title: "DeFi Systems", desc: "Building scalable on-chain logic with decentralized indexing (The Graph).", hash: "0x3C4D" },
    { icon: Lock, title: "Smart Contract Security", desc: "Implementing reentrancy guards and following OpenZeppelin best practices.", hash: "0x5E6F" },
    { icon: Cpu, title: "Layer 2 Scaling", desc: "Optimizing execution on Arbitrum, Polygon, and other L2 environments.", hash: "0x7G8H" },
  ];

  const technicalDetails = [
    { label: "Language", value: "Solidity, Rust" },
    { label: "Experience", value: "3+ Years" },
    { label: "Deployments", value: "50+" },
    { label: "Status", value: "Active", status: "confirmed" },
  ];

  return (
    <section id="about" className="py-24 relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col items-start mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-primary">01.</span>
              <span className="text-sm font-mono text-muted-foreground tracking-widest uppercase">About</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold">
              Building <span className="text-primary">Web3</span> Systems
            </h3>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <Reveal>
            <div className="lg:col-span-2 space-y-4 text-muted-foreground leading-relaxed font-mono text-sm">
              <p>
                I build Web3 systems with a deep focus on core blockchain and EVM fundamentals. I write and test smart contracts using <strong className="text-white font-mono">Solidity and Rust</strong>, and leverage development environments like <strong className="text-white font-mono">Foundry, Hardhat</strong> and interaction libraries such as Viem and web3 SDKs for reliable contract workflows.
              </p>
              <p>
                I connect on-chain logic with off-chain systems using decentralized indexing and storage (The Graph, IPFS) and scalable RPC infrastructure. I work with Layer-2 environments for performance and cost-efficient execution. 
              </p>
              <p>
                I'm focused on advancing smart contract delivery and tooling while engaging with teams pushing Web3 technology forward.
              </p>
            </div>
          </Reveal>

          {/* Technical details card */}
          <Reveal delay={0.2}>
            <div className="block-card p-4 rounded-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                <Hash className="w-4 h-4 text-primary" />
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Identity
                </span>
              </div>
              
              <div className="space-y-0">
                {technicalDetails.map((detail, i) => (
                  <div key={i} className="tech-info">
                    <span className="tech-label">{detail.label}</span>
                    {detail.status === 'confirmed' ? (
                      <span className="status-badge status-confirmed">
                        <Check className="w-2.5 h-2.5" />
                        {detail.value}
                      </span>
                    ) : (
                      <span className="tech-value text-primary">{detail.value}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-border">
                <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-2">
                  EOA Address
                </div>
                <code className="text-xs font-mono text-primary bg-muted/30 px-2 py-1 rounded block">
                  0x742d35Cc6634C0532925a3b844Bc9e7595f4B3E7
                </code>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Focus areas in table format */}
        <div className="mt-12">
          <Reveal>
            <div className="flex items-center gap-2 mb-6">
              <FileCode className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
                Focus Areas
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {focuses.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <motion.div
                  className="block-card p-4 rounded-sm h-full"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-mono text-muted-foreground bg-muted/50 px-1.5 py-0.5 rounded">
                      {item.hash}
                    </span>
                  </div>
                  <h4 className="text-white font-mono text-sm mb-2">{item.title}</h4>
                  <p className="text-xs text-muted-foreground font-mono leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Timeline / Experience section */}
        <div className="mt-12">
          <Reveal>
            <div className="block-card p-4 rounded-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Development Timeline
                </span>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="px-3 py-2 text-left text-[10px] font-mono uppercase">Period</th>
                      <th className="px-3 py-2 text-left text-[10px] font-mono uppercase">Activity</th>
                      <th className="px-3 py-2 text-left text-[10px] font-mono uppercase">Status</th>
                      <th className="px-3 py-2 text-left text-[10px] font-mono uppercase">TX Hash</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="data-row">
                      <td className="px-3 py-2 font-mono text-xs text-muted-foreground">2023 - Present</td>
                      <td className="px-3 py-2 font-mono text-xs">Smart Contract Development</td>
                      <td className="px-3 py-2"><span className="status-badge status-confirmed">Confirmed</span></td>
                      <td className="px-3 py-2 font-mono text-xs text-primary">0x7d2f...8e4a</td>
                    </tr>
                    <tr className="data-row">
                      <td className="px-3 py-2 font-mono text-xs text-muted-foreground">2022 - 2023</td>
                      <td className="px-3 py-2 font-mono text-xs">Web3 Frontend Integration</td>
                      <td className="px-3 py-2"><span className="status-badge status-confirmed">Confirmed</span></td>
                      <td className="px-3 py-2 font-mono text-xs text-primary">0x3a1b...9c2d</td>
                    </tr>
                    <tr className="data-row">
                      <td className="px-3 py-2 font-mono text-xs text-muted-foreground">2021 - 2022</td>
                      <td className="px-3 py-2 font-mono text-xs">Blockchain Fundamentals</td>
                      <td className="px-3 py-2"><span className="status-badge status-confirmed">Confirmed</span></td>
                      <td className="px-3 py-2 font-mono text-xs text-primary">0x5f8e...1a3b</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
