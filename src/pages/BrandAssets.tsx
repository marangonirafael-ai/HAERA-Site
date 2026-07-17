import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import symbol images
import nucleusSymbol from '@/assets/haera-nucleus-symbol.png';
import nucleusWine from '@/assets/haera-nucleus-wine.png';
import nucleusSage from '@/assets/haera-nucleus-sage.png';
import nucleusPetrol from '@/assets/haera-nucleus-petrol.png';
import nucleusGold from '@/assets/haera-nucleus-gold.png';
import nucleusTerracotta from '@/assets/haera-nucleus-terracotta.png';

// 6 Símbolos para download
const symbols = [
  { id: 1, name: 'Núcleo Olive Green', fileName: 'haera-simbolo-olive-green', image: nucleusSymbol, hex: '#3F4F45' },
  { id: 2, name: 'Núcleo Wine', fileName: 'haera-simbolo-wine', image: nucleusWine, hex: '#722F37' },
  { id: 3, name: 'Núcleo Green Sage', fileName: 'haera-simbolo-green-sage', image: nucleusSage, hex: '#9CAF88' },
  { id: 4, name: 'Núcleo Petrol Blue', fileName: 'haera-simbolo-petrol-blue', image: nucleusPetrol, hex: '#1B4D5C' },
  { id: 5, name: 'Núcleo Gold', fileName: 'haera-simbolo-gold', image: nucleusGold, hex: '#B8964B' },
  { id: 6, name: 'Núcleo Terracotta', fileName: 'haera-simbolo-terracotta', image: nucleusTerracotta, hex: '#C4714A' },
];

// 8 Logos com nome Haëra para download
const logos = [
  { id: 1, name: 'Logo Olive Green', fileName: 'haera-logo-olive-green', hex: '#3F4F45', bgLight: true },
  { id: 2, name: 'Logo Wine', fileName: 'haera-logo-wine', hex: '#722F37', bgLight: true },
  { id: 3, name: 'Logo Petrol Blue', fileName: 'haera-logo-petrol-blue', hex: '#1B4D5C', bgLight: true },
  { id: 4, name: 'Logo Gold', fileName: 'haera-logo-gold', hex: '#B8964B', bgLight: true },
  { id: 5, name: 'Logo Terracotta', fileName: 'haera-logo-terracotta', hex: '#C4714A', bgLight: true },
  { id: 6, name: 'Logo Green Sage', fileName: 'haera-logo-green-sage', hex: '#9CAF88', bgLight: true },
  { id: 7, name: 'Logo White (fundo escuro)', fileName: 'haera-logo-white', hex: '#FFFFFF', bgLight: false },
  { id: 8, name: 'Logo Black', fileName: 'haera-logo-black', hex: '#1C1C1C', bgLight: true },
];

