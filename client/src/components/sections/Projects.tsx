import { Reveal } from "../Reveal";
import { motion } from "framer-motion";
import { ExternalLink, FolderGit2, ArrowRight, Box } from "lucide-react";

const FEATURED_REPOS = [
  { 
    name: "FinBridge", 
    description: "A cross-chain financial bridge protocol enabling seamless asset transfer between chains.", 
    language: "Solidity", 
    url: "https://github.com/JunaidCD/FinBridge",
    category: "DeFi",
  },
  { 
    name: "Credence", 
    description: "On-chain decentralized identity and reputation system for trustless verification.", 
    language: "Solidity", 
    url: "https://github.com/JunaidCD/Credence",
    category: "Identity",
  },
  { 
    name: "AyurherbX", 
    description: "Blockchain-powered herb tracking and authentication platform for supply chain transparency.", 
    language: "Solidity", 
    url: "https://github.com/JunaidCD/AyurherbX",
    category: "Supply Chain",
  },
  { 
    name: "ERC20-Mock-USDC", 
    description: "Mock USDC implementation for testing DeFi protocols with realistic token behavior.", 
    language: "Solidity", 
    url: "https://github.com/JunaidCD/ERC20-Mock-USDC",
    category: "Infrastructure",
  },
  { 
    name: "StakingDapp", 
    description: "Decentralized staking platform with yield farming and reward distribution mechanisms.", 
    language: "Solidity", 
    url: "https://github.com/JunaidCD/StakingDapp",
    category: "DeFi",
  },
  { 
    name: "D-Appazon", 
    description: "Web3 e-commerce platform with crypto payments and NFT-based loyalty rewards.", 
    language: "Solidity", 
    url: "https://github.com/JunaidCD/D-Appazon",
    category: "dApp",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-sm font-mono text-primary tracking-widest uppercase mb-4">03. Projects</span>
            <h3 className="text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="text-primary">Work</span>
            </h3>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED_REPOS.map((repo, index) => (
            <Reveal key={repo.name} delay={index * 0.1}>
              <motion.a 
                href={repo.url} 
                target="_blank" 
                rel="noreferrer"
                className="block h-full group"
                whileHover={{ y: -2 }}
              >
                <div className="glass-card p-5 rounded-xl h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FolderGit2 className="w-5 h-5 text-primary" />
                    </div>
                    <span className="px-2 py-1 text-xs font-mono rounded-md bg-white/5 text-muted-foreground">
                      {repo.category}
                    </span>
                  </div>
                  
                  <h4 className="text-white font-medium mb-2 group-hover:text-primary transition-colors">
                    {repo.name}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground flex-grow mb-4 leading-relaxed">
                    {repo.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs font-mono pt-4 border-t border-white/5">
                    <span className="text-muted-foreground">{repo.language}</span>
                    <span className="text-primary group-hover:text-primary/70 transition-colors">
                      View →
                    </span>
                  </div>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
        
        <Reveal delay={0.4}>
          <div className="mt-12 text-center">
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
