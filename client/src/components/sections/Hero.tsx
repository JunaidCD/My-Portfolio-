import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Twitter, Copy, Check, Activity, Zap, Shield, Database, Terminal, Cpu, HardDrive, Clock } from "lucide-react";
import { Link } from "wouter";

// ASCII Art Banner
const ASCII_BANNER = `
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║   ██████╗ ███████╗████████╗██████╗  ██████╗                   ║
║   ██╔══██╗██╔════╝╚══██╔══╝██╔══██╗██╔═══██╗                  ║
║   ██████╔╝█████╗     ██║   ██████╔╝██║   ██║                  ║
║   ██╔══██╗██╔══╝     ██║   ██╔══██╗██║   ██║                  ║
║   ██║  ██║███████╗   ██║   ██║  ██║╚██████╔╝                  ║
║   ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝                   ║
║                                                              ║
║   ██████╗  ██████╗  █████╗ ██████╗ ██████╗                    ║
║   ██╔══██╗██╔═══██╗██╔══██╗██╔══██╗██╔══██╗                   ║
║   ██████╔╝██║   ██║███████║██████╔╝██║  ██║                   ║
║   ██╔══██╗██║   ██║██╔══██║██╔══██╗██║  ██║                   ║
║   ██████╔╝╚██████╔╝██║  ██║██║  ██║██████╔╝                   ║
║   ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝                    ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
`;

// Terminal welcome message
const WELCOME_MESSAGE = [
  "Welcome to Junaid's Portfolio Terminal v1.0.0",
  "Type 'help' for available commands",
  "------------------------------------------",
];

