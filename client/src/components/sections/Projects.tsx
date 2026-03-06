import { Reveal } from "../Reveal";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, GitBranch, GitCommit, Folder, Database, DollarSign, Copy, Check, Terminal, Code } from "lucide-react";
import { useState } from "react";

const FEATURED_REPOS = [
  { 
    name: "FinBridge", 
    description: "Cross-chain financial bridge protocol enabling seamless asset transfer between chains.", 
    language: "Solidity", 
    url: "https://github.com/JunaidCD/FinBridge",
    category: "DeFi",
    contractAddress: "0x742d35Cc6634C0532925a3b844Bc9e7595f4B3E7",
    txCount: 12847,
    tvl: "$5.2M",
    status: "confirmed",
    lastCommit: "feat: optimize gas for cross-chain transfers",
    commitHash: "7d2f8e",
  },
  { 
    name: "Credence", 
    description: "On-chain decentralized identity and reputation system for trustless verification.", 
    language: "Solidity", 
    url: "https://github.com/JunaidCD/Credence",
    category: "Identity",
    contractAddress: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
    txCount: 5621,
    tvl: "$850K",
    status: "confirmed",
    lastCommit: "feat: add reputation scoring module",
    commitHash: "3a1b9c",
  },
  { 
    name: "AyurherbX", 
    description: "Blockchain-powered herb tracking and authentication platform for supply chain transparency.", 
    language: "Solidity", 
    url: "https://github.com/JunaidCD/AyurherbX",
    category: "Supply Chain",
    contractAddress: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
    txCount: 3421,
    tvl: "$120K",
    status: "confirmed",
    lastCommit: "feat: implement IPFS storage integration",
    commitHash: "5f",
  },
  { 
    name: "ERC20-Mock-USDC", 
    description: "Mock USDC implementation for testing DeFi protocols with realistic token behavior.", 
    language: "Solidity", 
    url: "https://github.com/JunaidCD/ERC20-Mock-USDC-",
    category: "Infrastructure",
    contractAddress: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    txCount: 8942,
    tvl: "N/A",
    status: "confirmed",
    lastCommit: "test: add comprehensive mock scenarios",
    commitHash: "9c2d7f",
  },
  { 
    name: "StakingDapp", 
    description: "Decentralized staking platform with yield farming and reward distribution mechanisms.", 
    language: "Solidity", 
    url: "https://github.com/JunaidCD/StakingDapp",
    category: "DeFi",
    contractAddress: "0x53E0bca35eC356BD5ddDFEbdD1Fc0fD03FaBad39",
    txCount: 7653,
    tvl: "$3.8M",
    status: "confirmed",
    lastCommit: "feat: implement reward auto-compounding",
    commitHash: "4e8b2a",
  },
  { 
    name: "D-Appazon", 
    description: "Web3 e-commerce platform with crypto payments and NFT-based loyalty rewards.", 
    language: "Solidity", 
    url: "https://github.com/JunaidCD/D-Appazon",
    category: "dApp",
    contractAddress: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
    txCount: 4128,
    tvl: "$450K",
    status: "confirmed",
    lastCommit: "feat: add NFT loyalty tier system",
    commitHash: "6f9c3d",
  },
];

