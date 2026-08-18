import React, { useState } from 'react';
import nucleusOlive from '@/assets/haera-nucleus-symbol.png';
import nucleusWine from '@/assets/haera-nucleus-wine.png';
import nucleusSage from '@/assets/haera-nucleus-sage.png';
import nucleusPetrol from '@/assets/haera-nucleus-petrol.png';
import nucleusGold from '@/assets/haera-nucleus-gold.png';
import nucleusTerracotta from '@/assets/haera-nucleus-terracotta.png';
import logoLockupGold from '@/assets/haera-logo-lockup-gold.jpeg';

const colorVariants = [
  { 
    name: 'Olive Green', 
    image: nucleusOlive, 
    hex: '#3F4F45',
    description: 'Versão principal institucional'
  },
  { 
    name: 'Wine', 
    image: nucleusWine, 
    hex: '#722F37',
    description: 'Sofisticação e profundidade'
  },
  { 
    name: 'Green Sage', 
    image: nucleusSage, 
    hex: '#9CAF88',
    description: 'Suavidade e natureza'
  },
  { 
    name: 'Petrol Blue', 
    image: nucleusPetrol, 
    hex: '#1B4D5C',
    description: 'Ciência e confiança'
  },
  { 
    name: 'Gold', 
    image: nucleusGold, 
    hex: '#B8964B',
    description: 'Premium e excelência'
  },
  { 
    name: 'Terracotta', 
    image: nucleusTerracotta, 
    hex: '#C4784A',
    description: 'Calor e nutrição'
  },
];

// Logotype component - tipografia oficial Haëra
const HaeraLogotype: React.FC<{ color?: string; size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ 
  color = '#3F4F45', 
  size = 'lg' 
}) => {
  const sizeClasses = {
    sm: 'text-2xl md:text-3xl tracking-[0.2em]',
    md: 'text-3xl md:text-4xl tracking-[0.18em]',
    lg: 'text-4xl md:text-6xl tracking-[0.15em]',
    xl: 'text-5xl md:text-7xl lg:text-8xl tracking-[0.12em]',
  };

  return (
    <span 
      className={`font-serif font-light ${sizeClasses[size]}`}
      style={{ color }}
    >
      Haëra
    </span>
  );
};