export function Hero() {
  const [copied, setCopied] = useState(false);
  const [systemTime, setSystemTime] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  // Simulate system stats
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemTime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Typing effect for welcome message
  useEffect(() => {
    let currentIndex = 0;
    const text = "Initializing secure connection...";
    const typeInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setTypedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);
    return () => clearInterval(typeInterval);
  }, []);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const copyAddress = () => {
    navigator.clipboard.writeText("0x742d35Cc6634C0532925a3b844Bc9e7595f4B3E7");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatUptime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-6 items-start">
          
          <div className="flex flex-col items-start text-left">
            {/* Terminal-style status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4 font-mono text-xs"
            >
              <div className="text-[#00ff41]/60 mb-1">
                root@hero:~$ <span className="text-[#00ff41]">{typedText}</span>
                <span className={showCursor ? "cursor-blink" : ""}>█</span>
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-3 font-mono"
            >
              <span className="text-white">Junaid</span>
              <br />
              <span className="text-[#00ff41]">Molla</span>
              <span className="cursor-blink">_</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center gap-2 mb-4"
            >
              <span className="px-3 py-1 rounded-sm bg-[#00ff41]/10 border border-[#00ff41]/20 text-xs font-mono text-[#00ff41]">
                {'>'} Smart Contract Dev
              </span>
              <span className="text-white/20">|</span>
              <span className="px-3 py-1 rounded-sm bg-[#00ff41]/10 border border-[#00ff41]/20 text-xs font-mono text-[#00ff41]">
                {'>'} DeFi Builder
              </span>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-sm text-[#00ff41]/70 mb-4 max-w-xl font-mono leading-relaxed"
            >
              Building secure, gas-optimized smart contracts and decentralized systems 
              that redefine digital ownership on the blockchain.
            </motion.p>

            {/* Command input style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4 w-full max-w-md"
            >
              <div className="flex items-center gap-2 px-3 py-2 bg-black/50 border border-[#00ff41]/30 rounded-sm">
                <span className="text-[#00ff41] font-mono text-sm">{'>'}</span>
                <span className="text-[#00ff41]/50 font-mono text-sm">cat ~/.eth/address</span>
                <span className="ml-auto text-[#00ff41] font-mono text-xs">0x742d...3E7</span>
                <button 
                  onClick={copyAddress}
                  className="p-1 text-[#00ff41]/50 hover:text-[#00ff41] transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </motion.div>
            
            {/* System stats - Terminal dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-3 gap-2 mb-6 w-full max-w-md"
            >
              <div className="p-2 rounded-sm bg-black/50 border border-[#00ff41]/20">
                <div className="flex items-center gap-1 mb-1">
                  <Activity className="w-3 h-3 text-[#00ff41]" />
                  <span className="text-[10px] font-mono text-[#00ff41]/50 uppercase">Runtime</span>
                </div>
                <div className="text-sm font-mono text-[#00ff41]">{formatUptime(systemTime)}</div>
              </div>
              
              <div className="p-2 rounded-sm bg-black/50 border border-[#00ff41]/20">
                <div className="flex items-center gap-1 mb-1">
                  <Zap className="w-3 h-3 text-yellow-400" />
                  <span className="text-[10px] font-mono text-[#00ff41]/50 uppercase">Gas</span>
                </div>
                <div className="text-sm font-mono text-yellow-400">25 gwei</div>
              </div>
              
              <div className="p-2 rounded-sm bg-black/50 border border-[#00ff41]/20">
                <div className="flex items-center gap-1 mb-1">
                  <Database className="w-3 h-3 text-emerald-400" />
                  <span className="text-[10px] font-mono text-[#00ff41]/50 uppercase">Deploys</span>
                </div>
                <div className="text-sm font-mono text-emerald-400">50+</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Link 
                href="/projects" 
                className="px-4 py-2 rounded-sm bg-[#00ff41] text-black font-mono text-sm flex items-center gap-2 hover:bg-[#00ff41]/90 transition-colors"
              >
                ./view-projects.sh
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              
              <a 
                href="https://github.com/JunaidCD" 
                target="_blank" 
                rel="noreferrer" 
                className="px-4 py-2 rounded-sm bg-black/50 border border-[#00ff41]/30 text-[#00ff41] font-mono text-sm flex items-center gap-2 hover:bg-[#00ff41]/10 transition-colors"
              >
                <Github className="w-4 h-4" />
                git clone
              </a>

              <a 
                href="https://x.com/JunaidMollah5" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-sm bg-black/50 border border-[#00ff41]/30 text-[#00ff41]/60 hover:text-[#00ff41] hover:border-[#00ff41]/50 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Terminal window */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="bg-black/80 border border-[#00ff41]/30 rounded-sm overflow-hidden"
          >
            {/* Terminal header */}
            <div className="flex items-center justify-between px-3 py-2 bg-[#00ff41]/10 border-b border-[#00ff41]/20">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="ml-2 text-xs font-mono text-[#00ff41]/70">root@portfolio:~/system-stats</span>
              </div>
              <span className="text-[10px] font-mono text-[#00ff41]/50">bash</span>
            </div>

            {/* Terminal content */}
            <div className="p-4 font-mono text-xs">
              <div className="text-[#00ff41]/50 mb-2">
                {WELCOME_MESSAGE.map((line, i) => (
                  <div key={i}>{'>'} {line}</div>
                ))}
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[#00ff41]">{'>'}</span>
                  <span className="text-[#00ff41]/70">cat /proc/stats</span>
                </div>
                
                <div className="pl-4 space-y-0 text-[#00ff41]/60">
                  <div className="flex justify-between">
                    <span>Lines of Solidity</span>
                    <span className="text-[#00ff41]">50,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>DeFi Protocols</span>
                    <span className="text-[#00ff41]">15+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>TVL Secured</span>
                    <span className="text-emerald-400">$10M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gas Saved</span>
                    <span className="text-yellow-400">~500 ETH</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Audits</span>
                    <span className="text-white">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Networks</span>
                    <span className="text-white">ETH, ARB, MATIC</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-[#00ff41]/10">
                <div className="flex items-center gap-2">
                  <span className="text-[#00ff41]">{'>'}</span>
                  <span className="text-[#00ff41]/70">cat /etc/security</span>
                </div>
                <div className="pl-4 text-emerald-400">
                  [✓] Reentrancy Guards
                </div>
                <div className="pl-4 text-emerald-400">
                  [✓] Access Control
                </div>
                <div className="pl-4 text-emerald-400">
                  [✓] Pausable Contracts
                </div>
              </div>

              <div className="mt-3">
                <div className="flex items-center gap-2">
                  <span className="text-[#00ff41]">{'>'}</span>
                  <span className="text-[#00ff41]/50 animate-pulse">_</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
