import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { toast } from 'sonner';
import { BRAND } from '@/lib/brand';
import { useVipSignup } from '@/contexts/VipSignupContext';

const VipSignupModal: React.FC = () => {
  const { isOpen, closeVipSignup } = useVipSignup();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [company, setCompany] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const resetAndClose = () => {
    closeVipSignup();
    setTimeout(() => {
      setName('');
      setEmail('');
      setConsent(false);
      setCompany('');
      setDone(false);
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/vip-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, consent, company }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        toast.error('Não foi possível concluir o cadastro', { description: data.error || 'Tente novamente em instantes.' });
        setSubmitting(false);
        return;
      }
      setDone(true);
      toast.success('Cadastro concluído!', { description: 'Acompanhe seu e-mail para novidades da Lista VIP.' });
    } catch {
      toast.error('Não foi possível concluir o cadastro', { description: 'Verifique sua conexão e tente novamente.' });
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[80] transition-opacity duration-300"
        style={{ backgroundColor: 'rgba(28,13,16,0.5)', backdropFilter: 'blur(4px)' }}
        onClick={resetAndClose}
      />
      <div className="fixed inset-0 z-[90] flex items-center justify-center px-6 pointer-events-none">
        <div
          className="w-full max-w-md rounded-2xl p-8 md:p-10 pointer-events-auto relative"
          style={{ backgroundColor: BRAND.CREAM }}
        >
          <button onClick={resetAndClose} aria-label="Fechar" className="absolute top-5 right-5 p-1 hover:opacity-60">
            <X size={20} style={{ color: BRAND.GRAPHITE }} />
          </button>

          {done ? (
            <div className="text-center py-6">
              <p className="font-sans text-xs tracking-[0.4em] uppercase mb-4" style={{ color: BRAND.WINE, opacity: 0.7 }}>Tudo certo</p>
              <h2 className="font-serif text-3xl font-light mb-4" style={{ color: BRAND.GRAPHITE }}>Você está na lista.</h2>
              <p className="font-sans text-sm leading-relaxed mb-8" style={{ color: BRAND.GRAPHITE, opacity: 0.7 }}>
                Fique de olho no seu e-mail — é por lá que você vai saber, em primeira mão, o dia do lançamento, o preço especial e o brinde exclusivo.
              </p>
              <button
                onClick={resetAndClose}
                className="font-sans text-xs tracking-[0.25em] uppercase px-8 py-3 rounded-full transition-opacity hover:opacity-90"
                style={{ backgroundColor: BRAND.WINE, color: BRAND.CREAM }}
              >
                Fechar
              </button>
            </div>
          ) : (
            <>
              <p className="font-sans text-xs tracking-[0.4em] uppercase mb-3" style={{ color: BRAND.WINE, opacity: 0.7 }}>Lista VIP</p>
              <h2 className="font-serif text-3xl font-light mb-3" style={{ color: BRAND.GRAPHITE }}>Entre antes de todo mundo.</h2>
              <p className="font-sans text-sm leading-relaxed mb-8" style={{ color: BRAND.GRAPHITE, opacity: 0.7 }}>
                Cadastre-se e seja avisado em primeira mão no dia do lançamento — com preço especial e um brinde exclusivo.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="company"
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />
                <input
                  required
                  type="text"
                  placeholder="Nome"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl border bg-transparent font-sans text-sm"
                  style={{ borderColor: `${BRAND.GRAPHITE}25`, color: BRAND.GRAPHITE }}
                />
                <input
                  required
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl border bg-transparent font-sans text-sm"
                  style={{ borderColor: `${BRAND.GRAPHITE}25`, color: BRAND.GRAPHITE }}
                />
                <div className="flex items-start gap-3 text-left">
                  <input
                    id="vip-consent"
                    required
                    type="checkbox"
                    checked={consent}
                    onChange={e => setConsent(e.target.checked)}
                    className="mt-1"
                  />
                  <label htmlFor="vip-consent" className="font-sans text-xs leading-relaxed" style={{ color: BRAND.GRAPHITE, opacity: 0.75 }}>
                    Autorizo receber comunicações da Haëra por e-mail e declaro ter lido a{' '}
                    <Link to="/politica-de-privacidade" className="underline" target="_blank">Política de Privacidade</Link>.
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full font-sans text-xs tracking-[0.25em] uppercase px-8 py-4 rounded-full transition-opacity hover:opacity-90 disabled:opacity-50"
                  style={{ backgroundColor: BRAND.WINE, color: BRAND.CREAM }}
                >
                  {submitting ? 'Enviando...' : 'Quero entrar na Lista VIP'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default VipSignupModal;
