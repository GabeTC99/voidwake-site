# Voidwake Studios

Marketing site for **Voidwake Studios** and its flagship title **Farbound** — an original solo space sandbox for Android touchscreens and desktop browsers.

This repository is the studio landing page only. It does not contain the game, and it must never be used to change [Farbound](https://github.com/GabeTC99/Farbound).

Import this repo in Vercel (framework: Next.js). The App Router lives in `src/app/`.

## Run locally

```sh
npm install
npm run dev
```

The dev server binds to **http://127.0.0.1:43127**.

```sh
npm run build
npm start
```

## Deploy on Vercel

1. New Project → Import `GabeTC99/voidwake-site`.
2. Framework Preset: Next.js. Root directory: `.`
3. Build command: `next build` (default). Output: Next.js Node server, not a static export.

## Play / Get the game URL

The primary CTA points at the game repository for now:

`https://github.com/GabeTC99/Farbound`

Change it in one place:

```ts
// src/lib/site.ts
playUrl: "https://github.com/GabeTC99/Farbound",
```

Copy, navigation, feature blurbs, and gallery slots are in the same file.

## Screenshots

Placeholder frames ship in `public/screenshots/` so the gallery layout is real before production captures exist.

1. Export stills from the game (flight, stations, galaxy map, planetary expedition).
2. Drop them in `public/screenshots/` using the filenames in [`public/screenshots/README.md`](public/screenshots/README.md).
3. Refresh. No code change is required if you keep those names.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui

## License

Site copy and layout are original to Voidwake Studios. Farbound remains a separate project with its own license and source tree.
