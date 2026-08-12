# Pulse — Conteúdo de Posicionamento (quebra de categoria)

Estratégia de conteúdo para resolver o problema central de comunicação do
Pulse: confusão de categoria. O público pattern-matcha o produto como
"pré-treino" (explosão, formigamento, crash) ou "multivitamínico" (cápsula
chata, zero energia perceptível) — nenhum dos dois é o Pulse. Este
documento existe para não precisar reconstruir esse racional a cada post.

## Diagnóstico

Você não instala uma categoria nova explicando atributos primeiro. Precisa
quebrar a categoria errada e instalar a certa na mesma respiração — por
isso a comunicação deve abrir com uma pergunta/gancho que já desestabiliza
a categoria errada, não com uma lista de ingredientes.

Gancho recomendado (reaproveita a tese já presente no site — "sem o preço
de amanhã", "sem dívida metabólica"):

> "E se o seu pré-treino estivesse roubando a energia do seu amanhã?"

Variações para teste A/B:
- "Pré-treino te dá um pico. Multivitamínico não te dá nada. E se existisse
  um terceiro caminho?"
- "Você toma pré-treino pra treinar e vitamina pra 'não ficar doente'. E se
  um sachê só fizesse os dois — sem o crash de nenhum?"

## Formato: sistema de duas peças

1. **Reels/vídeo vertical** (peça principal, topo de funil) — único
   formato capaz de provar visualmente os três contextos de uso (treino,
   trabalho, correria com os filhos) na mesma peça. É essa prova em vídeo
   que desmonta "isso é só pré-treino".
2. **Carrossel** (peça secundária, retenção/salvamento) — depois que o
   vídeo quebra a categoria, o carrossel faz o trabalho racional em
   formato salvável ("não é X, não é Y, é Z"), reaproveitando o
   comparativo já presente em `PulseProduct.tsx`.

### Roteiro do Reels (~28-30s, vertical)

| Tempo | Visual | Texto na tela / VO |
|---|---|---|
| 0-3s | Pessoa olha pra câmera, shaker na mão | "E se seu pré-treino estivesse roubando a energia do seu amanhã?" |
| 3-8s | Cortes rápidos: pessoa "quebrada" na mesa às 15h, café nº3 | "Você já sentiu isso." |
| 8-14s | Sachê Pulse dissolvendo na água, still | "Pulse não é pré-treino. Não é multivitamínico." (tom seco, sem hype) |
| 14-20s | Montagem 3 cortes (2-3s cada): antes do treino / na mesa de trabalho antes de uma call / antes da correria com os filhos | "Antes do treino." / "No meio do trabalho." / "Na correria do dia." |
| 20-26s | Close no produto (fotografia real) | "É um ativador do sistema corporal. 21 ingredientes reais. Sem cafeína sintética. Sem queda de energia." (frase-âncora) |
| 26-30s | Logo + tagline | "Nutrir antes de estimular." → Pulse, link na bio |

**Regra inegociável:** nenhum plano com o produto físico pode ser gerado
por IA — só fotografia/filmagem real (diretriz do guia de tom de voz).

### Carrossel — "O que o Pulse não é" (8 slides)

1. Capa: "Pulse não é o que você imagina."
2. "NÃO é pré-treino." — cafeína anidra em dose alta, pico e queda, ansiedade.
3. "NÃO é multivitamínico." — cápsula, zero energia perceptível no dia a dia.
4. "É um ativador do sistema corporal." (frase-âncora completa)
5. Como funciona — guaraná/cafeína natural, complexo B, beterraba/uva
   (oxigenação), inulina (intestino). Máximo 4 bullets.
6. "Um sachê, três momentos": treino / trabalho / rotina com os filhos.
7. Comparativo rápido (reaproveitar tabela "Pulse vs. Estimulantes
   Convencionais" de `PulseProduct.tsx`).
8. CTA: preço de lançamento + link.

## Prompt-mestre reutilizável

Cole este prompt em qualquer IA de texto (ou reaproveite numa próxima
conversa) para gerar variações de gancho, roteiro completo e copy do
carrossel sem perder o tom da marca — já embute guia de voz, frase-âncora,
vocabulário proibido e a regra de fotografia real.

```
Você é o estrategista de marca e redator sênior da Haëra, marca brasileira
de suplementação clean label premium. Escreva no tom "nutricionista
esportiva de confiança falando de igual para igual" — científica sem ser
fria, premium sem ser distante, direta sem ser agressiva. Nunca soe como
outdoor de pré-treino gritando "EXPLOSÃO TOTAL".

CONTEXTO DO PRODUTO (Pulse):
- Categoria: NÃO é pré-treino, NÃO é multivitamínico. É o "ativador do
  sistema corporal" da Haëra.
- Frase-âncora (usar como está, não parafrasear): "Pulse é um ativador do
  sistema corporal: 21 ingredientes naturais em sinergia, sem cafeína
  sintética, sem queda de energia, sem culpa."
- Tagline institucional: "Nutrir antes de estimular."
- Tese central: energia que sustenta ao longo do dia, sem dívida
  metabólica — pode ser usado antes de treino, no meio do trabalho, ou na
  correria do dia a dia com os filhos. Não é um produto de um único
  momento do dia.
- Diferencial técnico: 21 ingredientes reais em sinergia (cafeína natural
  do guaraná, complexo B, beterraba, cacau, uva, minerais quelatos,
  inulina/prebióticos) vs. estimulante sintético isolado (cafeína anidra
  em dose alta).

VOCABULÁRIO
- Usar: ativação fisiológica, energia fisiológica, suporte metabólico,
  ingredientes reais, ciência aplicada, performance sustentável, clean
  label, energia contínua / sem queda de energia, ativador.
- Nunca usar: bomba de energia, explosão, insanidade, pré-treino extremo,
  "energético", pump extremo, treino insano, qualquer superlativo tipo "o
  mais forte" / "nunca visto" / "revolucionário". Evite o anglicismo
  "crash" — usar "queda de energia".

REGRA INEGOCIÁVEL: qualquer direção de imagem/vídeo com o produto físico,
embalagem ou uso deve pedir fotografia/filmagem REAL — nunca imagem
gerada por IA representando o produto.

TAREFA: [descreva aqui o que você precisa — ex: "gere 5 variações de
gancho para um Reels de 30s", "escreva o roteiro completo cena a cena",
"escreva a copy das 8 lâminas do carrossel", "escreva a legenda e 5
hashtags"]

FORMATO DE SAÍDA: [descreva o formato — ex: tabela tempo/visual/texto para
roteiro de vídeo; lista numerada de lâminas para carrossel; texto corrido
para legenda]
```

## Frases de impacto (hooks de abertura)

Cada pergunta mira uma dor específica de um contexto de uso diferente —
isso é o que sustenta o argumento "não é produto de um momento só". A
lógica: 2-4 perguntas específicas constroem tensão (a pessoa se
reconhecendo em pelo menos uma), a última pergunta nomeia o inimigo
(estimulante artificial / energético / café em excesso), e a virada
apresenta o Pulse como a saída. Nunca as quatro sozinhas sem a virada —
pergunta sem resposta é ansiedade, não direcionamento.

### Modelo em cascata (para abertura de Reels ou primeiras lâminas do carrossel)

Uma pergunta por corte/lâmina, ritmo curto, sem ponto de exclamação:

> Buscando mais energia pro treino?
> Foco e energia pra aquele dia intenso de trabalho?
> Energia pra concluir o dia — e ainda estudar?
> Cansado dos estimulantes artificiais, dos energéticos, dos baldes de café?
>
> Existe um jeito diferente de chegar lá. Conhece o Pulse.

Variação mais curta (15s, só 3 perguntas):

> Energia pro treino. Foco pro trabalho. Fôlego pro resto do dia.
> Cansado de precisar de estimulante artificial pra dar conta de tudo isso?
>
> Pulse é o ativador do sistema corporal da Haëra.

### Hooks avulsos por contexto (uma peça isolada cada)

**Treino**
- "Energia pro treino que não vira dívida amanhã."
- "Quer treinar com mais foco sem pagar o preço da queda depois?"
- "E se o pré-treino que te dá o pico também fosse o que rouba sua energia de amanhã?"

**Trabalho**
- "Reunião às 15h e a energia já foi embora?"
- "Foco pro trabalho sem o nervosismo do quarto café do dia."
- "Energia estável o dia inteiro — sem pico, sem queda."

**Estudos**
- "Energia pra estudar até o fim sem depender do quinto café."
- "Foco pra terminar o que você começou — sem ansiedade no meio do caminho."

**Rotina / filhos**
- "Energia pra dar conta do dia inteiro — do trabalho à correria com os filhos."
- "Disposição que sustenta até a última tarefa do dia, não só a primeira."

**Fuga de estimulantes artificiais**
- "Cansado de estimulante artificial, energético e balde de café?"
- "Existe energia que não depende de cafeína anidra em dose alta."
- "Você não precisa escolher entre sentir alguma coisa e se sentir bem depois."

### Linhas de virada (encerram o hook, conectam ao Pulse)

Usar uma destas logo após qualquer pergunta/cascata acima:

- "Pulse é o ativador do sistema corporal da Haëra." (abre a explicação)
- "Existe um jeito diferente de chegar lá." (mais aberto, gera curiosidade antes de nomear o produto)
- Frase-âncora completa, quando houver espaço: "Pulse é um ativador do sistema corporal: 21 ingredientes naturais em sinergia, sem cafeína sintética, sem queda de energia, sem culpa."
