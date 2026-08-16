import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SiteLayout from '@/components/site/SiteLayout';
import { BRAND } from '@/lib/brand';
import logoSymbol from '@/assets/haera-simbolo-gold-animado.gif';

const pillars = [
  { name: 'Ciência', desc: 'Fundamentação sem arrogância. Evidência com elegância.' },
  { name: 'Sensibilidade', desc: 'Escuta profunda. Respeito pelo ritmo de cada corpo.' },
  { name: 'Constância', desc: 'Construção sustentável. Performance como consequência.' },
  { name: 'Elegância', desc: 'Sofisticação silenciosa. Luxo que não precisa gritar.' },
  { name: 'Leveza', desc: 'Profundidade sem peso. Conhecimento sem sobrecarregar.' },
  { name: 'Longevidade', desc: 'Visão de longo prazo. Saúde como patrimônio.' },
];

const Origem: React.FC = () => {
  return (
    <SiteLayout>
      <section className="pt-40 pb-20 px-6 md:px-10" style={{ backgroundColor: BRAND.GRAPHITE }}>
        <div className="max-w-4xl mx-auto text-center">
          <img src={logoSymbol} alt="" className="w-28 h-28 mx-auto mb-8" />
          <span className="font-sans text-xs tracking-[0.4em] uppercase mb-6 block" style={{ color: BRAND.GOLD }}>Origem</span>
          <h1 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-6" style={{ color: BRAND.CREAM }}>
            Anos cuidando de corpos.<br />Dois anos para nascer a Haëra.
          </h1>
          <p className="font-sans text-base md:text-lg max-w-2xl mx-auto" style={{ color: BRAND.CREAM, opacity: 0.7 }}>
            Toda marca tem uma data de fundação. A Haëra tem duas: o dia em que a frustração virou decisão,
            e o dia em que, dois anos depois, o primeiro produto finalmente saiu do papel.
          </p>
        </div>
      </section>

      <section className="py-28 px-6 md:px-10" style={{ backgroundColor: BRAND.CREAM }}>
        <div className="max-w-3xl mx-auto">
          <span className="font-sans text-xs tracking-[0.4em] uppercase mb-6 block" style={{ color: BRAND.WINE, opacity: 0.7 }}>A frustração que deu origem</span>
          <div className="space-y-6 font-serif text-xl md:text-2xl font-light leading-relaxed" style={{ color: BRAND.GRAPHITE }}>
            <p>
              Antes de ser uma marca, Haëra foi uma observação repetida por anos: pessoas tomando estimulantes cada vez mais agressivos para sustentar rotinas cada vez mais exigentes — e pagando o preço no dia seguinte.
            </p>
            <p>
              Rótulos cheios de aditivos. Marketing gritando "explosão". Corpos esgotados pela exigência de estímulos cada vez mais fortes. O mercado oferecia dois caminhos: suplemento sintético agressivo, ou superfood genérico sem foco em performance.
            </p>
            <p style={{ color: BRAND.WINE, fontStyle: 'italic' }}>
              Nenhum dos dois servia a quem queria as duas coisas ao mesmo tempo: rigor de suplemento com a consciência de ingrediente de um superfood.
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 px-6 md:px-10" style={{ backgroundColor: BRAND.WINE_DEEP }}>
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-sans text-xs tracking-[0.4em] uppercase mb-6 block" style={{ color: BRAND.GOLD }}>Dois anos, não dois meses</span>
          <div className="space-y-6 font-sans text-base md:text-lg leading-relaxed" style={{ color: BRAND.CREAM, opacity: 0.85 }}>
            <p>
              Da primeira anotação até o primeiro sachê, foram dois anos. Não por lentidão — por cuidado. Cada fórmula testada e refeita. Cada palavra do rótulo escolhida com a mesma exigência com que se escolhe um ingrediente. Cada decisão de design pensada para durar, não para chamar atenção por uma temporada.
            </p>
            <p>
              Isso não é sobre lançar rápido. É sobre lançar certo — e construir algo que sirva de base para décadas, não para um ciclo de hype.
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 px-6 md:px-10" style={{ backgroundColor: BRAND.CREAM }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-xs tracking-[0.4em] uppercase mb-4 block" style={{ color: BRAND.WINE, opacity: 0.7 }}>Princípios</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light" style={{ color: BRAND.GRAPHITE }}>
              Seis princípios, <em className="italic" style={{ color: BRAND.WINE }}>uma direção</em>.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map(p => (
              <div key={p.name} className="p-8 rounded-2xl" style={{ backgroundColor: BRAND.CREAM_SOFT }}>
                <h3 className="font-serif text-2xl mb-3" style={{ color: BRAND.WINE }}>{p.name}</h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: BRAND.GRAPHITE, opacity: 0.75 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6 md:px-10 text-center" style={{ backgroundColor: BRAND.WINE }}>
        <div className="max-w-2xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-light italic leading-relaxed mb-12" style={{ color: BRAND.CREAM }}>
            "Do centro, a energia.<br />Da nutrição, o equilíbrio."
          </p>
          <Link
            to="/pulse-produto"
            className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.25em] uppercase px-9 py-4 rounded-full transition-all hover:gap-4"
            style={{ backgroundColor: BRAND.GOLD, color: BRAND.WINE_NIGHT }}
          >
            Conhecer o Pulse <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Origem;
