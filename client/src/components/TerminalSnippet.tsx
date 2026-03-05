import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const codeLines = [
  "const engineer = new BlockchainEngineer();",
  "await engineer.connectWallet();",
  "engineer.setSkills(['Solidity', 'Rust', 'ZK']);",
  "const protocol = engineer.buildProtocol();",
  "await protocol.deploy(networks.mainnet);",
  "// Result: Securing $100M+ TVL",
  "> Status: Ready for new challenges_"
];

export function TerminalSnippet() {
  const [lines, setLines] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < codeLines.length) {
      const timer = setTimeout(() => {
        setLines(prev => [...prev, codeLines[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, Math.random() * 500 + 300); // Random delay between 300-800ms
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-xl overflow-hidden font-mono text-sm w-full max-w-lg shadow-2xl"
    >
      {/* Terminal Header */}
      <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
        <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
        <span className="ml-2 text-xs text-muted-foreground/70">bash - node deploy.js</span>
      </div>
      
      {/* Terminal Body */}
      <div className="p-5 h-[220px] overflow-y-auto terminal-scrollbar bg-[#0D0D12]">
        {lines.map((line, i) => (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            key={i}
            className={`mb-2 ${
              line.startsWith('//') ? 'text-muted-foreground' : 
              line.startsWith('>') ? 'text-primary text-glow-cyan' : 
              'text-white/90'
            }`}
          >
            <span className="text-secondary/60 mr-2">~</span>
            {line}
          </motion.div>
        ))}
        {currentIndex < codeLines.length && (
          <motion.div 
            animate={{ opacity: [1, 0] }} 
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2.5 h-4 bg-primary inline-block align-middle ml-1"
          />
        )}
      </div>
    </motion.div>
  );
}