const BrandAssets: React.FC = () => {

  // Download símbolo PNG
  const downloadSymbolPng = async (imageSrc: string, fileName: string) => {
    try {
      const response = await fetch(imageSrc);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${fileName}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  // Download símbolo SVG (Núcleo Nutritivo)
  const downloadSymbolSvg = (color: string, fileName: string) => {
    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
  <title>Haëra - Núcleo Nutritivo</title>
  <!-- Camadas concêntricas representando o núcleo nutritivo -->
  <!-- Camada externa - halo difuso -->
  <circle cx="400" cy="400" r="350" fill="${color}" fill-opacity="0.08"/>
  <!-- Segunda camada -->
  <circle cx="400" cy="400" r="280" fill="${color}" fill-opacity="0.12"/>
  <!-- Terceira camada -->
  <circle cx="400" cy="400" r="200" fill="${color}" fill-opacity="0.2"/>
  <!-- Quarta camada -->
  <circle cx="400" cy="400" r="130" fill="${color}" fill-opacity="0.35"/>
  <!-- Núcleo central sólido -->
  <circle cx="400" cy="400" r="70" fill="${color}"/>
</svg>`;

    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  // Download logo PNG (gera via canvas)
  const downloadLogoPng = (color: string, fileName: string, bgLight: boolean) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Alta resolução (4x scale)
    const scale = 4;
    canvas.width = 1200 * scale;
    canvas.height = 400 * scale;
    ctx.scale(scale, scale);

    // Background
    ctx.fillStyle = bgLight ? '#F5F2EB' : '#1C1C1C';
    ctx.fillRect(0, 0, 1200, 400);

    // Texto "Haëra"
    ctx.fillStyle = color;
    ctx.font = '300 140px "Cormorant Garamond", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Haëra', 600, 200);

    // Download
    canvas.toBlob((blob) => {
      if (blob) {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${fileName}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }
    }, 'image/png', 1.0);
  };

  // Download logo SVG
  const downloadLogoSvg = (color: string, fileName: string, bgLight: boolean) => {
    const bgColor = bgLight ? '#F5F2EB' : '#1C1C1C';
    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="400" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <title>Haëra - Logotipo</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&amp;display=swap');
  </style>
  <rect width="1200" height="400" fill="${bgColor}"/>
  <text x="600" y="220" text-anchor="middle" fill="${color}" font-family="'Cormorant Garamond', serif" font-size="140" font-weight="300" letter-spacing="0.1em">Haëra</text>
</svg>`;

    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground tracking-[0.1em] mb-4">
            Brand Assets
          </h1>
          <p className="font-sans text-sm text-muted-foreground tracking-[0.2em] uppercase">
            Haëra • Downloads individuais • PNG & SVG
          </p>
          <a 
            href="/" 
            className="inline-block mt-6 font-sans text-xs text-muted-foreground hover:text-foreground transition-colors tracking-[0.15em] uppercase"
          >
            ← Voltar ao Brandbook
          </a>
        </div>

        {/* Símbolos Section */}
        <section className="mb-20">
          <h2 className="font-serif text-2xl font-light text-foreground tracking-[0.1em] mb-2 text-center">
            Símbolos — Núcleo Nutritivo
          </h2>
          <p className="font-sans text-xs text-muted-foreground tracking-[0.15em] uppercase text-center mb-8">
            6 arquivos separados • PNG & SVG
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {symbols.map((symbol) => (
              <div key={symbol.id} className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="bg-muted/30 rounded-lg p-6 mb-4">
                  <img 
                    src={symbol.image} 
                    alt={symbol.name} 
                    className="w-32 h-32 mx-auto object-contain"
                  />
                </div>
                <h3 className="font-serif text-lg font-light text-foreground mb-1">
                  {symbol.name}
                </h3>
                <p className="font-mono text-xs text-muted-foreground mb-4">
                  {symbol.hex}
                </p>
                <div className="flex gap-2 justify-center">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => downloadSymbolPng(symbol.image, symbol.fileName)}
                    className="text-xs tracking-wider"
                  >
                    <Download className="w-3 h-3 mr-1" />
                    PNG
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => downloadSymbolSvg(symbol.hex, symbol.fileName)}
                    className="text-xs tracking-wider"
                  >
                    <Download className="w-3 h-3 mr-1" />
                    SVG
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Logos Section */}
        <section className="mb-20">
          <h2 className="font-serif text-2xl font-light text-foreground tracking-[0.1em] mb-2 text-center">
            Logotipos — Haëra
          </h2>
          <p className="font-sans text-xs text-muted-foreground tracking-[0.15em] uppercase text-center mb-8">
            8 arquivos separados • PNG & SVG
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {logos.map((logo) => (
              <div key={logo.id} className="bg-card border border-border rounded-lg p-6 text-center">
                <div 
                  className="rounded-lg p-6 mb-4 flex items-center justify-center h-24"
                  style={{ backgroundColor: logo.bgLight ? '#F5F2EB' : '#1C1C1C' }}
                >
                  <span 
                    className="font-serif text-3xl font-light tracking-[0.1em]"
                    style={{ color: logo.hex }}
                  >
                    Haëra
                  </span>
                </div>
                <h3 className="font-serif text-sm font-light text-foreground mb-1">
                  {logo.name}
                </h3>
                <p className="font-mono text-xs text-muted-foreground mb-4">
                  {logo.hex}
                </p>
                <div className="flex gap-2 justify-center">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => downloadLogoPng(logo.hex, logo.fileName, logo.bgLight)}
                    className="text-xs tracking-wider"
                  >
                    <Download className="w-3 h-3 mr-1" />
                    PNG
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => downloadLogoSvg(logo.hex, logo.fileName, logo.bgLight)}
                    className="text-xs tracking-wider"
                  >
                    <Download className="w-3 h-3 mr-1" />
                    SVG
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Color Palette Quick Reference */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl font-light text-foreground tracking-[0.1em] mb-8 text-center">
            Paleta de Cores
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Olive Green', hex: '#3F4F45' },
              { name: 'Wine', hex: '#722F37' },
              { name: 'Petrol Blue', hex: '#1B4D5C' },
              { name: 'Gold', hex: '#B8964B' },
              { name: 'Terracotta', hex: '#C4714A' },
              { name: 'Green Sage', hex: '#9CAF88' },
            ].map((color, i) => (
              <div key={i} className="text-center">
                <div 
                  className="w-16 h-16 rounded-full mx-auto mb-2 border border-border"
                  style={{ backgroundColor: color.hex }}
                />
                <p className="font-sans text-xs text-muted-foreground">{color.name}</p>
                <p className="font-mono text-xs text-muted-foreground">{color.hex}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-border">
          <p className="font-sans text-xs text-muted-foreground tracking-[0.2em] uppercase">
            Haëra® • Todos os arquivos são para uso oficial da marca
          </p>
        </footer>
      </div>
    </div>
  );
};

export default BrandAssets;
