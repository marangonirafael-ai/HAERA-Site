import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Leaf, Zap, Heart, Sparkles, Activity } from 'lucide-react';
import SiteLayout from '@/components/site/SiteLayout';
import { BRAND, PULSE_PRODUCT, STORE_URL } from '@/lib/brand';
import { useCart } from '@/contexts/CartContext';
import { useScrollParallax } from '@/hooks/useScrollParallax';
import logoSymbol from '@/assets/haera-logo-symbol.jpeg';
import symbolWine from '@/assets/haera-symbol-wine.jpeg';
import pulsePouch from '@/assets/pulse-pouch.jpeg';
import pulseSachets from '@/assets/pulse-sachets.jpeg';
import nucleusLoop from '@/assets/nucleus-loop.mp4.asset.json';
import lemonCore from '@/assets/lemon-core.jpg';

const pillars = [
  { icon: Leaf, title: 'Clean Label', text: '21 ingredientes em sinergia. Zero aditivos, corantes ou adoçantes artificiais.' },
  { icon: Zap, title: 'Energia Contínua', text: 'Cafeína natural + Complexo B. Energia estável, sem picos nem quedas.' },
  { icon: Activity, title: 'Oxigenação Real', text: 'Beterraba, uva e cacau elevam óxido nítrico naturalmente.' },
  { icon: Heart, title: 'Recuperação & Imunidade', text: 'Magnésio, zinco, vitaminas C e D para o corpo se reconstruir.' },
  { icon: Sparkles, title: 'Saúde Intestinal', text: 'Inulina e farinha de banana nutrem a microbiota — onde tudo começa.' },
];

const ingredients = [
  'Vitamina B1', 'Vitamina B2', 'Vitamina B3', 'Vitamina B6', 'Vitamina B12',
  'Vitamina C', 'Vitamina D', 'Magnésio', 'Cálcio', 'Ferro',
  'Zinco', 'Banana', 'Aveia', 'Uva', 'Guaraná',
  'Chá verde', 'Beterraba', 'Cacau', 'Stevia', 'Inulina', 'Clorella',
];

