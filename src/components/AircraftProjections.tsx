import { Card } from '@/components/ui/card';

const AircraftProjections = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Card className="p-6 bg-card/50 backdrop-blur-sm tech-border hover:bg-card/70 transition-all duration-300">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-mono text-primary">SIDE VIEW</h3>
            <div className="text-xs font-mono text-muted-foreground">0°</div>
          </div>
          
          <div className="bg-background/50 rounded p-4 h-[300px] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <svg width="280" height="180" viewBox="0 0 280 180" className="relative z-10">
              <path
                d="M 40 90 L 240 90 L 260 85 L 260 95 Z"
                fill="none"
                stroke="#0EA5E9"
                strokeWidth="2"
              />
              
              <ellipse cx="240" cy="90" rx="20" ry="8" fill="none" stroke="#0EA5E9" strokeWidth="2" />
              
              <path
                d="M 80 90 L 180 40 L 180 50"
                fill="none"
                stroke="#0EA5E9"
                strokeWidth="1.5"
              />
              
              <path
                d="M 150 90 L 150 60 L 165 50 L 165 60"
                fill="none"
                stroke="#0EA5E9"
                strokeWidth="1.5"
              />
              
              <ellipse cx="90" cy="88" rx="15" ry="20" fill="none" stroke="#F97316" strokeWidth="1.5" />
              <circle cx="90" cy="88" r="8" fill="none" stroke="#F97316" strokeWidth="1" />
              
              <line x1="40" y1="90" x2="260" y2="90" stroke="#0EA5E9" strokeWidth="0.5" opacity="0.3" strokeDasharray="3,3" />
            </svg>
          </div>
          
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="text-muted-foreground">LENGTH:</div>
            <div className="text-primary">38.7m</div>
            <div className="text-muted-foreground">HEIGHT:</div>
            <div className="text-primary">14.8m</div>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-card/50 backdrop-blur-sm tech-border hover:bg-card/70 transition-all duration-300">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-mono text-primary">TOP VIEW</h3>
            <div className="text-xs font-mono text-muted-foreground">90°</div>
          </div>
          
          <div className="bg-background/50 rounded p-4 h-[300px] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <svg width="280" height="200" viewBox="0 0 280 200" className="relative z-10">
              <path
                d="M 130 40 L 150 40 L 150 180 L 130 180 Z"
                fill="none"
                stroke="#0EA5E9"
                strokeWidth="2"
              />
              
              <polygon
                points="140,80 40,100 40,120 140,110"
                fill="none"
                stroke="#0EA5E9"
                strokeWidth="1.5"
              />
              <polygon
                points="140,80 240,100 240,120 140,110"
                fill="none"
                stroke="#0EA5E9"
                strokeWidth="1.5"
              />
              
              <path
                d="M 130 120 L 100 120 L 100 140 L 130 140"
                fill="none"
                stroke="#F97316"
                strokeWidth="1.5"
              />
              <path
                d="M 150 120 L 180 120 L 180 140 L 150 140"
                fill="none"
                stroke="#F97316"
                strokeWidth="1.5"
              />
              
              <ellipse cx="140" cy="170" rx="8" ry="15" fill="none" stroke="#0EA5E9" strokeWidth="2" />
              
              <line x1="140" y1="40" x2="140" y2="180" stroke="#0EA5E9" strokeWidth="0.5" opacity="0.3" strokeDasharray="3,3" />
            </svg>
          </div>
          
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="text-muted-foreground">WINGSPAN:</div>
            <div className="text-primary">33.5m</div>
            <div className="text-muted-foreground">WIDTH:</div>
            <div className="text-primary">5.6m</div>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-card/50 backdrop-blur-sm tech-border hover:bg-card/70 transition-all duration-300">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-mono text-primary">FRONT VIEW</h3>
            <div className="text-xs font-mono text-muted-foreground">180°</div>
          </div>
          
          <div className="bg-background/50 rounded p-4 h-[300px] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <svg width="280" height="200" viewBox="0 0 280 200" className="relative z-10">
              <ellipse cx="140" cy="100" rx="12" ry="16" fill="none" stroke="#0EA5E9" strokeWidth="2" />
              
              <line x1="140" y1="100" x2="40" y2="80" stroke="#0EA5E9" strokeWidth="1.5" />
              <line x1="140" y1="100" x2="240" y2="80" stroke="#0EA5E9" strokeWidth="1.5" />
              
              <rect x="35" y="75" width="10" height="15" fill="none" stroke="#F97316" strokeWidth="1.5" rx="2" />
              <rect x="235" y="75" width="10" height="15" fill="none" stroke="#F97316" strokeWidth="1.5" rx="2" />
              <circle cx="40" cy="82" r="5" fill="none" stroke="#F97316" strokeWidth="1" />
              <circle cx="240" cy="82" r="5" fill="none" stroke="#F97316" strokeWidth="1" />
              
              <path
                d="M 140 100 L 140 60 L 155 50 L 155 65"
                fill="none"
                stroke="#0EA5E9"
                strokeWidth="1.5"
              />
              <path
                d="M 140 100 L 140 60 L 125 50 L 125 65"
                fill="none"
                stroke="#0EA5E9"
                strokeWidth="1.5"
              />
              
              <rect x="120" y="125" width="40" height="8" rx="1" fill="none" stroke="#0EA5E9" strokeWidth="1.5" />
              
              <line x1="40" y1="80" x2="240" y2="80" stroke="#0EA5E9" strokeWidth="0.5" opacity="0.3" strokeDasharray="3,3" />
              <line x1="140" y1="50" x2="140" y2="133" stroke="#0EA5E9" strokeWidth="0.5" opacity="0.3" strokeDasharray="3,3" />
            </svg>
          </div>
          
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="text-muted-foreground">T-TAIL:</div>
            <div className="text-primary">7.2m</div>
            <div className="text-muted-foreground">ENGINES:</div>
            <div className="text-primary">2x JT8D</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AircraftProjections;
