import { motion } from "framer-motion";
import { ArrowRight, Github, Mail, Twitter, ChevronRight, Cpu, Zap, Shield } from "lucide-react";
import { TerminalSnippet } from "../TerminalSnippet";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Hero decorative elements */}
      <div className="absolute top-1/4 left-10 w-px h-40 bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden lg:block" />
      <div className="absolute top-1/3 right-10 w-px h-60 bg-gradient-to-b from-transparent via-secondary/50 to-transparent hidden lg:block" />
      
      {/* Animated corner brackets */}
      <div className="absolute top-32 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/30 hidden lg:block" />
      <div className="absolute top-32 right-8 w-16 h-16 border-r-2 border-t-2 border-secondary/30 hidden lg:block" />
      <div className="absolute bottom-32 left-8 w-16 h-16 border-l-2 border-b-2 border-secondary/30 hidden lg:block" />
      <div className="absolute bottom-32 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/30 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-primary text-sm font-medium mb-6 relative group"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="font-mono">0x7F3A...B2C9</span>
              <span className="text-muted-foreground/50">│</span>
              <span>Available for opportunities</span>
              <ChevronRight className="w-4 h-4 opacity-50 group-hover:translate-x-1 transition-transform" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-2"
            >
              <span className="text-white">Junaid</span>
              <br />
              <span className="gradient-text-animated" data-text="Molla">Molla</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap items-center gap-2 mb-6"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-secondary/10 border border-secondary/20 text-secondary text-sm font-mono">
                <Cpu className="w-3.5 h-3.5" />
                Smart Contract Developer
              </span>
              <span className="text-muted-foreground/30">/</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent text-sm font-mono">
                <Zap className="w-3.5 h-3.5" />
                DeFi Builder
              </span>
              <span className="text-muted-foreground/30">/</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-sm font-mono">
                <Shield className="w-3.5 h-3.5" />
                Security Auditor
              </span>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed"
            >
              Architecting trustless protocols of tomorrow. Building secure, gas-optimized smart contracts and decentralized systems that redefine digital ownership on the blockchain.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap gap-8 mb-10"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white font-display">50K+</div>
                <div className="text-xs text-muted-foreground font-mono">Lines of Solidity</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white font-display">15+</div>
                <div className="text-xs text-muted-foreground font-mono">DeFi Protocols</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white font-display">$10M+</div>
                <div className="text-xs text-muted-foreground font-mono">TVL Secured</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link href="/projects" className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold flex items-center gap-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <a href="https://github.com/JunaidCD" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-xl glass-card font-semibold flex items-center gap-2 hover:bg-white/5 transition-all text-white group">
                <Github className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                <span>GitHub</span>
              </a>

              <Link href="/contact" className="p-4 rounded-xl glass-card hover:bg-white/5 transition-all text-muted-foreground hover:text-white group">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>

              <a href="https://x.com/JunaidMollah5" target="_blank" rel="noreferrer" className="p-4 rounded-xl glass-card hover:bg-white/5 transition-all text-muted-foreground hover:text-white group">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex justify-center lg:justify-end relative"
          >
            {/* Decorative elements behind terminal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/20 rounded-full blur-[100px]" />
            <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-[60px]" />
            
            {/* Hexagonal frame */}
            <div className="absolute inset-0 border border-white/5 rounded-3xl rotate-45 opacity-30 hidden lg:block" />
            <div className="absolute -inset-4 border border-white/5 rounded-3xl rotate-45 opacity-20 hidden lg:block" />
            
            <TerminalSnippet />
          </motion.div>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent relative">
            <motion.div 
              className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary to-transparent"
              animate={{ y: [0, 48] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
