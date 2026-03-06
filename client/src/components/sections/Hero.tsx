import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Twitter, Copy, Check, Activity, Zap, Shield, Database } from "lucide-react";
import { Link } from "wouter";

// Simulated wallet address
const WALLET_ADDRESS = "0x742d35Cc6634C0532925a3b844Bc9e7595f4B3E7";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const [blockHeight, setBlockHeight] = useState(18500432);
  const [gasPrice, setGasPrice] = useState(25);
  const [txCount, setTxCount] = useState(12847);

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setBlockHeight((prev: number) => prev + Math.floor(Math.random() * 3) + 1);
      setGasPrice((prev: number) => Math.max(10, prev + Math.floor(Math.random() * 5) - 2));
      setTxCount((prev: number) => prev + Math.floor(Math.random() * 10));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const copyAddress = () => {
    navigator.clipboard.writeText(WALLET_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const truncateAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>● Active</span>
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
              <span className="px-3 py-1.5 rounded-sm bg-muted/50 border border-border text-xs font-mono text-muted-foreground">
                Smart Contract Developer
              </span>
              <span className="text-white/20">/</span>
              <span className="px-3 py-1.5 rounded-sm bg-muted/50 border border-border text-xs font-mono text-muted-foreground">
                DeFi Builder
              </span>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-6 max-w-xl leading-relaxed font-mono text-sm"
            >
              Building secure, gas-optimized smart contracts and decentralized systems that redefine digital ownership on the blockchain.
            </motion.p>

            {/* Wallet Address - Explorer Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border rounded-sm">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Address</span>
                <span className="text-primary font-mono text-sm">{truncateAddress(WALLET_ADDRESS)}</span>
                <button 
                  onClick={copyAddress}
                  className="p-1 text-muted-foreground hover:text-primary transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </motion.div>
            
            {/* Stats - Explorer Dashboard Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-3 gap-3 mb-8 w-full max-w-lg"
            >
              <div className="block-card p-3 rounded-sm">
                <div className="flex items-center gap-1.5 mb-1">
                  <Activity className="w-3 h-3 text-primary" />
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">Block</span>
                </div>
                <div className="text-sm font-mono text-primary">#{blockHeight.toLocaleString()}</div>
              </div>
              
              <div className="block-card p-3 rounded-sm">
                <div className="flex items-center gap-1.5 mb-1">
                  <Zap className="w-3 h-3 text-yellow-400" />
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">Gas</span>
                </div>
                <div className="text-sm font-mono text-yellow-400">{gasPrice} Gwei</div>
              </div>
              
              <div className="block-card p-3 rounded-sm">
                <div className="flex items-center gap-1.5 mb-1">
                  <Database className="w-3 h-3 text-emerald-400" />
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">TXs</span>
                </div>
                <div className="text-sm font-mono text-emerald-400">{txCount.toLocaleString()}</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link 
                href="/projects" 
                className="px-5 py-2.5 rounded-sm bg-primary text-primary-foreground font-mono text-sm flex items-center gap-2 hover:bg-primary/90 transition-colors"
              >
                View Projects
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              
              <a 
                href="https://github.com/JunaidCD" 
                target="_blank" 
                rel="noreferrer" 
                className="px-5 py-2.5 rounded-sm bg-white/5 border border-border text-white font-mono text-sm flex items-center gap-2 hover:bg-white/10 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>

              <a 
                href="https://x.com/JunaidMollah5" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 rounded-sm bg-white/5 border border-border text-muted-foreground hover:text-white hover:bg-white/10 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Explorer-style stats panel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="block-card p-6 rounded-sm"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-mono text-white">Protocol Stats</span>
              </div>
              <span className="status-badge status-confirmed">
                <Check className="w-2.5 h-2.5" />
                Confirmed
              </span>
            </div>

            {/* Stats Table */}
            <div className="space-y-0">
              <div className="tech-info">
                <span className="tech-label">Lines of Solidity</span>
                <span className="tech-value text-primary">50,000+</span>
              </div>
              <div className="tech-info">
                <span className="tech-label">DeFi Protocols</span>
                <span className="tech-value text-primary">15+</span>
              </div>
              <div className="tech-info">
                <span className="tech-label">TVL Secured</span>
                <span className="tech-value text-emerald-400">$10M+</span>
              </div>
              <div className="tech-info">
                <span className="tech-label">Gas Saved</span>
                <span className="tech-value text-yellow-400">~500 ETH</span>
              </div>
              <div className="tech-info">
                <span className="tech-label">Audits</span>
                <span className="tech-value">3</span>
              </div>
              <div className="tech-info">
                <span className="tech-label">Networks</span>
                <span className="tech-value">Ethereum, Arbitrum, Polygon</span>
              </div>
              <div className="tech-info">
                <span className="tech-label">Security</span>
                <span className="tech-value text-emerald-400">Reentrancy Guards</span>
              </div>
            </div>

            {/* Contract Address */}
            <div className="mt-6 pt-4 border-t border-border">
              <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-2">
                Contract Address
              </div>
              <div className="flex items-center gap-2">
                <code className="text-xs font-mono text-primary bg-muted/30 px-2 py-1 rounded break-all">
                  0x742d35Cc6634C0532925a3b844Bc9e7595f4B3E7
                </code>
                <button className="p-1 text-muted-foreground hover:text-primary transition-colors">
                  <Copy className="w-3 h-3" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
