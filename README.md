# Voidwake Studios

Marketing site for **Voidwake Studios** and its flagship title **Starwake**, a 2D space frontier for Android. This repo is the studio landing page only — do not use it to change the game repository.

```sh
npm install
npm run dev
```

Dev server: http://127.0.0.1:43127

New machine? See [`docs/NEW-PC-SETUP.md`](docs/NEW-PC-SETUP.md): install Git and Node 22, clone, then run `scripts/setup.ps1` (Windows) or `scripts/setup.sh`.

## Deploy on Vercel

1. Import [GabeTC99/voidwake-site](https://github.com/GabeTC99/voidwake-site) (branch `main`).
2. Framework: Next.js. Root directory: `.`
3. Build command: `next build` (default). Hosting: Next.js Node, not a static export.

Store CTA: `lib/site.ts` → `googlePlayLive: true`. Starwake is publicly available in paid Early Access on Google Play, confirmed by the studio on 19 October 2026. "Join early access" buttons use `googlePlayUrl`, the normal store listing, where players join the Early Access program and purchase the game.
Contact: `lib/site.ts` → `contactEmail`. Every mailto link on the page uses it; the address itself is not printed.

Pages: `/` (landing), `/privacy` (privacy policy, the URL given to Google Play) and `/support` (help and data deletion).
Google Play: the listing kit — descriptions, Data safety answers, content rating notes and the feature graphic — is in `docs/google-play.md` and `docs/google-play/`. Starwake uses Play Console's dedicated Early Access track and is now publicly available.
When the game starts handling data differently, update `app/privacy/page.tsx` and `privacyUpdated` in `lib/site.ts` before it ships.

The look follows Starwake's own UI: the void/amber/ice palette, Chakra Petch, and the clipped-corner `.sw-btn` / `.sw-panel` shapes in `app/globals.css`.
