# Nullharbor screenshots

Drop production captures here. The gallery looks for these filenames, in this order, for each slot:

| Slot | Expected filenames |
| --- | --- |
| Flight | `flight.jpg`, `flight.jpeg`, `flight.webp`, `flight.png`, then `flight.svg` |
| Stations | `stations.jpg` (same extension order) |
| Galaxy map | `galaxy-map.jpg` |
| Planetary expedition | `planetary-expedition.jpg` |

## Specs

- Aspect: 16:10 (featured flight frame is wider, but 16:10 still crops cleanly)
- Suggested size: 1600×1000 or larger
- Color: dark captures read best against the site’s void background
- No need to edit code if you use the names above — the page will pick up the image on refresh

Real 1600×1000 PNGs from the live Nullharbor beta now fill all four slots (`flight.png`, `stations.png`, `galaxy-map.png`, `planetary-expedition.png`). Replacing a file with the same name is enough — no code change required.

The slot list itself lives in `lib/site.ts` (`screenshots`).
