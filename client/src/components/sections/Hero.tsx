import { motion } from "framer-motion";
import { ArrowRight, Github, Twitter } from "lucide-react";
import { TerminalSnippet } from "../TerminalSnippet";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/5 border border-primary/20 text-primary text-sm font-mono mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Available for opportunities</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4"
            >
              <span className="text-white">Junaid</span>
              <br />
              <span className="text-primary">Molla</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap items-center gap-2 mb-6"
            >
              <span className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-muted-foreground font-mono">
                Smart Contract Developer
              </span>
              <span className="text-white/20">/</span>
              <span className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-muted-foreground font-mono">
                DeFi Builder
              </span>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed"
            >
              Building secure, gas-optimized smart contracts and decentralized systems that redefine digital ownership on the blockchain.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap gap-8 mb-8"
            >
              <div>
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-xs text-muted-foreground font-mono">Lines of Solidity</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-xs text-muted-foreground font-mono">DeFi Protocols</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-3xl font-bold text-white">$10M+</div>
                <div className="text-xs text-muted-foreground font-mono">TVL Secured</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link 
                href="/projects" 
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a 
                href="https://github.com/JunaidCD" 
                target="_blank" 
                rel="noreferrer" 
                className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium flex items-center gap-2 hover:bg-white/10 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>

              <a 
                href="https://x.com/JunaidMollah5" 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 rounded-lg bg-white/5 border border-white/10 text-muted-foreground hover:text-white hover:bg-white/10 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <TerminalSnippet />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