const Home: React.FC = () => {
  const { addItem } = useCart();
  const heroProductRef = useScrollParallax<HTMLImageElement>({ translateY: -90, scale: 0.08, rotate: -2 });
  const heroVideoRef = useScrollParallax<HTMLDivElement>({ translateY: 70 });
  const showcaseRef = useScrollParallax<HTMLImageElement>({ translateY: -80, scale: 0.07, rotate: 2 });
  const ingredientsBgRef = useScrollParallax<HTMLImageElement>({ translateY: 0, rotate: 8, scale: 0.05 });
  const ctaSymbolRef = useScrollParallax<HTMLImageElement>({ translateY: -20, scale: 0.04 });
  const manifestoSymbolRef = useScrollParallax<HTMLImageElement>({ translateY: -25, scale: 0.03 });

  const handleAdd = () => addItem({
    id: PULSE_PRODUCT.id,
    name: `Haëra ${PULSE_PRODUCT.name} ${PULSE_PRODUCT.weight}`,
    price: PULSE_PRODUCT.price,
    image: pulsePouch,
  });

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: BRAND.CREAM }}>
        <div
          className="absolute inset-0 opacity-40"
          style={{ background: `radial-gradient(ellipse at 70% 50%, ${BRAND.GOLD}30 0%, transparent 60%)` }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <span className="font-sans text-[11px] tracking-[0.4em] uppercase mb-6 block" style={{ color: BRAND.WINE, opacity: 0.7 }}>
              Ativador Corporal · Clean Label · 2026
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
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-sans text-xs tracking-[0.25em] uppercase px-9 py-4 rounded-full border transition-all hover:bg-black/5 min-h-[52px] whitespace-nowrap"
              style={{ borderColor: BRAND.GRAPHITE, color: BRAND.GRAPHITE }}
            >
              Comprar · <span className="line-through opacity-50">{PULSE_PRODUCT.priceOriginalFormatted}</span> {PULSE_PRODUCT.priceFormatted}
            </a>
            </div>
            <div className="flex items-center gap-6 mt-12 pt-8 border-t" style={{ borderColor: `${BRAND.GRAPHITE}15` }}>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full animate-pulse-slow" style={{ backgroundColor: BRAND.GOLD }} />
                <span className="font-sans text-xs leading-tight" style={{ color: BRAND.GRAPHITE, opacity: 0.7 }}>
                  Lançamento 2026<br />Edição limitada
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

      {/* HOOK / PROVOCATION */}
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

      {/* FLAVOR: LEMON */}
      <section className="py-28 px-6 md:px-10" style={{ backgroundColor: BRAND.CREAM }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-[auto_1fr] gap-12 md:gap-20 items-center">
          <img
            src={lemonCore}
            alt="Núcleo de limão cortado"
            loading="lazy"
            width={520}
            height={520}
            className="w-56 h-56 md:w-80 md:h-80 object-cover rounded-full shadow-xl"
            style={{ boxShadow: `0 30px 80px -20px ${BRAND.GOLD}80` }}
          />
          <div>
            <p className="font-sans text-xs tracking-[0.4em] uppercase mb-6" style={{ color: BRAND.WINE, opacity: 0.7 }}>Sabor único</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6" style={{ color: BRAND.GRAPHITE }}>
              No coração do Pulse, <em className="italic" style={{ color: BRAND.WINE }}>limão</em>.
            </h2>
            <p className="font-sans text-base leading-relaxed" style={{ color: BRAND.GRAPHITE, opacity: 0.75 }}>
              Um frescor cítrico natural, leve e sutil — que ativa o paladar sem mascarar a pureza dos ingredientes. Sem aromas artificiais, apenas o brilho do limão.
            </p>
          </div>
        </div>
      </section>

      {/* MANIFESTO STRIP */}
      <section className="py-28 px-6 md:px-10" style={{ backgroundColor: BRAND.CREAM_SOFT }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-[auto_1fr] gap-12 md:gap-20 items-center">
          <img
            ref={manifestoSymbolRef}
            src={symbolWine}
            alt="Núcleo Haëra"
            className="w-56 h-56 md:w-72 md:h-72 object-contain"
            style={{ mixBlendMode: 'multiply' }}
          />
          <div>
            <p className="font-sans text-xs tracking-[0.4em] uppercase mb-6" style={{ color: BRAND.WINE, opacity: 0.7 }}>Nosso Manifesto</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6" style={{ color: BRAND.GRAPHITE }}>
              Nutrir antes de <em className="italic" style={{ color: BRAND.WINE }}>estimular</em>.
            </h2>
            <p className="font-sans text-base leading-relaxed mb-4" style={{ color: BRAND.GRAPHITE, opacity: 0.75 }}>
              Acreditamos que a verdadeira performance nasce do equilíbrio natural do corpo, não do cansaço intenso. Que o organismo deve ser nutrido com biodisponibilidade real, e não estimulado por química barata.
            </p>
            <Link to="/manifesto" className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.25em] uppercase mt-4" style={{ color: BRAND.WINE }}>
              Ler manifesto completo <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>


      {/* PRODUCT SHOWCASE */}
      <section className="py-32 px-6 md:px-10" style={{ backgroundColor: BRAND.CREAM_SOFT }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
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
              <span className="inline-block font-sans text-[10px] tracking-[0.3em] uppercase px-3 py-1 rounded-full mb-4" style={{ backgroundColor: `${BRAND.GOLD}25`, color: BRAND.WINE }}>
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
              <a
                href="mailto:contato.haera@gmail.com?subject=Quero%20entrar%20na%20Lista%20VIP%20-%20Pulse"
                className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.25em] uppercase px-4 py-2 rounded-full mt-3 transition-opacity hover:opacity-80"
                style={{ backgroundColor: `${BRAND.GOLD}20`, color: BRAND.WINE }}
              >
                Lista VIP · {PULSE_PRODUCT.priceVipFormatted}
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs tracking-[0.25em] uppercase px-9 py-4 rounded-full transition-opacity hover:opacity-90 text-center"
                style={{ backgroundColor: BRAND.WINE, color: BRAND.CREAM }}
              >
                Comprar na Loja
              </a>
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

      {/* PILLARS */}
      <section className="py-32 px-6 md:px-10" style={{ backgroundColor: BRAND.CREAM }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="font-sans text-xs tracking-[0.4em] uppercase mb-4 block" style={{ color: BRAND.WINE, opacity: 0.7 }}>5 Pilares Funcionais</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light" style={{ color: BRAND.GRAPHITE }}>
              Como o Pulse atua no seu corpo
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {pillars.map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                className="p-8 rounded-2xl transition-all hover:translate-y-[-4px]"
                style={{ backgroundColor: i === 0 ? BRAND.WINE : BRAND.CREAM_SOFT, color: i === 0 ? BRAND.CREAM : BRAND.GRAPHITE }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: i === 0 ? `${BRAND.GOLD}30` : `${BRAND.WINE}15` }}>
                  <Icon size={20} style={{ color: i === 0 ? BRAND.GOLD : BRAND.WINE }} />
                </div>
                <h3 className="font-serif text-xl mb-3">{title}</h3>
                <p className="font-sans text-sm leading-relaxed" style={{ opacity: i === 0 ? 0.85 : 0.7 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS — minimal, à la Apple */}
      <section className="py-32 px-6 md:px-10" style={{ backgroundColor: BRAND.GRAPHITE }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="font-sans text-xs tracking-[0.4em] uppercase mb-4 block" style={{ color: BRAND.GOLD }}>Por que Pulse</span>
            <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight" style={{ color: BRAND.CREAM }}>
              Tudo que importa.<br />
              <em className="italic" style={{ color: BRAND.GOLD }}>Nada que sobra.</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: `${BRAND.CREAM}15` }}>
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

      {/* INGREDIENTS RING */}
      <section className="py-32 px-6 md:px-10 overflow-hidden" style={{ backgroundColor: BRAND.CREAM }}>
        <div className="max-w-6xl mx-auto text-center">
          <span className="font-sans text-xs tracking-[0.4em] uppercase mb-4 block" style={{ color: BRAND.WINE, opacity: 0.7 }}>Sinergia</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4" style={{ color: BRAND.GRAPHITE }}>
            21 ingredientes em equilíbrio
          </h2>
          <p className="font-sans text-sm max-w-xl mx-auto mb-16" style={{ color: BRAND.GRAPHITE, opacity: 0.65 }}>
            Cada componente do Pulse foi escolhido por uma razão clínica — e por como conversa com os outros 20.
          </p>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <img
                ref={ingredientsBgRef}
                src={logoSymbol}
                alt=""
                aria-hidden
                className="w-[600px] h-[600px] max-w-full object-contain"
                style={{ opacity: 0.2, mixBlendMode: 'multiply' }}
              />
            </div>
            <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {ingredients.map(ing => (
                <div
                  key={ing}
                  className="px-4 py-3 rounded-full font-sans text-xs tracking-wide border transition-all hover:bg-black/5 backdrop-blur-sm"
                  style={{ borderColor: `${BRAND.WINE}30`, color: BRAND.GRAPHITE, backgroundColor: `${BRAND.CREAM}cc` }}
                >
                  {ing}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
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
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 md:px-10" style={{ backgroundColor: BRAND.CREAM }}>
        <div className="max-w-4xl mx-auto text-center">
          <img
            ref={ctaSymbolRef}
            src={logoSymbol}
            alt=""
            className="w-32 h-32 mx-auto mb-10"
            style={{ mixBlendMode: 'multiply' }}
          />
          <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-6" style={{ color: BRAND.GRAPHITE }}>
            Comece sua <em className="italic" style={{ color: BRAND.WINE }}>evolução limpa</em>.
          </h2>
          <p className="font-sans text-base md:text-lg max-w-xl mx-auto mb-10" style={{ color: BRAND.GRAPHITE, opacity: 0.7 }}>
            150g · 30 doses · entrega em todo o Brasil. <span className="line-through opacity-50">{PULSE_PRODUCT.priceOriginalFormatted}</span> {PULSE_PRODUCT.priceFormatted}.
          </p>
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.3em] uppercase px-12 py-5 rounded-full transition-all hover:gap-5"
            style={{ backgroundColor: BRAND.WINE, color: BRAND.CREAM }}
          >
            Comprar na Loja <ArrowRight size={14} />
          </a>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Home;
