# Opção A — Minimalista Elegante

## Mood / Conceito
Um convite silencioso e sofisticado: muito espaço em branco, tipografia fina e uma paleta neutra que deixa os nomes do casal e a data como protagonistas absolutos. É a direção mais "clássica" de convite de casamento digital — funciona bem para qualquer estilo de festa porque não compete com o restante da identidade visual do evento. Prioriza clareza e leitura rápida no celular: o convidado entende tudo em poucos segundos de rolagem.

## Paleta de Cores
| Papel | Cor | Hex |
|---|---|---|
| Fundo | Off-white | `#FAF7F2` |
| Texto principal | Cinza-chumbo | `#2E2A26` |
| Texto secundário | Cinza médio | `#8A8378` |
| Acento / linhas divisórias | Dourado envelhecido | `#B69B6B` |
| Botão primário (fundo) | Cinza-chumbo | `#2E2A26` |
| Botão primário (texto) | Off-white | `#FAF7F2` |

## Tipografia
- Título ("SAVE THE DATE") e nomes do casal: **Cormorant Garamond** (serifada, alta, elegante) — peso 500/600, com letter-spacing aumentado no título.
- Corpo de texto, datas, botões: **Jost** ou **Montserrat** (sans-serif geométrica, leve).
- Ambas disponíveis via Google Fonts, leves o suficiente para carregar rápido no mobile.

## Estrutura da Página (mobile-first, single scroll)
1. **Hero**
   - "SAVE THE DATE" em letras espaçadas, pequeno, centralizado no topo, funcionando como "kicker" acima dos nomes.
   - Nomes do casal em serifada grande: "Fulano & Fulana" (placeholder), separados por um "&" fino.
   - Data por extenso: "00 de Mês de 2026" (placeholder).
   - Foto do casal (placeholder) logo abaixo, em moldura circular ou quadrada com cantos levemente arredondados, com borda fina dourada.
2. **Botões CTA** (lado a lado no desktop, empilhados no mobile — `row`/`col-12 col-md-6`)
   - "Ver Localização" → link estilizado como `btn btn-outline-dark`, abre Google Maps em nova aba.
   - "Valor do Prato" → `btn btn-dark`, ao clicar expande um `collapse` do Bootstrap revelando "R$ 000,00 por pessoa" (placeholder) numa linha discreta abaixo do botão.
3. **Footer**
   - Linha fina dourada (divisor) + texto curto: "Contamos com a sua presença." (placeholder), sem redes sociais nem elementos extras — mantém a limpeza visual.

## Comportamento dos Botões
- **Localização**: `<a :href="config.googleMapsUrl" target="_blank" rel="noopener">` estilizado como botão outline. URL 100% configurável.
- **Valor do prato**: `<button>` com `data-bs-toggle="collapse"` controlando um `<div class="collapse">` que mostra o valor formatado em R$ vindo do config (sem modal — mantém a página "quieta", coerente com o conceito minimalista).

## Texto de Exemplo (placeholders PT-BR)
- Kicker: "SAVE THE DATE"
- Nomes: "Fulano & Fulana"
- Data: "00 de Mês de 2026"
- Botão 1: "Ver Localização"
- Botão 2: "Valor do Prato"
- Texto revelado: "R$ 000,00 por pessoa"
- Rodapé: "Contamos com a sua presença."

## Componentes Vue Previstos
- `HeroSection.vue` — título, nomes, data, foto
- `CoupleFigureImage.vue` — wrapper da foto placeholder com moldura
- `LocationButton.vue` — botão de localização (recebe `href` e `label` via props/config)
- `PlatePriceReveal.vue` — botão + collapse do valor do prato (recebe `price` e `label` via props/config)
- `AppFooter.vue` — linha de rodapé

## Uso do Bootstrap 5
- `container` + `row`/`col-12 col-md-6` para o par de botões
- `btn`, `btn-outline-dark`, `btn-dark` para os dois CTAs
- `collapse` para a revelação do valor do prato
- Utilities de espaçamento (`py-5`, `mt-4`, `gap-3`) para o ritmo vertical generoso típico do estilo minimalista
- `img-fluid` + `rounded-circle` (ou `rounded-3`) na foto placeholder

## Config Compartilhado (mesmo em todas as opções)
Todas as 3 opções vão consumir `src/config/invitation.ts` na implementação, exportando:
```ts
export const invitation = {
  coupleNames: 'Fulano & Fulana',
  weddingDate: '00 de Mês de 2026',
  heroTitle: 'SAVE THE DATE',
  couplePhoto: '/images/couple-placeholder.jpg',
  googleMapsUrl: 'https://maps.google.com/?q=...',
  locationButtonLabel: 'Ver Localização',
  platePrice: 0, // valor em reais
  plateButtonLabel: 'Valor do Prato',
}
```
Isso garante que trocar textos/links/valores não exija tocar em nenhum componente — só o config.

## Implementação (2026-08-13)

Opção A foi implementada em Vue 3 + TypeScript + Bootstrap 5, seguindo o desenho acima quase sem alterações.

**Dependências adicionadas**: `bootstrap` (CSS + `bootstrap.bundle.min.js` para o `collapse`), fontes Google `Cormorant Garamond` e `Jost` carregadas via `<link>` no `index.html`.

**Arquivos criados**:
- `src/config/invitation.ts` — config único com todos os textos/links/valor, mais o helper `formatPlatePrice` (usa `Intl`/`toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })`)
- `src/assets/main.css` — variáveis CSS da paleta (`--color-bg`, `--color-text`, `--color-text-muted`, `--color-accent`) e das fontes (`--font-display`, `--font-body`)
- `src/components/HeroSection.vue` — kicker "SAVE THE DATE", nomes, data e foto
- `src/components/CoupleFigureImage.vue` — moldura circular com borda dourada
- `src/components/LocationButton.vue` — link estilizado como `btn btn-outline-dark`, abre o Google Maps em nova aba
- `src/components/PlatePriceReveal.vue` — botão + `collapse` do Bootstrap revelando o valor formatado
- `src/components/AppFooter.vue` — divisor dourado + mensagem final
- `public/images/couple-placeholder.svg` — placeholder ilustrado (silhueta do casal + rótulo "FOTO DO CASAL"), referenciado em `invitation.couplePhoto`

**Arquivos alterados**: `src/App.vue` (composição dos componentes acima), `src/main.ts` (imports do Bootstrap CSS/JS e do `main.css`), `index.html` (título "Save the Date", `lang="pt-BR"`, `<link>` das fontes).

**Verificação**: `npm run type-check` passou sem erros. Testado visualmente com `npm run dev` + browser automation — hero, botões e o reveal do valor do prato (clique em "Valor do Prato" → exibe "R$ 0,00 por pessoa", formatado a partir do `platePrice` do config) funcionam como desenhado. Link de localização usa `invitation.googleMapsUrl`, ainda com placeholder vazio (`https://maps.google.com/?q=`).

**Pendente para o casal preencher**: valores reais em `src/config/invitation.ts` (nomes, data, URL do Google Maps, `platePrice`) e substituição de `public/images/couple-placeholder.svg` por uma foto real do casal (pode ser `.jpg`/`.png`, só atualizar `couplePhoto` no config).
