import { Github, Terminal, Twitter, Linkedin, Hash, ExternalLink, FileCode, Cpu, Clock, Wifi } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [systemLoad, setSystemLoad] = useState(0);
  const [memory, setMemory] = useState(0);

  // Simulate system stats
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemLoad(Math.floor(Math.random() * 30) + 10);
      setMemory(Math.floor(Math.random() * 20) + 60);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Achievements", href: "/achievements" },
    { name: "Contact", href: "/contact" },
  ];

  const technicalLinks = [
    { name: "GitHub", href: "https://github.com/JunaidCD", icon: Github },
    { name: "X", href: "https://x.com/JunaidMollah5", icon: Twitter },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/junaid-mollah-a59150319/", icon: Linkedin },
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/JunaidCD" },
    { name: "X", icon: Twitter, href: "https://x.com/JunaidMollah5" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/junaid-mollah-a59150319/" },
  ];

  return (
    <footer className="relative border-t border-[#00ff41]/20 bg-black/80 backdrop-blur-sm py-4">
      {/* Terminal status bar */}
      <div className="bg-[#00ff41]/5 border-b border-[#00ff41]/10 px-4 py-1 mb-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[10px] font-mono text-[#00ff41]/70">
          <div className="flex items-center gap-4">
            <span>
              <Wifi className="w-3 h-3 inline mr-1" />
              CONNECTED
            </span>
            <span>
              <Cpu className="w-3 h-3 inline mr-1" />
              Load: {systemLoad}%
            </span>
            <span>
              MEM: {memory}MB
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>
              <Clock className="w-3 h-3 inline mr-1" />
              {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })}
            </span>
            <span>v1.0.0</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-6 h-6 rounded-sm bg-[#00ff41]/10 border border-[#00ff41]/30 flex items-center justify-center">
                <Terminal className="w-3 h-3 text-[#00ff41]" />
              </div>
              <span className="font-mono text-xs text-white">
                Junaid<span className="text-[#00ff41]">.terminal</span>
              </span>
            </Link>
            <span className="text-[#00ff41]/30">|</span>
            <span className="text-[10px] text-[#00ff41]/50 font-mono">© {currentYear} root@portfolio</span>
          </div>

          {/* Technical Links */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-[10px] font-mono text-[#00ff41]/50">
              <Hash className="w-3 h-3" />
              <span>NET: mainnet</span>
            </div>
            {technicalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-[10px] font-mono text-[#00ff41]/60 hover:text-[#00ff41] transition-colors"
              >
                <link.icon className="w-3 h-3" />
                {link.name}
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-2">
            {quickLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="text-[10px] font-mono text-[#00ff41]/60 hover:text-[#00ff41] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-1">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 rounded-sm bg-black/50 border border-[#00ff41]/20 flex items-center justify-center text-[#00ff41]/60 hover:text-[#00ff41] hover:border-[#00ff41]/40 transition-all"
              >
                <social.icon className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>

        {/* System status bar */}
        <div className="mt-3 pt-3 border-t border-[#00ff41]/10 flex items-center justify-center gap-6">
          <div className="text-[10px] font-mono text-[#00ff41]/50">
            <span className="text-emerald-400">●</span> SYSTEM: ONLINE
          </div>
          <div className="text-[10px] font-mono text-[#00ff41]/50">
            <span className="text-[#00ff41]">●</span> RPC: CONNECTED
          </div>
          <div className="text-[10px] font-mono text-[#00ff41]/50">
            NET: ETH_MAINNET
          </div>
          <div className="text-[10px] font-mono text-[#00ff41]/50">
            Gas: 25 gwei
          </div>
        </div>
      </div>
    </footer>
  );
}
