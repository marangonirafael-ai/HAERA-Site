import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import SiteLayout from '@/components/site/SiteLayout';
import VipCta from '@/components/site/VipCta';
import { BRAND, PULSE_PRODUCT, SALES_LIVE } from '@/lib/brand';
import { useScrollParallax } from '@/hooks/useScrollParallax';
import logoSymbol from '@/assets/haera-simbolo-gold.png';
import logoSymbolAnimated from '@/assets/haera-simbolo-gold-animado.gif';
import pulsePouch from '@/assets/pulse-pouch.jpeg';
import pulseSachets from '@/assets/pulse-sachets.jpeg';
import nucleusLoop from '@/assets/nucleus-loop.mp4.asset.json';

const pillars = ['Ciência', 'Sensibilidade', 'Constância', 'Intencionalidade', 'Leveza', 'Longevidade'];

const Home: React.FC = () => {
  const heroProductRef = useScrollParallax<HTMLImageElement>({ translateY: -90, scale: 0.08, rotate: -2 });
  const heroVideoRef = useScrollParallax<HTMLDivElement>({ translateY: 70 });
  const showcaseRef = useScrollParallax<HTMLImageElement>({ translateY: -80, scale: 0.07, rotate: 2 });
  const ctaSymbolRef = useScrollParallax<HTMLImageElement>({ translateY: -20, scale: 0.04 });

  return (
    <SiteLayout>
      {/* 1. HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: BRAND.CREAM }}>
        <div
          className="absolute inset-0 opacity-40"
          style={{ background: `radial-gradient(ellipse at 70% 50%, ${BRAND.GOLD}30 0%, transparent 60%)` }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <span className="font-sans text-[11px] tracking-[0.4em] uppercase mb-6 block" style={{ color: BRAND.WINE, opacity: 0.7 }}>
              Ativador Corporal · Clean Label
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-light leading-[1.05] mb-6" style={{ color: BRAND.GRAPHITE }}>
              Energia limpa<br />
              <em className="italic" style={{ color: BRAND.WINE }}>que sustenta</em><br />
              performance.
            </h1>
            <p className="font-sans text-base md:text-lg leading-relaxed max-w-md mb-10" style={{ color: BRAND.GRAPHITE, opacity: 0.7 }}>
              Pulse é um ativador do sistema corporal: 21 ingredientes naturais em sinergia, sem cafeína sintética, sem queda de energia, sem culpa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/pulse-produto"
              className="inline-flex items-center justify-center gap-2 font-sans text-xs tracking-[0.25em] uppercase px-9 py-4 rounded-full transition-all hover:gap-4 min-h-[52px]"
              style={{ backgroundColor: BRAND.WINE, color: BRAND.CREAM }}
            >
              Conhecer o Pulse <ArrowRight size={14} />
            </Link>
            <VipCta
              className="inline-flex items-center justify-center gap-2 font-sans text-xs tracking-[0.25em] uppercase px-9 py-4 rounded-full border transition-all hover:bg-black/5 min-h-[52px] whitespace-nowrap"
              style={{ borderColor: BRAND.GRAPHITE, color: BRAND.GRAPHITE }}
            >
              {SALES_LIVE ? 'Comprar o Pulse' : 'Entrar na Lista VIP'}
            </VipCta>
            </div>
            <div className="flex items-center gap-6 mt-8 pt-8 border-t" style={{ borderColor: `${BRAND.GRAPHITE}15` }}>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full animate-pulse-slow" style={{ backgroundColor: BRAND.GOLD }} />
                <span className="font-sans text-xs leading-tight" style={{ color: BRAND.GRAPHITE, opacity: 0.7 }}>
                  Lançamento 2026
                </span>
              </div>
              <div className="font-sans text-xs leading-tight" style={{ color: BRAND.GRAPHITE, opacity: 0.7 }}>
                30 doses<br />{PULSE_PRODUCT.pricePerDose}
              </div>
            </div>
          </div>

          <div className="relative">
            <div ref={heroVideoRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <video
                src={nucleusLoop.url}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={logoSymbol}
                className="w-[520px] h-[520px] object-contain opacity-50 mix-blend-multiply"
              />
            </div>
            <img
              ref={heroProductRef}
              src={pulseSachets}
              alt="Sachês Haëra Pulse"
              className="relative z-10 w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
              style={{ boxShadow: `0 30px 80px -20px ${BRAND.WINE}60` }}
            />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-12 animate-pulse-slow" style={{ background: `linear-gradient(to bottom, transparent, ${BRAND.WINE})` }} />
        </div>
      </section>

      {/* 2. PROVOCAÇÃO */}
      <section className="py-32 px-6 md:px-10" style={{ backgroundColor: BRAND.WINE }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.4em] uppercase mb-8" style={{ color: BRAND.GOLD }}>O Paradoxo dos Estimulantes</p>
          <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight italic" style={{ color: BRAND.CREAM }}>
            "E se o seu estimulante estivesse te roubando energia amanhã?"
          </h2>
          <p className="font-sans text-base md:text-lg mt-10 leading-relaxed" style={{ color: BRAND.CREAM, opacity: 0.75 }}>
            A maioria dos estimulantes te dá energia hoje e cobra o preço amanhã: ansiedade, insônia, palpitações, cansaço intenso.
            Haëra existe porque performance real não exige sacrifício metabólico.
          </p>
        </div>
      </section>

      {/* 3. POR QUE HAËRA EXISTE (ORIGEM) */}
      <section className="py-32 px-6 md:px-10" style={{ backgroundColor: BRAND.WINE_DEEP }}>
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-sans text-xs tracking-[0.4em] uppercase mb-6 block" style={{ color: BRAND.GOLD }}>Por que Haëra existe</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-10" style={{ color: BRAND.CREAM }}>
            Nasceu da frustração de uma nutricionista esportiva.
          </h2>
          <div className="space-y-6 font-sans text-base md:text-lg leading-relaxed" style={{ color: BRAND.CREAM, opacity: 0.8 }}>
            <p>
              Anos atendendo atletas, vendo o mesmo padrão: rótulos cheios de aditivos, marketing gritando "explosão", corpos esgotados pela exigência de estímulos cada vez mais agressivos.
            </p>
            <p>
              Haëra é a resposta para quem entendeu que <em style={{ color: BRAND.GOLD, fontStyle: 'italic' }}>longevidade vale mais que pico</em> — e que clean label não é tendência, é responsabilidade.
            </p>
          </div>
          <Link to="/origem" className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.25em] uppercase mt-10" style={{ color: BRAND.GOLD }}>
            Conhecer a origem completa <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* 4. VITRINE DO PRODUTO */}
      <section className="py-32 px-6 md:px-10" style={{ backgroundColor: BRAND.CREAM_SOFT }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <span className="font-sans text-xs tracking-[0.4em] uppercase mb-6 block" style={{ color: BRAND.WINE, opacity: 0.7 }}>O Produto</span>
            <h2 className="font-serif text-5xl md:text-6xl font-light mb-2" style={{ color: BRAND.GRAPHITE }}>Pulse</h2>
            <p className="font-serif text-xl mb-8 italic" style={{ color: BRAND.WINE }}>Sistema de ativação corporal</p>

            <div className="grid grid-cols-2 gap-3 mb-10">
              {['Sem cafeína sintética', 'Sem corantes artificiais', 'Sem adoçantes artificiais', 'Alimentos reais'].map(s => (
                <div key={s} className="flex items-center gap-2">
                  <Check size={14} style={{ color: BRAND.GOLD }} />
                  <span className="font-sans text-xs tracking-wide" style={{ color: BRAND.GRAPHITE, opacity: 0.8 }}>{s}</span>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <span className="inline-block font-sans text-[10px] tracking-[0.3em] uppercase px-3 py-1 rounded-full mb-4" style={{ backgroundColor: `${BRAND.TERRACOTTA}25`, color: BRAND.TERRACOTTA }}>
                Lançamento · Edição Limitada
              </span>
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="font-serif text-2xl line-through" style={{ color: BRAND.GRAPHITE, opacity: 0.4 }}>{PULSE_PRODUCT.priceOriginalFormatted}</span>
                <span className="font-serif text-5xl" style={{ color: BRAND.WINE }}>{PULSE_PRODUCT.priceFormatted}</span>
                <span className="font-sans text-xs tracking-wider uppercase" style={{ color: BRAND.GRAPHITE, opacity: 0.6 }}>
                  {PULSE_PRODUCT.weight} · 30 doses
                </span>
              </div>
              <p className="font-sans text-xs mt-2" style={{ color: BRAND.GRAPHITE, opacity: 0.6 }}>
                ou 3x de R$ 49,97 sem juros · {PULSE_PRODUCT.pricePerDose}
              </p>
              <VipCta
                className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.25em] uppercase px-4 py-2 rounded-full mt-3 transition-opacity hover:opacity-80"
                style={{ backgroundColor: `${BRAND.GOLD}20`, color: BRAND.WINE }}
              >
                {SALES_LIVE ? `Comprar · ${PULSE_PRODUCT.priceFormatted}` : `Lista VIP · ${PULSE_PRODUCT.priceVipFormatted}`}
              </VipCta>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <VipCta
                className="font-sans text-xs tracking-[0.25em] uppercase px-9 py-4 rounded-full transition-opacity hover:opacity-90 text-center"
                style={{ backgroundColor: BRAND.WINE, color: BRAND.CREAM }}
              >
                {SALES_LIVE ? 'Comprar o Pulse' : 'Entrar na Lista VIP'}
              </VipCta>
              <Link
                to="/pulse-produto"
                className="font-sans text-xs tracking-[0.25em] uppercase px-9 py-4 rounded-full border text-center"
                style={{ borderColor: BRAND.GRAPHITE, color: BRAND.GRAPHITE }}
              >
                Ver Detalhes
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 overflow-hidden">
            <img
              ref={showcaseRef}
              src={pulsePouch}
              alt="Embalagem Pulse"
              className="w-full rounded-2xl"
              style={{ boxShadow: `0 30px 80px -20px ${BRAND.WINE}40` }}
            />
          </div>
        </div>
      </section>

      {/* 5. SÍMBOLO — SIGNIFICADO */}
      <section className="py-32 px-6 md:px-10" style={{ backgroundColor: BRAND.GRAPHITE }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 md:gap-20 items-center">
          <img
            src={logoSymbolAnimated}
            alt="Símbolo Haëra: núcleo de anéis concêntricos"
            className="w-56 h-56 md:w-72 md:h-72 object-contain"
          />
          <div>
            <p className="font-sans text-xs tracking-[0.4em] uppercase mb-6" style={{ color: BRAND.GOLD }}>O Símbolo</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6" style={{ color: BRAND.CREAM }}>
              Um núcleo, não uma <em className="italic" style={{ color: BRAND.GOLD }}>explosão</em>.
            </h2>
            <p className="font-sans text-base leading-relaxed mb-4" style={{ color: BRAND.CREAM, opacity: 0.75 }}>
              A energia nasce do centro. A performance é consequência — a nutrição sustenta tudo. Um núcleo central sólido, em camadas concêntricas que crescem progressivamente, numa forma orgânica: biologia real, não geometria perfeita.
            </p>
            <p className="font-sans text-base leading-relaxed" style={{ color: BRAND.CREAM, opacity: 0.75 }}>
              Remete a uma célula saudável, um grão nutrido, um tecido vivo — a origem de toda energia verdadeira.
            </p>
          </div>
        </div>
      </section>

      {/* 6. NOVA PROVOCAÇÃO */}
      <section className="py-32 px-6 md:px-10" style={{ backgroundColor: BRAND.OLIVE }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.4em] uppercase mb-8" style={{ color: BRAND.SAGE }}>Uma pergunta antes de continuar</p>
          <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight italic" style={{ color: BRAND.CREAM }}>
            "Você treina pensando nos próximos 30 dias — ou nos próximos 30 anos?"
          </h2>
          <p className="font-sans text-base md:text-lg mt-10 leading-relaxed" style={{ color: BRAND.CREAM, opacity: 0.8 }}>
            É essa pergunta que guia cada decisão da Haëra. Ciência e sensibilidade pelo ritmo de cada corpo.
            Constância em vez de picos isolados. Intencionalidade em cada escolha. Leveza no conhecimento. Longevidade como patrimônio.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mt-8">
            {pillars.map((p, i) => (
              <span key={p} className="font-sans text-[11px] tracking-[0.25em] uppercase" style={{ color: BRAND.GOLD_LIGHT }}>
                {p}{i < pillars.length - 1 && <span style={{ opacity: 0.4 }}> · </span>}
              </span>
            ))}
          </div>
          <Link to="/origem" className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.25em] uppercase mt-10" style={{ color: BRAND.CREAM }}>
            Conhecer a origem da Haëra <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* 7. CTA FINAL */}
      <section className="py-32 px-6 md:px-10" style={{ backgroundColor: BRAND.CREAM }}>
        <div className="max-w-4xl mx-auto text-center">
          <img
            ref={ctaSymbolRef}
            src={logoSymbolAnimated}
            alt=""
            className="w-32 h-32 mx-auto mb-10"
          />
          <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-6" style={{ color: BRAND.GRAPHITE }}>
            Comece sua <em className="italic" style={{ color: BRAND.WINE }}>evolução limpa</em>.
          </h2>
          <p className="font-sans text-base md:text-lg max-w-xl mx-auto mb-10" style={{ color: BRAND.GRAPHITE, opacity: 0.7 }}>
            150g · 30 doses · entrega em todo o Brasil. <span className="line-through opacity-50">{PULSE_PRODUCT.priceOriginalFormatted}</span> {PULSE_PRODUCT.priceFormatted}.
          </p>
          <VipCta
            className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.3em] uppercase px-12 py-5 rounded-full transition-all hover:gap-5"
            style={{ backgroundColor: BRAND.WINE, color: BRAND.CREAM }}
          >
            {SALES_LIVE ? 'Comprar o Pulse' : 'Entrar na Lista VIP'} <ArrowRight size={14} />
          </VipCta>
        </div>
      </section>

      {/* 8. DIFERENCIAIS — minimal, à la Apple. Único bloco de números mantido na Home; */}
      {/* Pilares e o Anel de ingredientes vivem na página do produto (aba Ingredientes + Highlights) */}
      <section className="py-32 px-6 md:px-10" style={{ backgroundColor: BRAND.GRAPHITE }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="font-sans text-xs tracking-[0.4em] uppercase mb-4 block" style={{ color: BRAND.GOLD }}>Por que Pulse</span>
            <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight" style={{ color: BRAND.CREAM }}>
              Tudo que importa.<br />
              <em className="italic" style={{ color: BRAND.GOLD }}>Nada que sobra.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: `${BRAND.CREAM}15` }}>
            {[
              { k: '21', label: 'Ingredientes\nem sinergia' },
              { k: '0', label: 'Cafeína\nsintética' },
              { k: '5g', label: 'Dose única\ndiária' },
              { k: '120mg', label: 'Cafeína natural\ndo guaraná' },
              { k: '100%', label: 'Clean label\ncertificado' },
              { k: '30', label: 'Doses por\nembalagem' },
            ].map(item => (
              <div key={item.label} className="px-6 py-12 text-center" style={{ backgroundColor: BRAND.GRAPHITE }}>
                <div className="font-serif text-5xl md:text-6xl mb-3" style={{ color: BRAND.GOLD }}>{item.k}</div>
                <p className="font-sans text-xs tracking-[0.25em] uppercase whitespace-pre-line" style={{ color: BRAND.CREAM, opacity: 0.7 }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/ciencia" className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.25em] uppercase" style={{ color: BRAND.GOLD }}>
              Conhecer a ciência por trás <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Home;
