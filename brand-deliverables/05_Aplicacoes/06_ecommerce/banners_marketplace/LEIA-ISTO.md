# Banners de marketplace

`banner-generico-1200x400.png` é o banner-base no estilo da marca. Cada
plataforma pede uma proporção diferente — em vez de gerar um arquivo fixo
por plataforma (que fica desatualizado assim que a plataforma muda a
especificação), o mais prático é abrir `template-banner.html` num
navegador, ajustar `width`/`height` do `.canvas` no CSS para o tamanho
pedido pela plataforma no momento, e tirar um novo print/export. Tamanhos
de referência mais comuns hoje (confirme sempre no painel de cada
plataforma antes de produzir, pois specs mudam com frequência):

- Mercado Livre — banner de categoria: ~1200x300
- Amazon — banner de storefront: ~1500x300
- Shopee — banner de loja: ~1090x300
