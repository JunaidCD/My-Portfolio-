import { motion } from "framer-motion";
import { Github, Terminal, Twitter, Linkedin, Link as LinkIcon, Heart, Box, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Achievements", href: "/achievements" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/JunaidCD" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/JunaidMollah5" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="relative border-t border-white/5 bg-background/80 backdrop-blur-md py-12">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white">
                  Junaid<span className="text-primary">.eth</span>
                </span>
                <div className="text-[10px] text-muted-foreground font-mono">FULL STACK DEVS</div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building the decentralized future, one smart contract at a time.
            </p>
            <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
              <Box className="w-4 h-4 text-primary" />
              <span>Block height verified</span>
              <span className="text-primary">•</span>
              <span>0x7F3A...B2C9</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
              <LinkIcon className="w-4 h-4 text-primary" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors" />
                    /{link.name.toLowerCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-secondary" />
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary/30 transition-all group"
                >
                  <social.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="font-mono">© {currentYear} JunaidCD. All systems operational.</span>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              Made with 
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              </motion.span>
              for Web3
            </span>
            <span className="text-white/10">|</span>
            <span className="font-mono text-xs">v2.0.0</span>
          </div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/20 hidden lg:block" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-secondary/20 hidden lg:block" />
      </div>
    </footer>
  );
}
