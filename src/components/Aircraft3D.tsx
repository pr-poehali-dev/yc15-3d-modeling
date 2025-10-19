import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';

const Aircraft3D = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - lastPos.current.x;
    const deltaY = e.clientY - lastPos.current.y;
    
    setRotation(prev => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y + deltaX * 0.5
    }));
    
    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mouseup', handleMouseUp);
      return () => document.removeEventListener('mouseup', handleMouseUp);
    }
  }, [isDragging]);

  return (
    <Card className="relative w-full h-[600px] bg-card/50 backdrop-blur-sm overflow-hidden tech-border">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="absolute top-4 left-4 z-10">
        <div className="text-xs font-mono text-primary space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
            <span>SYSTEM ACTIVE</span>
          </div>
          <div className="text-muted-foreground">
            ROT X: {rotation.x.toFixed(1)}° Y: {rotation.y.toFixed(1)}°
          </div>
        </div>
      </div>

      <div className="absolute top-4 right-4 z-10 text-xs font-mono text-muted-foreground">
        <div className="bg-card/80 backdrop-blur-sm px-3 py-2 rounded border border-primary/30">
          YC-15 PROTOTYPE
        </div>
      </div>

      <div
        className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        style={{ perspective: '1000px' }}
      >
        <div
          className="transition-transform duration-100"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: 'preserve-3d'
          }}
        >
          <svg width="500" height="300" viewBox="0 0 500 300" className="drop-shadow-2xl">
            <defs>
              <linearGradient id="fuselageGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#0EA5E9', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#1A1F2C', stopOpacity: 0.9 }} />
              </linearGradient>
              <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#0EA5E9', stopOpacity: 0.6 }} />
                <stop offset="50%" style={{ stopColor: '#F97316', stopOpacity: 0.4 }} />
                <stop offset="100%" style={{ stopColor: '#0EA5E9', stopOpacity: 0.6 }} />
              </linearGradient>
            </defs>

            <path
              d="M 100 150 L 400 150 L 420 140 L 420 160 Z"
              fill="url(#fuselageGrad)"
              stroke="#0EA5E9"
              strokeWidth="2"
            />

            <ellipse cx="400" cy="150" rx="20" ry="15" fill="url(#fuselageGrad)" stroke="#0EA5E9" strokeWidth="2" />

            <polygon
              points="150,150 350,50 350,80 200,150"
              fill="url(#wingGrad)"
              stroke="#0EA5E9"
              strokeWidth="1.5"
              opacity="0.9"
            />
            <polygon
              points="150,150 350,250 350,220 200,150"
              fill="url(#wingGrad)"
              stroke="#0EA5E9"
              strokeWidth="1.5"
              opacity="0.9"
            />

            <path
              d="M 300 150 L 300 90 L 320 70 L 320 90"
              fill="url(#fuselageGrad)"
              stroke="#0EA5E9"
              strokeWidth="1.5"
            />

            <ellipse cx="180" cy="140" rx="25" ry="35" fill="#F97316" opacity="0.6" />
            <ellipse cx="180" cy="160" rx="25" ry="35" fill="#F97316" opacity="0.6" />
            <circle cx="180" cy="140" r="15" fill="#1A1F2C" opacity="0.8" />
            <circle cx="180" cy="160" r="15" fill="#1A1F2C" opacity="0.8" />

            <line x1="100" y1="150" x2="420" y2="150" stroke="#0EA5E9" strokeWidth="0.5" opacity="0.3" strokeDasharray="5,5" />
            <line x1="250" y1="0" x2="250" y2="300" stroke="#0EA5E9" strokeWidth="0.5" opacity="0.3" strokeDasharray="5,5" />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 text-center text-xs font-mono text-muted-foreground">
        <div className="inline-block bg-card/80 backdrop-blur-sm px-4 py-2 rounded border border-primary/30">
          Drag to rotate • Interactive 3D Model
        </div>
      </div>
    </Card>
  );
};

export default Aircraft3D;
