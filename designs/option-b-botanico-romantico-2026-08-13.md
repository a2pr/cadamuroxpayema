# Opção B — Botânico Romântico

## Mood / Conceito
Um convite caloroso e romântico, inspirado em papelaria de casamento com elementos florais/botânicos discretos ao redor do conteúdo. A tipografia manuscrita nos nomes do casal traz intimidade, enquanto os tons terrosos (sálvia, terracota, dourado suave) remetem a casamentos ao ar livre e decoração natural. É a opção que mais "sente" como um convite físico tradicional, só que digital.

## Paleta de Cores
| Papel | Cor | Hex |
|---|---|---|
| Fundo | Creme rosado | `#FDF6EF` |
| Texto principal | Verde-oliva escuro | `#3F4A34` |
| Texto secundário | Terracota suave | `#B57A5C` |
| Acento (ilustrações/linhas) | Verde-sálvia | `#8FA37E` |
| Botão primário (fundo) | Terracota | `#B5714F` |
| Botão primário (texto) | Creme | `#FDF6EF` |

## Tipografia
- Nomes do casal: **Alex Brush** ou **Great Vibes** (script/manuscrita, tamanho grande) — usada com moderação, só nos nomes.
- Título "SAVE THE DATE" e corpo: **Cardo** ou **Lora** (serifada suave, boa legibilidade) para manter o restante do texto legível no mobile mesmo com a fonte script chamativa nos nomes.
- Combinação clássica de papelaria: 1 fonte de destaque + 1 fonte de leitura.

## Estrutura da Página (mobile-first, single scroll)
1. **Hero**
   - Pequeno ornamento botânico (ilustração SVG simples de folhas/ramos, em `#8FA37E`) no topo, acima do título.
   - "SAVE THE DATE" em serifada suave, letras maiúsculas espaçadas.
   - Nomes do casal em script grande: "Fulano & Fulana" (placeholder), com um ramo de folhas ladeando o "&".
   - Foto do casal (placeholder) em moldura arqueada (`border-radius` assimétrico simulando arco), com uma fina borda de ilustração botânica sobreposta nos cantos.
   - Data por extenso abaixo da foto: "00 de Mês de 2026".
2. **Botões CTA** (empilhados no mobile, lado a lado no desktop — cada um dentro de um `card` sutil com fundo levemente destacado do fundo geral)
   - "Como Chegar" → botão com ícone de localização, `btn` com fundo terracota, abre Google Maps em nova aba.
   - "Valor do Convite" → botão outline verde-sálvia; ao clicar, abre um pequeno `modal` do Bootstrap (com moldura botânica no cabeçalho) mostrando "R$ 000,00 por pessoa".
3. **Footer**
   - Ilustração botânica espelhada (rodapé simétrico ao topo) + frase carinhosa: "Com carinho, esperamos por vocês." (placeholder).

## Comportamento dos Botões
- **Localização**: `<a>` estilizada como botão sólido terracota, `href` configurável apontando para o Google Maps, `target="_blank"`.
- **Valor do prato**: aqui o reveal é um **modal** (não um collapse inline) — reforça o tom "convite de papel", como se fosse abrir um cartão. `data-bs-toggle="modal"` aponta para um modal simples com o valor formatado vindo do config.

## Texto de Exemplo (placeholders PT-BR)
- Kicker: "SAVE THE DATE"
- Nomes: "Fulano & Fulana"
- Data: "00 de Mês de 2026"
- Botão 1: "Como Chegar"
- Botão 2: "Valor do Convite"
- Texto no modal: "O valor médio por convidado é de R$ 000,00."
- Rodapé: "Com carinho, esperamos por vocês."

## Componentes Vue Previstos
- `HeroSection.vue` — ornamento, título, nomes em script, foto arqueada, data
- `BotanicalOrnament.vue` — componente reutilizável de ilustração SVG (topo e rodapé)
- `LocationButton.vue` — botão de localização
- `PlatePriceModal.vue` — botão + modal do valor do prato
- `AppFooter.vue` — ornamento espelhado + frase final

## Uso do Bootstrap 5
- `card` sutil (sem sombra pesada) para envolver cada CTA
- `btn`, `btn-outline-success` (adaptado à paleta sálvia) e botão sólido customizado para terracota via variável Sass/CSS
- `modal` para a revelação do valor do prato
- `d-flex align-items-center gap-2` para alinhar ícone + texto nos botões
- Grid `row-cols-1 row-cols-md-2` para os dois CTAs

## Config Compartilhado (mesmo em todas as opções)
Todas as 3 opções vão consumir `src/config/invitation.ts` na implementação, exportando:
```ts
export const invitation = {
  coupleNames: 'Fulano & Fulana',
  weddingDate: '00 de Mês de 2026',
  heroTitle: 'SAVE THE DATE',
  couplePhoto: '/images/couple-placeholder.jpg',
  googleMapsUrl: 'https://maps.google.com/?q=...',
  locationButtonLabel: 'Como Chegar',
  platePrice: 0, // valor em reais
  plateButtonLabel: 'Valor do Convite',
}
```
Isso garante que trocar textos/links/valores não exija tocar em nenhum componente — só o config.
