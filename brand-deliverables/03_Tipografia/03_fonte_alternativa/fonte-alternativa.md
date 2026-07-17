# Fonte Alternativa — Haëra

## Não há trava de licença a resolver

As duas fontes oficiais da marca — **Cormorant Garamond** (display/títulos)
e **Inter** (texto/UI) — já são distribuídas sob **SIL Open Font License
1.1**, a mesma licença aberta usada por toda a biblioteca do Google Fonts.

Isso significa:

- Uso comercial ilimitado, sem taxa e sem contrato.
- Sem limite de domínios, produtos ou número de pessoas usando.
- Pode embutir os arquivos de fonte no site, em apps, em materiais
  impressos, sem comprar licença adicional.
- Pode até modificar a fonte (ex: criar uma versão customizada do "Ë"),
  desde que redistribua sob a mesma licença OFL.

Ou seja: **não existe cenário em que a Haëra "perca acesso" à tipografia**
por questão de licenciamento — diferente do que aconteceria com uma fonte
comercial (ex: uma família da Monotype ou Linotype), onde a ausência do
comprovante de compra é um risco real.

## Se ainda assim precisar de uma alternativa de sistema

Para previews rápidos ou e-mails em HTML puro (onde nem sempre é possível
carregar web fonts), a pilha de fallback já configurada no site cobre o
caso:

```css
font-family: 'Cormorant Garamond', Georgia, serif;   /* títulos */
font-family: 'Inter', system-ui, sans-serif;          /* corpo */
```

- **Georgia** — serifada, presente em praticamente todo sistema
  operacional, mantém o tom editorial mesmo se a fonte web falhar.
- **system-ui** — resolve para a fonte nativa do sistema (San Francisco no
  macOS/iOS, Segoe UI no Windows, Roboto no Android), garantindo
  legibilidade e velocidade de carregamento.

Nenhuma licença adicional é necessária para essas fontes de fallback —
são todas fontes de sistema.