const BrandPresentation: React.FC = () => {
  const [selectedVariant, setSelectedVariant] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 30%, hsl(var(--haera-beige)) 0%, transparent 50%)`,
            }}
          />
        </div>

        {/* Symbol */}
        <div className="relative z-10 animate-scale-in">
          <div className="relative">
            <img 
              src={colorVariants[selectedVariant].image} 
              alt="Haëra - Núcleo Nutritivo" 
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain animate-pulse-slow transition-all duration-500"
            />
            <div className="absolute inset-0 nucleus-glow rounded-full opacity-50" />
          </div>
        </div>

        {/* Color Selector Pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {colorVariants.map((variant, index) => (
            <button
              key={variant.name}
              onClick={() => setSelectedVariant(index)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300
                ${selectedVariant === index 
                  ? 'bg-foreground text-background shadow-elegant' 
                  : 'bg-card hover:bg-secondary border border-border'
                }
              `}
            >
              <span 
                className="w-3 h-3 rounded-full border border-border/50"
                style={{ backgroundColor: variant.hex }}
              />
              <span className="font-sans text-xs tracking-wide">{variant.name}</span>
            </button>
          ))}
        </div>

        {/* Brand Name */}
        <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-[0.15em] text-foreground font-light">
            HAËRA
          </h1>
          <p className="mt-4 font-sans text-sm md:text-base tracking-[0.3em] text-muted-foreground uppercase">
            Nutrir antes de estimular
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-haera-olive to-transparent" />
        </div>
      </section>

      {/* Color Palette Gallery Section */}
      <section className="py-24 md:py-32 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="font-sans text-xs tracking-[0.4em] text-muted-foreground uppercase">
              Variações
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl text-foreground font-light">
              Paleta Completa
            </h2>
            <p className="mt-4 font-sans text-muted-foreground max-w-xl mx-auto">
              O símbolo Núcleo Nutritivo em todas as cores oficiais da marca Haëra
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {colorVariants.map((variant, index) => (
              <div 
                key={variant.name}
                className={`
                  group relative p-6 md:p-8 rounded-2xl bg-background shadow-soft 
                  hover:shadow-elegant transition-all duration-500 cursor-pointer
                  ${selectedVariant === index ? 'ring-2 ring-foreground' : ''}
                `}
                onClick={() => setSelectedVariant(index)}
              >
                <div className="flex justify-center mb-6">
                  <img 
                    src={variant.image} 
                    alt={`Haëra ${variant.name}`}
                    className="w-32 h-32 md:w-40 md:h-40 object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="font-serif text-lg md:text-xl text-foreground">{variant.name}</h3>
                  <p className="font-sans text-xs text-muted-foreground">{variant.description}</p>
                  <div className="flex items-center justify-center gap-2 pt-2">
                    <span 
                      className="w-4 h-4 rounded-full border border-border"
                      style={{ backgroundColor: variant.hex }}
                    />
                    <span className="font-mono text-xs text-muted-foreground">{variant.hex}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Color Palette Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="font-sans text-xs tracking-[0.4em] text-muted-foreground uppercase">
              Cores
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl text-foreground font-light">
              Paleta Haëra
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { name: 'Wine', hex: '#722F37' },
              { name: 'Green Sage', hex: '#9CAF88' },
              { name: 'Olive Green', hex: '#3F4F45' },
              { name: 'Petrol Blue', hex: '#1B4D5C' },
              { name: 'Gold', hex: '#B8964B' },
              { name: 'Terracotta', hex: '#C4784A' },
              { name: 'Cream', hex: '#F5F2EB' },
            ].map((c) => (
              <div key={c.name} className="group">
                <div 
                  className="aspect-square rounded-xl shadow-soft transition-all duration-500 group-hover:shadow-elegant group-hover:scale-105"
                  style={{ backgroundColor: c.hex }}
                />
                <div className="mt-3 text-center">
                  <p className="font-sans text-sm text-foreground">{c.name}</p>
                  <p className="font-mono text-xs text-muted-foreground mt-1">{c.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Symbol Breakdown Section */}
      <section className="py-24 md:py-32 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="font-sans text-xs tracking-[0.4em] text-muted-foreground uppercase">
              Símbolo
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl text-foreground font-light">
              O Núcleo Nutritivo
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <img 
                src={nucleusOlive} 
                alt="Símbolo Haëra" 
                className="w-64 h-64 md:w-80 md:h-80 object-contain shadow-elegant rounded-full"
              />
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-foreground">Essência</h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  A energia nasce do centro. A performance é consequência. 
                  A nutrição sustenta tudo.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-foreground">Estrutura</h3>
                <ul className="space-y-3 font-sans text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-haera-olive flex-shrink-0" />
                    <span>Núcleo central sólido — calma e estabilidade</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-haera-olive/70 flex-shrink-0" />
                    <span>Camadas concêntricas — crescimento progressivo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-haera-olive/40 flex-shrink-0" />
                    <span>Forma orgânica — biologia real, não geometria perfeita</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-foreground">Significado</h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  Remete a uma célula saudável, um grão nutrido, um tecido vivo — 
                  a origem de toda energia verdadeira.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="font-sans text-xs tracking-[0.4em] text-muted-foreground uppercase">
              Tipografia
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl text-foreground font-light">
              Fontes Oficiais
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="pb-6 border-b border-border">
                <span className="font-sans text-xs tracking-[0.3em] text-muted-foreground uppercase">
                  Display & Títulos
                </span>
              </div>
              <h3 className="font-serif text-5xl md:text-6xl text-foreground font-light">
                Cormorant Garamond
              </h3>
              <p className="font-serif text-xl text-muted-foreground italic">
                Elegância científica, autoridade silenciosa
              </p>
              <div className="font-serif text-2xl text-foreground space-y-2">
                <p className="font-light">Light 300</p>
                <p className="font-normal">Regular 400</p>
                <p className="font-medium">Medium 500</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="pb-6 border-b border-border">
                <span className="font-sans text-xs tracking-[0.3em] text-muted-foreground uppercase">
                  Corpo & Interface
                </span>
              </div>
              <h3 className="font-sans text-4xl md:text-5xl text-foreground font-light tracking-tight">
                Inter
              </h3>
              <p className="font-sans text-lg text-muted-foreground">
                Clareza funcional, leitura confortável
              </p>
              <div className="font-sans text-lg text-foreground space-y-2">
                <p className="font-light">Light 300</p>
                <p className="font-normal">Regular 400</p>
                <p className="font-medium">Medium 500</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logotype Section */}
      <section className="py-24 md:py-32 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="font-sans text-xs tracking-[0.4em] text-muted-foreground uppercase">
              Logotipo
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl text-foreground font-light">
              Marca Principal
            </h2>
            <p className="mt-4 font-sans text-muted-foreground max-w-xl mx-auto">
              O nome Haëra em tipografia Cormorant Garamond, com o trema característico que confere identidade única
            </p>
          </div>

          {/* Main Logotype Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Light version */}
            <div className="p-12 md:p-16 rounded-2xl bg-background shadow-soft flex flex-col items-center justify-center min-h-[280px]">
              <HaeraLogotype color="#3F4F45" size="xl" />
              <p className="mt-6 font-sans text-xs text-muted-foreground tracking-widest uppercase">
                Versão principal — fundo claro
              </p>
            </div>
            
            {/* Dark version */}
            <div 
              className="p-12 md:p-16 rounded-2xl flex flex-col items-center justify-center min-h-[280px]"
              style={{ backgroundColor: '#1C1C1C' }}
            >
              <HaeraLogotype color="#F5F2EB" size="xl" />
              <p className="mt-6 font-sans text-xs tracking-widest uppercase" style={{ color: 'rgba(245,242,235,0.6)' }}>
                Versão negativa — fundo escuro
              </p>
            </div>
          </div>

          {/* Color Variations */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: 'Olive Green', hex: '#3F4F45', bg: '#F5F2EB' },
              { name: 'Wine', hex: '#722F37', bg: '#F5F2EB' },
              { name: 'Petrol Blue', hex: '#1B4D5C', bg: '#F5F2EB' },
              { name: 'Gold', hex: '#B8964B', bg: '#F5F2EB' },
              { name: 'Terracotta', hex: '#C4784A', bg: '#F5F2EB' },
              { name: 'Green Sage', hex: '#9CAF88', bg: '#F5F2EB' },
            ].map((variant) => (
              <div 
                key={variant.name}
                className="p-8 rounded-xl shadow-soft hover:shadow-elegant transition-all duration-500 flex flex-col items-center"
                style={{ backgroundColor: variant.bg }}
              >
                <HaeraLogotype color={variant.hex} size="md" />
                <div className="mt-4 flex items-center gap-2">
                  <span 
                    className="w-3 h-3 rounded-full border border-border/50"
                    style={{ backgroundColor: variant.hex }}
                  />
                  <span className="font-sans text-xs text-muted-foreground">{variant.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Combined Logo + Symbol */}
          <div className="mt-16 p-12 md:p-16 rounded-2xl bg-background shadow-elegant">
            <div className="text-center mb-8">
              <span className="font-sans text-xs tracking-[0.4em] text-muted-foreground uppercase">
                Lockup Completo — Logo Oficial
              </span>
            </div>
            <div className="flex justify-center">
              <img 
                src={logoLockupGold} 
                alt="Logo Oficial Haëra — Símbolo + Logotipo" 
                className="w-full max-w-lg object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Usage Notes */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h4 className="font-serif text-lg text-foreground">Espaçamento</h4>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                O logotipo deve sempre ter uma área de respiro equivalente à altura do "H" ao seu redor.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-serif text-lg text-foreground">Tamanho Mínimo</h4>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Para manter a legibilidade, o logotipo não deve ser aplicado menor que 24px de altura em digital ou 8mm em impresso.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-serif text-lg text-foreground">Trema</h4>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                O trema sobre o "ë" é elemento distintivo da marca e nunca deve ser removido ou substituído.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 px-6" style={{ backgroundColor: '#1B4D5C' }}>
        <div className="max-w-6xl mx-auto text-[#F5F2EB]">
          <div className="text-center mb-20">
            <span className="font-sans text-xs tracking-[0.4em] uppercase opacity-70">
              Princípios
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl font-light">
              O que Haëra comunica
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Ciência',
                desc: 'Fundamentação sem excessos. Evidência aplicada à vida real.',
              },
              {
                title: 'Sensibilidade',
                desc: 'Escuta profunda. Respeito pelo ritmo de cada corpo.',
              },
              {
                title: 'Constância',
                desc: 'Construção sustentável. Performance como consequência.',
              },
              {
                title: 'Intencionalidade',
                desc: 'Cada escolha tem um porquê. Nada está ali por acaso.',
              },
              {
                title: 'Leveza',
                desc: 'Profundidade sem peso. Conhecimento sem sobrecarregar.',
              },
              {
                title: 'Longevidade',
                desc: 'Visão de longo prazo. Saúde como patrimônio.',
              },
            ].map((v) => (
              <div key={v.title} className="p-6 border border-[#F5F2EB]/20 rounded-lg hover:border-[#F5F2EB]/40 transition-colors">
                <h3 className="font-serif text-2xl mb-3">{v.title}</h3>
                <p className="font-sans text-sm opacity-70 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-32 md:py-48 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <img 
            src={nucleusOlive} 
            alt="Haëra" 
            className="w-24 h-24 mx-auto object-contain opacity-80"
          />
          <blockquote className="font-serif text-2xl md:text-3xl text-foreground italic font-light leading-relaxed">
            "Eu sei o que estou fazendo.<br />
            Não preciso gritar.<br />
            Meu corpo responde porque eu respeito."
          </blockquote>
          <p className="font-sans text-sm tracking-[0.3em] text-muted-foreground uppercase">
            Haëra — Identidade Visual 2024
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-muted-foreground">
            © 2024 Haëra. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a 
              href="/pulse" 
              className="font-sans text-xs text-foreground hover:text-haera-olive transition-colors tracking-[0.15em] uppercase"
            >
              Pulse →
            </a>
            <a 
              href="/assets" 
              className="font-sans text-xs text-foreground hover:text-haera-olive transition-colors tracking-[0.15em] uppercase"
            >
              Download Brand Assets →
            </a>
          </div>
          <p className="font-sans text-xs text-muted-foreground tracking-[0.2em] uppercase">
            Nutrir antes de estimular
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BrandPresentation;
