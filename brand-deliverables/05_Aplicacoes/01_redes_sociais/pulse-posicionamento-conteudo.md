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

## Prompt detalhado de produção — Reels "E se seu pré-treino..."

Briefing pronto para entregar a um videomaker/editor (ou usar como prompt
de direção de arte). Cobre os planos com pessoas reais — os planos com o
produto físico são fotografia/filmagem real por regra de marca, nunca
geração por IA.

```
FORMATO
- Vertical 9:16, 1080x1920px, 30fps.
- Duração total: 28-30s.
- Zona segura de texto: 250px de margem superior e inferior (área de UI
  do Reels/TikTok/Stories cobre essas bordas).
- Corte rápido: nenhum plano dura mais de 6s.

CASTING E DIREÇÃO DE ARTE
- Talento: 1 pessoa, 28-40 anos, aparência "atlética real" (não fisiculturista
  de capa de revista) — precisa ser crível como alguém que treina, trabalha
  e cuida de filhos na mesma semana.
- Guarda-roupa: roupa de treino neutra (preto/grafite/off-white) na cena de
  academia; roupa casual de trabalho (nunca terno/executivo — a marca é
  "premium acessível", não corporativo) na cena de escritório; roupa de
  fim de tarde/casual na cena com criança.
- Expressão: contida, direta, sem sorriso forçado nem cara de "sofrimento
  de suplemento". O guia de tom da marca proíbe qualquer tom "explosão"
  ou "hardcore" — isso vale para a atuação também, não só pro texto.
- Locações: academia real (não estúdio com fundo infinito), mesa de
  trabalho com luz natural de janela, ambiente doméstico/externo leve para
  a cena com a criança (playground, cozinha, saída de casa).

GRADE DE COR
- Levar a imagem para o mesmo território cromático do site: tons quentes,
  contraste suave, nada de grade "azulado/frio" de academia comercial.
  Wine #722F37 e Gold #B8964B devem aparecer organicamente em pelo menos
  um elemento de cena (roupa, objeto, luz) sempre que possível — sem forçar.
- Evitar: super-saturação, flare artificial, qualquer estética "energy
  drink"/neon.

ROTEIRO CENA A CENA

[0:00–0:03] HOOK
Plano: médio, talento olha direto pra câmera, parado, shaker/sachê na mão
(fotografia/filmagem real do produto).
Áudio/VO (tom seco, sem inflexão de venda): "E se o seu pré-treino
estivesse roubando a energia do seu amanhã?"
Texto na tela: mesma frase, fonte Cormorant Garamond itálico, cor Cream
(#F5F2EB) sobre fundo escurecido, entra com fade simples (sem bounce/zoom
agressivo).

[0:03–0:08] TENSÃO / RECONHECIMENTO
Plano: 2-3 cortes rápidos (b-roll) — pessoa "no talo" na mesa às 15h,
esfregando o rosto; xícara de café vazia nº3; olhar cansado pro celular.
Sem talento falando, só respiração/ambiente.
Texto na tela: "Você já sentiu isso." — fonte Inter, uppercase, tracking
largo, pequena, canto inferior.
Áudio: sem VO nesse trecho — deixar o silêncio/ambiente carregar a tensão.

[0:08–0:14] QUEBRA DE CATEGORIA
Plano: still/macro do sachê Pulse dissolvendo em água — câmera parada,
sem corte no meio do movimento do líquido (fotografia/filmagem real,
nunca geração por IA).
VO: "Pulse não é pré-treino. Não é multivitamínico."
Texto na tela: as duas frases entram uma de cada vez, fonte Inter
uppercase, cor Wine sobre fundo Cream — a paleta muda aqui de propósito
pra marcar a virada de tom.

[0:14–0:20] PROVA MULTI-CONTEXTO (o coração da peça)
3 cortes de 2s cada, mesma pessoa, mesmo gesto (bebendo o Pulse),
locações diferentes:
  1. Academia — antes de pegar a barra.
  2. Mesa de trabalho — antes de entrar numa call, luz de janela.
  3. Saída de casa / playground — antes de sair com a criança.
Texto na tela (um por corte, sincronizado ao corte): "Antes do treino." /
"No meio do trabalho." / "Na correria do dia."
VO por cima da montagem (contínuo, não por corte): "É um ativador do
sistema corporal. Energia que sustenta — no treino, no trabalho, na vida."

[0:20–0:26] PAYOFF RACIONAL
Plano: close no produto, fotografia real, luz suave, sem movimento de
câmera brusco.
VO: "21 ingredientes reais. Sem cafeína sintética. Sem queda de energia."
Texto na tela: frase-âncora resumida, fonte Cormorant Garamond, Gold sobre
fundo Wine.

[0:26–0:30] CTA / ENCERRAMENTO
Plano: logo Haëra (símbolo Núcleo em Gold) sobre fundo Wine, still, 4s.
Texto: "Nutrir antes de estimular." (tagline institucional) + "Pulse —
link na bio."
Sem VO — só música subindo levemente no volume para fechar.

SOM
- Trilha: instrumental, andamento moderado (90-110 BPM), sem batida
  "hype"/trap de academia — pensar em algo mais próximo de lo-fi
  orgânico/piano-ambiente do que EDM. A trilha não pode competir com o
  guia de voz "sem hype".
- SFX: som real do líquido dissolvendo no plano macro (0:08–0:14) —
  gravar no set, não usar banco de efeitos genérico.

LEGENDA BURNADA (para quem assiste sem áudio)
Legendar 100% da VO, mesmo estilo tipográfico do texto na tela descrito
acima, nunca a fonte padrão de legenda automática do app — perde a
identidade de marca.

ENTREGÁVEIS DE EXPORT
- 1 arquivo mestre 1080x1920 MP4 H.264, com texto embutido, para
  Reels/TikTok/Shorts.
- 1 versão sem texto embutido (para caso a plataforma exija
  legenda nativa separada).
- Thumbnail de capa: frame do plano 0:20–0:26 (produto em destaque).
```

