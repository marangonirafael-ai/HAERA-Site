import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SiteLayout from '@/components/site/SiteLayout';
import { BRAND, PULSE_PRODUCT, VIP_COUPON } from '@/lib/brand';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const Checkout: React.FC = () => {
  const { items, totalPrice, clear } = useCart();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [coupon, setCoupon] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

  const pulseQty = items
    .filter(i => i.id === PULSE_PRODUCT.id)
    .reduce((s, i) => s + i.quantity, 0);
  const vipDiscount = appliedCoupon === VIP_COUPON
    ? pulseQty * (PULSE_PRODUCT.price - PULSE_PRODUCT.priceVip)
    : 0;

  const subtotalAfterDiscount = Math.max(0, totalPrice - vipDiscount);
  const shipping = subtotalAfterDiscount > 150 ? 0 : 19.9;
  const total = subtotalAfterDiscount + shipping;

  const handleApplyCoupon = () => {
    const code = coupon.trim().toUpperCase();
    if (!code) return;
    if (code !== VIP_COUPON) {
      toast.error('Cupom inválido', { description: 'Verifique o código e tente novamente.' });
      return;
    }
    if (pulseQty === 0) {
      toast.error('Cupom não aplicável', { description: 'Adicione o Pulse à sacola para usar o cupom VIP.' });
      return;
    }
    setAppliedCoupon(code);
    toast.success('Cupom VIP aplicado!', { description: `Você desbloqueou o preço Lista VIP no Pulse.` });
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCoupon('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success('Pedido recebido!', { description: 'Você receberá um e-mail em instantes.' });
    setTimeout(() => { clear(); navigate('/'); }, 2500);
  };


  if (items.length === 0 && !submitted) {
    return (
      <SiteLayout>
        <section className="pt-40 pb-32 px-6 text-center min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="font-serif text-4xl mb-4" style={{ color: BRAND.GRAPHITE }}>Sua sacola está vazia</h1>
          <p className="font-sans text-sm mb-8" style={{ color: BRAND.GRAPHITE, opacity: 0.6 }}>Não há nada para finalizar.</p>
          <button onClick={() => navigate('/pulse-produto')} className="font-sans text-xs tracking-[0.25em] uppercase px-9 py-4 rounded-full" style={{ backgroundColor: BRAND.WINE, color: BRAND.CREAM }}>
            Conhecer o Pulse
          </button>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="pt-32 pb-24 px-6 md:px-10" style={{ backgroundColor: BRAND.CREAM }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-12" style={{ color: BRAND.GRAPHITE }}>Finalizar Compra</h1>

          <form onSubmit={handleSubmit} className="grid lg:grid-cols-[1fr_400px] gap-12">
            <div className="space-y-10">
              <fieldset className="space-y-4">
                <legend className="font-sans text-xs tracking-[0.3em] uppercase mb-4" style={{ color: BRAND.WINE }}>Contato</legend>
                <input required type="email" placeholder="E-mail" className="w-full px-5 py-4 rounded-xl border bg-transparent font-sans text-sm" style={{ borderColor: `${BRAND.GRAPHITE}25` }} />
                <input required type="tel" placeholder="Telefone (WhatsApp)" className="w-full px-5 py-4 rounded-xl border bg-transparent font-sans text-sm" style={{ borderColor: `${BRAND.GRAPHITE}25` }} />
              </fieldset>

              <fieldset className="space-y-4">
                <legend className="font-sans text-xs tracking-[0.3em] uppercase mb-4" style={{ color: BRAND.WINE }}>Entrega</legend>
                <input required placeholder="Nome completo" className="w-full px-5 py-4 rounded-xl border bg-transparent font-sans text-sm" style={{ borderColor: `${BRAND.GRAPHITE}25` }} />
                <div className="grid grid-cols-3 gap-3">
                  <input required placeholder="CEP" className="px-5 py-4 rounded-xl border bg-transparent font-sans text-sm" style={{ borderColor: `${BRAND.GRAPHITE}25` }} />
                  <input required placeholder="Cidade" className="col-span-2 px-5 py-4 rounded-xl border bg-transparent font-sans text-sm" style={{ borderColor: `${BRAND.GRAPHITE}25` }} />
                </div>
                <input required placeholder="Endereço, número e complemento" className="w-full px-5 py-4 rounded-xl border bg-transparent font-sans text-sm" style={{ borderColor: `${BRAND.GRAPHITE}25` }} />
              </fieldset>

            </div>

            {/* Summary */}
            <aside className="space-y-6 p-8 rounded-2xl h-fit lg:sticky lg:top-28" style={{ backgroundColor: BRAND.WINE, color: BRAND.CREAM }}>
              <h3 className="font-serif text-2xl">Resumo</h3>
              <ul className="space-y-4 pb-4 border-b" style={{ borderColor: `${BRAND.GOLD}30` }}>
                {items.map(i => (
                  <li key={i.id} className="flex gap-3 items-center">
                    <img src={i.image} alt="" className="w-14 h-16 object-cover rounded" />
                    <div className="flex-1 font-sans text-sm">
                      <p>{i.name}</p>
                      <p style={{ opacity: 0.6 }} className="text-xs">Qtd: {i.quantity}</p>
                    </div>
                    <span className="font-sans text-sm">R$ {(i.price * i.quantity).toFixed(2).replace('.', ',')}</span>
                  </li>
                ))}
              </ul>
              <div className="pb-4 border-b" style={{ borderColor: `${BRAND.GOLD}30` }}>
                {appliedCoupon ? (
                  <div className="flex items-center justify-between gap-2">
                    <div className="font-sans text-xs">
                      <p style={{ color: BRAND.GOLD }} className="tracking-[0.2em] uppercase">Cupom {appliedCoupon}</p>
                      <p style={{ opacity: 0.7 }}>Preço Lista VIP desbloqueado</p>
                    </div>
                    <button type="button" onClick={handleRemoveCoupon} className="font-sans text-[10px] tracking-[0.2em] uppercase underline" style={{ color: BRAND.CREAM, opacity: 0.7 }}>
                      Remover
                    </button>
                  </div>
                ) : (
                  <div>
                    <label className="font-sans text-[10px] tracking-[0.3em] uppercase block mb-2" style={{ color: BRAND.GOLD }}>Cupom Lista VIP</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={coupon}
                        onChange={e => setCoupon(e.target.value)}
                        placeholder="Digite seu cupom"
                        maxLength={32}
                        className="flex-1 px-4 py-3 rounded-full bg-transparent font-sans text-sm border placeholder:opacity-50"
                        style={{ borderColor: `${BRAND.GOLD}50`, color: BRAND.CREAM }}
                      />
                      <button type="button" onClick={handleApplyCoupon} className="font-sans text-[10px] tracking-[0.25em] uppercase px-5 rounded-full" style={{ backgroundColor: BRAND.GOLD, color: BRAND.WINE_NIGHT }}>
                        Aplicar
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="space-y-2 font-sans text-sm">
                <div className="flex justify-between"><span style={{ opacity: 0.7 }}>Subtotal</span><span>R$ {totalPrice.toFixed(2).replace('.', ',')}</span></div>
                {vipDiscount > 0 && (
                  <div className="flex justify-between" style={{ color: BRAND.GOLD }}>
                    <span>Desconto VIP</span>
                    <span>− R$ {vipDiscount.toFixed(2).replace('.', ',')}</span>
                  </div>
                )}
                <div className="flex justify-between"><span style={{ opacity: 0.7 }}>Frete</span><span>{shipping === 0 ? 'Grátis' : `R$ ${shipping.toFixed(2).replace('.', ',')}`}</span></div>
              </div>

              <div className="flex justify-between items-baseline pt-4 border-t" style={{ borderColor: `${BRAND.GOLD}30` }}>
                <span className="font-sans text-xs tracking-[0.2em] uppercase">Total</span>
                <span className="font-serif text-3xl" style={{ color: BRAND.GOLD }}>R$ {total.toFixed(2).replace('.', ',')}</span>
              </div>
              <button type="submit" className="w-full font-sans text-xs tracking-[0.3em] uppercase py-4 rounded-full transition-opacity hover:opacity-90" style={{ backgroundColor: BRAND.GOLD, color: BRAND.WINE_NIGHT }}>
                Confirmar Pedido
              </button>
              <p className="font-sans text-[11px] text-center" style={{ opacity: 0.6 }}>
                Pagamento real será habilitado na próxima fase.
              </p>
            </aside>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Checkout;
