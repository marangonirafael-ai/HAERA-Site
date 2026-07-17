import React from 'react';
import nucleusGold from '@/assets/haera-nucleus-gold.png';
import nucleusWine from '@/assets/haera-nucleus-wine.png';
import logoLockupGold from '@/assets/haera-logo-lockup-gold.jpeg';

const WINE = '#722F37';
const GOLD = '#B8964B';
const CREAM = '#F5F2EB';

const channels = [
  {
    icon: '📦',
    title: 'Embalagem Física',
    rules: [
      { label: 'Fundo', value: 'Wine #722F37 em toda a embalagem' },
      { label: 'Símbolo', value: 'Núcleo Nutritivo em Gold — hot stamp frente/topo' },
      { label: 'Nome do produto', value: '"Pulse" em Cormorant Garamond Light, Cream' },
      { label: 'Logotipo "Haëra"', value: 'Canto superior, menor, Gold — hierarquia discreta' },
      { label: 'Princípio', value: 'Máximo respiro visual — clean label premium' },
    ],
  },
  {
    icon: '📱',
    title: 'Instagram / Digital',
    rules: [
      { label: 'Feed', value: 'Fundo Wine com Núcleo centralizado; texto Cream' },
      { label: 'Stories', value: 'Núcleo Gold sobre Wine; nunca fundo branco para Pulse' },
      { label: 'Posts educativos', value: 'Wine + Cream com acentos Gold nos CTAs' },
      { label: 'Regra inviolável', value: 'O Núcleo aparece em TODOS os posts' },
      { label: 'Hashtag', value: '#haërapulse / #nutrirantesdeestimular' },
    ],
  },
  {
    icon: '🎁',
    title: 'Unboxing Experience',
    rules: [
      { label: 'Caixa externa', value: 'Kraft natural + Núcleo hot stamp Gold — máximo contraste' },
      { label: 'Interior', value: 'Papel tissue Wine ou Cream com Núcleo tom-sobre-tom' },
      { label: 'Cartão', value: 'Cormorant Garamond, fundo Cream, assinatura Gold' },
      { label: 'Lacre', value: 'Selo circular com Núcleo em relevo seco' },
      { label: 'Objetivo', value: 'Momento "unbox" como ápice da experiência de marca' },
    ],
  },
  {
    icon: '🏪',
    title: 'Expositor / PDV',
    rules: [
      { label: 'Estrutura', value: 'Cream/natural com faixa Wine identificando Pulse' },
      { label: 'Destaque', value: 'Núcleo Gold em acrílico espelhado ou MDF' },
      { label: 'Sistema de linha', value: 'Cor muda por produto; Núcleo Gold permanece fixo' },
      { label: 'Sinalização', value: 'Wine identifica Pulse em todos os pontos de contato' },
      { label: 'Referência', value: 'Maisons de luxo: cor de produto, marca imutável' },
    ],
  },
];

const donts = [
  'Usar o Núcleo em cor diferente de Gold no contexto Pulse',
  'Aplicar fundo branco em comunicações do Pulse',
  'Remover ou substituir o trema do "ë" em Haëra',
  'Reduzir o logotipo abaixo de 24px digital / 8mm impresso',
  'Misturar as cores de produto (Wine, Petrol, etc.) no mesmo layout',
  'Usar o Núcleo sem área de respiro adequada ao redor',
];

const futureProducts = [
  { name: 'Pulse', color: WINE, colorName: 'Wine', status: 'Lançamento' },
  { name: 'Restore', color: '#1B4D5C', colorName: 'Petrol Blue', status: 'Futuro' },
  { name: 'Balance', color: '#9CAF88', colorName: 'Green Sage', status: 'Futuro' },
  { name: 'Glow', color: '#B8964B', colorName: 'Gold', status: 'Futuro' },
  { name: 'Ground', color: '#C4714A', colorName: 'Terracotta', status: 'Futuro' },
  { name: 'Core', color: '#3F4F45', colorName: 'Olive Green', status: 'Futuro' },
];

