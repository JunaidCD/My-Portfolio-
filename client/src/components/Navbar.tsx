import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Wallet, Terminal, Github, Twitter } from "lucide-react";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-panel py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center box-glow-cyan">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight hidden sm:block text-white">
              Junaid<span className="text-primary">.dev</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  location === link.href ? "text-primary" : "text-muted-foreground hover:text-white"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${location === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a 
              href="https://x.com/JunaidMollah5" 
              target="_blank" 
              rel="noreferrer"
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-white" />
            </a>
            <a 
              href="https://github.com/JunaidCD" 
              target="_blank" 
              rel="noreferrer"
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-white" />
            </a>
            
            <button
              onClick={handleWalletClick}
              className={`
                hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300
                ${walletConnected 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/50 box-glow-cyan' 
                  : 'bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 box-glow-cyan'
                }
              `}
            >
              <Wallet className="w-4 h-4" />
              {walletConnected ? '0x71C...9B34' : 'Connect Wallet'}
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
            <div className="flex flex-col px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    location === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
                <button
                  onClick={() => {
                    handleWalletClick();
                    setTimeout(() => setMobileMenuOpen(false), 1000);
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary/10 text-primary border border-primary/30"
                >
                  <Wallet className="w-5 h-5" />
                  {walletConnected ? '0x71C...9B34' : 'Connect Wallet'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
