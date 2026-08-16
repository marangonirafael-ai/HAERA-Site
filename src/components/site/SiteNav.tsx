import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { BRAND, PULSE_PRODUCT } from '@/lib/brand';
import { useCart } from '@/contexts/CartContext';
import logoSymbol from '@/assets/haera-simbolo-gold.png';
import pulsePouch from '@/assets/pulse-pouch.jpeg';

const links = [
  { to: '/', label: 'Início' },
  { to: '/pulse-produto', label: 'Pulse' },
  { to: '/ciencia', label: 'Ciência Pulse' },
  { to: '/manifesto', label: 'Manifesto' },
  { to: '/origem', label: 'Origem' },
];

// Páginas cujo topo é escuro (fundo Graphite) — o header precisa da versão
// negativa do lockup (texto/ícones em Cream) enquanto não rolar a página,
// senão fica ilegível sobre o próprio fundo escuro.
const darkHeroRoutes = ['/ciencia', '/origem'];

const SiteNav: React.FC = () => {
  const { totalItems, setIsOpen, addItem } = useCart();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDarkHero = darkHeroRoutes.includes(location.pathname) && !scrolled;
  const wordmarkColor = isDarkHero ? BRAND.CREAM : BRAND.WINE;
  const linkColor = isDarkHero ? BRAND.CREAM : BRAND.GRAPHITE;

  const handleQuickAdd = () => addItem({
    id: PULSE_PRODUCT.id,
    name: `Haëra ${PULSE_PRODUCT.name} ${PULSE_PRODUCT.weight}`,
    price: PULSE_PRODUCT.price,
    image: pulsePouch,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? `${BRAND.CREAM}f5` : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? `1px solid ${BRAND.GOLD}25` : '1px solid transparent',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Haëra — início">
          <img
            src={logoSymbol}
            alt="Haëra"
            className="h-12 md:h-16 w-auto object-contain"
          />
          <span className="font-serif text-2xl md:text-3xl tracking-wide transition-colors duration-500" style={{ color: wordmarkColor }}>Haëra</span>
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {links.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="font-sans text-xs tracking-[0.25em] uppercase transition-all duration-500 hover:opacity-60"
                style={{
                  color: linkColor,
                  opacity: location.pathname === link.to ? 1 : 0.7,
                  fontWeight: location.pathname === link.to ? 500 : 400,
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {scrolled && (
            <button
              onClick={handleQuickAdd}
              className="hidden md:inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase px-4 py-2 rounded-full transition-opacity hover:opacity-90 animate-fade-in"
              style={{ backgroundColor: BRAND.WINE, color: BRAND.CREAM }}
            >
              Comprar · {PULSE_PRODUCT.priceFormatted}
            </button>
          )}
          <button
            onClick={() => setIsOpen(true)}
            className="relative p-2 transition-opacity hover:opacity-70"
            aria-label="Abrir carrinho"
          >
            <ShoppingBag size={20} style={{ color: linkColor }} />
            {totalItems > 0 && (
              <span
                className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full flex items-center justify-center font-sans text-[10px] font-medium"
                style={{ backgroundColor: BRAND.WINE, color: BRAND.CREAM }}
              >
                {totalItems}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="md:hidden p-2"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} style={{ color: linkColor }} /> : <Menu size={20} style={{ color: linkColor }} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t" style={{ borderColor: `${BRAND.GOLD}30`, backgroundColor: BRAND.CREAM }}>
          <ul className="px-6 py-6 space-y-4">
            {links.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="block font-sans text-sm tracking-[0.2em] uppercase"
                  style={{ color: BRAND.GRAPHITE }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default SiteNav;
