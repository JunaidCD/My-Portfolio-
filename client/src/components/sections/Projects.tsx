import { Reveal } from "../Reveal";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Box, Hash, Database, DollarSign, Copy, Check } from "lucide-react";
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
  },
  { 
    name: "ERC20-Mock-USDC", 
    description: "Mock USDC implementation for testing DeFi protocols with realistic token behavior.", 
    language: "Solidity", 
    url: "https://github.com/JunaidCD/ERC20-Mock-USDC",
    category: "Infrastructure",
    contractAddress: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    txCount: 8942,
    tvl: "N/A",
    status: "confirmed",
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
    <section id="projects" className="py-24 relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col items-start mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-primary">03.</span>
              <span className="text-sm font-mono text-muted-foreground tracking-widest uppercase">Projects</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold">
              Featured <span className="text-primary">Work</span>
            </h3>
          </div>
        </Reveal>

        {/* Projects Table */}
        <Reveal>
          <div className="block-card rounded-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-[10px] font-mono uppercase">Project</th>
                    <th className="px-4 py-3 text-left text-[10px] font-mono uppercase">Category</th>
                    <th className="px-4 py-3 text-left text-[10px] font-mono uppercase">Contract</th>
                    <th className="px-4 py-3 text-right text-[10px] font-mono uppercase">TXs</th>
                    <th className="px-4 py-3 text-right text-[10px] font-mono uppercase">TVL</th>
                    <th className="px-4 py-3 text-center text-[10px] font-mono uppercase">Status</th>
                    <th className="px-4 py-3 text-right text-[10px] font-mono uppercase">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {FEATURED_REPOS.map((repo, index) => (
                    <tr key={repo.name} className="data-row">
                      <td className="px-4 py-4">
                        <div>
                          <div className="font-mono text-sm text-white font-medium">{repo.name}</div>
                          <div className="text-xs text-muted-foreground font-mono mt-0.5 max-w-[200px]">{repo.description}</div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className="px-2 py-1 text-[10px] font-mono bg-muted/50 border border-border rounded text-muted-foreground">
                          {repo.category}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-1">
                          <code className="text-xs font-mono text-primary">{truncateHash(repo.contractAddress)}</code>
                          <button 
                            onClick={() => copyHash(repo.contractAddress)}
                            className="p-1 text-muted-foreground hover:text-primary transition-colors"
                          >
                            {copiedHash === repo.contractAddress ? (
                              <Check className="w-3 h-3" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <div className="flex items-center justify-end gap-1 text-sm font-mono text-muted-foreground">
                          <Database className="w-3 h-3" />
                          {repo.txCount.toLocaleString()}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <span className="text-sm font-mono text-emerald-400">{repo.tvl}</span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span className="status-badge status-confirmed">
                          {repo.status === 'confirmed' ? '●' : '○'} {repo.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <a 
                          href={repo.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono text-primary hover:text-primary/70 transition-colors"
                        >
                          View <ArrowRight className="w-3 h-3" />
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
          <div className="mt-8 text-center">
            <a 
              href="https://github.com/JunaidCD" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
            >
              <Box className="w-4 h-4" />
              View full archive on GitHub 
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
