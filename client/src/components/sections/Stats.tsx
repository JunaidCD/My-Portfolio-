import { Reveal } from "../Reveal";
import { useGithubUser } from "../../hooks/use-github";
import { motion } from "framer-motion";

export function Stats() {
  const { data: user } = useGithubUser();

  const stats = [
    { label: "Public Repositories", value: user?.public_repos || 0, color: "text-primary" },
    { label: "Followers", value: user?.followers || 0, color: "text-secondary" },
    { label: "Network Connections", value: user?.following || 0, color: "text-accent" },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Inner glowing effects */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[60px]" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/20 rounded-full blur-[60px]" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center relative z-10">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.2}>
                <div className="flex flex-col items-center py-4 md:py-0">
                  <motion.span 
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.2 + (i * 0.1) }}
                    className={`text-5xl lg:text-7xl font-display font-bold ${stat.color} mb-2`}
                    style={{ textShadow: `0 0 20px currentColor` }}
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-sm uppercase tracking-widest text-muted-foreground font-mono">
                    {stat.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
