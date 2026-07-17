import React from 'react';
import SiteLayout from '@/components/site/SiteLayout';
import { BRAND } from '@/lib/brand';
import logoSymbol from '@/assets/haera-logo-symbol.jpeg';

const bioactives = [
  {
    name: 'Nitratos (Beterraba)',
    role: 'Precursor de Óxido Nítrico (NO)',
    detail: 'Melhora o fluxo sanguíneo e oxigenação muscular para sustentar desempenho sem sobrecarga estimulante.',
  },
  {
    name: 'Metilxantinas (Guaraná)',
    role: 'Cafeína natural de liberação prolongada',
    detail: 'Energia sustentada por 4-6h, sem o pico abrupto e a queda da cafeína anidra sintética.',
  },
  {
    name: 'Chá verde em pó',
    role: 'Fonte natural de L-Teanina e catequinas',
    detail: 'Sinergia com cafeína natural para clareza cognitiva: foco aguçado e calmo, sem agitação. Catequinas adicionam suporte antioxidante.',
  },
  {
    name: 'Minerais Quelatos',
    role: 'Biodisponibilidade superior',
    detail: 'Magnésio, zinco e cálcio em forma quelada atravessam a barreira gástrica sem competição, garantindo absorção celular real.',
  },
  {
    name: 'Inulina (Prebiótica)',
    role: 'Saúde da microbiota',
    detail: 'Fibra que nutre as bactérias benéficas do intestino — onde 70% da imunidade é regulada.',
  },
  {
    name: 'Complexo B',
    role: 'Cofatores energéticos',
    detail: 'B1, B2, B3, B6 e B12 auxiliam a produção natural de energia celular de forma estável e equilibrada.',
  },
];

const Ciencia: React.FC = () => {
  return (
    <SiteLayout>
      <section className="pt-40 pb-20 px-6 md:px-10" style={{ backgroundColor: BRAND.GRAPHITE }}>
        <div className="max-w-5xl mx-auto text-center">
          <img src={logoSymbol} alt="" className="w-32 h-32 mx-auto mb-8" style={{ mixBlendMode: 'screen', opacity: 0.9 }} />
          <span className="font-sans text-xs tracking-[0.4em] uppercase mb-6 block" style={{ color: BRAND.GOLD }}>Ciência</span>
          <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight mb-6" style={{ color: BRAND.CREAM }}>
            A bioquímica por trás<br />da performance natural.
          </h1>
          <p className="font-sans text-base md:text-lg max-w-2xl mx-auto" style={{ color: BRAND.CREAM, opacity: 0.7 }}>
            Pulse não é "natural" como rótulo. É natural como mecanismo: cada bioativo escolhido pela ciência do equilíbrio natural do corpo.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-10" style={{ backgroundColor: BRAND.CREAM }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {bioactives.map(b => (
              <div key={b.name} className="p-8 rounded-2xl" style={{ backgroundColor: BRAND.CREAM_SOFT }}>
                <p className="font-sans text-[11px] tracking-[0.3em] uppercase mb-3" style={{ color: BRAND.GOLD }}>{b.role}</p>
                <h3 className="font-serif text-2xl mb-4" style={{ color: BRAND.WINE }}>{b.name}</h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: BRAND.GRAPHITE, opacity: 0.75 }}>{b.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-10" style={{ backgroundColor: BRAND.WINE }}>
        <div className="max-w-3xl mx-auto">
          <span className="font-sans text-xs tracking-[0.4em] uppercase mb-6 block text-center" style={{ color: BRAND.GOLD }}>Mecanismo de Ação</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-center mb-10" style={{ color: BRAND.CREAM }}>Equilíbrio Natural do Corpo</h2>
          <p className="font-serif text-xl font-light text-center leading-relaxed italic" style={{ color: BRAND.CREAM, opacity: 0.9 }}>
            "Diferente dos sintéticos, que forçam cansaço intenso do organismo, Haëra atua na otimização do fluxo sanguíneo e na disponibilidade de substratos — permitindo que o atleta atinja o pico de performance mantendo a integridade metabólica e facilitando a recuperação."
          </p>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Ciencia;
