import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Github, Twitter, Link2, Activity } from "lucide-react";
import { Link, useLocation } from "wouter";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [blockHeight, setBlockHeight] = useState(18500432);
  const [networkStatus, setNetworkStatus] = useState<'connected' | 'syncing'>('connected');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simulate block height updates
  useEffect(() => {
    const interval = setInterval(() => {
      setBlockHeight(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
          ? "bg-background/90 backdrop-blur-md border-b border-border py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo - Explorer style */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-primary" />
            </div>
            <span className="font-mono text-sm text-white">
              Junaid<span className="text-primary">.eth</span>
            </span>
          </Link>

          {/* Network Status */}
          <div className="hidden lg:flex items-center gap-4 mr-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-card/50 border border-border rounded-sm">
              <div className={`w-2 h-2 rounded-full ${networkStatus === 'connected' ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]' : 'bg-yellow-400 animate-pulse'}`} />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                {networkStatus === 'connected' ? 'Online' : 'Syncing'}
              </span>
            </div>
            
            <div className="flex items-center gap-2 px-3 py-1.5 bg-card/50 border border-border rounded-sm">
              <Activity className="w-3 h-3 text-primary" />
              <span className="text-xs font-mono text-primary">
                #{blockHeight.toLocaleString()}
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
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a 
              href="https://github.com/JunaidCD" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-sm bg-white/5 border border-border hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <Github className="w-3.5 h-3.5 text-muted-foreground hover:text-white" />
            </a>
            <a 
              href="https://x.com/JunaidMollah5" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-sm bg-white/5 border border-border hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <Twitter className="w-3.5 h-3.5 text-muted-foreground hover:text-white" />
            </a>
            
            {/* Connect Wallet - Explorer style */}
            <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-sm bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors text-xs font-mono">
              <Link2 className="w-3 h-3" />
              Connect
            </button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 text-muted-foreground hover:text-white"
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
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
          >
            <div className="flex flex-col px-4 py-4 space-y-1">
              {/* Mobile network status */}
              <div className="flex items-center gap-2 px-4 py-2 mb-2 bg-card/50 border border-border rounded-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono text-muted-foreground">
                  Block: #{blockHeight.toLocaleString()}
                </span>
              </div>
              
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-sm text-xs font-mono transition-colors ${
                    location === link.href 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