export function Projects() {
  const [copiedHash, setCopiedHash] = useState<string | null>(null);

  const copyHash = (hash: string) => {
    navigator.clipboard.writeText(hash);
    setCopiedHash(hash);
    setTimeout(() => setCopiedHash(null), 2000);
  };

  const truncateHash = (hash: string) => {
    return `${hash.slice(0, 6)}...${hash.slice(-4)}`;
  };

  return (
    <section id="projects" className="py-24 relative border-t border-[#00ff41]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col items-start mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-[#00ff41]">03.</span>
              <span className="text-sm font-mono text-[#00ff41]/60 tracking-widest uppercase">Projects</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold font-mono">
              Featured <span className="text-[#00ff41]">Work</span>
            </h3>
          </div>
        </Reveal>

        {/* Git log style header */}
        <Reveal>
          <div className="bg-black/80 border border-[#00ff41]/30 rounded-sm overflow-hidden mb-4">
            <div className="flex items-center justify-between px-3 py-2 bg-[#00ff41]/10 border-b border-[#00ff41]/20">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="ml-2 text-xs font-mono text-[#00ff41]/70">root@projects:~/repos</span>
              </div>
            </div>
            <div className="p-3 font-mono text-xs">
              <div className="text-[#00ff41]/50">
                {'>'} git log --oneline -n 6
              </div>
              <div className="mt-2 space-y-1">
                {FEATURED_REPOS.slice(0, 3).map((repo, i) => (
                  <div key={i} className="flex items-center gap-2 text-[#00ff41]/70">
                    <GitCommit className="w-3 h-3" />
                    <span className="text-yellow-400">{repo.commitHash}</span>
                    <span className="text-white">{repo.lastCommit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
        
        {/* Projects list - ls style */}
        <Reveal>
          <div className="bg-black/80 border border-[#00ff41]/30 rounded-sm overflow-hidden">
            <div className="flex items-center justify-between px-3 py-2 bg-[#00ff41]/10 border-b border-[#00ff41]/20">
              <div className="flex items-center gap-2">
                <Folder className="w-3 h-3 text-[#00ff41]" />
                <span className="text-xs font-mono text-[#00ff41]/70">total: {FEATURED_REPOS.length} projects</span>
              </div>
              <span className="text-[10px] font-mono text-[#00ff41]/50">drwxr-xr-x</span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-[#00ff41]/20">
                    <th className="px-4 py-3 text-[10px] font-mono uppercase text-[#00ff41]/50">Project</th>
                    <th className="px-4 py-3 text-[10px] font-mono uppercase text-[#00ff41]/50">Category</th>
                    <th className="px-4 py-3 text-[10px] font-mono uppercase text-[#00ff41]/50">Contract</th>
                    <th className="px-4 py-3 text-[10px] font-mono uppercase text-[#00ff41]/50 text-right">TXs</th>
                    <th className="px-4 py-3 text-[10px] font-mono uppercase text-[#00ff41]/50 text-right">TVL</th>
                    <th className="px-4 py-3 text-[10px] font-mono uppercase text-[#00ff41]/50 text-center">Status</th>
                    <th className="px-4 py-3 text-[10px] font-mono uppercase text-[#00ff41]/50 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-xs">
                  {FEATURED_REPOS.map((repo, index) => (
                    <tr key={repo.name} className="border-b border-[#00ff41]/10 hover:bg-[#00ff41]/5 transition-colors">
                      <td className="px-4 py-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Code className="w-3 h-3 text-[#00ff41]" />
                            <span className="text-white font-medium">{repo.name}</span>
                          </div>
                          <div className="text-[10px] text-[#00ff41]/50 max-w-[200px]">{repo.description}</div>
                          <div className="flex items-center gap-1 mt-1 text-[10px] text-yellow-400">
                            <GitBranch className="w-2.5 h-2.5" />
                            <span>{repo.commitHash}</span>
                            <span className="text-[#00ff41]/50">-</span>
                            <span className="text-[#00ff41]/70">{repo.lastCommit}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 text-[10px] font-mono bg-[#00ff41]/10 border border-[#00ff41]/20 rounded text-[#00ff41]">
                          {repo.category}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1">
                          <code className="text-[10px] font-mono text-[#00ff41]">{truncateHash(repo.contractAddress)}</code>
                          <button 
                            onClick={() => copyHash(repo.contractAddress)}
                            className="p-1 text-[#00ff41]/50 hover:text-[#00ff41] transition-colors"
                          >
                            {copiedHash === repo.contractAddress ? (
                              <Check className="w-3 h-3" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end gap-1 text-[#00ff41]/70">
                          <Database className="w-3 h-3" />
                          {repo.txCount.toLocaleString()}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <span className="text-sm font-mono text-emerald-400">{repo.tvl}</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="px-2 py-0.5 text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-sm">
                          ● {repo.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <a 
                          href={repo.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono text-[#00ff41] hover:text-[#00ff41]/70 transition-colors"
                        >
                          clone <ArrowRight className="w-3 h-3" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
        
        <Reveal delay={0.4}>
          <div className="mt-6 text-center">
            <a 
              href="https://github.com/JunaidCD" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-mono text-[#00ff41]/60 hover:text-[#00ff41] transition-colors"
            >
              <Terminal className="w-4 h-4" />
              ./view-full-archive.sh
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
