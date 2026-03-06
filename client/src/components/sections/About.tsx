import { Reveal } from "../Reveal";
import { motion } from "framer-motion";
import { Code2, Lock, Network, Cpu, Hash, Clock, FileCode, Check, Terminal, Folder, Database } from "lucide-react";

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

  // Terminal output logs
  const systemLogs = [
    { type: "info", message: "Loading kernel modules..." },
    { type: "success", message: "EVM module loaded" },
    { type: "info", message: "Initializing smart contract framework..." },
    { type: "success", message: "Foundry v1.0.0 connected" },
    { type: "info", message: "Loading DeFi protocols..." },
    { type: "success", message: "15 protocols indexed" },
    { type: "info", message: "Establishing RPC connections..." },
    { type: "success", message: "Mainnet: connected" },
    { type: "info", message: "Loading user profile..." },
    { type: "success", message: "Profile loaded successfully" },
  ];

  return (
    <section id="about" className="py-24 relative border-t border-[#00ff41]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col items-start mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-[#00ff41]">01.</span>
              <span className="text-sm font-mono text-[#00ff41]/60 tracking-widest uppercase">About</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold font-mono">
              Building <span className="text-[#00ff41]">Web3</span> Systems
            </h3>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main content - Terminal style */}
          <Reveal>
            <div className="lg:col-span-2">
              {/* Terminal window */}
              <div className="bg-black/80 border border-[#00ff41]/30 rounded-sm overflow-hidden mb-4">
                <div className="flex items-center justify-between px-3 py-2 bg-[#00ff41]/10 border-b border-[#00ff41]/20">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="ml-2 text-xs font-mono text-[#00ff41]/70">root@about:~/bio</span>
                  </div>
                </div>
                <div className="p-4 font-mono text-sm">
                  <div className="text-[#00ff41]/50 mb-2">
                    <div>{'>'} cat README.md</div>
                  </div>
                  <div className="text-[#00ff41]/80 leading-relaxed space-y-2">
                    <p>
                      I build Web3 systems with a deep focus on core blockchain and EVM fundamentals. 
                      I write and test smart contracts using <span className="text-white">Solidity and Rust</span>, 
                      and leverage development environments like <span className="text-white">Foundry, Hardhat</span> 
                      and interaction libraries such as Viem and web3 SDKs for reliable contract workflows.
                    </p>
                    <p>
                      I connect on-chain logic with off-chain systems using decentralized indexing and storage 
                      (The Graph, IPFS) and scalable RPC infrastructure. I work with Layer-2 environments 
                      for performance and cost-efficient execution.
                    </p>
                    <p>
                      I'm focused on advancing smart contract delivery and tooling while engaging with 
                      teams pushing Web3 technology forward.
                    </p>
                  </div>
                  <div className="mt-3 text-[#00ff41]/50">
                    <span className="cursor-blink">_</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Technical details - Terminal style */}
          <Reveal delay={0.2}>
            <div className="bg-black/80 border border-[#00ff41]/30 rounded-sm overflow-hidden h-full">
              <div className="flex items-center justify-between px-3 py-2 bg-[#00ff41]/10 border-b border-[#00ff41]/20">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3 h-3 text-[#00ff41]" />
                  <span className="text-xs font-mono text-[#00ff41]/70">identity.yaml</span>
                </div>
              </div>
              
              <div className="p-4 font-mono text-xs space-y-0">
                {technicalDetails.map((detail, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-[#00ff41]/10">
                    <span className="text-[#00ff41]/50 uppercase tracking-wider">{detail.label}</span>
                    {detail.status === 'confirmed' ? (
                      <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-sm text-[10px] uppercase">
                        ● {detail.value}
                      </span>
                    ) : (
                      <span className="text-[#00ff41]">{detail.value}</span>
                    )}
                  </div>
                ))}

                <div className="pt-3 mt-3 border-t border-[#00ff41]/20">
                  <div className="text-[10px] text-[#00ff41]/50 uppercase tracking-wider mb-2">
                    EOA Address
                  </div>
                  <code className="text-xs text-[#00ff41] bg-[#00ff41]/5 px-2 py-1 rounded block break-all">
                    0x742d35Cc6634C0532925a3b844Bc9e7595f4B3E7
                  </code>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Focus areas - Package listing style */}
        <div className="mt-10">
          <Reveal>
            <div className="flex items-center gap-2 mb-4">
              <FileCode className="w-4 h-4 text-[#00ff41]" />
              <span className="text-sm font-mono text-[#00ff41]/60 uppercase tracking-wider">
                Focus Areas
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {focuses.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <motion.div
                  className="bg-black/60 border border-[#00ff41]/20 p-4 rounded-sm hover:border-[#00ff41]/40 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <item.icon className="w-4 h-4 text-[#00ff41]" />
                    <span className="text-[10px] font-mono text-[#00ff41]/50 bg-[#00ff41]/5 px-1.5 py-0.5 rounded">
                      {item.hash}
                    </span>
                  </div>
                  <h4 className="text-white font-mono text-sm mb-2">{item.title}</h4>
                  <p className="text-xs text-[#00ff41]/60 font-mono leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Timeline / Experience section - Terminal log style */}
        <div className="mt-10">
          <Reveal>
            <div className="bg-black/80 border border-[#00ff41]/30 rounded-sm overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2 bg-[#00ff41]/10 border-b border-[#00ff41]/20">
                <div className="flex items-center gap-2">
                  <Clock className="w-3 h-3 text-[#00ff41]" />
                  <span className="text-xs font-mono text-[#00ff41]/70">development.log</span>
                </div>
              </div>
              
              <div className="p-4">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left">
                        <th className="pb-2 pr-4 text-[10px] font-mono uppercase text-[#00ff41]/50">Period</th>
                        <th className="pb-2 pr-4 text-[10px] font-mono uppercase text-[#00ff41]/50">Activity</th>
                        <th className="pb-2 pr-4 text-[10px] font-mono uppercase text-[#00ff41]/50">Status</th>
                        <th className="pb-2 text-[10px] font-mono uppercase text-[#00ff41]/50">Hash</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono text-xs">
                      <tr className="border-t border-[#00ff41]/10">
                        <td className="py-2 pr-4 text-[#00ff41]/50">2023 - Present</td>
                        <td className="py-2 pr-4 text-white">Smart Contract Development</td>
                        <td className="py-2 pr-4"><span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-sm text-[10px]">● CONFIRMED</span></td>
                        <td className="py-2 text-[#00ff41]">0x7d2f...8e4a</td>
                      </tr>
                      <tr className="border-t border-[#00ff41]/10">
                        <td className="py-2 pr-4 text-[#00ff41]/50">2022 - 2023</td>
                        <td className="py-2 pr-4 text-white">Web3 Frontend Integration</td>
                        <td className="py-2 pr-4"><span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-sm text-[10px]">● CONFIRMED</span></td>
                        <td className="py-2 text-[#00ff41]">0x3a1b...9c2d</td>
                      </tr>
                      <tr className="border-t border-[#00ff41]/10">
                        <td className="py-2 pr-4 text-[#00ff41]/50">2021 - 2022</td>
                        <td className="py-2 pr-4 text-white">Blockchain Fundamentals</td>
                        <td className="py-2 pr-4"><span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-sm text-[10px]">● CONFIRMED</span></td>
                        <td className="py-2 text-[#00ff41]">0x5f8e...1a3b</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* System logs output */}
        <div className="mt-8">
          <Reveal>
            <div className="bg-black/80 border border-[#00ff41]/30 rounded-sm overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2 bg-[#00ff41]/10 border-b border-[#00ff41]/20">
                <div className="flex items-center gap-2">
                  <Database className="w-3 h-3 text-[#00ff41]" />
                  <span className="text-xs font-mono text-[#00ff41]/70">system.log</span>
                </div>
              </div>
              
              <div className="p-3 font-mono text-[10px] max-h-40 overflow-y-auto">
                {systemLogs.map((log, i) => (
                  <div key={i} className="py-0.5">
                    <span className="text-[#00ff41]/50">[{new Date().toLocaleTimeString('en-US', { hour12: false })}]</span>{' '}
                    {log.type === 'info' && <span className="text-cyan-400">[INFO]</span>}
                    {log.type === 'success' && <span className="text-emerald-400">[OK]</span>}
                    {' '}{log.message}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
