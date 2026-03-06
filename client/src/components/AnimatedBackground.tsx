import { useEffect, useRef, useState } from 'react';

interface TerminalChar {
  x: number;
  y: number;
  char: string;
  speed: number;
  opacity: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [bootComplete, setBootComplete] = useState(false);
  const [bootLines, setBootLines] = useState<string[]>([]);
  const [terminalChars, setTerminalChars] = useState<TerminalChar[]>([]);
  
  // Boot sequence messages
  const bootMessages = [
    'BIOS Date 01/15/25 14:22:51 Ver: 08.00.15',
    'CPU: Ethereum Virtual Machine @ 3.2GHz',
    'Memory Test: 65536K OK',
    'Initializing filesystem...',
    'Loading DeFi kernel...',
    'Mounting protocol volumes...',
    'Establishing RPC connections...',
    'Syncing with mainnet...',
    'Loading smart contracts...',
    'Initializing gas optimizer...',
    'System ready.',
  ];

  // Generate matrix characters
  const generateTerminalChars = (width: number, height: number) => {
    const chars: TerminalChar[] = [];
    const columns = Math.floor(width / 20);
    
    for (let i = 0; i < columns; i++) {
      chars.push({
        x: i * 20 + 10,
        y: Math.random() * height,
        char: String.fromCharCode(33 + Math.floor(Math.random() * 94)),
        speed: 1 + Math.random() * 3,
        opacity: 0.3 + Math.random() * 0.5,
      });
    }
    return chars;
  };

  useEffect(() => {
    // Boot sequence animation
    let lineIndex = 0;
    const bootInterval = setInterval(() => {
      if (lineIndex < bootMessages.length) {
        setBootLines(prev => [...prev, bootMessages[lineIndex]]);
        lineIndex++;
      } else {
        clearInterval(bootInterval);
        setTimeout(() => setBootComplete(true), 500);
      }
    }, 150);

    return () => clearInterval(bootInterval);
  }, []);

  useEffect(() => {
    if (!bootComplete) return;

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

    // Initialize terminal characters
    setTerminalChars(generateTerminalChars(width, height));

    let animationFrameId: number;

    const render = (timestamp: number) => {
      // Semi-transparent black for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, width, height);

      // Draw terminal-style grid
      ctx.strokeStyle = 'rgba(0, 255, 65, 0.03)';
      ctx.lineWidth = 0.5;
      
      const gridSize = 30;
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

      // Update and draw terminal characters (matrix rain)
      setTerminalChars(prev => {
        return prev.map(char => {
          // Draw the character
          ctx.font = '14px "Fira Code", monospace';
          ctx.fillStyle = `rgba(0, 255, 65, ${char.opacity})`;
          ctx.fillText(char.char, char.x, char.y);

          // Update position
          let newY = char.y + char.speed;
          let newChar = char.char;
          let newOpacity = char.opacity;

          // Reset when off screen
          if (newY > height) {
            newY = -20;
            newChar = String.fromCharCode(33 + Math.floor(Math.random() * 94));
            newOpacity = 0.3 + Math.random() * 0.5;
          }

          // Randomly change character
          if (Math.random() > 0.95) {
            newChar = String.fromCharCode(33 + Math.floor(Math.random() * 94));
          }

          return {
            ...char,
            y: newY,
            char: newChar,
            opacity: newOpacity,
          };
        });
      });

      // Draw random terminal-like data streams
      if (Math.random() > 0.92) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const dataTypes = ['0x', '0b', '0o', 'TX:', 'BLOCK:', 'GAS:'];
        const dataType = dataTypes[Math.floor(Math.random() * dataTypes.length)];
        const value = Math.floor(Math.random() * 999999).toString(16);
        
        ctx.font = '10px "Fira Code", monospace';
        ctx.fillStyle = 'rgba(0, 255, 65, 0.4)';
        ctx.fillText(`${dataType}${value}`, x, y);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render(0);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [bootComplete]);

  const blockHeight = 18500432;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
      {/* Boot sequence overlay */}
      {!bootComplete && (
        <div className="absolute inset-0 bg-black z-50 flex items-start justify-start p-8 font-mono">
          <div className="text-primary text-sm">
            {bootLines.map((line, i) => (
              <div key={i} className="animate-boot" style={{ animationDelay: `${i * 0.05}s` }}>
                <span className="text-primary">{'>'}</span> {line}
                <span className="cursor-blink">_</span>
              </div>
            ))}
            {bootLines.length < bootMessages.length && (
              <div className="text-primary">
                <span className="text-primary">{'>'}</span> <span className="cursor-blink">_</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Matrix canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      {/* Scanline overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 1px, transparent 1px, transparent 2px)'
        }}
      />

      {/* Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%)'
        }}
      />

      {/* System status overlay */}
      {bootComplete && (
        <>
          <div className="absolute top-20 left-4 p-3 bg-black/80 border border-[#00ff41]/30 rounded-sm backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-[#00ff41] uppercase tracking-wider">
                System Status
              </span>
            </div>
            <div className="text-xs font-mono text-[#00ff41]/60">
              <span className="text-emerald-400">●</span> ONLINE
            </div>
          </div>

          <div className="absolute top-20 right-4 p-3 bg-black/80 border border-[#00ff41]/30 rounded-sm backdrop-blur-sm">
            <div className="text-xs font-mono text-[#00ff41]/60 uppercase tracking-wider mb-1">
              Block Height
            </div>
            <div className="text-lg font-mono text-[#00ff41]">
              {'#'}{blockHeight.toLocaleString()}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
