# Scaffolding Compartilhado — Base para as 3 Opções

## Contexto
Antes de implementar qualquer uma das três opções de design (`option-a-foto-cheia-romantica`, `option-b-foto-com-painel-vidro`, `option-c-cartao-emoldurado`, todas de 2026-08-13), foi montada a base comum que qualquer uma delas vai usar — dependências, config, fontes, placeholder de foto e os dois componentes cujo comportamento é idêntico nas três opções (só o estilo muda). Assim, escolher uma opção depois vira só "montar o layout específico em cima do que já existe", sem repetir setup.

## O que foi criado

**Dependência**: `bootstrap` (`^5`) instalada e importada em `src/main.ts` (`bootstrap.min.css` + `bootstrap.bundle.min.js`, este último necessário para `collapse`/`modal` usados nas opções A e B).

**`src/config/invitation.ts`** — o config único (mesmo shape documentado nas 3 opções) com todos os textos/links/valor editáveis, mais o helper `formatPlatePrice` (`Intl`/`toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })`). Os valores hoje são os placeholders da Opção A; trocar para qualquer opção só exige editar os textos aqui, não os componentes.

**`public/images/couple-placeholder.svg`** — placeholder ilustrado (silhueta do casal + rótulo "FOTO DO CASAL") em proporção retrato (1080×1350), que funciona tanto full-bleed (opções A e B) quanto emoldurado em card (opção C). Referenciado por `invitation.couplePhoto`.

**`src/assets/main.css`** — variáveis CSS para as fontes e paletas das 3 opções, para que a implementação de qualquer uma delas só precise referenciar `var(--...)` em vez de repetir hex codes:
- Fontes: `--font-script-a/b/c`, `--font-detail-a/b/c`, `--font-body-a/b/c`
- Paleta A: `--color-a-overlay`, `--color-a-title`, `--color-a-detail`, `--color-a-band-bg`, `--color-a-band-text`, `--color-a-accent`
- Paleta B: `--color-b-panel-bg`, `--color-b-panel-border`, `--color-b-text`, `--color-b-text-muted`, `--color-b-accent-start/end`
- Paleta C: `--color-c-bg`, `--color-c-card-bg`, `--color-c-border`, `--color-c-text`, `--color-c-text-muted`

**`index.html`** — `lang="pt-BR"`, título "Save the Date", e um único `<link>` do Google Fonts carregando as 9 famílias usadas pelas 3 opções (Sacramento, Parisienne, Great Vibes, Playfair Display, Cormorant, EB Garamond, Jost, Poppins, Nunito Sans). **Depois de escolher uma opção, trocar esse `<link>` para carregar só as 3 famílias daquela opção** — carregar as 9 é aceitável agora (site para <15 pessoas, ainda em fase de design) mas é desperdício de banda na versão final.

**Componentes compartilhados** (comportamento idêntico nas 3 opções — só a `class` passada varia por opção, via fallthrough attrs do Vue):
- `src/components/LocationButton.vue` — link para o Google Maps
- `src/components/AppFooter.vue` — divisor + mensagem final
- `src/components/CoupleFigureImage.vue` — wrapper simples da foto placeholder

## O que **não** foi criado (fica para quando uma opção for escolhida)
- `PlatePriceReveal`/`PlatePriceModal`/`PlatePriceToggleButton` — o mecanismo de revelação do valor do prato é diferente em cada opção (modal / collapse dentro do painel / troca de label no próprio botão), então não há uma versão genérica útil a compartilhar
- O layout do Hero (foto full-bleed com overlay, painel de vidro, ou card emoldurado) — é exatamente o que diferencia as 3 opções
- `App.vue` continua o scaffold padrão do Vite — a composição final depende da opção escolhida

## Verificação
- `npm run type-check` — sem erros
- `npm run dev` + `playwright-cli` — página carrega, título "Save the Date", Bootstrap/fontes/CSS aplicados sem erros de console (só um warning pré-existente do vue-router por não haver rotas cadastradas, sem relação com esta mudança)
