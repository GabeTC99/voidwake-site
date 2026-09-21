# Farbound screenshots

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

Until a real file is added, the matching `.png` (and `.svg`) placeholder keeps the layout intact.

The slot list itself lives in `lib/site.ts` (`screenshots`).
