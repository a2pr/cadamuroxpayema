# Opção C — Cartão Emoldurado

## Mood / Conceito
A opção mais contida e "impressa" das três: em vez de a foto ocupar a tela inteira, ela fica emoldurada como um cartão — com margens generosas em creme ao redor, como um convite de papel colado sobre um mate. O título em script fica acima da foto (não sobre ela), o que a torna a opção mais legível e mais formal das três, mas ainda carrega a mesma assinatura tipográfica script + itálico da referência. É a escolha certa se o casal preferir algo mais discreto e "de papelaria" do que as opções full-bleed.

## Paleta de Cores
| Papel | Cor | Hex |
|---|---|---|
| Fundo da página | Creme | `#F7F1E8` |
| Moldura do cartão | Branco | `#FFFFFF` |
| Borda fina do cartão | Dourado | `#C9A66B` |
| Texto principal | Vinho escuro | `#7A2E3A` |
| Texto secundário | Cinza-vinho | `#9C8087` |
| Botão outline | Dourado | `#C9A66B` |

## Tipografia
- Título "Save the date": **Great Vibes** (script clássico), posicionado acima da foto, em vinho escuro sobre o fundo creme (não precisa de contraste sobre foto, então pode ser mais fino/detalhado que nas outras opções).
- Nomes, data, frase do jantar: **EB Garamond** (serifada clássica, itálico nos detalhes, ecoando o itálico da referência).
- Botões e rodapé: **Nunito Sans** (sans-serif arredondada, suave).

## Estrutura da Página (mobile-first, single scroll)
1. **Cabeçalho**: kicker pequeno + "Save the date" em script, centralizado, sobre o fundo creme.
2. **Cartão emoldurado**: foto do casal (placeholder) dentro de um card com moldura branca e borda dourada fina, cantos levemente arredondados — como uma foto polaroid elegante.
3. **Texto abaixo do cartão**: nomes do casal, data e frase sobre o jantar, centralizados, em serifada itálica.
4. **Faixa de botões**: os dois CTAs lado a lado (empilhados no mobile), estilo outline dourado, sobre o fundo creme.
5. **Rodapé**: linha fina dourada + frase final.

## Comportamento dos Botões
- **Localização**: `<a class="btn btn-outline-warning">` (outline dourado customizado), `href` configurável para o Google Maps, `target="_blank"`.
- **Valor do prato**: botão outline cujo **próprio texto é substituído** (estado local no componente Vue) pelo valor formatado ao ser clicado — sem modal nem collapse, reforçando a simplicidade "de cartão impresso" desta opção.

## Texto de Exemplo (placeholders PT-BR)
- Kicker: "Salve a data"
- Título: "Save the date"
- Nomes: "Fulano & Fulana"
- Data: "00 de Mês de 2026"
- Frase do jantar: "Reserve a data para um jantar em nossa celebração"
- Botão 1: "Ver Localização"
- Botão 2 (antes do clique): "Valor do Prato"
- Botão 2 (depois do clique): "R$ 000,00 por pessoa"
- Rodapé: "Com carinho, Fulano & Fulana"

## Componentes Vue Previstos
- `PageHeader.vue` — kicker + título script
- `FramedPhotoCard.vue` — moldura do cartão com a foto placeholder
- `EventDetails.vue` — nomes, data, frase do jantar
- `LocationButton.vue` — botão outline de localização
- `PlatePriceToggleButton.vue` — botão outline com estado local (label ↔ valor)
- `AppFooter.vue` — linha dourada + frase final

## Uso do Bootstrap 5
- `card` com `border` customizada (dourada) e `rounded-3` para a moldura da foto
- `container` com `max-width` reduzido (via CSS) para simular o formato de convite impresso
- `btn-outline-warning` (paleta ajustada para dourado) para os dois CTAs
- `row row-cols-1 row-cols-md-2` para os botões lado a lado no desktop
- Utilities de espaçamento (`py-4`, `my-4`) para o ritmo vertical do "papel"

## Config Compartilhado (mesmo em todas as opções)
Todas as 3 opções vão consumir `src/config/invitation.ts` na implementação, exportando:
```ts
export const invitation = {
  heroTitle: 'Save the date',
  coupleNames: 'Fulano & Fulana',
  weddingDate: '00 de Mês de 2026',
  dinnerMessage: 'Reserve a data para um jantar em nossa celebração',
  couplePhoto: '/images/couple-placeholder.jpg',
  googleMapsUrl: 'https://maps.google.com/?q=',
  locationButtonLabel: 'Ver Localização',
  platePrice: 0, // valor em reais
  plateButtonLabel: 'Valor do Prato',
  footerMessage: 'Com carinho, Fulano & Fulana',
}
```
Isso garante que trocar textos/links/valores/foto não exija tocar em nenhum componente — só o config.

## Implementação

