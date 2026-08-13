# Opção C — Editorial Moderno

## Mood / Conceito
Um convite de alto contraste e forte presença gráfica, com a foto do casal ocupando a tela inteira (full-bleed) como um "cartaz" e a tipografia funcionando quase como uma capa de revista. É a opção mais ousada e menos convencional das três — para um casal que quer algo marcante e visualmente impactante em vez de delicado. Usa uma cor de destaque única e forte sobre uma base monocromática (preto/branco), o que também facilita manter consistência visual mesmo trocando a foto placeholder depois.

## Paleta de Cores
| Papel | Cor | Hex |
|---|---|---|
| Fundo | Preto quase puro | `#111111` |
| Texto principal | Branco | `#F5F5F5` |
| Texto secundário | Cinza claro | `#B3B3B3` |
| Acento (cor de destaque única) | Coral vibrante | `#FF5A4E` |
| Botão primário (fundo) | Coral vibrante | `#FF5A4E` |
| Botão primário (texto) | Preto | `#111111` |

> A cor de acento (`#FF5A4E`) é a única variável de "personalidade" do layout — pode ser trocada facilmente (ex.: para a cor de identidade do casal) sem afetar o resto do sistema, já que tudo mais é preto/branco/cinza.

## Tipografia
- Título "SAVE THE DATE" e nomes: **Archivo Black** ou **Bebas Neue** (sans-serif condensada, bem pesada, estilo cartaz/editorial) em caixa alta.
- Corpo, datas, botões: **Inter** ou **Space Grotesk** (sans-serif moderna, ótima legibilidade em telas pequenas mesmo em tamanho reduzido).
- Contraste de peso é o principal recurso tipográfico aqui (bem pesado vs. bem leve), não a mistura serif/script.

## Estrutura da Página (mobile-first, single scroll)
1. **Hero (full-bleed)**
   - Foto do casal (placeholder) como imagem de fundo cobrindo 100% da largura e boa parte da altura da tela (`vh-100` ou próximo), com overlay escuro semitransparente para garantir contraste do texto.
   - "SAVE THE DATE" sobreposto à foto, canto superior ou centralizado, em fonte condensada grande, com leve acento em coral (ex.: sublinhado ou "THE" em coral).
   - Nomes do casal e data sobrepostos na parte inferior da foto, alinhados à esquerda (estética de pôster/editorial), em branco.
2. **Botões CTA** (logo abaixo da foto, fora da área da imagem — fundo preto sólido)
   - "Localização" → botão block-width no mobile (`w-100`), fundo coral, texto preto, ícone de pin.
   - "Valor do Prato" → botão outline branco; ao clicar, o próprio botão se transforma (troca de label) revelando "R$ 000,00" inline — sem modal nem collapse, reforçando a estética direta/editorial (comportamento tipo "reveal-in-place").
3. **Footer**
   - Barra fina em coral + texto curto em caixa alta: "NOS VEMOS LÁ." (placeholder), como um "rodapé de revista".

## Comportamento dos Botões
- **Localização**: `<a>` estilizada como botão sólido coral, `w-100` no mobile, `href` configurável para o Google Maps, `target="_blank"`.
- **Valor do prato**: ao clicar, o texto do próprio botão é substituído (via `ref` reativa no Vue) pelo valor formatado do config por ~alguns segundos ou permanentemente após o clique — não usa `collapse`/`modal` do Bootstrap, é um estado local simples do componente, mantendo a interação minimalista e "no próprio botão".

## Texto de Exemplo (placeholders PT-BR)
- Kicker/título: "SAVE THE DATE"
- Nomes: "FULANO & FULANA"
- Data: "00.00.2026" (formato numérico, mais editorial)
- Botão 1: "LOCALIZAÇÃO"
- Botão 2 (antes do clique): "VALOR DO PRATO"
- Botão 2 (depois do clique): "R$ 000,00"
- Rodapé: "NOS VEMOS LÁ."

## Componentes Vue Previstos
- `HeroFullBleed.vue` — foto de fundo + overlay + título + nomes sobrepostos
- `LocationButton.vue` — botão de localização (block-width)
- `PlatePriceToggleButton.vue` — botão com estado local (label ↔ valor)
- `AppFooter.vue` — barra coral + frase final

## Uso do Bootstrap 5
- `vh-100` (ou `min-vh-75`) + `bg-image`/CSS `background-image` custom para o hero full-bleed
- Utility classes de posicionamento (`position-absolute`, `bottom-0`, `start-0`) para sobrepor texto à foto
- `btn`, `btn-outline-light`, botão sólido customizado (variável CSS para o coral) e `w-100` no mobile
- Grid `d-grid gap-2 d-md-flex` para os botões (empilhados no mobile, lado a lado no desktop)
- Sem `card`/`modal`/`collapse` — a estética depende de menos "componentes visuais" do Bootstrap e mais de utilities puras, para manter o visual "de pôster"

## Config Compartilhado (mesmo em todas as opções)
Todas as 3 opções vão consumir `src/config/invitation.ts` na implementação, exportando:
```ts
export const invitation = {
  coupleNames: 'FULANO & FULANA',
  weddingDate: '00.00.2026',
  heroTitle: 'SAVE THE DATE',
  couplePhoto: '/images/couple-placeholder.jpg',
  googleMapsUrl: 'https://maps.google.com/?q=...',
  locationButtonLabel: 'LOCALIZAÇÃO',
  platePrice: 0, // valor em reais
  plateButtonLabel: 'VALOR DO PRATO',
}
```
Isso garante que trocar textos/links/valores não exija tocar em nenhum componente — só o config.
