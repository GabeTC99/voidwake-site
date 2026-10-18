# Voidwake Studios

Marketing site for **Voidwake Studios** and its flagship title **Starwake**, a 2D space frontier for Android. This repo is the studio landing page only — do not use it to change the game repository.

```sh
npm install
npm run dev
```

Dev server: http://127.0.0.1:43127

## Deploy on Vercel

1. Import [GabeTC99/voidwake-site](https://github.com/GabeTC99/voidwake-site) (branch `main`).
2. Framework: Next.js. Root directory: `.`
3. Build command: `next build` (default). Hosting: Next.js Node, not a static export.

Store CTA: `lib/site.ts` → `googlePlayLive`. Starwake's paid Early Access release is awaiting Google Play review. Keep the flag false: buttons use a "notify me at launch" email and pages say early access is coming soon. Once public availability is confirmed, set it true to activate the prepared "Join early access" buttons and availability copy. Those buttons use `googlePlayUrl`, the normal store listing, where players join the Early Access program and purchase the game.
Contact: `lib/site.ts` → `contactEmail`. Every mailto link on the page uses it; the address itself is not printed.

Pages: `/` (landing), `/privacy` (privacy policy, the URL given to Google Play) and `/support` (help and data deletion).
Google Play: the listing kit — descriptions, Data safety answers, content rating notes and the feature graphic — is in `docs/google-play.md` and `docs/google-play/`. Starwake uses Play Console's dedicated Early Access track. Do not activate the flag or deploy this launch change until Google review is complete and public availability on the store listing has been confirmed. Review submission alone does not make the game public.
When the game starts handling data differently, update `app/privacy/page.tsx` and `privacyUpdated` in `lib/site.ts` before it ships.

The look follows Starwake's own UI: the void/amber/ice palette, Chakra Petch, and the clipped-corner `.sw-btn` / `.sw-panel` shapes in `app/globals.css`.
