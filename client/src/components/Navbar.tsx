import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Wallet, Terminal, Github, Twitter, Link as LinkIcon, ChevronRight } from "lucide-react";
import { Link, useLocation } from "wouter";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Achievements", href: "/achievements" },
    { name: "Contact", href: "/contact" },
  ];

  const handleWalletClick = () => {
    setWalletConnected(true);
    setTimeout(() => setWalletConnected(false), 3000);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "glass-panel py-2 bg-background/80" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary via-accent to-secondary flex items-center justify-center box-glow-cyan group-hover:animate-pulse transition-all">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-xl border-2 border-primary/30 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-tight text-white">
                Junaid<span className="text-primary">.eth</span>
              </span>
              <span className="text-[10px] text-muted-foreground font-mono tracking-wider">FULL STACK DEVS</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors group ${
                  location === link.href ? "text-primary" : "text-muted-foreground hover:text-white"
                }`}
              >
                <span className="flex items-center gap-1">
                  {link.name}
                  {location === link.href && (
                    <ChevronRight className="w-3 h-3 rotate-90" />
                  )}
                </span>
                {/* Hover underline effect */}
                <span className={`absolute bottom-0 left-2 right-2 h-0.5 bg-primary transform origin-left transition-transform duration-300 ${location === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                {/* Active indicator */}
                {location === link.href && (
                  <motion.span 
                    layoutId="navbar-indicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-primary"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a 
              href="https://x.com/JunaidMollah5" 
              target="_blank" 
              rel="noreferrer"
              className="hidden sm:flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
            >
              <Twitter className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
            </a>
            <a 
              href="https://github.com/JunaidCD" 
              target="_blank" 
              rel="noreferrer"
              className="hidden sm:flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
            >
              <Github className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
            </a>
            
            <button
              onClick={handleWalletClick}
              className={`
                hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 group
                ${walletConnected 
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 box-glow-green' 
                  : 'bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:border-primary/50 box-glow-cyan'
                }
              `}
            >
              <Wallet className="w-4 h-4" />
              <span className="hidden lg:inline">
                {walletConnected ? '0x71C...9B34' : 'Connect'}
              </span>
              {walletConnected ? (
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-2 h-2 rounded-full bg-emerald-400"
                />
              ) : (
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-2 h-2 rounded-full bg-primary animate-pulse"
                />
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 text-muted-foreground hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="md:hidden glass-panel border-t border-white/10"
          >
            <div className="flex flex-col px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                    location === link.href 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-primary hover:bg-white/5"
                  }`}
                >
                  <span>{link.name}</span>
                  {location === link.href && (
                    <LinkIcon className="w-4 h-4" />
                  )}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 mt-4">
                <button
                  onClick={() => {
                    handleWalletClick();
                    setTimeout(() => setMobileMenuOpen(false), 1000);
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary/10 text-primary border border-primary/30 group"
                >
                  <Wallet className="w-5 h-5" />
                  {walletConnected ? '0x71C...9B34' : 'Connect Wallet'}
                  {walletConnected && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 rounded-full bg-emerald-400"
                    />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom border gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </header>
  );
}
