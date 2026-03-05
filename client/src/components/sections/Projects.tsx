import { Reveal } from "../Reveal";
import { Star, ExternalLink, FolderGit2, ArrowRight } from "lucide-react";

const FEATURED_REPOS = [
  { name: "FinBridge", description: "A cross-chain financial bridge protocol.", language: "Solidity", stars: 0, url: "https://github.com/JunaidCD/FinBridge" },
  { name: "Credence", description: "On-chain decentralized identity and reputation system.", language: "Solidity", stars: 0, url: "https://github.com/JunaidCD/Credence" },
  { name: "AyurherbX", description: "Blockchain-powered herb tracking and authentication platform.", language: "Solidity", stars: 0, url: "https://github.com/JunaidCD/AyurherbX" },
  { name: "ERC20-Mock-USDC", description: "Mock USDC implementation for testing DeFi protocols.", language: "Solidity", stars: 0, url: "https://github.com/JunaidCD/ERC20-Mock-USDC" },
  { name: "StakingDapp", description: "Decentralized staking platform with yield farming capabilities.", language: "Solidity", stars: 0, url: "https://github.com/JunaidCD/StakingDapp" },
  { name: "D-Appazon", description: "Web3 e-commerce platform built on Ethereum.", language: "Solidity", stars: 0, url: "https://github.com/JunaidCD/D-Appazon" },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-sm font-mono text-secondary mb-2 tracking-widest uppercase">03. Deployed Contracts</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold">Featured <span className="text-glow-purple text-secondary">Projects</span></h3>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-transparent mt-6 rounded-full" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_REPOS.map((repo, index) => (
            <Reveal key={repo.name} delay={index * 0.1}>
              <a 
                href={repo.url} 
                target="_blank" 
                rel="noreferrer"
                className="block h-full"
              >
                <div className="glass-card h-full p-6 rounded-2xl flex flex-col group relative overflow-hidden">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/0 via-primary/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <FolderGit2 className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {repo.name}
                    </h4>
                    
                    <p className="text-sm text-muted-foreground flex-grow mb-6 line-clamp-3">
                      {repo.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs font-mono mt-auto pt-4 border-t border-white/10">
                      <span className="flex items-center gap-1 text-accent">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        {repo.language}
                      </span>
                      
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5" />
                          {repo.stars}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
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
              View full archive on GitHub <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
