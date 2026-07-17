# Checklist de Entregáveis de Branding — Haëra

Marque `- [ ]` para `- [x]` conforme cada item for produzido e colocado na pasta correspondente. Este arquivo é mantido manualmente; para uma checagem automática do que já está nas pastas, rode `python3 validar_entregaveis.py` (gera um relatório à parte, sem mexer neste arquivo).

> E-commerce de produto físico (Haëra) — itens específicos de negócios presenciais (fachada, sinalização, uniforme) e de app digital (ícones iOS/Android) foram omitidos por não se aplicarem.

## 1. Identidade Visual — Logotipo

- [ ] **Logo — arquivo mestre editável** — formato `.ai, .eps` — pasta `01_Logo/01_arquivo_mestre/` — ESSENCIAL
      _Fonte vetorial original. Sem ele você depende para sempre da agência para qualquer ajuste._
- [ ] **Logo — versão vetorial final** — formato `.svg` — pasta `01_Logo/02_vetorial_svg/` — ESSENCIAL
      _Uso em web e redimensionamento sem perda de qualidade._
- [ ] **Logo — alta resolução (fundo transparente)** — formato `.png` — pasta `01_Logo/03_alta_resolucao_png/` — ESSENCIAL
      _Uso do dia a dia sem precisar abrir o Illustrator._
- [ ] **Logo — versão para impressão (vetorial, CMYK)** — formato `.pdf` — pasta `01_Logo/04_impressao_pdf/` — recomendado
      _Gráficas exigem CMYK, não RGB._
- [ ] **Logo — versão monocromática (preto)** — formato `.ai, .svg, .png` — pasta `01_Logo/05_monocromatico_preto/` — ESSENCIAL
      _Para uso sobre fundos claros ou impressão em 1 cor._
- [ ] **Logo — versão monocromática (branco/negativo)** — formato `.ai, .svg, .png` — pasta `01_Logo/06_monocromatico_branco/` — ESSENCIAL
      _Para uso sobre fundos escuros ou coloridos._
- [ ] **Favicon (16x16, 32x32, 512x512)** — formato `.ico, .png` — pasta `01_Logo/07_favicon/` — recomendado
      _Frequentemente esquecido, mas necessário para o site._
- [ ] **Ícone/símbolo isolado (núcleo)** — formato `.ai, .svg, .png` — pasta `01_Logo/08_simbolo_isolado/` — recomendado
      _Uso em espaços reduzidos (redes sociais, apps, favicons)._
- [ ] **Variações de logo (horizontal, vertical, reduzida)** — formato `.ai, .svg, .png` — pasta `01_Logo/09_variacoes_layout/` — ESSENCIAL
      _Garante consistência em qualquer formato de espaço (header, redes sociais, e-mail)._

## 2. Paleta de Cores

- [ ] **Códigos de cor completos (HEX, RGB, CMYK, Pantone)** — formato `.pdf, .ai, .txt, .docx, .md` — pasta `02_Cores/01_codigos_cor/` — ESSENCIAL
      _Sem os 3-4 códigos você não reproduz a cor exata em todo contexto (digital, impressão, produção gráfica)._
- [ ] **Arquivo de paleta (.ase ou PDF)** — formato `.ase, .pdf` — pasta `02_Cores/02_paleta_ase/` — recomendado
      _Importa direto no Illustrator/Photoshop/Figma, evita erro manual de digitação._

## 3. Tipografia

- [ ] **Nome das fontes oficiais (título e texto)** — formato `.pdf, .docx, .txt, .md` — pasta `03_Tipografia/01_especificacao_fontes/` — ESSENCIAL
      _Fontes têm nomes parecidos entre si; sem o nome exato, erro é comum._
- [ ] **Arquivos das fontes (se licenciadas/customizadas)** — formato `.otf, .ttf, .woff, .woff2` — pasta `03_Tipografia/02_arquivos_fontes/` — ESSENCIAL
      _Confirme se a licença permite uso comercial e por quantos usuários/domínios._
- [ ] **Informação de fonte alternativa (gratuita)** — formato `.pdf, .docx, .txt, .md` — pasta `03_Tipografia/03_fonte_alternativa/` — recomendado
      _Substituto caso a licença da fonte original não tenha sido adquirida por você._

