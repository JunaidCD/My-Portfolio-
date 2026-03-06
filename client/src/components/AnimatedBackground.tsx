import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const meshRef = useRef<HTMLCanvasElement>(null);

  // Main particle network animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Blockchain nodes with different types
    const nodes: { 
      x: number; y: number; vx: number; vy: number; 
      size: number; type: 'validator' | 'full-node' | 'light-node';
      connections: number;
    }[] = [];
    const numNodes = Math.min(Math.floor((width * height) / 12000), 80);

    const nodeColors = {
      'validator': '#00f0ff',
      'full-node': '#8b5cf6',
      'light-node': '#06ffa5'
    };

    for (let i = 0; i < numNodes; i++) {
      const types: ('validator' | 'full-node' | 'light-node')[] = ['validator', 'full-node', 'light-node'];
      const type = types[Math.floor(Math.random() * types.length)];
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: type === 'validator' ? 3 : type === 'full-node' ? 2 : 1.5,
        type,
        connections: 0
      });
    }

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Reset connection counts
      nodes.forEach(n => n.connections = 0);

      // Draw connections first (behind nodes)
      for (let i = 0; i < numNodes; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        // Bounce with momentum preservation
        if (node.x < 0 || node.x > width) {
          node.vx *= -1;
          node.x = Math.max(0, Math.min(width, node.x));
        }
        if (node.y < 0 || node.y > height) {
          node.vy *= -1;
          node.y = Math.max(0, Math.min(height, node.y));
        }

        // Draw connections
        for (let j = i + 1; j < numNodes; j++) {
          const node2 = nodes[j];
          const dx = node.x - node2.x;
          const dy = node.y - node2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.15;
            const gradient = ctx.createLinearGradient(node.x, node.y, node2.x, node2.y);
            gradient.addColorStop(0, `${nodeColors[node.type]}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
            gradient.addColorStop(1, `${nodeColors[node2.type]}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.stroke();
            node.connections++;
            node2.connections++;
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const color = nodeColors[node.type];
        
        // Glow effect for validators
        if (node.type === 'validator') {
          const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.size * 4);
          glow.addColorStop(0, `${color}40`);
          glow.addColorStop(1, `${color}00`);
          ctx.beginPath();
          ctx.fillStyle = glow;
          ctx.arc(node.x, node.y, node.size * 4, 0, Math.PI * 2);
          ctx.fill();
        }

        // Node core
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();

        // Pulse for validators
        if (node.type === 'validator' && Math.random() > 0.98) {
          ctx.beginPath();
          ctx.strokeStyle = `${color}60`;
          ctx.lineWidth = 1;
          ctx.arc(node.x, node.y, node.size * 3, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Mesh gradient canvas
  useEffect(() => {
    const canvas = meshRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mesh gradient orbs
    const orbs = [
      { x: width * 0.2, y: height * 0.3, r: 400, color: 'rgba(0, 240, 255, 0.08)' },
      { x: width * 0.8, y: height * 0.2, r: 500, color: 'rgba(139, 92, 246, 0.08)' },
      { x: width * 0.5, y: height * 0.7, r: 450, color: 'rgba(6, 255, 165, 0.06)' },
      { x: width * 0.1, y: height * 0.8, r: 350, color: 'rgba(168, 85, 247, 0.06)' },
      { x: width * 0.9, y: height * 0.6, r: 400, color: 'rgba(0, 240, 255, 0.05)' },
    ];

    let time = 0;
    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.005;

      for (const orb of orbs) {
        const offsetX = Math.sin(time + orb.x) * 30;
        const offsetY = Math.cos(time + orb.y) * 30;
        
        const gradient = ctx.createRadialGradient(
          orb.x + offsetX, orb.y + offsetY, 0,
          orb.x + offsetX, orb.y + offsetY, orb.r
        );
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background">
      {/* Mesh gradient layer */}
      <canvas ref={meshRef} className="absolute inset-0 w-full h-full" />
      
      {/* Animated aurora layer */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(ellipse 80% 50% at 20% 40%, rgba(0, 240, 255, 0.15) 0%, transparent 50%)',
            'radial-gradient(ellipse 80% 50% at 80% 40%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(ellipse 80% 50% at 50% 80%, rgba(6, 255, 165, 0.1) 0%, transparent 50%)',
            'radial-gradient(ellipse 80% 50% at 20% 40%, rgba(0, 240, 255, 0.15) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      {/* Large ambient orbs */}
      <motion.div 
        className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-full h-full rounded-full bg-primary/10 blur-[150px]" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full"
        animate={{
          x: [0, -40, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-full h-full rounded-full bg-secondary/10 blur-[180px]" />
      </motion.div>

      <motion.div 
        className="absolute top-[40%] right-[10%] w-[40%] h-[40%] rounded-full"
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-full h-full rounded-full bg-accent/8 blur-[120px]" />
      </motion.div>
      
      {/* Hexagonal grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Scan line effect */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        animate={{ y: ['-100%', '100%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      </motion.div>

      {/* Particle network canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50" />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-gradient opacity-50" 
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)'
        }}
      />
    </div>
  );
}
