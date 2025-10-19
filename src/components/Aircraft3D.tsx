import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Aircraft3D = () => {
  const [rotation, setRotation] = useState({ x: -15, y: 25 });
  const [isDragging, setIsDragging] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const svgRef = useRef<SVGSVGElement>(null);

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

  const downloadSVG = () => {
    if (!svgRef.current) return;
    
    const svgData = new XMLSerializer().serializeToString(svgRef.current);
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'YC-15_isometric_view.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Card className="relative w-full h-[700px] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden border-2 border-gray-300">
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)',
        backgroundSize: '20px 20px'
      }} />
      
      <div className="absolute top-4 left-4 z-10">
        <div className="text-xs font-mono text-gray-700 space-y-1 bg-white/80 px-3 py-2 rounded border border-gray-300">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="font-semibold">3D VIEW</span>
          </div>
          <div className="text-gray-600">
            X: {rotation.x.toFixed(1)}° Y: {rotation.y.toFixed(1)}°
          </div>
        </div>
      </div>

      <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
        <Button onClick={downloadSVG} size="sm" variant="outline" className="text-xs font-mono bg-white">
          <Icon name="Download" size={14} className="mr-2" />
          SVG
        </Button>
        <div className="bg-white px-3 py-2 rounded border border-gray-300 text-xs font-mono text-gray-700 font-semibold">
          YC-15 PROTOTYPE
        </div>
      </div>

      <div
        className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        style={{ perspective: '1200px' }}
      >
        <div
          className="transition-transform duration-100"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: 'preserve-3d'
          }}
        >
          <svg ref={svgRef} width="700" height="500" viewBox="0 0 700 500" className="drop-shadow-2xl">
            <defs>
              <linearGradient id="fuselageLight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#f5f5f5', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#e8e8e8', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#d0d0d0', stopOpacity: 1 }} />
              </linearGradient>
              
              <linearGradient id="fuselageDark" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#c8c8c8', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#a0a0a0', stopOpacity: 1 }} />
              </linearGradient>
              
              <linearGradient id="wingTop" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#e0e0e0', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#b8b8b8', stopOpacity: 1 }} />
              </linearGradient>
              
              <linearGradient id="wingBottom" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#a8a8a8', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#c8c8c8', stopOpacity: 1 }} />
              </linearGradient>
              
              <filter id="shadow">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                <feOffset dx="2" dy="2" result="offsetblur"/>
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.3"/>
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              
              <radialGradient id="engineGrad">
                <stop offset="0%" style={{ stopColor: '#505050', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#2a2a2a', stopOpacity: 1 }} />
              </radialGradient>
            </defs>

            <g filter="url(#shadow)">
              <path
                d="M 80 250 L 90 245 L 105 242 L 125 240 L 145 240"
                fill="url(#fuselageLight)"
                stroke="#888"
                strokeWidth="1"
              />
              
              <path
                d="M 145 240 L 470 230 L 510 228 L 545 228 L 575 230 L 600 235"
                fill="url(#fuselageLight)"
                stroke="#888"
                strokeWidth="1"
              />
              <path
                d="M 145 250 L 470 258 L 510 262 L 545 264 L 575 264 L 600 262"
                fill="url(#fuselageDark)"
                stroke="#777"
                strokeWidth="1"
              />
              
              <line x1="145" y1="240" x2="145" y2="250" stroke="#888" strokeWidth="1"/>
              <line x1="80" y1="250" x2="145" y2="250" fill="url(#fuselageDark)" stroke="#777" strokeWidth="1"/>
              
              <ellipse cx="600" cy="248" rx="8" ry="14" fill="url(#fuselageLight)" stroke="#888" strokeWidth="1"/>
              
              <rect x="200" y="234" width="8" height="8" rx="1" fill="#404040" stroke="#333" strokeWidth="0.5"/>
              <rect x="220" y="234" width="8" height="8" rx="1" fill="#404040" stroke="#333" strokeWidth="0.5"/>
              <rect x="240" y="234" width="8" height="8" rx="1" fill="#404040" stroke="#333" strokeWidth="0.5"/>
              <rect x="260" y="234" width="8" height="8" rx="1" fill="#404040" stroke="#333" strokeWidth="0.5"/>
              
              <rect x="340" y="233" width="10" height="10" rx="1" fill="#303030" stroke="#222" strokeWidth="0.5"/>
              <rect x="360" y="233" width="10" height="10" rx="1" fill="#303030" stroke="#222" strokeWidth="0.5"/>
              
              <path
                d="M 145 240 L 440 120 L 460 115 L 475 115"
                fill="url(#wingTop)"
                stroke="#888"
                strokeWidth="1"
              />
              <path
                d="M 475 115 L 485 116 L 492 120 L 495 128"
                fill="url(#wingTop)"
                stroke="#888"
                strokeWidth="1"
              />
              <path
                d="M 495 128 L 497 145 L 497 200 L 200 250"
                fill="url(#wingTop)"
                stroke="#888"
                strokeWidth="1"
              />
              <line x1="200" y1="250" x2="145" y2="250" stroke="#888" strokeWidth="1"/>
              
              <line x1="160" y1="246" x2="455" y2="126" stroke="#999" strokeWidth="0.3" opacity="0.5"/>
              <line x1="180" y1="248" x2="470" y2="130" stroke="#999" strokeWidth="0.3" opacity="0.5"/>
              <line x1="220" y1="249" x2="488" y2="140" stroke="#999" strokeWidth="0.3" opacity="0.5"/>
              
              <ellipse cx="245" cy="252" rx="42" ry="58" fill="url(#engineGrad)" stroke="#555" strokeWidth="1.5"/>
              <ellipse cx="245" cy="252" rx="32" ry="45" fill="#2a2a2a" stroke="#444" strokeWidth="1"/>
              <circle cx="245" cy="252" r="12" fill="#1a1a1a" stroke="#333" strokeWidth="0.5"/>
              
              <path d="M 255 248 L 262 246 L 267 243" stroke="#555" strokeWidth="0.8" fill="none"/>
              <path d="M 255 256 L 262 258 L 267 261" stroke="#555" strokeWidth="0.8" fill="none"/>
              
              <path
                d="M 440 245 L 440 180 L 455 155 L 470 135 L 480 125"
                fill="url(#fuselageLight)"
                stroke="#888"
                strokeWidth="1"
              />
              <path
                d="M 480 125 L 492 118 L 502 116 L 512 116"
                fill="url(#fuselageLight)"
                stroke="#888"
                strokeWidth="1"
              />
              <path
                d="M 512 116 L 522 117 L 528 122 L 530 130"
                fill="url(#fuselageLight)"
                stroke="#888"
                strokeWidth="1"
              />
              <line x1="530" y1="130" x2="530" y2="165" stroke="#888" strokeWidth="1"/>
              
              <line x1="450" y1="170" x2="520" y2="140" stroke="#999" strokeWidth="0.3" opacity="0.5"/>
              
              <rect x="510" y="240" width="35" height="22" rx="2" fill="url(#fuselageDark)" stroke="#777" strokeWidth="1"/>
              <line x1="515" y1="251" x2="540" y2="251" stroke="#888" strokeWidth="0.5"/>
              
              <ellipse cx="175" cy="260" rx="12" ry="8" fill="#2a2a2a" stroke="#555" strokeWidth="1"/>
              <rect x="170" y="260" width="10" height="18" fill="#333" stroke="#555" strokeWidth="1"/>
              <circle cx="175" cy="278" r="4" fill="#1a1a1a" stroke="#444" strokeWidth="0.5"/>
              
              <ellipse cx="320" cy="262" rx="12" ry="8" fill="#2a2a2a" stroke="#555" strokeWidth="1"/>
              <rect x="315" y="262" width="10" height="18" fill="#333" stroke="#555" strokeWidth="1"/>
              <circle cx="320" cy="280" r="4" fill="#1a1a1a" stroke="#444" strokeWidth="0.5"/>
              
              <ellipse cx="565" cy="265" rx="12" ry="8" fill="#2a2a2a" stroke="#555" strokeWidth="1"/>
              <rect x="560" y="265" width="10" height="16" fill="#333" stroke="#555" strokeWidth="1"/>
              <circle cx="565" cy="281" r="4" fill="#1a1a1a" stroke="#444" strokeWidth="0.5"/>
              
              <line x1="150" y1="240" x2="150" y2="250" stroke="#aaa" strokeWidth="0.3"/>
              <line x1="180" y1="238" x2="180" y2="251" stroke="#aaa" strokeWidth="0.3"/>
              <line x1="220" y1="237" x2="220" y2="252" stroke="#aaa" strokeWidth="0.3"/>
              <line x1="280" y1="235" x2="280" y2="254" stroke="#aaa" strokeWidth="0.3"/>
              <line x1="360" y1="233" x2="360" y2="256" stroke="#aaa" strokeWidth="0.3"/>
              <line x1="440" y1="230" x2="440" y2="258" stroke="#aaa" strokeWidth="0.3"/>
              <line x1="520" y1="228" x2="520" y2="263" stroke="#aaa" strokeWidth="0.3"/>
            </g>
          </svg>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 text-center text-xs font-mono text-gray-700">
        <div className="inline-block bg-white/90 px-4 py-2 rounded border border-gray-300">
          Drag to rotate • CAD-style 3D Model
        </div>
      </div>
    </Card>
  );
};

export default Aircraft3D;
