import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface TechnicalDrawingProps {
  title: string;
  viewType: 'side' | 'top' | 'front' | 'section';
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
    <svg ref={svgRef} width="900" height="600" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          {`
            .gost-line { stroke: #000; stroke-width: 1.5; fill: none; }
            .gost-thin { stroke: #000; stroke-width: 0.5; fill: none; }
            .gost-dash { stroke: #000; stroke-width: 0.7; fill: none; stroke-dasharray: 10,5; }
            .gost-center { stroke: #000; stroke-width: 0.5; fill: none; stroke-dasharray: 20,5,5,5; }
            .gost-text { font-family: 'GOST type A', Arial; font-size: 12px; fill: #000; }
            .gost-title { font-family: 'GOST type A', Arial; font-size: 16px; fill: #000; font-weight: bold; }
            .dimension-line { stroke: #000; stroke-width: 0.5; fill: none; }
            .arrow { fill: #000; }
          `}
        </style>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" className="arrow" />
        </marker>
      </defs>

      <rect width="900" height="600" fill="#fff" stroke="#000" strokeWidth="2"/>
      
      <rect x="10" y="10" width="180" height="50" stroke="#000" strokeWidth="1" fill="none"/>
      <text x="100" y="30" className="gost-title" textAnchor="middle">YC-15</text>
      <text x="100" y="48" className="gost-text" textAnchor="middle">ВИД СБОКУ</text>

      <g transform="translate(100, 280)">
        <line x1="-20" y1="0" x2="720" y2="0" className="gost-center"/>
        
        <path d="M 0 10 L 0 -10 L 25 -15 L 35 -18 L 45 -18 L 55 -18" className="gost-line"/>
        <line x1="0" y1="10" x2="55" y2="10" className="gost-line"/>
        
        <path d="M 55 -18 L 380 -18 L 420 -25 L 460 -30 L 500 -32 L 540 -32 L 580 -30 L 600 -25" className="gost-line"/>
        <path d="M 55 10 L 380 10 L 420 15 L 460 18 L 500 20 L 540 20 L 580 18 L 600 15" className="gost-line"/>
        
        <line x1="600" y1="-25" x2="600" y2="15" className="gost-line"/>
        <path d="M 600 -25 L 610 -22 L 618 -18 L 625 -12 L 630 -5 L 632 0 L 630 5 L 625 12 L 618 18 L 610 22 L 600 15" className="gost-line"/>
        
        <path d="M 55 -18 L 320 -120 L 330 -122 L 340 -122 L 350 -120 L 360 -115" className="gost-line"/>
        <path d="M 360 -115 L 365 -112 L 370 -107 L 372 -100 L 372 -50 L 100 10" className="gost-line"/>
        
        <ellipse cx="145" cy="-5" rx="38" ry="60" className="gost-line"/>
        <circle cx="145" cy="-5" r="28" className="gost-thin"/>
        <circle cx="145" cy="-5" r="8" className="gost-line"/>
        
        <path d="M 155 -10 L 165 -12 L 172 -15 L 175 -18" className="gost-thin"/>
        <path d="M 155 0 L 165 2 L 172 5 L 175 8" className="gost-thin"/>
        
        <path d="M 350 -5 L 350 -85 L 365 -105 L 380 -118 L 390 -123 L 398 -125" className="gost-line"/>
        <path d="M 398 -125 L 410 -125 L 420 -122 L 425 -118 L 428 -110" className="gost-line"/>
        <line x1="428" y1="-110" x2="428" y2="-80" className="gost-line"/>
        
        <rect x="420" y="-30" width="30" height="40" className="gost-thin"/>
        <line x1="425" y1="-30" x2="425" y2="10" className="gost-thin"/>
        <line x1="445" y1="-30" x2="445" y2="10" className="gost-thin"/>
        
        <line x1="145" y1="-65" x2="145" y2="55" className="gost-center"/>
        <line x1="350" y1="-125" x2="350" y2="30" className="gost-center"/>
        
        <line x1="0" y1="100" x2="630" y2="100" className="dimension-line" markerEnd="url(#arrow)" markerStart="url(#arrow)"/>
        <text x="315" y="120" className="gost-text" textAnchor="middle">38700</text>
        
        <line x1="670" y1="0" x2="670" y2="-125" className="dimension-line" markerEnd="url(#arrow)" markerStart="url(#arrow)"/>
        <text x="690" y="-60" className="gost-text">14800</text>
        
        <line x1="-50" y1="0" x2="-50" y2="-120" className="dimension-line" markerEnd="url(#arrow)" markerStart="url(#arrow)"/>
        <text x="-75" y="-60" className="gost-text" transform="rotate(-90 -75 -60)">15000</text>
        
        <line x1="55" y1="130" x2="360" y2="130" className="dimension-line" markerEnd="url(#arrow)" markerStart="url(#arrow)"/>
        <text x="207" y="148" className="gost-text" textAnchor="middle">22850</text>
      </g>

      <rect x="10" y="540" width="880" height="50" stroke="#000" strokeWidth="1" fill="none"/>
      <text x="20" y="560" className="gost-text">Масштаб: 1:100</text>
      <text x="20" y="580" className="gost-text">Размеры в мм</text>
      <text x="800" y="560" className="gost-text">Лист 1</text>
      <text x="750" y="580" className="gost-text">McDonnell Douglas</text>
    </svg>
  );

  const renderTopView = () => (
    <svg ref={svgRef} width="900" height="650" viewBox="0 0 900 650" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          {`
            .gost-line { stroke: #000; stroke-width: 1.5; fill: none; }
            .gost-thin { stroke: #000; stroke-width: 0.5; fill: none; }
            .gost-dash { stroke: #000; stroke-width: 0.7; fill: none; stroke-dasharray: 10,5; }
            .gost-center { stroke: #000; stroke-width: 0.5; fill: none; stroke-dasharray: 20,5,5,5; }
            .gost-text { font-family: 'GOST type A', Arial; font-size: 12px; fill: #000; }
            .gost-title { font-family: 'GOST type A', Arial; font-size: 16px; fill: #000; font-weight: bold; }
            .dimension-line { stroke: #000; stroke-width: 0.5; fill: none; }
            .arrow { fill: #000; }
          `}
        </style>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" className="arrow" />
        </marker>
      </defs>

      <rect width="900" height="650" fill="#fff" stroke="#000" strokeWidth="2"/>
      
      <rect x="10" y="10" width="180" height="50" stroke="#000" strokeWidth="1" fill="none"/>
      <text x="100" y="30" className="gost-title" textAnchor="middle">YC-15</text>
      <text x="100" y="48" className="gost-text" textAnchor="middle">ВИД СВЕРХУ</text>

      <g transform="translate(450, 130)">
        <line x1="0" y1="-30" x2="0" y2="450" className="gost-center"/>
        
        <path d="M -18 0 L -30 25 L -35 45 L -38 55" className="gost-line"/>
        <path d="M 18 0 L 30 25 L 35 45 L 38 55" className="gost-line"/>
        
        <line x1="-38" y1="55" x2="-38" y2="380" className="gost-line"/>
        <line x1="38" y1="55" x2="38" y2="380" className="gost-line"/>
        
        <path d="M -38 380 L -35 420 L -30 460 L -25 500 L -18 540 L -10 570 L 0 585" className="gost-line"/>
        <path d="M 38 380 L 35 420 L 30 460 L 25 500 L 18 540 L 10 570 L 0 585" className="gost-line"/>
        
        <path d="M -38 100 L -320 145 L -340 148 L -355 148" className="gost-line"/>
        <path d="M 38 100 L 320 145 L 340 148 L 355 148" className="gost-line"/>
        
        <path d="M -355 148 L -365 148 L -375 145 L -380 140" className="gost-line"/>
        <path d="M 355 148 L 365 148 L 375 145 L 380 140" className="gost-line"/>
        
        <path d="M -380 140 L -385 130 L -385 175 L -380 185 L -370 188 L -355 188" className="gost-line"/>
        <path d="M 380 140 L 385 130 L 385 175 L 380 185 L 370 188 L 355 188" className="gost-line"/>
        
        <path d="M -355 188 L -38 142" className="gost-line"/>
        <path d="M 355 188 L 38 142" className="gost-line"/>
        
        <rect x="-70" y="180" width="70" height="55" className="gost-line"/>
        <rect x="0" y="180" width="70" height="55" className="gost-line"/>
        
        <circle cx="-35" cy="207" r="22" className="gost-thin"/>
        <circle cx="35" cy="207" r="22" className="gost-thin"/>
        
        <ellipse cx="0" cy="565" rx="18" ry="35" className="gost-line"/>
        
        <line x1="-385" y1="168" x2="385" y2="168" className="dimension-line" markerEnd="url(#arrow)" markerStart="url(#arrow)"/>
        <text x="0" y="155" className="gost-text" textAnchor="middle">33500</text>
        
        <line x1="420" y1="0" x2="420" y2="585" className="dimension-line" markerEnd="url(#arrow)" markerStart="url(#arrow)"/>
        <text x="440" y="295" className="gost-text">38700</text>
        
        <line x1="-100" y1="100" x2="-100" y2="142" className="dimension-line" markerEnd="url(#arrow)" markerStart="url(#arrow)"/>
        <text x="-130" y="125" className="gost-text">5600</text>
      </g>

      <rect x="10" y="590" width="880" height="50" stroke="#000" strokeWidth="1" fill="none"/>
      <text x="20" y="610" className="gost-text">Масштаб: 1:100</text>
      <text x="20" y="630" className="gost-text">Размеры в мм</text>
      <text x="800" y="610" className="gost-text">Лист 2</text>
      <text x="750" y="630" className="gost-text">McDonnell Douglas</text>
    </svg>
  );

  const renderFrontView = () => (
    <svg ref={svgRef} width="900" height="600" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          {`
            .gost-line { stroke: #000; stroke-width: 1.5; fill: none; }
            .gost-thin { stroke: #000; stroke-width: 0.5; fill: none; }
            .gost-dash { stroke: #000; stroke-width: 0.7; fill: none; stroke-dasharray: 10,5; }
            .gost-center { stroke: #000; stroke-width: 0.5; fill: none; stroke-dasharray: 20,5,5,5; }
            .gost-text { font-family: 'GOST type A', Arial; font-size: 12px; fill: #000; }
            .gost-title { font-family: 'GOST type A', Arial; font-size: 16px; fill: #000; font-weight: bold; }
            .dimension-line { stroke: #000; stroke-width: 0.5; fill: none; }
            .arrow { fill: #000; }
          `}
        </style>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" className="arrow" />
        </marker>
      </defs>

      <rect width="900" height="600" fill="#fff" stroke="#000" strokeWidth="2"/>
      
      <rect x="10" y="10" width="180" height="50" stroke="#000" strokeWidth="1" fill="none"/>
      <text x="100" y="30" className="gost-title" textAnchor="middle">YC-15</text>
      <text x="100" y="48" className="gost-text" textAnchor="middle">ВИД СПЕРЕДИ</text>

      <g transform="translate(450, 320)">
        <line x1="-400" y1="0" x2="400" y2="0" className="gost-center"/>
        <line x1="0" y1="-200" x2="0" y2="120" className="gost-center"/>
        
        <ellipse cx="0" cy="0" rx="32" ry="45" className="gost-line"/>
        <ellipse cx="0" cy="0" rx="20" ry="28" className="gost-thin"/>
        
        <line x1="0" y1="0" x2="-320" y2="-55" className="gost-line"/>
        <line x1="0" y1="0" x2="320" y2="-55" className="gost-line"/>
        
        <path d="M -320 -55 L -330 -58 L -338 -62 L -345 -68" className="gost-line"/>
        <path d="M 320 -55 L 330 -58 L 338 -62 L 345 -68" className="gost-line"/>
        
        <rect x="-358" y="-75" width="26" height="38" rx="4" className="gost-line"/>
        <rect x="332" y="-75" width="26" height="38" rx="4" className="gost-line"/>
        
        <circle cx="-345" cy="-56" r="12" className="gost-line"/>
        <circle cx="345" cy="-56" r="12" className="gost-line"/>
        
        <circle cx="-345" cy="-56" r="5" className="gost-thin"/>
        <circle cx="345" cy="-56" r="5" className="gost-thin"/>
        
        <path d="M 0 0 L 0 -90 L 15 -120 L 35 -145 L 45 -155" className="gost-line"/>
        <path d="M 45 -155 L 55 -160 L 65 -162 L 75 -162" className="gost-line"/>
        
        <path d="M 0 0 L 0 -90 L -15 -120 L -35 -145 L -45 -155" className="gost-line"/>
        <path d="M -45 -155 L -55 -160 L -65 -162 L -75 -162" className="gost-line"/>
        
        <line x1="-75" y1="-162" x2="-85" y2="-162" className="gost-line"/>
        <line x1="75" y1="-162" x2="85" y2="-162" className="gost-line"/>
        
        <path d="M -85 -162 L -95 -160 L -100 -155 L -102 -145" className="gost-line"/>
        <path d="M 85 -162 L 95 -160 L 100 -155 L 102 -145" className="gost-line"/>
        
        <line x1="-102" y1="-145" x2="-102" y2="-100" className="gost-line"/>
        <line x1="102" y1="-145" x2="102" y2="-100" className="gost-line"/>
        
        <rect x="-50" y="50" width="100" height="18" rx="3" className="gost-line"/>
        <line x1="-40" y1="59" x2="40" y2="59" className="gost-thin"/>
        
        <line x1="-20" y1="50" x2="-20" y2="68" className="gost-thin"/>
        <line x1="0" y1="50" x2="0" y2="68" className="gost-thin"/>
        <line x1="20" y1="50" x2="20" y2="68" className="gost-thin"/>
        
        <line x1="-345" y1="-55" x2="345" y2="-55" className="dimension-line" markerEnd="url(#arrow)" markerStart="url(#arrow)"/>
        <text x="0" y="-70" className="gost-text" textAnchor="middle">33500</text>
        
        <line x1="380" y1="0" x2="380" y2="-162" className="dimension-line" markerEnd="url(#arrow)" markerStart="url(#arrow)"/>
        <text x="400" y="-80" className="gost-text">14800</text>
        
        <line x1="-130" y1="68" x2="-130" y2="0" className="dimension-line" markerEnd="url(#arrow)" markerStart="url(#arrow)"/>
        <text x="-160" y="35" className="gost-text">5600</text>
      </g>

      <rect x="10" y="540" width="880" height="50" stroke="#000" strokeWidth="1" fill="none"/>
      <text x="20" y="560" className="gost-text">Масштаб: 1:100</text>
      <text x="20" y="580" className="gost-text">Размеры в мм</text>
      <text x="800" y="560" className="gost-text">Лист 3</text>
      <text x="750" y="580" className="gost-text">McDonnell Douglas</text>
    </svg>
  );

  const renderSectionView = () => (
    <svg ref={svgRef} width="900" height="650" viewBox="0 0 900 650" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          {`
            .gost-line { stroke: #000; stroke-width: 1.5; fill: none; }
            .gost-thin { stroke: #000; stroke-width: 0.5; fill: none; }
            .gost-dash { stroke: #000; stroke-width: 0.7; fill: none; stroke-dasharray: 10,5; }
            .gost-center { stroke: #000; stroke-width: 0.5; fill: none; stroke-dasharray: 20,5,5,5; }
            .gost-text { font-family: 'GOST type A', Arial; font-size: 12px; fill: #000; }
            .gost-title { font-family: 'GOST type A', Arial; font-size: 16px; fill: #000; font-weight: bold; }
            .dimension-line { stroke: #000; stroke-width: 0.5; fill: none; }
            .arrow { fill: #000; }
            .section-hatch { stroke: #000; stroke-width: 0.3; fill: none; }
          `}
        </style>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" className="arrow" />
        </marker>
      </defs>

      <rect width="900" height="650" fill="#fff" stroke="#000" strokeWidth="2"/>
      
      <rect x="10" y="10" width="200" height="50" stroke="#000" strokeWidth="1" fill="none"/>
      <text x="110" y="30" className="gost-title" textAnchor="middle">YC-15</text>
      <text x="110" y="48" className="gost-text" textAnchor="middle">РАЗРЕЗ А-А</text>

      <g transform="translate(450, 320)">
        <line x1="-350" y1="0" x2="350" y2="0" className="gost-center"/>
        
        <ellipse cx="0" cy="0" rx="35" ry="48" className="gost-line"/>
        
        <line x1="-35" y1="-48" x2="-35" y2="48" className="section-hatch"/>
        <line x1="-30" y1="-48" x2="-30" y2="48" className="section-hatch"/>
        <line x1="-25" y1="-48" x2="-25" y2="48" className="section-hatch"/>
        <line x1="-20" y1="-48" x2="-20" y2="48" className="section-hatch"/>
        <line x1="-15" y1="-48" x2="-15" y2="48" className="section-hatch"/>
        <line x1="-10" y1="-48" x2="-10" y2="48" className="section-hatch"/>
        <line x1="-5" y1="-48" x2="-5" y2="48" className="section-hatch"/>
        <line x1="0" y1="-48" x2="0" y2="48" className="section-hatch"/>
        <line x1="5" y1="-48" x2="5" y2="48" className="section-hatch"/>
        <line x1="10" y1="-48" x2="10" y2="48" className="section-hatch"/>
        <line x1="15" y1="-48" x2="15" y2="48" className="section-hatch"/>
        <line x1="20" y1="-48" x2="20" y2="48" className="section-hatch"/>
        <line x1="25" y1="-48" x2="25" y2="48" className="section-hatch"/>
        <line x1="30" y1="-48" x2="30" y2="48" className="section-hatch"/>
        <line x1="35" y1="-48" x2="35" y2="48" className="section-hatch"/>
        
        <circle cx="0" cy="0" rx="28" ry="38" className="gost-thin"/>
        <circle cx="0" cy="0" rx="18" ry="25" className="gost-thin"/>
        
        <rect x="-12" y="-25" width="24" height="50" className="gost-thin"/>
        
        <rect x="-80" y="-45" width="25" height="90" className="gost-line"/>
        <rect x="55" y="-45" width="25" height="90" className="gost-line"/>
        
        <line x1="-80" y1="-35" x2="-55" y2="-35" className="section-hatch"/>
        <line x1="-80" y1="-30" x2="-55" y2="-30" className="section-hatch"/>
        <line x1="-80" y1="-25" x2="-55" y2="-25" className="section-hatch"/>
        <line x1="-80" y1="-20" x2="-55" y2="-20" className="section-hatch"/>
        <line x1="-80" y1="-15" x2="-55" y2="-15" className="section-hatch"/>
        <line x1="-80" y1="-10" x2="-55" y2="-10" className="section-hatch"/>
        <line x1="-80" y1="-5" x2="-55" y2="-5" className="section-hatch"/>
        <line x1="-80" y1="0" x2="-55" y2="0" className="section-hatch"/>
        <line x1="-80" y1="5" x2="-55" y2="5" className="section-hatch"/>
        <line x1="-80" y1="10" x2="-55" y2="10" className="section-hatch"/>
        <line x1="-80" y1="15" x2="-55" y2="15" className="section-hatch"/>
        <line x1="-80" y1="20" x2="-55" y2="20" className="section-hatch"/>
        <line x1="-80" y1="25" x2="-55" y2="25" className="section-hatch"/>
        <line x1="-80" y1="30" x2="-55" y2="30" className="section-hatch"/>
        <line x1="-80" y1="35" x2="-55" y2="35" className="section-hatch"/>
        
        <line x1="55" y1="-35" x2="80" y2="-35" className="section-hatch"/>
        <line x1="55" y1="-30" x2="80" y2="-30" className="section-hatch"/>
        <line x1="55" y1="-25" x2="80" y2="-25" className="section-hatch"/>
        <line x1="55" y1="-20" x2="80" y2="-20" className="section-hatch"/>
        <line x1="55" y1="-15" x2="80" y2="-15" className="section-hatch"/>
        <line x1="55" y1="-10" x2="80" y2="-10" className="section-hatch"/>
        <line x1="55" y1="-5" x2="80" y2="-5" className="section-hatch"/>
        <line x1="55" y1="0" x2="80" y2="0" className="section-hatch"/>
        <line x1="55" y1="5" x2="80" y2="5" className="section-hatch"/>
        <line x1="55" y1="10" x2="80" y2="10" className="section-hatch"/>
        <line x1="55" y1="15" x2="80" y2="15" className="section-hatch"/>
        <line x1="55" y1="20" x2="80" y2="20" className="section-hatch"/>
        <line x1="55" y1="25" x2="80" y2="25" className="section-hatch"/>
        <line x1="55" y1="30" x2="80" y2="30" className="section-hatch"/>
        <line x1="55" y1="35" x2="80" y2="35" className="section-hatch"/>
        
        <text x="-67" y="0" className="gost-text" textAnchor="middle">БАГАЖ</text>
        <text x="67" y="0" className="gost-text" textAnchor="middle">БАГАЖ</text>
        <text x="0" y="-5" className="gost-text" textAnchor="middle">ГРУЗ</text>
        <text x="0" y="10" className="gost-text" textAnchor="middle">ОТСЕК</text>
        
        <line x1="-35" y1="-100" x2="35" y2="-100" className="dimension-line" markerEnd="url(#arrow)" markerStart="url(#arrow)"/>
        <text x="0" y="-110" className="gost-text" textAnchor="middle">5600</text>
        
        <line x1="-100" y1="-48" x2="-100" y2="48" className="dimension-line" markerEnd="url(#arrow)" markerStart="url(#arrow)"/>
        <text x="-130" y="0" className="gost-text" transform="rotate(-90 -130 0)">7500</text>
        
        <text x="-300" y="-100" className="gost-text">Сечение по шпангоуту №15</text>
        <text x="-300" y="-80" className="gost-text">на расстоянии 15м от носа</text>
      </g>

      <rect x="10" y="590" width="880" height="50" stroke="#000" strokeWidth="1" fill="none"/>
      <text x="20" y="610" className="gost-text">Масштаб: 1:50</text>
      <text x="20" y="630" className="gost-text">Размеры в мм</text>
      <text x="800" y="610" className="gost-text">Лист 4</text>
      <text x="750" y="630" className="gost-text">McDonnell Douglas</text>
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
        
        <div className="bg-white rounded p-4 overflow-auto max-h-[500px]">
          {viewType === 'side' && renderSideView()}
          {viewType === 'top' && renderTopView()}
          {viewType === 'front' && renderFrontView()}
          {viewType === 'section' && renderSectionView()}
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
