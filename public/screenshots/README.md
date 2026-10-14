# Starwake screenshots

Drop production captures here. The gallery looks for these filenames, in this order, for each slot:

| Slot | Expected filenames |
| --- | --- |
| Flight (featured) | `flight.jpg`, `flight.jpeg`, `flight.webp`, `flight.png`, then `flight.svg` |
| Galaxy map | `galaxy-map.jpg` (same extension order) |
| Life on the concourse | `station-life.png` |
| Shipyard | `shipyard.jpg` |
| Careers | `careers.jpg` |
| Housing | `housing.jpg` |
| Planetary landing | `planetary-expedition.jpg` |
| Out of the cockpit | `surface-on-foot.png` |

## Specs

- Aspect: 16:10 (the featured flight frame is shown 16:9, and 16:10 still crops cleanly)
- Suggested size: 1600×1000 or larger
- Color: dark captures read best against the site's void background
- No need to edit code if you use the names above — the page picks up the image on refresh

The original 1600×1000 JPEG set was captured by the game repo's `tools/site-shots.mjs`, which writes the seven original files, including `stations.jpg`:

```sh
# in the Starwake repo
node tools/site-shots.mjs ../voidwake-site/public/screenshots
```

Traffic is random, so each run differs a little; look the frames over before committing. Replacing a file with the same name is enough — no code change required.

`station-life.png` and `surface-on-foot.png` are 1280×800 gameplay captures from the game's 10 October 2026 character-animation checks (`test-results/character-animation/concourse-walk.png` and `surface-walk.png`). The concourse image also appears in the latest-features showcase. Replace these separately when refreshing the gallery; the original seven-shot script does not produce them.

The slot list itself lives in `lib/site.ts` (`screenshots`).
