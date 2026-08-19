import React from 'react';
import { SALES_LIVE, YAMPI_CHECKOUT_URL } from '@/lib/brand';
import { useVipSignup } from '@/contexts/VipSignupContext';

interface VipCtaProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

// Antes do lançamento (SALES_LIVE = false): abre o formulário de cadastro
// da Lista VIP. Depois de ligar SALES_LIVE: vira um link direto pro
// checkout real da Yampi. Centraliza essa troca num único lugar.
const VipCta: React.FC<VipCtaProps> = ({ className, style, children }) => {
  const { openVipSignup } = useVipSignup();

  if (SALES_LIVE) {
    return (
      <a href={YAMPI_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className={className} style={style}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={openVipSignup} className={className} style={style}>
      {children}
    </button>
  );
};

export default VipCta;
