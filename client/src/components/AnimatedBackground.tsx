import { useEffect, useRef, useState } from 'react';

interface Block {
  x: number;
  y: number;
  number: number;
  size: number;
  txCount: number;
}

interface Transaction {
  id: string;
  from: string;
  to: string;
  value: string;
  hash: string;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const blockCounterRef = useRef(18500000);

  // Generate random address
  const generateAddress = () => {
    const chars = '0123456789abcdef';
    let addr = '0x';
    for (let i = 0; i < 40; i++) {
      addr += chars[Math.floor(Math.random() * 16)];
    }
    return addr;
  };

  // Generate random hash
  const generateHash = () => {
    const chars = '0123456789abcdef';
    let hash = '0x';
    for (let i = 0; i < 64; i++) {
      hash += chars[Math.floor(Math.random() * 16)];
    }
    return hash;
  };

  // Truncate address for display
  const truncateAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

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

    // Initialize blocks
    const initialBlocks: Block[] = [];
    for (let i = 0; i < 8; i++) {
      initialBlocks.push({
        x: Math.random() * width,
        y: Math.random() * height,
        number: Math.floor(Math.random() * 1000) + 18500000,
        size: Math.random() * 30 + 40,
        txCount: Math.floor(Math.random() * 200) + 50,
      });
    }
    setBlocks(initialBlocks);

    // Animation state
    let animationFrameId: number;
    let lastTxUpdate = 0;

    const render = (timestamp: number) => {
      ctx.fillStyle = 'rgba(5, 5, 10, 0.15)';
      ctx.fillRect(0, 0, width, height);

      // Draw grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      ctx.lineWidth = 0.5;
      
      const gridSize = 50;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and draw blocks
      setBlocks(prevBlocks => prevBlocks.map(block => ({
        ...block,
        y: block.y - 0.3,
        txCount: block.txCount + Math.random() > 0.9 ? 1 : 0,
      })).map(block => {
        if (block.y < -60) {
          return {
            ...block,
            y: height + 60,
            number: ++blockCounterRef.current,
            txCount: Math.floor(Math.random() * 200) + 50,
          };
        }
        return block;
      }));

      // Draw blocks
      setBlocks(prevBlocks => {
        prevBlocks.forEach(block => {
          // Block background
          ctx.fillStyle = 'rgba(0, 240, 255, 0.03)';
          ctx.strokeStyle = 'rgba(0, 240, 255, 0.15)';
          ctx.lineWidth = 1;
          
          ctx.beginPath();
          ctx.roundRect(block.x, block.y, block.size, block.size * 0.8, 2);
          ctx.fill();
          ctx.stroke();

          // Block number
          ctx.fillStyle = 'rgba(0, 240, 255, 0.6)';
          ctx.font = '9px "Fira Code", monospace';
          ctx.textAlign = 'center';
          ctx.fillText(`#${block.number.toLocaleString()}`, block.x + block.size / 2, block.y + block.size * 0.45);

          // TX count
          ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
          ctx.font = '8px "Fira Code", monospace';
          ctx.fillText(`${block.txCount} TXs`, block.x + block.size / 2, block.y + block.size * 0.65);
        });
        return prevBlocks;
      });

      // Update transactions periodically
      if (timestamp - lastTxUpdate > 2000) {
        const newTx: Transaction = {
          id: Math.random().toString(36).substring(7),
          from: generateAddress(),
          to: generateAddress(),
          value: (Math.random() * 10).toFixed(4),
          hash: generateHash(),
        };
        setTransactions(prev => [...prev.slice(-5), newTx]);
        lastTxUpdate = timestamp;
      }

      // Draw and animate transactions
      setTransactions(prev => {
        return prev.map((tx, index) => {
          const progress = index / prev.length;
          const y = height - (progress * height * 0.8) - 50;
          const opacity = Math.min(1, (index + 1) / 3) * 0.3;

          // Transaction line
          ctx.strokeStyle = `rgba(0, 240, 255, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.setLineDash([4, 4]);
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
          ctx.setLineDash([]);

          // Transaction markers
          const markerX = 30 + index * 80;
          
          // From address
          ctx.fillStyle = `rgba(0, 240, 255, ${opacity + 0.2})`;
          ctx.font = '8px "Fira Code", monospace';
          ctx.fillText(truncateAddress(tx.from), markerX, y - 5);
          
          // Arrow
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.fillText('→', markerX + 80, y - 5);
          
          // To address
          ctx.fillStyle = `rgba(0, 240, 255, ${opacity + 0.2})`;
          ctx.fillText(truncateAddress(tx.to), markerX + 95, y - 5);

          // Value
          ctx.fillStyle = `rgba(52, 211, 153, ${opacity + 0.2})`;
          ctx.fillText(`${tx.value} ETH`, markerX + 160, y - 5);

          return tx;
        });
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render(0);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      {/* Network status overlay */}
      <div className="absolute top-20 left-4 p-3 bg-card/80 border border-border rounded-sm backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
            Network Status
          </span>
        </div>
        <div className="text-xs font-mono text-muted-foreground">
          <span className="text-emerald-400">●</span> Connected
        </div>
      </div>

      {/* Block height display */}
      <div className="absolute top-20 right-4 p-3 bg-card/80 border border-border rounded-sm backdrop-blur-sm">
        <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
          Latest Block
        </div>
        <div className="text-lg font-mono text-primary">
          #{blockCounterRef.current.toLocaleString()}
        </div>
      </div>

      {/* Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(5, 5, 10, 0.4) 100%)'
        }}
      />
    </div>
  );
}
