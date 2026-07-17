# Especificação de Tipografia — Haëra

## Fonte de título / display

**Cormorant Garamond**

- Uso: títulos, headlines, o wordmark "Haëra"
- Estilo: serifada, editorial, elegante — reforça o posicionamento premium
- Pesos usados no site: 300 (light), 400 (regular), 500 (medium), 600 (semibold)
- Estilos: normal e itálico (itálico 300 e 400)
- Arquivo: fonte variável, cobre todo o eixo de peso 300–700 em um único
  arquivo (`cormorant-garamond-normal-variable.woff2/.ttf` e
  `cormorant-garamond-italic-variable.woff2/.ttf`, em `02_arquivos_fontes/`)
- Fonte: [Google Fonts — Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond)
- Licença: SIL Open Font License 1.1 — gratuita, uso comercial livre, sem
  restrição de domínio ou número de usuários (ver `02_licenca_fontes` em
  `06_Documentos_Legais`)

## Fonte de texto / interface

**Inter**

- Uso: corpo de texto, navegação, botões, rótulos, UI em geral
- Estilo: sans-serif, neutra, alta legibilidade em telas pequenas
- Pesos usados no site: 300 (light), 400 (regular), 500 (medium)
- Arquivo: fonte variável, cobre todo o eixo de peso 100–900 em um único
  arquivo (`inter-normal-variable.woff2/.ttf`, em `02_arquivos_fontes/`)
- Fonte: [Google Fonts — Inter](https://fonts.google.com/specimen/Inter)
- Licença: SIL Open Font License 1.1 — gratuita, uso comercial livre

## Pilha de fallback (CSS)

```css
font-family: 'Cormorant Garamond', Georgia, serif;   /* títulos */
font-family: 'Inter', system-ui, sans-serif;          /* corpo */
```

Já é exatamente o que está configurado em `src/index.css` e
`tailwind.config.ts` no repositório do site.

## Atenção a nomes parecidos

Não confundir com:
- **Cormorant** (sem "Garamond") — fonte irmã, mais condensada, não é a
  usada na marca.
- **Cormorant Infant** — outra variante da família Cormorant, também não é
  a usada.
- **Inter Tight** — variante mais condensada do Inter, não é a usada.

Sempre especificar o nome completo **"Cormorant Garamond"** e **"Inter"**
ao instalar ou buscar a fonte.
