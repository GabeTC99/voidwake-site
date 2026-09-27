# Voidwake Studios

Marketing site for **Voidwake Studios** and its flagship title **Starwake**, a 2D space frontier that runs in the browser. This repo is the studio landing page only — do not use it to change the game repository.

```sh
npm install
npm run dev
```

Dev server: http://127.0.0.1:43127

## Deploy on Vercel

1. Import [GabeTC99/voidwake-site](https://github.com/GabeTC99/voidwake-site) (branch `main`).
2. Framework: Next.js. Root directory: `.`
3. Build command: `next build` (default). Hosting: Next.js Node, not a static export.

Play CTA: `lib/site.ts` → `playUrl`.
Contact: `lib/site.ts` → `contactEmail`. Every mailto link on the page uses it; the address itself is not printed.

The look follows Starwake's own UI: the void/amber/ice palette, Chakra Petch, and the clipped-corner `.sw-btn` / `.sw-panel` shapes in `app/globals.css`.
