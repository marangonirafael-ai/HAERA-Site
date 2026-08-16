import React from 'react';
import SiteLayout from '@/components/site/SiteLayout';
import { BRAND } from '@/lib/brand';
import logoSymbol from '@/assets/haera-simbolo-gold.png';

const Manifesto: React.FC = () => {
  return (
    <SiteLayout>
      <section className="pt-40 pb-32 px-6 md:px-10" style={{ backgroundColor: BRAND.CREAM }}>
        <div className="max-w-3xl mx-auto text-center">
          <img src={logoSymbol} alt="" className="w-40 h-40 mx-auto mb-12 animate-pulse-slow" />
          <span className="font-sans text-xs tracking-[0.4em] uppercase mb-6 block" style={{ color: BRAND.WINE, opacity: 0.7 }}>Manifesto</span>
          <h1 className="font-serif text-5xl md:text-7xl font-light leading-[1.05] mb-12" style={{ color: BRAND.GRAPHITE }}>
            Nutrir antes de <em className="italic" style={{ color: BRAND.WINE }}>estimular</em>.
          </h1>

          <div className="space-y-8 font-serif text-xl md:text-2xl font-light leading-relaxed text-left" style={{ color: BRAND.GRAPHITE }}>
            <p>
              Vivemos uma era de pressa. De estímulos cada vez mais agressivos. De atalhos que cobram o preço dobrado amanhã.
            </p>
            <p>
              Acreditamos no contrário.
            </p>
            <p>
              Acreditamos que <em style={{ color: BRAND.WINE }}>performance real nasce do equilíbrio natural do corpo</em>, não do cansaço intenso. Que a química barata serve à indústria — não ao corpo. Que rótulos limpos não são tendência: são responsabilidade.
            </p>
            <p>
              Haëra existe para quem entendeu que longevidade vale mais do que pico. Que constância vence explosão. Que clareza mental é mais nobre que agitação.
            </p>
            <p style={{ color: BRAND.WINE, fontStyle: 'italic' }}>
              Nutrir antes de estimular não é um slogan. É um caminho.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Manifesto;