**Nota sobre ferramentas de geração por IA:** se parte do b-roll de apoio
(cenas 0:03–0:08, sem produto e sem falas específicas de marca) for
produzida com IA de vídeo por questão de custo/tempo, isso não viola a
regra da marca — a proibição é especificamente sobre representar o
produto físico, a embalagem ou o ato de usá-lo. Qualquer plano em que o
Pulse apareça (sachê, pó dissolvendo, embalagem, a pessoa bebendo o
produto) precisa ser filmagem real.

## Roteiro detalhado do carrossel — lâmina a lâmina

Especificações gerais: 8 lâminas, 1080x1350px (formato 4:5 — mais espaço
vertical e maior retenção que o quadrado 1080x1080 dos templates
institucionais existentes; usar 1:1 apenas se o padrão de feed exigir
consistência estrita com os outros templates já produzidos). Fundo alterna
entre Wine e Cream para marcar as três fases do argumento (gancho → 
diagnóstico → resposta) — a mudança de cor é o principal recurso de ritmo,
já que não há vídeo/movimento carregando a transição. Por regra de marca,
o símbolo Núcleo (Gold) aparece em alguma escala em todas as 8 lâminas.

**Lâmina 1 — Capa**
- Objetivo: parar o scroll; ecoar o gancho já validado do Reels.
- Fundo: Wine (#722F37). Núcleo Gold grande (~40% da largura),
  centralizado, levemente atrás do texto.
- Texto principal: "Pulse não é o que você imagina." — Cormorant
  Garamond, Cream, centralizado, tamanho grande.
- Texto secundário: "Arraste e descubra." — Inter uppercase, tracking
  largo, Gold, pequeno, canto inferior, com seta/indicador de swipe.

**Lâmina 2 — Negação #1**
- Objetivo: nomear e descartar a primeira categoria errada.
- Fundo: Cream Soft (#EDE7D9) — a mudança de paleta sinaliza "modo
  diagnóstico", diferente do gancho.
- Ícone: X pequeno em Wine, canto superior esquerdo.
- Headline: "NÃO é pré-treino." — Inter, uppercase, bold, Wine.
- Corpo: "Cafeína anidra em dose alta. Pico de energia — e queda daqui a
  duas horas." — Inter regular, Graphite a 70% de opacidade.
- Núcleo Gold pequeno, canto inferior direito (constante em toda lâmina).

**Lâmina 3 — Negação #2**
- Objetivo: nomear e descartar a segunda categoria errada. Mesma
  estrutura visual da lâmina 2 (repetição intencional = ritmo de "lista").
- Headline: "NÃO é multivitamínico."
- Corpo: "Cápsula que você toma e esquece. Zero energia perceptível no
  dia a dia."

**Lâmina 4 — Revelação (lâmina-chave)**
- Objetivo: a virada — resposta à tensão criada nas lâminas 2 e 3.
- Fundo: volta ao Wine — o retorno de cor sinaliza "aqui está a
  resposta". Núcleo Gold grande, centralizado, com leve glow.
- Headline: "É um ativador do sistema corporal." — Cormorant Garamond
  itálico, Cream, grande.
- Corpo: frase-âncora completa — "21 ingredientes naturais em sinergia.
  Sem cafeína sintética. Sem queda de energia. Sem culpa." — Inter,
  Cream a 85%.

**Lâmina 5 — Como funciona**
- Objetivo: sustentar a virada com prova científica resumida (educação,
  não bula — máximo 4 itens).
- Fundo: Cream. Eyebrow: "Como funciona" — Wine, uppercase, tracking
  largo.
- Grid 2x2, um ícone de linha simples por item:
  1. Guaraná → cafeína natural de liberação gradual
  2. Complexo B → energia e foco sem estimulação artificial
  3. Beterraba + uva → oxigenação, fluxo sanguíneo
  4. Inulina → intestino, base da absorção
- Tipografia Inter, Graphite; ícones alternando Gold/Sage (mesma lógica
  de "destaque natural" usada nos cards do site).

**Lâmina 6 — Onde usar**
- Objetivo: prova estática do argumento "não é produto de um momento só"
  (o mesmo que o Reels prova em vídeo).
- Fundo: Cream Soft. Headline: "Um sachê, três momentos do seu dia."
- 3 linhas, ícone de linha + label, Wine:
  1. Ícone haltere — "Antes do treino"
  2. Ícone laptop/xícara — "No meio do trabalho"
  3. Ícone família — "Na correria com os filhos"

**Lâmina 7 — Comparativo**
- Objetivo: fechamento racional para quem quer o argumento completo antes
  de comprar (público mais cético/pesquisador).
- Fundo: Cream, borda Wine (replica o estilo da tabela comparativa já
  usada em `PulseProduct.tsx`).
- Headline: "Pulse vs. Estimulante Convencional."
- 4 linhas reduzidas da tabela do site (Composição, Pureza, Energia,
  Resultado), texto curto dos dois lados, Inter pequeno.

**Lâmina 8 — CTA**
- Objetivo: fechar com produto, preço e chamada de ação.
- Fundo: Wine. Núcleo Gold.
- Headline: "Energia limpa que sustenta performance." (tagline do
  produto) — Cormorant Garamond, Cream.
- Preço: "R$ 149,90 · Lançamento" — Gold, destaque.
- CTA: "Arraste pro link na bio."
- Tagline institucional pequena, rodapé: "Nutrir antes de estimular."

### Legenda do post (texto de acompanhamento)

> Pulse não é pré-treino. Não é multivitamínico. É o ativador do sistema
> corporal da Haëra — feito pra sustentar energia no treino, no trabalho
> e na correria do dia a dia. Arraste pra entender de vez. Link na bio.
>
> #haërapulse #nutrirantesdeestimular
