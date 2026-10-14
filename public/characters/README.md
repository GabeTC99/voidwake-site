# Starwake character preview

These original in-game animation atlases are copied from Starwake's verified character-animation revision `c4baf07c8005`, after the sleeve seam correction on 14 October 2026. This is an animation build identifier, not a Git commit. The static fallback paintings remain the original artwork from commit `0e46342`.

| File | Source in the game | Grid | Walk frames |
| --- | --- | --- | --- |
| `pilot-animated.webp` | `assets/people/pilot-animated.webp` | 8 × 8, 256 px cells | 16–39 |
| `astronaut-animated.webp` | `assets/people/astronaut-animated.webp` | 8 × 8, 256 px cells | 16–39 |
| `security-animated.webp` | `assets/people/security-animated.webp` | 8 × 4, 128 px cells | 8–31 |

Frame numbers are zero-based. The game's `tools/character-sprites/manifest.json` defines the layout. `characterPreview` in `lib/site.ts` supplies each atlas's row count and first walk row; `components/character-preview.tsx` and the sprite keyframes in `app/globals.css` play the 24-frame walk cycles on request. The preview starts paused.

All copied atlases were SHA256-checked against the animation owner's final source files. The URL revision query in `characterPreview` invalidates cached artwork; update it alongside future atlas replacements.

| Atlas | SHA256 |
| --- | --- |
| Pilot | `34cf0312fa44eee49e818b5f8a44e54918a32a07e4290a985c35014c55929ed8` |
| Astronaut | `ffbdb14106dd2ad66e21d9cba5bd01129fd593fd4a411ab76207517f8baca946` |
| Security | `4086412bd6925da35ef41abb3c2003779cb287fc19c21c9552291b59d1601285` |
