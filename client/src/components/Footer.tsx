import { Github, Terminal } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-background/80 backdrop-blur-md py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2 text-muted-foreground">
          <Terminal className="w-4 h-4 text-primary" />
          <span className="font-mono text-sm">© {currentYear} JunaidCD. Block height verified.</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground font-mono">
          <a href="#about" className="hover:text-primary transition-colors">/about</a>
          <a href="#projects" className="hover:text-primary transition-colors">/projects</a>
          <a href="#contact" className="hover:text-primary transition-colors">/contact</a>
        </div>

        <a 
          href="https://github.com/JunaidCD" 
          target="_blank" 
          rel="noreferrer"
          className="text-muted-foreground hover:text-white transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>

      </div>
    </footer>
  );
}
