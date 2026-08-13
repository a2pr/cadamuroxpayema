# Opção B — Foto com Painel de Vidro

## Mood / Conceito
Mantém a mesma ideia central da referência — foto do casal em tela cheia — mas em vez de escrever diretamente sobre a foto (como no save the date antigo), o texto e os botões ficam dentro de um painel translúcido "de vidro" (glassmorphism) ancorado no terço inferior da tela. O resultado é mais polido e moderno, e resolve um problema prático da referência: a legibilidade do texto sobre a foto passa a não depender mais do contraste específico daquela foto — qualquer foto que o casal escolher depois vai funcionar bem atrás do painel.

## Paleta de Cores
| Papel | Cor | Hex |
|---|---|---|
| Foto (fundo) | — | foto do casal (placeholder) |
| Painel de vidro | Branco translúcido + blur | `rgba(255,255,255,0.55)` |
| Borda do painel | Dourado suave | `rgba(201,166,107,0.6)` |
| Texto no painel | Vinho escuro | `#5B2333` |
| Texto secundário | Vinho acinzentado | `#8C6672` |
| Botão primário | Gradiente rosé-dourado | `#C9A66B` → `#D9A5A0` |

## Tipografia
- Título "Save the date": **Parisienne** (script elegante e mais contido que a referência, adequado para ler dentro de um painel pequeno).
- Nomes/data/detalhes: **Cormorant** (serifada).
- Botões e textos utilitários: **Poppins** (sans-serif moderna, bom contraste com o script).

## Estrutura da Página (mobile-first, single scroll)
1. **Hero full-bleed** (foto do casal cobrindo `100vh`, sem overlay pesado — a foto fica visível e nítida).
2. **Painel de vidro** ancorado no terço inferior da foto (`position: absolute; bottom: 5%`), com cantos arredondados (`border-radius: 24px`) e borda dourada fina:
   - "SAVE THE DATE" (kicker pequeno, maiúsculo)
   - Nomes do casal e data
   - Frase curta sobre o jantar: "Um jantar para celebrarmos juntos"
   - Os dois botões CTA, lado a lado, dentro do próprio painel
3. **Rodapé**: fora do painel, uma linha discreta abaixo da foto (fora da viewport inicial, ao rolar) com a mensagem final.

## Comportamento dos Botões
- **Localização**: botão em pílula (`rounded-pill`) dentro do painel, `href` configurável para o Google Maps, `target="_blank"`.
- **Valor do prato**: botão em pílula que aciona um **collapse** do Bootstrap que expande *dentro do próprio painel de vidro*, empurrando os elementos abaixo suavemente e revelando "R$ 000,00 por pessoa" — a transição suave combina com o efeito de vidro/blur do painel.

## Texto de Exemplo (placeholders PT-BR)
- Kicker: "SAVE THE DATE"
- Nomes: "Fulano & Fulana"
- Data: "00 de Mês de 2026"
- Frase do jantar: "Um jantar para celebrarmos juntos"
- Botão 1: "Localização"
- Botão 2: "Valor do Prato"
- Texto revelado: "R$ 000,00 por pessoa"
- Rodapé: "Esperamos por vocês."

## Componentes Vue Previstos
- `HeroPhoto.vue` — foto full-bleed simples (sem overlay pesado)
- `GlassPanel.vue` — painel translúcido com título, nomes, data e frase
- `LocationButton.vue` — botão pílula de localização
- `PlatePriceCollapse.vue` — botão pílula + collapse dentro do painel
- `AppFooter.vue` — mensagem final abaixo da foto

## Uso do Bootstrap 5
- `vh-100` para o hero full-bleed
- `position-absolute` + `backdrop-filter: blur(...)` (CSS custom, Bootstrap não tem glass nativo) para o painel
- `rounded-4`/`rounded-pill` para o painel e os botões
- `collapse` para a revelação do valor do prato, contido dentro do painel
- `row row-cols-2` (ou `d-flex gap-2`) para os botões lado a lado dentro do painel

## Config Compartilhado (mesmo em todas as opções)
Todas as 3 opções vão consumir `src/config/invitation.ts` na implementação, exportando:
```ts
export const invitation = {
  heroTitle: 'SAVE THE DATE',
  coupleNames: 'Fulano & Fulana',
  weddingDate: '00 de Mês de 2026',
  dinnerMessage: 'Um jantar para celebrarmos juntos',
  couplePhoto: '/images/couple-placeholder.jpg',
  googleMapsUrl: 'https://maps.google.com/?q=',
  locationButtonLabel: 'Localização',
  platePrice: 0, // valor em reais
  plateButtonLabel: 'Valor do Prato',
  footerMessage: 'Esperamos por vocês.',
}
```
Isso garante que trocar textos/links/valores/foto não exija tocar em nenhum componente — só o config.

## Implementação (2026-08-13)

Opção B foi escolhida e implementada em cima do [scaffolding compartilhado](scaffolding-2026-08-13.md).

**Componentes criados** (`src/components/`):
- `HeroPhoto.vue` — envolve `CoupleFigureImage` num container `100vh` com `object-fit: cover`; expõe um slot posicionado em `position: absolute; bottom: 5%` (centralizado, `max-width: 420px`) onde o `GlassPanel` é montado.
- `GlassPanel.vue` — painel com `backdrop-filter: blur(16px) saturate(160%)`, fundo `var(--color-b-panel-bg)`, borda `var(--color-b-panel-border)` e `border-radius: 24px`. Props `kicker`/`names`/`date`/`message` mapeiam para o "SAVE THE DATE" (Parisienne, uppercase), nomes e data (Cormorant) e a frase do jantar (Cormorant itálico). Slot para os botões.
- `PlatePriceCollapse.vue` — botão pílula (`btn-glass-outline`) com `data-bs-toggle="collapse"` que revela `{{ formatPlatePrice(price) }} por pessoa` num card translúcido dentro do próprio painel, empurrando o conteúdo abaixo suavemente (Bootstrap `collapse`, sem JS customizado).
- `LocationButton.vue` e `AppFooter.vue` reaproveitados do scaffolding sem alteração de comportamento — só receberam classes de estilo via fallthrough attrs (`btn-glass-primary rounded-pill` e `option-b-footer`).

**Estilos globais** (`src/assets/main.css`): classes `.btn-glass-primary` (gradiente `--color-b-accent-start` → `--color-b-accent-end`) e `.btn-glass-outline` (borda dourada translúcida), compartilhadas entre `LocationButton` e `PlatePriceCollapse`; `body` passou a usar `var(--font-body-b)` (Poppins).

**`index.html`**: link do Google Fonts reduzido às 3 famílias da Opção B (Parisienne, Cormorant 400/600, Poppins 400/500), conforme a nota deixada no scaffolding.

**`App.vue`**: compõe `HeroPhoto` → `GlassPanel` (com os dois botões lado a lado via `d-flex gap-2`) → `AppFooter`, todos alimentados por `invitation` (`src/config/invitation.ts`), sem valores hardcoded.

**Verificação**:
- `npm run type-check` — sem erros.
- `npm run dev` + `playwright-cli` (390×844 mobile e 1280×900 desktop): painel de vidro renderiza sobre a foto com blur visível, textos legíveis, botões lado a lado; clique em "Valor do Prato" expande o collapse dentro do painel revelando "R$ 0,00 por pessoa"; rodapé "Com amor, Fulano & Fulana" aparece discreto abaixo da foto ao rolar. Console sem erros novos (só o warning pré-existente do vue-router, sem rotas cadastradas).
