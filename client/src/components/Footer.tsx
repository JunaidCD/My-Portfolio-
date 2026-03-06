import { Github, Terminal, Twitter, Linkedin, Hash, ExternalLink, FileCode, BookOpen } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Achievements", href: "/achievements" },
    { name: "Contact", href: "/contact" },
  ];

  const technicalLinks = [
    { name: "Etherscan", href: "#", icon: ExternalLink },
    { name: "GitHub", href: "https://github.com/JunaidCD", icon: Github },
    { name: "Docs", href: "#", icon: BookOpen },
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/JunaidCD" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/JunaidMollah5" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="relative border-t border-border bg-background/50 backdrop-blur-sm py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-7 h-7 rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Terminal className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="font-mono text-xs text-white">
                Junaid<span className="text-primary">.eth</span>
              </span>
            </Link>
            <span className="text-muted-foreground/30">|</span>
            <span className="text-[10px] text-muted-foreground font-mono">© {currentYear}</span>
          </div>

          {/* Technical Links */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground">
              <Hash className="w-3 h-3" />
              <span>Network: Ethereum</span>
            </div>
            {technicalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground hover:text-primary transition-colors"
              >
                <link.icon className="w-3 h-3" />
                {link.name}
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-3">
            {quickLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="text-[10px] font-mono text-muted-foreground hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-1.5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-sm bg-white/5 border border-border flex items-center justify-center text-muted-foreground hover:text-white hover:border-white/20 transition-all"
              >
                <social.icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Block height indicator */}
        <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-center gap-4">
          <div className="text-[10px] font-mono text-muted-foreground">
            <span className="text-primary">●</span> Latest Block: #18500432
          </div>
          <div className="text-[10px] font-mono text-muted-foreground">
            <span className="text-emerald-400">●</span> Network: Online
          </div>
          <div className="text-[10px] font-mono text-muted-foreground">
            Gas: 25 Gwei
          </div>
        </div>
      </div>
    </footer>
  );
}
