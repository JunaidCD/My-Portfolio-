import { Reveal } from "../Reveal";
import { motion } from "framer-motion";
import { Star, ExternalLink, FolderGit2, ArrowRight, Box, Coins, Lock, Zap } from "lucide-react";

const FEATURED_REPOS = [
  { 
    name: "FinBridge", 
    description: "A cross-chain financial bridge protocol enabling seamless asset transfer between chains.", 
    language: "Solidity", 
    stars: 0, 
    url: "https://github.com/JunaidCD/FinBridge",
    category: "DeFi",
    gradient: "from-cyan-500 to-blue-500"
  },
  { 
    name: "Credence", 
    description: "On-chain decentralized identity and reputation system for trustless verification.", 
    language: "Solidity", 
    stars: 0, 
    url: "https://github.com/JunaidCD/Credence",
    category: "Identity",
    gradient: "from-purple-500 to-pink-500"
  },
  { 
    name: "AyurherbX", 
    description: "Blockchain-powered herb tracking and authentication platform for supply chain transparency.", 
    language: "Solidity", 
    stars: 0, 
    url: "https://github.com/JunaidCD/AyurherbX",
    category: "Supply Chain",
    gradient: "from-emerald-500 to-teal-500"
  },
  { 
    name: "ERC20-Mock-USDC", 
    description: "Mock USDC implementation for testing DeFi protocols with realistic token behavior.", 
    language: "Solidity", 
    stars: 0, 
    url: "https://github.com/JunaidCD/ERC20-Mock-USDC",
    category: "Infrastructure",
    gradient: "from-orange-500 to-red-500"
  },
  { 
    name: "StakingDapp", 
    description: "Decentralized staking platform with yield farming and reward distribution mechanisms.", 
    language: "Solidity", 
    stars: 0, 
    url: "https://github.com/JunaidCD/StakingDapp",
    category: "DeFi",
    gradient: "from-cyan-500 to-purple-500"
  },
  { 
    name: "D-Appazon", 
    description: "Web3 e-commerce platform with crypto payments and NFT-based loyalty rewards.", 
    language: "Solidity", 
    stars: 0, 
    url: "https://github.com/JunaidCD/D-Appazon",
    category: "dApp",
    gradient: "from-blue-500 to-indigo-500"
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative border-t border-white/5 bg-white/[0.01]">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-secondary/50" />
              <span className="text-sm font-mono text-secondary tracking-widest uppercase">03. Deployed Contracts</span>
              <span className="w-8 h-px bg-secondary/50" />
            </div>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Featured <span className="gradient-text-animated">Projects</span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary via-primary to-transparent mt-2 rounded-full" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_REPOS.map((repo, index) => (
            <Reveal key={repo.name} delay={index * 0.1}>
              <motion.a 
                href={repo.url} 
                target="_blank" 
                rel="noreferrer"
                className="block h-full group"
                whileHover={{ y: -5 }}
              >
                <div className="relative h-full p-1 rounded-2xl bg-gradient-to-r from-white/10 via-white/5 to-white/10">
                  {/* Animated gradient border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${repo.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md`} />
                  
                  <div className="relative h-full glass-card p-6 rounded-2xl flex flex-col bg-background/80">
                    {/* Card header */}
                    <div className="flex justify-between items-start mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${repo.gradient} flex items-center justify-center shadow-lg`}>
                        <FolderGit2 className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 text-xs font-mono rounded-md bg-gradient-to-r ${repo.gradient} text-white font-medium`}>
                          {repo.category}
                        </span>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {repo.name}
                    </h4>
                    
                    <p className="text-sm text-muted-foreground flex-grow mb-4 line-clamp-3 leading-relaxed">
                      {repo.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs font-mono pt-4 border-t border-white/10">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Coins className="w-3.5 h-3.5" />
                        {repo.language}
                      </span>
                      
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Star className="w-3.5 h-3.5" />
                          {repo.stars}
                        </span>
                        <span className="text-primary/60 group-hover:text-primary transition-colors">
                          View →
                        </span>
                      </div>
                    </div>
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
              className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors group"
            >
              <Box className="w-4 h-4" />
              View full archive on GitHub 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </Reveal>

        {/* Quick stats */}
        <Reveal delay={0.6}>
          <div className="mt-16 grid grid-cols-3 gap-4 p-6 rounded-2xl glass-card border border-white/5">
            {[
              { icon: Box, label: "Repositories", value: "20+" },
              { icon: Lock, label: "Smart Contracts", value: "50+" },
              { icon: Zap, label: "Total Stars", value: "100+" },
            ].map((stat, i) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
