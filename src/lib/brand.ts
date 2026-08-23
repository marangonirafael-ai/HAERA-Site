export const BRAND = {
  OLIVE: '#3F4F45',
  WINE: '#722F37',
  WINE_DEEP: '#5C2430',
  WINE_DARK: '#3D1820',
  WINE_NIGHT: '#1C0D10',
  SAGE: '#9CAF88',
  PETROL: '#1B4D5C',
  GOLD: '#B8964B',
  GOLD_LIGHT: '#D4B775',
  TERRACOTTA: '#C4784A',
  CREAM: '#F5F2EB',
  CREAM_SOFT: '#EDE7D9',
  GRAPHITE: '#1C1C1C',
} as const;

export const PULSE_PRODUCT = {
  id: 'pulse-150g',
  name: 'Pulse',
  tagline: 'Energia limpa que sustenta performance',
  weight: '150g',
  doses: 30,
  dosage: '5g',
  price: 149.9,
  priceFormatted: 'R$ 149,90',
  priceOriginal: 169.9,
  priceOriginalFormatted: 'R$ 169,90',
  priceVip: 129.9,
  priceVipFormatted: 'R$ 129,90',
  pricePerDose: 'R$ 5,00 / dose',
  pricePerDoseOriginal: 'R$ 5,66 / dose',
  pricePerDoseVip: 'R$ 4,33 / dose',
  launchBadge: 'Preço promocional de lançamento',
};

export const VIP_COUPON = 'VIPHAERA';

// Checkout real (Yampi) — pronto pra usar, mas as vendas só ficam
// visíveis ao público quando SALES_LIVE virar true. Até lá, os CTAs de
// compra do site continuam mostrando "Entrar na Lista VIP".
export const SALES_LIVE = true;
export const YAMPI_CHECKOUT_URL = 'https://haera.pay.yampi.com.br/checkout?skipToCheckout=1&tokenReference=7YPV0ZVVWT';