const PulsePage: React.FC = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: WINE }}>
      
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4" 
        style={{ backgroundColor: `${WINE}f0`, backdropFilter: 'blur(12px)' }}>
        <a href="/" className="font-serif text-sm tracking-[0.2em] uppercase" style={{ color: CREAM, opacity: 0.7 }}>
          ← Brandbook
        </a>
        <span className="font-serif text-lg tracking-[0.15em]" style={{ color: GOLD }}>
          Haëra × Pulse
        </span>
        <a href="/assets" className="font-serif text-sm tracking-[0.2em] uppercase" style={{ color: CREAM, opacity: 0.7 }}>
          Assets →
        </a>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 opacity-20"
          style={{ background: `radial-gradient(circle at 50% 40%, ${GOLD} 0%, transparent 60%)` }} />
        
        <div className="relative z-10 text-center animate-fade-in">
          <span className="font-sans text-xs tracking-[0.5em] uppercase mb-6 block" style={{ color: GOLD, opacity: 0.8 }}>
            Identidade de Produto
          </span>

          {/* Nucleus symbol */}
          <div className="relative mb-8 flex justify-center">
            <img 
              src={nucleusGold}
              alt="Haëra Pulse — Núcleo Gold"
              className="w-48 h-48 md:w-64 md:h-64 object-contain animate-pulse-slow"
            />
            <div className="absolute inset-0 rounded-full opacity-30"
              style={{ boxShadow: `0 0 80px ${GOLD}` }} />
          </div>

          {/* Product name */}
          <h1 className="font-serif text-7xl md:text-9xl font-light tracking-[0.2em] mb-2" style={{ color: CREAM }}>
            PULSE
          </h1>
          <p className="font-serif text-xl md:text-2xl font-light tracking-[0.1em] mb-2" style={{ color: GOLD }}>
            by Haëra
          </p>
          <p className="font-sans text-sm tracking-[0.3em] uppercase mt-6" style={{ color: CREAM, opacity: 0.6 }}>
            Nutrir antes de estimular
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-16" style={{ background: `linear-gradient(to bottom, transparent, ${GOLD}, transparent)` }} />
        </div>
      </section>

      {/* Strategy: Wine × Gold */}
      <section className="py-24 px-6" style={{ backgroundColor: '#5C2430' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-xs tracking-[0.4em] uppercase mb-4 block" style={{ color: GOLD, opacity: 0.8 }}>
              Estratégia de Cor
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light" style={{ color: CREAM }}>
              Wine × Gold
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Wine */}
            <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: WINE, border: `1px solid ${CREAM}20` }}>
              <div className="w-16 h-16 rounded-full mx-auto mb-4 border-2" style={{ backgroundColor: WINE, borderColor: CREAM }} />
              <h3 className="font-serif text-xl mb-2" style={{ color: CREAM }}>Wine</h3>
              <p className="font-mono text-sm mb-3" style={{ color: GOLD }}>#722F37</p>
              <p className="font-sans text-xs leading-relaxed" style={{ color: CREAM, opacity: 0.7 }}>
                Identidade do produto. Fundo principal. Força e intensidade.
              </p>
              <span className="inline-block mt-4 font-sans text-xs tracking-widest uppercase px-3 py-1 rounded-full" 
                style={{ backgroundColor: `${GOLD}20`, color: GOLD }}>
                Cor do Produto
              </span>
            </div>

            {/* Rule */}
            <div className="flex flex-col items-center justify-center py-8">
              <div className="font-serif text-5xl mb-4" style={{ color: GOLD }}>×</div>
              <p className="font-sans text-xs text-center leading-relaxed tracking-wider" style={{ color: CREAM, opacity: 0.6 }}>
                A cor identifica o produto.<br />O Núcleo identifica a marca.
              </p>
            </div>

            {/* Gold */}
            <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: `${GOLD}15`, border: `1px solid ${GOLD}40` }}>
              <div className="w-16 h-16 rounded-full mx-auto mb-4" style={{ backgroundColor: GOLD }} />
              <h3 className="font-serif text-xl mb-2" style={{ color: CREAM }}>Gold</h3>
              <p className="font-mono text-sm mb-3" style={{ color: GOLD }}>#B8964B</p>
              <p className="font-sans text-xs leading-relaxed" style={{ color: CREAM, opacity: 0.7 }}>
                Identidade corporativa. Símbolo e logo. Excelência permanente.
              </p>
              <span className="inline-block mt-4 font-sans text-xs tracking-widest uppercase px-3 py-1 rounded-full" 
                style={{ backgroundColor: `${GOLD}30`, color: GOLD }}>
                Cor da Marca
              </span>
            </div>
          </div>

          {/* Official Logo Lockup */}
          <div className="rounded-2xl p-8 md:p-12 mb-6 flex flex-col items-center"
            style={{ backgroundColor: '#F5F2EB' }}>
            <span className="font-sans text-xs tracking-[0.4em] uppercase mb-6 block" style={{ color: WINE, opacity: 0.7 }}>
              Logo Oficial Haëra
            </span>
            <img 
              src={logoLockupGold} 
              alt="Logo Oficial Haëra — Símbolo + Logotipo" 
              className="w-full max-w-sm object-contain rounded-lg"
            />
          </div>

          {/* Mockup Preview */}
          <div className="rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-center gap-8"
            style={{ backgroundColor: WINE, border: `2px solid ${GOLD}30` }}>
            <img src={nucleusGold} alt="Núcleo Gold" className="w-32 h-32 md:w-40 md:h-40 object-contain" />
            <div className="text-center md:text-left">
              <p className="font-serif text-xs tracking-[0.3em] uppercase mb-1" style={{ color: GOLD, opacity: 0.7 }}>Haëra</p>
              <h3 className="font-serif text-5xl md:text-6xl font-light tracking-[0.2em]" style={{ color: CREAM }}>
                PULSE
              </h3>
              <p className="font-sans text-xs tracking-[0.3em] uppercase mt-2" style={{ color: CREAM, opacity: 0.5 }}>
                Nutrir antes de estimular
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Channel Guidelines */}
      <section className="py-24 px-6" style={{ backgroundColor: '#3D1820' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-xs tracking-[0.4em] uppercase mb-4 block" style={{ color: GOLD, opacity: 0.8 }}>
              Diretrizes de Aplicação
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light" style={{ color: CREAM }}>
              Por Canal
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {channels.map((channel) => (
              <div key={channel.title} className="rounded-2xl p-8"
                style={{ backgroundColor: `${WINE}80`, border: `1px solid ${GOLD}25` }}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{channel.icon}</span>
                  <h3 className="font-serif text-xl" style={{ color: GOLD }}>
                    {channel.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {channel.rules.map((rule) => (
                    <div key={rule.label} className="flex gap-3">
                      <span className="font-sans text-xs font-medium tracking-wide shrink-0 mt-0.5 w-24" 
                        style={{ color: GOLD, opacity: 0.8 }}>
                        {rule.label}
                      </span>
                      <span className="font-sans text-xs leading-relaxed" style={{ color: CREAM, opacity: 0.75 }}>
                        {rule.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regra de Ouro */}
      <section className="py-24 px-6" style={{ backgroundColor: '#1C0D10' }}>
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-sans text-xs tracking-[0.4em] uppercase mb-6 block" style={{ color: GOLD, opacity: 0.7 }}>
            Regra de Ouro
          </span>
          <blockquote className="font-serif text-3xl md:text-4xl font-light leading-relaxed" style={{ color: CREAM }}>
            "A cor identifica o produto.<br />
            <span style={{ color: GOLD }}>O Núcleo identifica a marca."</span>
          </blockquote>
          <p className="font-sans text-sm mt-8 leading-relaxed max-w-xl mx-auto" style={{ color: CREAM, opacity: 0.6 }}>
            Ao lançar futuros produtos, apenas a cor de fundo muda. O símbolo Núcleo em Gold permanece constante — criando reconhecimento de marca enquanto diferencia cada produto.
          </p>
        </div>
      </section>

      {/* Sistema de Linha */}
      <section className="py-24 px-6" style={{ backgroundColor: '#3D1820' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-xs tracking-[0.4em] uppercase mb-4 block" style={{ color: GOLD, opacity: 0.8 }}>
              Visão de Linha
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light" style={{ color: CREAM }}>
              Sistema de Produtos
            </h2>
            <p className="font-sans text-sm mt-4 max-w-xl mx-auto" style={{ color: CREAM, opacity: 0.6 }}>
              Cada produto terá sua cor. O Núcleo Gold permanece a assinatura imutável da Haëra.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {futureProducts.map((product) => (
              <div key={product.name} 
                className={`rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 ${product.status === 'Lançamento' ? 'ring-2' : 'opacity-60'}`}
                style={{ 
                  backgroundColor: product.color, 
                  border: product.status === 'Lançamento' ? `2px solid ${GOLD}` : `1px solid ${CREAM}20`
                }}>
                <div className="w-12 h-12 rounded-full mb-3 flex items-center justify-center"
                  style={{ backgroundColor: GOLD, opacity: 0.9 }}>
                  <span className="font-serif text-sm" style={{ color: '#1C0D10' }}>H</span>
                </div>
                <h4 className="font-serif text-xl font-light mb-1" style={{ color: CREAM }}>
                  {product.name}
                </h4>
                <p className="font-sans text-xs mb-2" style={{ color: CREAM, opacity: 0.7 }}>
                  {product.colorName}
                </p>
                <span className="font-sans text-xs tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{ 
                    backgroundColor: product.status === 'Lançamento' ? GOLD : `${CREAM}15`,
                    color: product.status === 'Lançamento' ? '#1C0D10' : CREAM,
                    opacity: product.status === 'Lançamento' ? 1 : 0.8
                  }}>
                  {product.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Don'ts */}
      <section className="py-24 px-6" style={{ backgroundColor: '#1C0D10' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-sans text-xs tracking-[0.4em] uppercase mb-4 block" style={{ color: GOLD, opacity: 0.8 }}>
              Uso Incorreto
            </span>
            <h2 className="font-serif text-4xl font-light" style={{ color: CREAM }}>
              O que nunca fazer
            </h2>
          </div>
          <div className="space-y-3">
            {donts.map((dont, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-lg"
                style={{ backgroundColor: `${WINE}30`, border: `1px solid ${WINE}60` }}>
                <span className="font-serif text-lg shrink-0 mt-0.5" style={{ color: '#E54A5A' }}>✗</span>
                <p className="font-sans text-sm leading-relaxed" style={{ color: CREAM, opacity: 0.8 }}>
                  {dont}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-32 px-6 text-center" style={{ backgroundColor: WINE }}>
        <div className="max-w-3xl mx-auto">
          <img src={nucleusWine} alt="Haëra Pulse" className="w-20 h-20 mx-auto mb-8 object-contain opacity-80" />
          <h2 className="font-serif text-5xl md:text-6xl font-light tracking-[0.2em] mb-4" style={{ color: CREAM }}>
            PULSE
          </h2>
          <p className="font-serif text-xl font-light mb-8" style={{ color: GOLD }}>
            by Haëra
          </p>
          <p className="font-sans text-sm tracking-[0.3em] uppercase" style={{ color: CREAM, opacity: 0.5 }}>
            Nutrir antes de estimular
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a href="/" className="font-sans text-xs tracking-[0.2em] uppercase px-8 py-3 rounded-full transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: GOLD, color: '#1C0D10' }}>
              Ver Brandbook Completo
            </a>
            <a href="/assets" className="font-sans text-xs tracking-[0.2em] uppercase px-8 py-3 rounded-full transition-all duration-300 hover:opacity-90"
              style={{ border: `1px solid ${CREAM}40`, color: CREAM }}>
              Download Assets
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t" style={{ backgroundColor: '#1C0D10', borderColor: `${GOLD}20` }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs" style={{ color: CREAM, opacity: 0.4 }}>
            © 2024 Haëra. Todos os direitos reservados.
          </p>
          <p className="font-serif text-sm tracking-[0.1em]" style={{ color: GOLD, opacity: 0.7 }}>
            Haëra × Pulse — Identidade Visual 2024
          </p>
          <p className="font-sans text-xs tracking-[0.2em] uppercase" style={{ color: CREAM, opacity: 0.4 }}>
            Nutrir antes de estimular
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PulsePage;