## 4. Manual de Marca

- [ ] **Manual de identidade visual completo** — formato `.pdf` — pasta `04_Manual_de_Marca/01_manual_pdf/` — ESSENCIAL
      _Regras de uso do logo, área de proteção, tamanho mínimo, paleta, tipografia, tom de voz, exemplos certos/errados._
- [ ] **Manual em formato editável** — formato `.indd, .ai, .md, .html` — pasta `04_Manual_de_Marca/02_manual_editavel/` — recomendado
      _Assim você atualiza o manual no futuro sem depender da agência original._
- [ ] **Guia de tom de voz e linguagem** — formato `.pdf, .docx, .md` — pasta `04_Manual_de_Marca/03_guia_tom_de_voz/` — recomendado
      _Fundamental para redes sociais, atendimento e conteúdo consistente._

## 5. Arquivos Digitais e de Aplicação

- [ ] **Templates de redes sociais (posts, stories, capa)** — formato `.psd, .ai, .pdf, .txt, .url, .png, .html` — pasta `05_Aplicacoes/01_redes_sociais/` — recomendado
      _Se for link do Canva, salve um .txt com o link dentro da pasta._
- [ ] **Assinatura de e-mail** — formato `.html, .png` — pasta `05_Aplicacoes/02_assinatura_email/` — recomendado
      _Padroniza a comunicação por e-mail._
- [ ] **Papelaria (cartão de visita, papel timbrado, envelope)** — formato `.ai, .pdf` — pasta `05_Aplicacoes/03_papelaria/` — recomendado
      _Necessário sempre que for reimprimir._
- [ ] **Apresentação institucional (template)** — formato `.pptx, .key, .ai` — pasta `05_Aplicacoes/04_apresentacao/` — recomendado
      _Padroniza reuniões comerciais, pitches, institucional._
- [ ] **Mockups de aplicação da marca** — formato `.psd, .png, .jpg, .jpeg` — pasta `05_Aplicacoes/05_mockups/` — recomendado
      _Útil para aprovações internas e material de divulgação._
- [ ] **Template de embalagem (com corte e sangria)** — formato `.ai, .pdf` — pasta `05_Aplicacoes/06_ecommerce/embalagem/` — ESSENCIAL
      _Aparece como opcional no checklist genérico, mas é essencial para produto físico como o Pulse._
- [ ] **Selo/etiqueta de produto** — formato `.ai, .pdf` — pasta `05_Aplicacoes/06_ecommerce/etiqueta/` — ESSENCIAL
      _Rótulo com informação nutricional, lote, validade — exigido para venda do Pulse._
- [ ] **Banner para marketplace/loja virtual** — formato `.png, .jpg, .jpeg` — pasta `05_Aplicacoes/06_ecommerce/banners_marketplace/` — recomendado
      _Tamanhos específicos por plataforma (Mercado Livre, Amazon, Shopee etc.)._

## 6. Documentação e Propriedade

- [ ] **Termo de cessão de direitos autorais (assinado)** — formato `.pdf` — pasta `06_Documentos_Legais/01_termo_cessao_direitos/` — ESSENCIAL
      _Crítico: sem isso a agência pode reter direitos sobre a criação mesmo após pagamento._
- [ ] **Comprovante/licença de fontes pagas usadas** — formato `.pdf, .md` — pasta `06_Documentos_Legais/02_licenca_fontes/` — recomendado
      _Evita problema legal de uso de fonte sem licença válida._
- [ ] **Comprovante de registro no INPI** — formato `.pdf` — pasta `06_Documentos_Legais/03_registro_inpi/` — opcional
      _Só se o registro estiver no escopo contratado com a agência._
- [ ] **Racional criativo / apresentação do conceito da marca** — formato `.pdf, .pptx, .md` — pasta `06_Documentos_Legais/04_racional_criativo/` — recomendado
      _O 'porquê' das escolhas de design — útil para onboarding e para justificar decisões futuras._

---

**Total: 29 itens** (13 marcados como essencial). Itens essenciais faltando bloqueiam o uso seguro/legal da marca — priorize cobrar esses primeiro.
