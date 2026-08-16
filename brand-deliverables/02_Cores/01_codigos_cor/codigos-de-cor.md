# Códigos de Cor — Haëra

Valores confirmados a partir dos arquivos oficiais do brand kit (medidos
diretamente dos PNGs em `brand-reference/social-media-kit/`) e cruzados
com dois históricos de desenvolvimento da marca independentes.

**Atualização:** o Terracotta foi corrigido de `#C4714A` para `#C4784A`,
conforme o brand book final (`04_Manual_de_Marca/01_manual_pdf/haera-brandbook-estatico-2026.pdf`),
que é agora a fonte de verdade para a paleta.

| Cor | HEX | RGB | CMYK | Uso |
|---|---|---|---|---|
| **Sage Green** (primária) | `#9CAF88` | `156, 175, 136` | `11, 0, 22, 31` | Cor de marca principal |
| **Olive Green** | `#3F4F45` | `63, 79, 69` | `20, 0, 13, 69` | Base institucional, texto/UI primário do site |
| **Wine** | `#722F37` | `114, 47, 55` | `0, 59, 52, 55` | Produto Pulse, destaque |
| **Petrol Blue** | `#1B4D5C` | `27, 77, 92` | `71, 16, 0, 64` | Cor de apoio |
| **Gold** | `#B8964B` | `184, 150, 75` | `0, 18, 59, 28` | Logo institucional (aplicação principal) |
| **Terracotta** | `#C4784A` | `196, 120, 74` | `0, 39, 62, 23` | Cor de apoio |
| **Cream** | `#F5F2EB` | `245, 242, 235` | `0, 1, 4, 4` | Fundo padrão |
| **Graphite** | `#1C1C1C` | `28, 28, 28` | `0, 0, 0, 89` | Texto sobre fundo claro |

## Pantone

Não há correspondência Pantone oficial registrada em nenhum histórico da
marca. Se for produzir algo que exija Pantone (fachada, brinde, uniforme —
nenhum aplicável ao momento atual da Haëra), a forma correta é levar o
HEX/CMYK acima a uma gráfica com leque Pantone físico e escolher a cor mais
próxima visualmente, em vez de confiar em conversores online (a conversão
HEX→Pantone automática costuma errar o tom).

## Nota sobre o CMYK

Os valores de CMYK acima são calculados por fórmula matemática a partir do
RGB (conversão "device-independent", sem perfil de cor/ICC específico de
gráfica). Isso é suficiente para especificar a intenção da cor, mas **antes
de fechar uma impressão em grande volume, confirme uma prova de cor (prova
de prelo) com a gráfica** — o resultado final depende do papel, da tinta e
do perfil ICC de cada máquina, e pode variar em relação a esses números.

## Arquivo de paleta

`../02_paleta_ase/haera-paleta.ase` — importável direto no Illustrator,
Photoshop e Figma (Adobe Swatch Exchange, 8 cores nomeadas). Gerado e
validado programaticamente (parseado de volta e conferido byte a byte
contra a especificação do formato ASE).
