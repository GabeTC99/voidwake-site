# Starwake screenshots

Drop production captures here. The gallery looks for these filenames, in this order, for each slot:

| Slot | Expected filenames |
| --- | --- |
| Flight (featured) | `flight.jpg`, `flight.jpeg`, `flight.webp`, `flight.png`, then `flight.svg` |
| Galaxy map | `galaxy-map.jpg` (same extension order) |
| Stations | `stations.jpg` |
| Shipyard | `shipyard.jpg` |
| Careers | `careers.jpg` |
| Housing | `housing.jpg` |
| Planetary landing | `planetary-expedition.jpg` |

## Specs

- Aspect: 16:10 (the featured flight frame is shown 16:9, and 16:10 still crops cleanly)
- Suggested size: 1600×1000 or larger
- Color: dark captures read best against the site's void background
- No need to edit code if you use the names above — the page picks up the image on refresh

The current set is 1600×1000 JPEGs captured from the live Starwake build in headless Chromium. Replacing a file with the same name is enough — no code change required.

The slot list itself lives in `lib/site.ts` (`screenshots`).
