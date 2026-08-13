# Opção A — Foto Cheia Romântica

## Mood / Conceito
A opção mais próxima da referência (`refences/save_the_date.pdf`, o save the date que o casal fez para o casamento civil): uma foto do casal ocupando a tela inteira, com o título "Save the date" em script branco sobreposto no topo e os detalhes do evento em itálico colorido logo abaixo, também sobre a foto — a mesma linguagem visual e o mesmo clima pessoal e caloroso, agora adaptado para o **jantar de celebração** (e não a cerimônia civil) e com os dois botões de ação exigidos pelo projeto. Os botões ficam numa faixa sólida na parte inferior, fora da área da foto, para nunca depender do contraste de uma foto específica para ficarem legíveis.

## Paleta de Cores
| Papel | Cor | Hex |
|---|---|---|
| Foto (fundo) | — | foto do casal (placeholder) |
| Overlay sobre a foto | Preto translúcido (para legibilidade do título) | `rgba(0,0,0,0.25)` |
| Título "Save the date" | Branco | `#FFFFFF` |
| Texto de detalhes (itálico) | Vinho / bordô | `#8B2635` |
| Faixa inferior (fundo) | Vinho escuro quase preto | `#2B1418` |
| Texto/ícones na faixa | Creme | `#F5EDE4` |
| Botão de destaque | Dourado suave | `#C9A66B` |

## Tipografia
- Título "Save the date": **Sacramento** ou **Alex Brush** (script fluido, branco, com leve `text-shadow` escuro para legibilidade sobre a foto) — a mesma família de estilo usada na referência.
- Detalhes do evento (itálico, sobre a foto): **Playfair Display Italic**.
- Faixa inferior / botões / rodapé: **Jost** ou **Lato** (sans-serif limpa, para contraste com o script do topo).

## Estrutura da Página (mobile-first, single scroll)
1. **Hero full-bleed** (`min-height: 100vh` na foto)
   - Overlay escuro leve sobre toda a foto para garantir contraste.
   - "Save the date" em script branco, centralizado, próximo ao topo.
   - Abaixo, em itálico bordô: nomes do casal, data e uma linha sobre o jantar (ex.: "Venha celebrar conosco em um jantar especial").
   - Tudo sobreposto diretamente na foto, sem cartão ou caixa — igual à referência.
2. **Faixa de botões** (fora da foto, fundo vinho escuro sólido)
   - Os dois CTAs lado a lado no desktop, empilhados no mobile (`d-grid gap-2 d-md-flex justify-content-md-center`).
3. **Rodapé**
   - Dentro da mesma faixa escura: linha fina dourada + frase de fechamento em creme.

## Comportamento dos Botões
- **Localização**: `<a class="btn btn-outline-light">`, `href` configurável para o Google Maps, `target="_blank"`.
- **Valor do prato**: `<button class="btn" style="background:#C9A66B">` que abre um **modal** do Bootstrap — like abrir um pequeno convite dentro do convite — mostrando "O valor médio por pessoa é de R$ 000,00." formatado a partir do config.

## Texto de Exemplo (placeholders PT-BR)
- Título: "Save the date"
- Nomes: "Fulano & Fulana"
- Data: "00 de Mês de 2026"
- Frase do jantar: "Venha celebrar conosco em um jantar especial"
- Botão 1: "Ver Localização"
- Botão 2: "Valor do Prato"
- Texto no modal: "O valor médio por pessoa é de R$ 000,00."
- Rodapé: "Com amor, Fulano & Fulana"

## Componentes Vue Previstos
- `HeroPhotoOverlay.vue` — foto full-bleed + overlay + título script + detalhes em itálico
- `LocationButton.vue` — botão de localização
- `PlatePriceModal.vue` — botão + modal do valor do prato
- `BottomBand.vue` — faixa escura com os dois botões e o rodapé

## Uso do Bootstrap 5
- `vh-100` + `background-image`/`object-fit: cover` para o hero full-bleed
- `position-absolute` + utilities de posicionamento para sobrepor texto à foto
- `modal` para a revelação do valor do prato
- `d-grid gap-2 d-md-flex justify-content-md-center` para os botões na faixa inferior
- `container` + utilities de espaçamento (`py-4`, `px-3`) na faixa e no rodapé

## Config Compartilhado (mesmo em todas as opções)
Todas as 3 opções vão consumir `src/config/invitation.ts` na implementação, exportando:
```ts
export const invitation = {
  heroTitle: 'Save the date',
  coupleNames: 'Fulano & Fulana',
  weddingDate: '00 de Mês de 2026',
  dinnerMessage: 'Venha celebrar conosco em um jantar especial',
  couplePhoto: '/images/couple-placeholder.jpg',
  googleMapsUrl: 'https://maps.google.com/?q=',
  locationButtonLabel: 'Ver Localização',
  platePrice: 0, // valor em reais
  plateButtonLabel: 'Valor do Prato',
  footerMessage: 'Com amor, Fulano & Fulana',
}
```
Isso garante que trocar textos/links/valores/foto não exija tocar em nenhum componente — só o config.