**Componentes criados** (em `src/components/`):
- `PageHeader.vue` — kicker ("Salve a data", hardcoded — não faz parte do config compartilhado) + título script (`invitation.heroTitle`)
- `FramedPhotoCard.vue` — moldura branca (`var(--color-c-card-bg)`) com borda dourada fina e `rounded-3`, envolvendo o `CoupleFigureImage.vue` já existente
- `EventDetails.vue` — nomes/data/frase em `EB Garamond` itálico
- `PlatePriceToggleButton.vue` — `ref` local (`revealed`); ao clicar troca o próprio texto do botão pelo valor formatado via `formatPlatePrice`, sem modal/collapse
- `LocationButton.vue` e `AppFooter.vue` reutilizados do scaffolding sem alteração, estilizados via fallthrough `class` (`btn-outline-gold`)

**`App.vue`** compõe as peças acima dentro de um `container` com `max-width: 480px` (efeito "convite impresso"), fundo `var(--color-c-bg)` e os dois CTAs em `row row-cols-1 row-cols-md-2`.

**`src/assets/main.css`** — adicionada a classe `.btn-outline-gold` (borda/texto dourado, preenche dourado no hover/focus) usada pelos dois botões, e overrides de `.footer-divider`/`.footer-message` para a paleta C (linha dourada em vez de `currentColor`); `body` passou a usar `--font-body-c` e `--color-c-bg` como padrão.

**`index.html`** — link do Google Fonts reduzido às 3 famílias da Opção C (Great Vibes, EB Garamond, Nunito Sans).

**Verificação**: `npm run type-check` sem erros; `npm run dev` + `playwright-cli` (mobile 390×844 e desktop 1280×900) — layout, tipografia e paleta conferem com o design; clique em "Valor do Prato" troca corretamente para "R$ 0,00 por pessoa"; console sem erros (só o warning pré-existente do vue-router por ausência de rotas, sem relação com esta mudança).

## Atualização — feedback da cliente (2026-08-14)

A cliente confirmou a Opção C e pediu 4 ajustes:

1. **Frase do casamento civil**: novo campo `civilMarriageMessage` no config, exibido como nova linha em `EventDetails.vue` (entre a data e a frase do jantar), em `EB Garamond` itálico, negrito, na cor de texto principal (`--color-c-text`) para se destacar da frase secundária do jantar.
2. **Fontes maiores**: `.names` (1.5rem→1.75rem), `.date`/`.message` (~1rem→1.15–1.25rem) em `EventDetails.vue`; `.kicker` (0.75rem→0.9rem) e `.hero-title` (3.5rem→3.75rem) em `PageHeader.vue`.
3. **Faixa de valor do prato**: `platePrice: number` foi substituído por `platePriceMin`/`platePriceMax` no config; `formatPlatePrice` virou `formatPlatePriceRange(min, max)`, retornando `R$ 000,00 – R$ 000,00 por pessoa`.
4. **Link "Mais informações"**: novos campos `moreInfoUrl`/`moreInfoLabel` no config. `PlatePriceToggleButton.vue` passou a renderizar, junto do botão de preço, um `<a target="_blank" rel="noopener">` que só aparece (`v-if="revealed"`, com transição fade/slide) depois que a pessoa clica em "Valor do Prato" — reaproveitando o mesmo estado local `revealed` que já existia, sem subir estado para `App.vue`.

**Componentes alterados**: `src/config/invitation.ts`, `src/components/EventDetails.vue`, `src/components/PageHeader.vue`, `src/components/PlatePriceToggleButton.vue`, `src/App.vue`.

**Verificação**: `npm run type-check` sem erros; `npm run dev` + `playwright-cli` em mobile (390×844) e desktop (1280×900) — frase do casamento civil aparece corretamente entre data e frase do jantar; fontes maiores não quebram o layout mobile; clique em "Valor do Prato" revela a faixa formatada (`R$ 0,00 – R$ 0,00 por pessoa`) e o botão "Mais informações" abaixo; `href`/`target`/`rel` do link conferidos via DOM (`https://example.com`, `_blank`, `noopener`); console sem novos erros (só o warning pré-existente do vue-router).

### Ajuste — botão de faixa de valor agora é toggle (2026-08-14)

O botão "Valor do Prato" passou de revelação única para **toggle**: `reveal()` virou `toggle()` (`revealed.value = !revealed.value`), então clicar de novo no botão (já mostrando a faixa) volta ao label original — e o botão "Mais informações" some junto, com a mesma transição fade/slide agora também na saída (`fade-slide-leave-active`/`fade-slide-leave-to`).

**Verificação**: `npm run type-check` sem erros; `playwright-cli` em mobile (390×844) — 1º clique revela `R$ 0,00 – R$ 0,00 por pessoa` + "Mais informações"; 2º clique no mesmo botão volta para "Valor do Prato" e esconde "Mais informações"; console sem novos erros.
