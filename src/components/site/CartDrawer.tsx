import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { BRAND } from '@/lib/brand';
import { useCart } from '@/contexts/CartContext';

const CartDrawer: React.FC = () => {
  const { isOpen, setIsOpen, items, updateQty, removeItem, totalPrice } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ backgroundColor: 'rgba(28,13,16,0.5)', backdropFilter: 'blur(4px)' }}
        onClick={() => setIsOpen(false)}
      />
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md transition-transform duration-500 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ backgroundColor: BRAND.CREAM }}
      >
        <header className="flex items-center justify-between px-6 py-5 border-b" style={{ borderColor: `${BRAND.GRAPHITE}15` }}>
          <h2 className="font-serif text-2xl" style={{ color: BRAND.GRAPHITE }}>Sua sacola</h2>
          <button onClick={() => setIsOpen(false)} aria-label="Fechar" className="p-2 hover:opacity-60">
            <X size={20} style={{ color: BRAND.GRAPHITE }} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-xl mb-2" style={{ color: BRAND.GRAPHITE }}>Sua sacola está vazia</p>
              <p className="font-sans text-sm mb-8" style={{ color: BRAND.GRAPHITE, opacity: 0.6 }}>
                Comece a sua jornada de evolução limpa.
              </p>
              <button
                onClick={() => { setIsOpen(false); navigate('/pulse-produto'); }}
                className="font-sans text-xs tracking-[0.2em] uppercase px-8 py-3 rounded-full transition-opacity hover:opacity-90"
                style={{ backgroundColor: BRAND.WINE, color: BRAND.CREAM }}
              >
                Conhecer o Pulse
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map(item => (
                <li key={item.id} className="flex gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-24 object-cover rounded-md" style={{ backgroundColor: BRAND.CREAM_SOFT }} />
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between gap-2">
                      <p className="font-serif text-lg leading-tight" style={{ color: BRAND.GRAPHITE }}>{item.name}</p>
                      <button onClick={() => removeItem(item.id)} aria-label="Remover">
                        <Trash2 size={14} style={{ color: BRAND.WINE }} />
                      </button>
                    </div>
                    <p className="font-sans text-xs mt-1" style={{ color: BRAND.GRAPHITE, opacity: 0.6 }}>
                      R$ {item.price.toFixed(2).replace('.', ',')}
                    </p>
                    <div className="mt-auto flex items-center gap-3">
                      <button onClick={() => updateQty(item.id, item.quantity - 1)} className="p-1.5 border rounded-full" style={{ borderColor: `${BRAND.GRAPHITE}30` }}>
                        <Minus size={12} />
                      </button>
                      <span className="font-sans text-sm w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQty(item.id, item.quantity + 1)} className="p-1.5 border rounded-full" style={{ borderColor: `${BRAND.GRAPHITE}30` }}>
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="border-t px-6 py-6 space-y-4" style={{ borderColor: `${BRAND.GRAPHITE}15` }}>
            <div className="flex justify-between items-baseline">
              <span className="font-sans text-xs tracking-[0.2em] uppercase" style={{ color: BRAND.GRAPHITE, opacity: 0.6 }}>Subtotal</span>
              <span className="font-serif text-2xl" style={{ color: BRAND.WINE }}>R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
            </div>
            <p className="font-sans text-[11px]" style={{ color: BRAND.GRAPHITE, opacity: 0.5 }}>
              Pix, cartão ou boleto · Frete calculado no checkout
            </p>
            <button
              onClick={() => { setIsOpen(false); navigate('/checkout'); }}
              className="w-full block text-center font-sans text-xs tracking-[0.25em] uppercase px-8 py-4 rounded-full transition-opacity hover:opacity-90"
              style={{ backgroundColor: BRAND.WINE, color: BRAND.CREAM }}
            >
              Finalizar Compra
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full font-sans text-xs tracking-[0.2em] uppercase py-2 hover:opacity-70"
              style={{ color: BRAND.GRAPHITE, opacity: 0.6 }}
            >
              Continuar Navegando
            </button>
          </footer>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
