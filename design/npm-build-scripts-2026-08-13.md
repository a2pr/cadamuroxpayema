# npm Build/Verify/Minify Scripts for Firebase Delivery

## Contexto
O site é uma SPA estática (Vue 3 + Vite) que um humano vai publicar no Firebase Hosting — Claude não pode rodar comandos `firebase` (só leitura, conforme `.claude/CLAUDE.md`). Antes desse deploy manual, faltava no `package.json` um comando dedicado para verificar que o build não tem erros, e não havia nenhuma compressão de imagem no pipeline (só existia `public/images/couple-placeholder.svg`, que será substituído por uma foto real do casal). Fontes são carregadas via Google Fonts CDN (não self-hosted), então não há arquivos de fonte locais para minificar hoje.

Decisões confirmadas com o usuário:
- Adicionar otimização automática de imagens (raster + SVG) no build, já que uma foto real vai substituir o placeholder.
- Manter o comando `verify` restrito a type-check + build (sem crawler de links no `dist`) — sinal suficiente para um site estático pequeno (<15 convidados).

## O que foi criado/alterado

**`vite.config.ts`** — adicionado o plugin `vite-plugin-image-optimizer` ao array `plugins`, rodando apenas em build (não afeta `vite dev`):
```ts
ViteImageOptimizer({
  png: { quality: 80 },
  jpeg: { quality: 80 },
  jpg: { quality: 80 },
  webp: { quality: 80 },
  svg: { multipass: true },
}),
```
Novas devDependencies: `vite-plugin-image-optimizer`, `sharp` (compressão raster), `svgo` (compressão SVG).

Minificação de JS/CSS não precisou de tooling novo — `vite build` já minifica ambos via esbuild por padrão.

**`package.json`** — novo script `verify`, alias direto de `build`:
```json
"verify": "npm run build"
```
`build` continua sendo o único comando de produção (`run-p type-check "build-only {@}" --"`); não foi criado um `build:prod` separado por não haver múltiplos alvos de deploy. `vue-tsc --build` e `vite build` já retornam código de saída não-zero em qualquer erro de tipo ou de bundling, o que cobre "verificar sem erro" para um projeto deste porte.

## Resultado da verificação (implementação)
Rodado em 2026-08-13:

```
npm run verify
✓ 25 modules transformed.
dist/index.html                   1.01 kB │ gzip:  0.54 kB
dist/assets/index-Dthaq5D6.css  230.96 kB │ gzip: 31.13 kB
dist/assets/index-CmJU1gzt.js   162.62 kB │ gzip: 55.72 kB
✓ built in 566ms

✨ [vite-plugin-image-optimizer] - optimized images successfully:
dist/images/couple-placeholder.svg  -9%   0.67 kB ⭢ 0.61 kB
💰 total savings = 0.06kB/0.67kB ≈ 9%
```
- `type-check` (`vue-tsc --build`) e `build-only` (`vite build`) rodaram em paralelo sem erros.
- JS e CSS gerados em `dist/assets/` confirmados minificados (single-line, sem comentários) e com filename hash para cache-busting.
- SVG placeholder passou pelo SVGO e ficou 9% menor; quando a foto real (JPG/PNG) do casal for adicionada, o mesmo plugin vai comprimi-la automaticamente via `sharp` (`quality: 80`) sem passo manual extra.
- `npm run dev` testado depois do build — sobe normalmente (HTTP 200), plugin de imagem não interfere no dev server. Único warning no console é o pré-existente do vue-router (sem rotas cadastradas), já documentado em `design/scaffolding-2026-08-13.md`, sem relação com esta mudança.
