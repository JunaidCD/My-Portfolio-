import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Github, Twitter, Link2, Activity, Cpu } from "lucide-react";
import { Link, useLocation } from "wouter";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [systemTime, setSystemTime] = useState('00:00:00');
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simulate system time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setSystemTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Simulate uptime counter
  useEffect(() => {
    const interval = setInterval(() => {
      setUptime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatUptime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Achievements", href: "/achievements" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/90 backdrop-blur-md border-b border-[#00ff41]/20 py-1" 
          : "bg-transparent py-3"
      }`}
    >
      {/* Terminal header bar */}
      <div className="bg-[#00ff41]/10 border-b border-[#00ff41]/20 px-4 py-1">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-4">
            <span className="text-[#00ff41]">
              <Terminal className="w-3 h-3 inline" /> root@portfolio
            </span>
            <span className="text-[#00ff41]/50">-</span>
            <span className="text-[#00ff41]/70">~</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#00ff41]/70">
              <Cpu className="w-3 h-3 inline mr-1" />
              {formatUptime(uptime)}
            </span>
            <span className="text-[#00ff41]/50">{systemTime}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo - Terminal style */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-sm bg-[#00ff41]/10 border border-[#00ff41]/30 flex items-center justify-center">
              <Terminal className="w-3.5 h-3.5 text-[#00ff41]" />
            </div>
            <span className="font-mono text-sm text-white">
              Junaid<span className="text-[#00ff41]">.terminal</span>
            </span>
          </Link>

          {/* System Status */}
          <div className="hidden lg:flex items-center gap-3 mr-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-black/50 border border-[#00ff41]/20 rounded-sm">
              <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              <span className="text-xs font-mono text-[#00ff41] uppercase tracking-wider">
                ONLINE
              </span>
            </div>
            
            <div className="flex items-center gap-2 px-3 py-1 bg-black/50 border border-[#00ff41]/20 rounded-sm">
              <Activity className="w-3 h-3 text-[#00ff41]" />
              <span className="text-xs font-mono text-[#00ff41]">
                CPU: 3.2GHz
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 text-xs font-mono transition-colors rounded-sm ${
                  location === link.href 
                    ? "text-[#00ff41] bg-[#00ff41]/10" 
                    : "text-[#00ff41]/60 hover:text-[#00ff41] hover:bg-[#00ff41]/5"
                }`}
              >
                {`> ${link.name}`}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a 
              href="https://github.com/JunaidCD" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center w-7 h-7 rounded-sm bg-black/50 border border-[#00ff41]/20 hover:bg-[#00ff41]/10 hover:border-[#00ff41]/40 transition-all"
            >
              <Github className="w-3.5 h-3.5 text-[#00ff41]/60 hover:text-[#00ff41]" />
            </a>
            <a 
              href="https://x.com/JunaidMollah5" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center w-7 h-7 rounded-sm bg-black/50 border border-[#00ff41]/20 hover:bg-[#00ff41]/10 hover:border-[#00ff41]/40 transition-all"
            >
              <Twitter className="w-3.5 h-3.5 text-[#00ff41]/60 hover:text-[#00ff41]" />
            </a>
            
            {/* Execute button - Terminal style */}
            <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#00ff41]/10 text-[#00ff41] border border-[#00ff41]/30 hover:bg-[#00ff41]/20 transition-colors text-xs font-mono">
              <Link2 className="w-3 h-3" />
              ./connect.sh
            </button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 text-[#00ff41]/60 hover:text-[#00ff41]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-[#00ff41]/20"
          >
            <div className="flex flex-col px-4 py-4 space-y-1">
              {/* Mobile system status */}
              <div className="flex items-center gap-2 px-4 py-2 mb-2 bg-black/50 border border-[#00ff41]/20 rounded-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono text-[#00ff41]">
                  root@portfolio:~$ uptime {formatUptime(uptime)}
                </span>
              </div>
              
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-sm text-xs font-mono transition-colors ${
                    location === link.href 
                      ? "text-[#00ff41] bg-[#00ff41]/10" 
                      : "text-[#00ff41]/60 hover:text-[#00ff41] hover:bg-[#00ff41]/5"
                  }`}
                >
                  {`> ${link.name}`}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
