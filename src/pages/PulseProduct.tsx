import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight, Check, Minus, Plus, ChevronDown, ShieldCheck } from 'lucide-react';
import SiteLayout from '@/components/site/SiteLayout';
import { BRAND, PULSE_PRODUCT } from '@/lib/brand';
import { useCart } from '@/contexts/CartContext';
import pulsePouch from '@/assets/pulse-pouch.jpeg';
import pulseSachets from '@/assets/pulse-sachets.jpeg';
import logoSymbol from '@/assets/haera-logo-symbol.jpeg';

const tabs = ['Descrição', 'Ingredientes', 'Como tomar', 'Nutricional'] as const;
type Tab = typeof tabs[number];

const tabContent: Record<Tab, React.ReactNode> = {
  'Descrição': (
    <div className="space-y-4 font-sans text-sm leading-relaxed">
      <p>Pulse é o primeiro ativador do sistema corporal Haëra: uma fórmula clean label premium com 21 ingredientes naturais em sinergia, formulada para sustentar performance sem comprometer a saúde a longo prazo.</p>
      <p>Diferente dos estimulantes convencionais que dependem de cafeína anidra em altas doses, o Pulse combina cafeína natural do guaraná, complexo B, beterraba, cacau, uva, minerais quelatos e prebióticos. O resultado: energia estável, foco mental aguçado, oxigenação real e zero queda.</p>
    </div>
  ),
  'Ingredientes': (
    <div className="font-sans text-sm leading-relaxed">
      <p className="mb-4">21 ingredientes em sinergia — vitaminas, minerais e botânicos, sem corantes ou aditivos sintéticos.</p>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
        {['Vitamina B1', 'Vitamina B2', 'Vitamina B3', 'Vitamina B6', 'Vitamina B12', 'Vitamina C', 'Vitamina D', 'Magnésio', 'Cálcio', 'Ferro', 'Zinco', 'Banana', 'Aveia', 'Uva', 'Guaraná', 'Chá verde', 'Beterraba', 'Cacau', 'Stevia', 'Inulina', 'Clorella'].map(i => (
          <li key={i} className="flex items-center gap-2"><Check size={12} style={{ color: BRAND.GOLD }} />{i}</li>
        ))}
      </ul>
      <p className="mt-4 text-xs italic" style={{ opacity: 0.7 }}>Clorella entra como corante natural, somando seus benefícios nutricionais. Sem cafeína sintética. Sem corantes ou adoçantes artificiais.</p>
    </div>
  ),
  'Como tomar': (
    <div className="space-y-4 font-sans text-sm leading-relaxed">
      <p>Diluir 1 sachê em 100–200ml de água ou sua bebida de preferência. O produto pode ser ingerido quente ou frio. 20 a 30 minutos antes do treino ou do desafio cognitivo do dia.</p>
      <p style={{ opacity: 0.7 }}>Não exceder a recomendação. Conservar em local seco e arejado.</p>
    </div>
  ),
  'Nutricional': (
    <div className="font-sans text-sm space-y-3">
      <div className="text-xs" style={{ opacity: 0.7 }}>
        <p>Porção por embalagem: 30 porções · Porção: 5g (1 stick)</p>
        <p>Valores por 100ml (5g de pó + água)</p>
      </div>
      <table className="w-full text-xs">
        <thead>
          <tr style={{ borderBottom: `1px solid ${BRAND.WINE}30` }}>
            <th className="text-left py-2">Nutriente</th>
            <th className="text-right">100ml</th>
            <th className="text-right">%VD*</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['Valor Energético', '6 kcal', '—'],
            ['Fibras', '4 g', '16%'],
            ['Cálcio', '180 mg', '18%'],
            ['Magnésio', '63 mg', '15%'],
            ['Vitamina C', '45 mg', '100%'],
            ['Niacina', '15 mg', '94%'],
            ['Vitamina E', '10 mg', '67%'],
            ['Ferro', '14 mg', '100%'],
            ['Zinco', '7 mg', '64%'],
            ['Vitamina B6', '1,3 mg', '100%'],
            ['Vitamina B1', '1,2 mg', '100%'],
            ['Vitamina B2', '1,2 mg', '100%'],
            ['Vitamina D', '5 mcg', '33%'],
            ['Vitamina B12', '2,4 mcg', '100%'],
          ].map(r => (
            <tr key={r[0]} style={{ borderBottom: `1px solid ${BRAND.GRAPHITE}10` }}>
              <td className="py-2">{r[0]}</td>
              <td className="text-right">{r[1]}</td>
              <td className="text-right" style={{ opacity: 0.6 }}>{r[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-[11px] mt-3" style={{ opacity: 0.6 }}>*% Valores Diários de referência com base em uma dieta de 2.000 kcal ou 8.400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas.</p>
      <p className="text-[11px]" style={{ opacity: 0.6 }}>Não contém quantidades significativas de carboidratos, açúcares totais, açúcares adicionados, proteínas, gorduras totais, gorduras saturadas, gorduras trans e sódio.</p>
    </div>
  ),
};

const objections = [
  { q: '"R$149,90 não é caro pra pré-treino?"', a: 'É caro se comparar com estimulante sintético. É o oposto se comparar com o que entrega: 21 ingredientes reais pelo preço de um isolado. Você paga pela fórmula, não pela marca.' },
  { q: '"Não sinto o kick."', a: 'O kick sintético é estresse do organismo. Haëra entrega eficiência mitocondrial — você treina mais, com menos esforço cardíaco.' },
  { q: '"Quero formigamento."', a: 'Formigamento é distração. Foco é o que te faz completar a última repetição com técnica perfeita.' },
  { q: '"Mineral é tudo igual."', a: 'Minerais comuns competem entre si e têm baixa absorção. Quelatos são "VIPs" no seu sistema digestivo.' },
  { q: '"Isso é regulamentado? Tem registro?"', a: 'Sim. Fabricado por indústria licenciada, com Responsável Técnica acompanhando cada lote. Clean label não significa sem controle — significa controle sem excesso.' },
  { q: '"Nunca ouvi falar."', a: 'As melhores descobertas são as que priorizam ciência e pureza antes do marketing de massa.' },
  { q: '"Só tomo para treinar."', a: 'A sinergia de bioativos do Pulse é um excelente nootrópico natural para qualquer desafio cognitivo.' },
];

const PulseProduct: React.FC = () => {
  const { addItem } = useCart();
  const location = useLocation();
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<Tab>('Descrição');
  const [activeImg, setActiveImg] = useState(0);
  const [openObj, setOpenObj] = useState<number | null>(0);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.hash]);

  const images = [pulseSachets, pulsePouch];

  const handleAdd = () => addItem({
    id: PULSE_PRODUCT.id,
    name: `Haëra ${PULSE_PRODUCT.name} ${PULSE_PRODUCT.weight}`,
    price: PULSE_PRODUCT.price,
    image: pulsePouch,
  }, qty);

  return (
    <SiteLayout>
      <section className="pt-32 pb-20 px-6 md:px-10" style={{ backgroundColor: BRAND.CREAM }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Gallery */}
          <div>
            <div className="rounded-3xl overflow-hidden mb-4 aspect-square flex items-center justify-center" style={{ backgroundColor: BRAND.CREAM_SOFT }}>
              <img src={images[activeImg]} alt="Haëra Pulse" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className="aspect-square rounded-xl overflow-hidden border-2 transition-all"
                  style={{ borderColor: activeImg === i ? BRAND.WINE : 'transparent' }}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <span className="font-sans text-xs tracking-[0.4em] uppercase mb-4 block" style={{ color: BRAND.WINE, opacity: 0.7 }}>
              Haëra · Ativador corporal clean label
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-light mb-2" style={{ color: BRAND.GRAPHITE }}>Pulse</h1>
            <p className="font-serif text-xl italic mb-6" style={{ color: BRAND.WINE }}>{PULSE_PRODUCT.tagline}</p>

            <div className="mb-2">
              <span className="inline-block font-sans text-[10px] tracking-[0.3em] uppercase px-3 py-1 rounded-full mb-4" style={{ backgroundColor: `${BRAND.TERRACOTTA}25`, color: BRAND.TERRACOTTA }}>
                Lançamento · Edição Limitada
              </span>
            </div>
            <div className="rounded-2xl p-5 mb-3" style={{ backgroundColor: BRAND.CREAM_SOFT }}>
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div>
                  <p className="font-sans text-[10px] tracking-[0.25em] uppercase mb-1" style={{ color: BRAND.GRAPHITE, opacity: 0.55 }}>De</p>
                  <p className="font-serif text-base line-through" style={{ color: BRAND.GRAPHITE, opacity: 0.5 }}>{PULSE_PRODUCT.priceOriginalFormatted}</p>
                  <p className="font-sans text-[10px] mt-1" style={{ color: BRAND.GRAPHITE, opacity: 0.5 }}>{PULSE_PRODUCT.pricePerDoseOriginal}</p>
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-[0.25em] uppercase mb-1" style={{ color: BRAND.WINE }}>Lançamento</p>
                  <p className="font-serif text-3xl" style={{ color: BRAND.WINE }}>{PULSE_PRODUCT.priceFormatted}</p>
                  <p className="font-sans text-[10px] mt-1" style={{ color: BRAND.GRAPHITE, opacity: 0.6 }}>{PULSE_PRODUCT.pricePerDose}</p>
                </div>
                <div className="rounded-lg px-2 py-1 -m-1" style={{ backgroundColor: `${BRAND.GOLD}20` }}>
                  <p className="font-sans text-[10px] tracking-[0.25em] uppercase mb-1" style={{ color: BRAND.WINE }}>Lista VIP</p>
                  <p className="font-serif text-2xl" style={{ color: BRAND.WINE }}>{PULSE_PRODUCT.priceVipFormatted}</p>
                  <p className="font-sans text-[10px] mt-1" style={{ color: BRAND.GRAPHITE, opacity: 0.6 }}>{PULSE_PRODUCT.pricePerDoseVip}</p>
                  <a
                    href="mailto:contato.haera@gmail.com?subject=Quero%20entrar%20na%20Lista%20VIP%20-%20Pulse"
                    className="inline-flex items-center gap-1 font-sans text-[9px] tracking-[0.2em] uppercase mt-1 transition-opacity hover:opacity-80"
                    style={{ color: BRAND.WINE }}
                  >
                    Entrar na Lista VIP →
                  </a>
                </div>
              </div>
              <p className="font-sans text-xs" style={{ color: BRAND.GRAPHITE, opacity: 0.65 }}>
                {PULSE_PRODUCT.weight} · {PULSE_PRODUCT.doses} doses · ou 3x de R$ 49,97 sem juros
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8 p-5 rounded-2xl" style={{ backgroundColor: BRAND.CREAM_SOFT }}>
              {['Sem cafeína sintética', 'Sem corantes artificiais', 'Sem adoçantes artificiais', 'Alimentos reais'].map(s => (
                <div key={s} className="flex items-center gap-2">
                  <Check size={14} style={{ color: BRAND.GOLD }} />
                  <span className="font-sans text-xs" style={{ color: BRAND.GRAPHITE }}>{s}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="font-sans text-xs tracking-[0.2em] uppercase" style={{ color: BRAND.GRAPHITE, opacity: 0.7 }}>Quantidade</span>
              <div className="flex items-center gap-3 border rounded-full px-2 py-1" style={{ borderColor: `${BRAND.GRAPHITE}30` }}>
                <button onClick={() => setQty(q => Math.max(1, q - 1))} className="p-2 hover:opacity-60"><Minus size={14} /></button>
                <span className="font-sans text-sm w-6 text-center">{qty}</span>
                <button onClick={() => setQty(q => q + 1)} className="p-2 hover:opacity-60"><Plus size={14} /></button>
              </div>
            </div>

            <div className="flex flex-col gap-3 mb-10">
              <button
                onClick={handleAdd}
                className="font-sans text-xs tracking-[0.3em] uppercase px-9 py-4 rounded-full transition-opacity hover:opacity-90 inline-flex items-center justify-center gap-2"
                style={{ backgroundColor: BRAND.WINE, color: BRAND.CREAM }}
              >
                Comprar o Pulse <ArrowRight size={14} />
              </button>
              <p className="font-sans text-[11px] text-center" style={{ color: BRAND.GRAPHITE, opacity: 0.55 }}>
                Pix, cartão ou boleto · Frete grátis acima de R$150
              </p>
            </div>

            {/* Tabs */}
            <div>
              <div className="flex gap-1 border-b mb-6 overflow-x-auto" style={{ borderColor: `${BRAND.GRAPHITE}15` }}>
                {tabs.map(t => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className="font-sans text-xs tracking-[0.2em] uppercase px-4 py-3 border-b-2 transition-all whitespace-nowrap"
                    style={{
                      borderColor: tab === t ? BRAND.WINE : 'transparent',
                      color: tab === t ? BRAND.WINE : BRAND.GRAPHITE,
                      opacity: tab === t ? 1 : 0.6,
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div style={{ color: BRAND.GRAPHITE }}>{tabContent[tab]}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Statement à la Apple */}
      <section className="py-32 md:py-40 px-6 md:px-10" style={{ backgroundColor: BRAND.WINE_NIGHT }}>
        <div className="max-w-5xl mx-auto text-center">
          <span className="font-sans text-xs tracking-[0.4em] uppercase mb-8 block" style={{ color: BRAND.GOLD }}>
            Sinta a diferença
          </span>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-12" style={{ color: BRAND.CREAM }}>
            Energia que <em className="italic" style={{ color: BRAND.GOLD }}>fica</em>.<br />
            Sem o preço de <em className="italic" style={{ color: BRAND.GOLD }}>amanhã</em>.
          </h2>
          <p className="font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: BRAND.CREAM, opacity: 0.7 }}>
            Pulse foi desenhado para o corpo que treina hoje, trabalha amanhã e vive a vida toda.
            Performance sem dívida metabólica.
          </p>
        </div>
      </section>

      {/* Highlights — formato Apple */}
      <section className="py-32 px-6 md:px-10" style={{ backgroundColor: BRAND.CREAM }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { eyebrow: 'Foco', title: 'Clareza mental sem ansiedade.', text: 'L-Teanina + cafeína natural + Complexo B trabalham em conjunto para sustentar atenção sem agitação.', natural: false },
              { eyebrow: 'Oxigenação', title: 'Mais sangue. Mais oxigênio.', text: 'Beterraba e uva elevam óxido nítrico naturalmente — promovendo fluxo sanguíneo e oxigenação de forma equilibrada.', natural: true },
              { eyebrow: 'Recuperação', title: 'O treino acaba. O cuidado continua.', text: 'Magnésio quelato e zinco apoiam reparo muscular e síntese hormonal entre sessões.', natural: false },
              { eyebrow: 'Intestino', title: 'Energia começa onde nasce.', text: 'Inulina e farinha de banana verde nutrem a microbiota — base de absorção, imunidade e disposição.', natural: true },
            ].map(card => (
              <div key={card.title} className="rounded-3xl p-10 md:p-14 transition-transform hover:scale-[1.01]" style={{ backgroundColor: card.natural ? `${BRAND.SAGE}20` : BRAND.CREAM_SOFT }}>
                <span className="font-sans text-[10px] tracking-[0.4em] uppercase mb-6 block" style={{ color: card.natural ? BRAND.OLIVE : BRAND.WINE, opacity: 0.8 }}>
                  {card.eyebrow}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl font-light leading-tight mb-5" style={{ color: BRAND.GRAPHITE }}>
                  {card.title}
                </h3>
                <p className="font-sans text-sm md:text-base leading-relaxed" style={{ color: BRAND.GRAPHITE, opacity: 0.7 }}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparativo */}
      <section className="py-24 px-6 md:px-10" style={{ backgroundColor: BRAND.CREAM_SOFT }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-sans text-xs tracking-[0.4em] uppercase mb-4 block" style={{ color: BRAND.WINE }}>Comparativo</span>
            <h2 className="font-serif text-4xl font-light" style={{ color: BRAND.GRAPHITE }}>Pulse vs. Estimulantes Convencionais</h2>
          </div>
          <div className="rounded-2xl overflow-hidden border" style={{ borderColor: `${BRAND.WINE}20`, backgroundColor: BRAND.CREAM }}>
            {[
              ['Filosofia', 'Estímulo isolado e imediato', 'Otimização fisiológica integrada'],
              ['Composição', 'Ingredientes isolados (cafeína anidra, taurina)', '21 ingredientes naturais em sinergia'],
              ['Pureza', 'Aditivos, corantes, adoçantes artificiais', '100% Clean Label'],
              ['Energia', 'Cafeína anidra em altas doses', 'Cafeína natural + Complexo B'],
              ['Saúde sistêmica', 'Limitado ou ausente', 'Suporte intestino, imunidade, recuperação'],
              ['Efeitos colaterais', 'Queda de energia, ansiedade, palpitações, insônia', 'Clareza, energia estável'],
              ['Resultado', 'Pump momentâneo', 'Constância, resistência, foco'],
            ].map((row, i) => (
              <div key={row[0]} className="grid grid-cols-3 gap-4 px-6 py-4" style={{ borderTop: i > 0 ? `1px solid ${BRAND.GRAPHITE}10` : 'none' }}>
                <div className="font-sans text-xs tracking-wider uppercase" style={{ color: BRAND.GRAPHITE, opacity: 0.6 }}>{row[0]}</div>
                <div className="font-sans text-sm" style={{ color: BRAND.GRAPHITE, opacity: 0.5 }}>{row[1]}</div>
                <div className="font-sans text-sm font-medium" style={{ color: BRAND.WINE }}>{row[2]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Respostas honestas */}
      <section id="respostas-honestas" className="py-24 px-6 md:px-10" style={{ backgroundColor: BRAND.WINE }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <img src={logoSymbol} alt="" className="w-20 h-20 mx-auto mb-6" style={{ mixBlendMode: 'screen', opacity: 0.9 }} />
            <span className="font-sans text-xs tracking-[0.4em] uppercase mb-4 block" style={{ color: BRAND.GOLD }}>Respostas Honestas</span>
            <h2 className="font-serif text-4xl font-light" style={{ color: BRAND.CREAM }}>Sem floreio. Sem hype.</h2>
          </div>
          <div className="space-y-3">
            {objections.map((o, i) => (
              <div key={i} className="rounded-xl overflow-hidden" style={{ backgroundColor: BRAND.WINE_DEEP }}>
                <button
                  onClick={() => setOpenObj(openObj === i ? null : i)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left"
                >
                  <span className="font-serif text-lg italic" style={{ color: BRAND.CREAM }}>{o.q}</span>
                  <ChevronDown size={18} style={{ color: BRAND.GOLD, transform: openObj === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                </button>
                {openObj === i && (
                  <div className="px-6 pb-5 font-sans text-sm leading-relaxed animate-fade-in" style={{ color: BRAND.CREAM, opacity: 0.85 }}>
                    {o.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl p-8 text-center flex flex-col items-center gap-4" style={{ backgroundColor: BRAND.WINE_DEEP }}>
            <ShieldCheck size={22} style={{ color: BRAND.GOLD }} />
            <p className="font-serif text-xl italic" style={{ color: BRAND.CREAM }}>
              Ainda com dúvida?
            </p>
            <p className="font-sans text-sm max-w-md" style={{ color: BRAND.CREAM, opacity: 0.75 }}>
              Compre agora com garantia de troca — se não sentir a diferença, resolvemos.
            </p>
            <button
              onClick={handleAdd}
              className="font-sans text-xs tracking-[0.25em] uppercase px-8 py-3 rounded-full transition-opacity hover:opacity-90"
              style={{ backgroundColor: BRAND.GOLD, color: BRAND.WINE_NIGHT }}
            >
              Comprar o Pulse
            </button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default PulseProduct;
