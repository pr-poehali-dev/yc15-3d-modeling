import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Aircraft3D from '@/components/Aircraft3D';
import TechnicalDrawing from '@/components/TechnicalDrawing';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('3d');

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="relative z-10">
        <header className="border-b border-primary/20 bg-card/30 backdrop-blur-md">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded flex items-center justify-center border border-primary">
                  <Icon name="Plane" className="text-primary" size={24} />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground tracking-tight">YC-15 PROTOTYPE</h1>
                  <p className="text-xs text-muted-foreground font-mono">ADVANCED MEDIUM STOL TRANSPORT</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span>SYSTEM ONLINE</span>
                </div>
                <Button variant="outline" size="sm" className="font-mono text-xs">
                  <Icon name="Download" size={16} className="mr-2" />
                  SPECS
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-card/50 backdrop-blur-sm">
              <TabsTrigger value="3d" className="font-mono text-sm">
                <Icon name="Box" size={16} className="mr-2" />
                3D MODEL
              </TabsTrigger>
              <TabsTrigger value="projections" className="font-mono text-sm">
                <Icon name="Grid3x3" size={16} className="mr-2" />
                PROJECTIONS
              </TabsTrigger>
            </TabsList>

            <TabsContent value="3d" className="animate-fade-in">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-foreground mb-2">Interactive 3D Model</h2>
                <p className="text-sm text-muted-foreground font-mono">
                  Drag to rotate • Full 360° viewing capability
                </p>
              </div>
              <Aircraft3D />
              
              <div className="mt-8 grid md:grid-cols-3 gap-4">
                <div className="bg-card/50 backdrop-blur-sm p-4 rounded border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Ruler" size={16} className="text-primary" />
                    <h3 className="text-sm font-mono text-primary">DIMENSIONS</h3>
                  </div>
                  <div className="space-y-1 text-xs font-mono text-muted-foreground">
                    <div>Length: 38.7m</div>
                    <div>Wingspan: 33.5m</div>
                    <div>Height: 14.8m</div>
                  </div>
                </div>
                
                <div className="bg-card/50 backdrop-blur-sm p-4 rounded border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Gauge" size={16} className="text-primary" />
                    <h3 className="text-sm font-mono text-primary">PERFORMANCE</h3>
                  </div>
                  <div className="space-y-1 text-xs font-mono text-muted-foreground">
                    <div>Max Speed: 808 km/h</div>
                    <div>Range: 4,630 km</div>
                    <div>Ceiling: 13,700m</div>
                  </div>
                </div>
                
                <div className="bg-card/50 backdrop-blur-sm p-4 rounded border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Cog" size={16} className="text-primary" />
                    <h3 className="text-sm font-mono text-primary">PROPULSION</h3>
                  </div>
                  <div className="space-y-1 text-xs font-mono text-muted-foreground">
                    <div>Engines: 2x JT8D-17</div>
                    <div>Thrust: 71.2 kN each</div>
                    <div>Type: Turbofan</div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="projections" className="animate-fade-in">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-foreground mb-2">Technical Projections</h2>
                <p className="text-sm text-muted-foreground font-mono">
                  Чертежи по ГОСТ • Скачайте SVG для импорта в T-FLEX
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <TechnicalDrawing title="ВИД СБОКУ" viewType="side" />
                <TechnicalDrawing title="ВИД СВЕРХУ" viewType="top" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <TechnicalDrawing title="ВИД СПЕРЕДИ" viewType="front" />
                <TechnicalDrawing title="РАЗРЕЗ А-А" viewType="section" />
              </div>
              
              <div className="mt-8 bg-card/50 backdrop-blur-sm p-6 rounded border border-primary/20">
                <h3 className="text-sm font-mono text-primary mb-4 flex items-center gap-2">
                  <Icon name="FileText" size={16} />
                  TECHNICAL SPECIFICATIONS
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-xs font-mono">
                  <div className="space-y-2">
                    <div className="flex justify-between border-b border-primary/10 pb-1">
                      <span className="text-muted-foreground">Manufacturer:</span>
                      <span className="text-foreground">McDonnell Douglas</span>
                    </div>
                    <div className="flex justify-between border-b border-primary/10 pb-1">
                      <span className="text-muted-foreground">First Flight:</span>
                      <span className="text-foreground">August 27, 1975</span>
                    </div>
                    <div className="flex justify-between border-b border-primary/10 pb-1">
                      <span className="text-muted-foreground">Role:</span>
                      <span className="text-foreground">STOL Transport</span>
                    </div>
                    <div className="flex justify-between border-b border-primary/10 pb-1">
                      <span className="text-muted-foreground">Status:</span>
                      <span className="text-foreground">Prototype</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between border-b border-primary/10 pb-1">
                      <span className="text-muted-foreground">Max Payload:</span>
                      <span className="text-foreground">12,247 kg</span>
                    </div>
                    <div className="flex justify-between border-b border-primary/10 pb-1">
                      <span className="text-muted-foreground">Empty Weight:</span>
                      <span className="text-foreground">23,133 kg</span>
                    </div>
                    <div className="flex justify-between border-b border-primary/10 pb-1">
                      <span className="text-muted-foreground">MTOW:</span>
                      <span className="text-foreground">51,710 kg</span>
                    </div>
                    <div className="flex justify-between border-b border-primary/10 pb-1">
                      <span className="text-muted-foreground">Wing Area:</span>
                      <span className="text-foreground">157.9 m²</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </main>

        <footer className="border-t border-primary/20 bg-card/30 backdrop-blur-md mt-16">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs font-mono text-muted-foreground">
                YC-15 PROTOTYPE TECHNICAL DATABASE
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                <span>© 1975 McDonnell Douglas</span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-1">
                  <Icon name="Info" size={12} />
                  Historical Aviation Data
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;