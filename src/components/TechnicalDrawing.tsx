import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface TechnicalDrawingProps {
  title: string;
  viewType: 'side' | 'top' | 'front';
}

const TechnicalDrawing = ({ title, viewType }: TechnicalDrawingProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  const downloadSVG = () => {
    if (!svgRef.current) return;
    
    const svgData = new XMLSerializer().serializeToString(svgRef.current);
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `YC-15_${viewType}_view.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const renderSideView = () => (
    <svg ref={svgRef} width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          {`
            .gost-line { stroke: #000; stroke-width: 1.5; fill: none; }
            .gost-thin { stroke: #000; stroke-width: 0.5; fill: none; }
            .gost-dash { stroke: #000; stroke-width: 0.7; fill: none; stroke-dasharray: 10,5; }
            .gost-center { stroke: #000; stroke-width: 0.5; fill: none; stroke-dasharray: 20,5,5,5; }
            .gost-text { font-family: 'GOST type A', Arial; font-size: 14px; fill: #000; }
            .gost-title { font-family: 'GOST type A', Arial; font-size: 18px; fill: #000; font-weight: bold; }
            .dimension-line { stroke: #000; stroke-width: 0.5; fill: none; }
            .arrow { fill: #000; }
          `}
        </style>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" className="arrow" />
        </marker>
      </defs>

      <rect width="800" height="600" fill="#fff" stroke="#000" strokeWidth="2"/>
      
      <rect x="10" y="10" width="180" height="50" stroke="#000" strokeWidth="1" fill="none"/>
      <text x="100" y="30" className="gost-title" textAnchor="middle">YC-15</text>
      <text x="100" y="48" className="gost-text" textAnchor="middle">ВИД СБОКУ</text>

      <g transform="translate(150, 250)">
        <line x1="-50" y1="0" x2="550" y2="0" className="gost-center"/>
        
        <path d="M 0 0 L 450 0 L 480 -8 L 480 8 L 450 0" className="gost-line"/>
        
        <ellipse cx="450" cy="0" rx="30" ry="15" className="gost-line"/>
        
        <path d="M 50 0 L 250 -100 L 250 -85 L 100 0" className="gost-line"/>
        
        <path d="M 250 0 L 250 -75 L 275 -95 L 275 -75" className="gost-line"/>
        
        <ellipse cx="100" cy="-5" rx="30" ry="45" className="gost-line"/>
        <circle cx="100" cy="-5" r="20" className="gost-line"/>
        
        <line x1="100" y1="-50" x2="100" y2="40" className="gost-center"/>
        <line x1="250" y1="-100" x2="250" y2="20" className="gost-center"/>
        
        <line x1="0" y1="80" x2="450" y2="80" className="dimension-line" markerEnd="url(#arrow)" markerStart="url(#arrow)"/>
        <text x="225" y="100" className="gost-text" textAnchor="middle">38700</text>
        
        <line x1="500" y1="0" x2="500" y2="-95" className="dimension-line" markerEnd="url(#arrow)" markerStart="url(#arrow)"/>
        <text x="520" y="-45" className="gost-text">14800</text>
      </g>

      <rect x="10" y="540" width="780" height="50" stroke="#000" strokeWidth="1" fill="none"/>
      <text x="20" y="560" className="gost-text">Масштаб: 1:100</text>
      <text x="20" y="580" className="gost-text">Размеры в мм</text>
      <text x="700" y="560" className="gost-text">Лист 1</text>
      <text x="700" y="580" className="gost-text">McDonnell Douglas</text>
    </svg>
  );

  const renderTopView = () => (
    <svg ref={svgRef} width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          {`
            .gost-line { stroke: #000; stroke-width: 1.5; fill: none; }
            .gost-thin { stroke: #000; stroke-width: 0.5; fill: none; }
            .gost-dash { stroke: #000; stroke-width: 0.7; fill: none; stroke-dasharray: 10,5; }
            .gost-center { stroke: #000; stroke-width: 0.5; fill: none; stroke-dasharray: 20,5,5,5; }
            .gost-text { font-family: 'GOST type A', Arial; font-size: 14px; fill: #000; }
            .gost-title { font-family: 'GOST type A', Arial; font-size: 18px; fill: #000; font-weight: bold; }
            .dimension-line { stroke: #000; stroke-width: 0.5; fill: none; }
            .arrow { fill: #000; }
          `}
        </style>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" className="arrow" />
        </marker>
      </defs>

      <rect width="800" height="600" fill="#fff" stroke="#000" strokeWidth="2"/>
      
      <rect x="10" y="10" width="180" height="50" stroke="#000" strokeWidth="1" fill="none"/>
      <text x="100" y="30" className="gost-title" textAnchor="middle">YC-15</text>
      <text x="100" y="48" className="gost-text" textAnchor="middle">ВИД СВЕРХУ</text>

      <g transform="translate(400, 150)">
        <line x1="0" y1="-50" x2="0" y2="400" className="gost-center"/>
        
        <rect x="-30" y="0" width="60" height="350" className="gost-line"/>
        
        <polygon points="-30,100 -250,130 -250,150 -30,125" className="gost-line"/>
        <polygon points="30,100 250,130 250,150 30,125" className="gost-line"/>
        
        <rect x="-50" y="150" width="50" height="40" className="gost-line"/>
        <rect x="0" y="150" width="50" height="40" className="gost-line"/>
        
        <ellipse cx="0" cy="330" rx="15" ry="30" className="gost-line"/>
        
        <line x1="-250" y1="140" x2="250" y2="140" className="dimension-line" markerEnd="url(#arrow)" markerStart="url(#arrow)"/>
        <text x="0" y="130" className="gost-text" textAnchor="middle">33500</text>
        
        <line x1="280" y1="0" x2="280" y2="350" className="dimension-line" markerEnd="url(#arrow)" markerStart="url(#arrow)"/>
        <text x="300" y="180" className="gost-text">38700</text>
      </g>

      <rect x="10" y="540" width="780" height="50" stroke="#000" strokeWidth="1" fill="none"/>
      <text x="20" y="560" className="gost-text">Масштаб: 1:100</text>
      <text x="20" y="580" className="gost-text">Размеры в мм</text>
      <text x="700" y="560" className="gost-text">Лист 2</text>
      <text x="700" y="580" className="gost-text">McDonnell Douglas</text>
    </svg>
  );

  const renderFrontView = () => (
    <svg ref={svgRef} width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          {`
            .gost-line { stroke: #000; stroke-width: 1.5; fill: none; }
            .gost-thin { stroke: #000; stroke-width: 0.5; fill: none; }
            .gost-dash { stroke: #000; stroke-width: 0.7; fill: none; stroke-dasharray: 10,5; }
            .gost-center { stroke: #000; stroke-width: 0.5; fill: none; stroke-dasharray: 20,5,5,5; }
            .gost-text { font-family: 'GOST type A', Arial; font-size: 14px; fill: #000; }
            .gost-title { font-family: 'GOST type A', Arial; font-size: 18px; fill: #000; font-weight: bold; }
            .dimension-line { stroke: #000; stroke-width: 0.5; fill: none; }
            .arrow { fill: #000; }
          `}
        </style>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" className="arrow" />
        </marker>
      </defs>

      <rect width="800" height="600" fill="#fff" stroke="#000" strokeWidth="2"/>
      
      <rect x="10" y="10" width="180" height="50" stroke="#000" strokeWidth="1" fill="none"/>
      <text x="100" y="30" className="gost-title" textAnchor="middle">YC-15</text>
      <text x="100" y="48" className="gost-text" textAnchor="middle">ВИД СПЕРЕДИ</text>

      <g transform="translate(400, 300)">
        <line x1="-300" y1="0" x2="300" y2="0" className="gost-center"/>
        <line x1="0" y1="-150" x2="0" y2="100" className="gost-center"/>
        
        <ellipse cx="0" cy="0" rx="25" ry="35" className="gost-line"/>
        
        <line x1="0" y1="0" x2="-200" y2="-40" className="gost-line"/>
        <line x1="0" y1="0" x2="200" y2="-40" className="gost-line"/>
        
        <rect x="-210" y="-50" width="20" height="30" rx="3" className="gost-line"/>
        <rect x="190" y="-50" width="20" height="30" rx="3" className="gost-line"/>
        <circle cx="-200" cy="-35" r="10" className="gost-line"/>
        <circle cx="200" cy="-35" r="10" className="gost-line"/>
        
        <path d="M 0 0 L 0 -80 L 30 -105 L 30 -85" className="gost-line"/>
        <path d="M 0 0 L 0 -80 L -30 -105 L -30 -85" className="gost-line"/>
        
        <rect x="-40" y="35" width="80" height="15" rx="2" className="gost-line"/>
        
        <line x1="-200" y1="-40" x2="200" y2="-40" className="dimension-line" markerEnd="url(#arrow)" markerStart="url(#arrow)"/>
        <text x="0" y="-55" className="gost-text" textAnchor="middle">33500</text>
        
        <line x1="230" y1="0" x2="230" y2="-105" className="dimension-line" markerEnd="url(#arrow)" markerStart="url(#arrow)"/>
        <text x="250" y="-50" className="gost-text">14800</text>
      </g>

      <rect x="10" y="540" width="780" height="50" stroke="#000" strokeWidth="1" fill="none"/>
      <text x="20" y="560" className="gost-text">Масштаб: 1:100</text>
      <text x="20" y="580" className="gost-text">Размеры в мм</text>
      <text x="700" y="560" className="gost-text">Лист 3</text>
      <text x="700" y="580" className="gost-text">McDonnell Douglas</text>
    </svg>
  );

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm tech-border hover:bg-card/70 transition-all duration-300">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-mono text-primary">{title}</h3>
          <Button onClick={downloadSVG} size="sm" variant="outline" className="text-xs font-mono">
            <Icon name="Download" size={14} className="mr-2" />
            SVG
          </Button>
        </div>
        
        <div className="bg-white rounded p-4 overflow-auto">
          {viewType === 'side' && renderSideView()}
          {viewType === 'top' && renderTopView()}
          {viewType === 'front' && renderFrontView()}
        </div>
        
        <div className="text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-2">
            <Icon name="FileCheck" size={12} />
            Формат по ГОСТ • Готово для T-FLEX
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TechnicalDrawing;
