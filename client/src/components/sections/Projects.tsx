import { Reveal } from "../Reveal";
import { useGithubRepos } from "../../hooks/use-github";
import { Star, GitFork, ExternalLink, FolderGit2, ArrowRight } from "lucide-react";

export function Projects() {
  const { data: repos, isLoading, isError } = useGithubRepos();

  return (
    <section id="projects" className="py-24 relative border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-sm font-mono text-secondary mb-2 tracking-widest uppercase">03. Deployed Contracts</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold">Featured <span className="text-glow-purple text-secondary">Projects</span></h3>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-transparent mt-6 rounded-full" />
          </div>
        </Reveal>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="glass-card p-6 rounded-2xl h-64 animate-pulse bg-white/5" />
            ))}
          </div>
        ) : isError ? (
           <div className="text-center text-red-400 py-10 glass-card rounded-2xl">
             Failed to load repository data. Connection to GitHub API severed.
           </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos?.map((repo, index) => (
              <Reveal key={repo.id} delay={index * 0.1}>
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="block h-full"
                >
                  <div className="glass-card h-full p-6 rounded-2xl flex flex-col group relative overflow-hidden">
                    {/* Hover gradient effect */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/0 via-primary/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-4">
                        <FolderGit2 className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                        {repo.name}
                      </h4>
                      
                      <p className="text-sm text-muted-foreground flex-grow mb-6 line-clamp-3">
                        {repo.description || "No description provided for this repository."}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs font-mono mt-auto pt-4 border-t border-white/10">
                        <span className="flex items-center gap-1 text-accent">
                          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                          {repo.language || "Solidity"}
                        </span>
                        
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Star className="w-3.5 h-3.5" />
                            {repo.stargazers_count}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        )}
        
        <Reveal delay={0.4}>
          <div className="mt-12 text-center">
            <a 
              href="https://github.com/JunaidCD" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
            >
              View full archive on GitHub <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
