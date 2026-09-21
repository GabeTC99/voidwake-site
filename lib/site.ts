/**
 * Voidwake Studios — site copy and links.
 *
 * Change `playUrl` here when a public playable build or store listing is ready.
 * Screenshot filenames live in `screenshots` — drop matching files in
 * `public/screenshots/` (see that folder's README).
 */

export const site = {
  studio: "Voidwake Studios",
  studioShort: "Voidwake",
  game: "Nullharbor",
  tagline: "An original solo space sandbox.",
  description:
    "Chart uncharted systems, sell the data, and keep the hull flying. Nullharbor is a solo space sandbox for Android touchscreens and desktop browsers.",
  // Live Pages build after GabeTC99/Farbound → Nullharbor rename.
  playUrl: "https://gabetc99.github.io/Nullharbor/",
  playLabel: "Play Nullharbor",
  sourceLabel: "Source on GitHub",
  version: "Frontiers 2.1",
} as const;

export const nav = [
  { href: "#nullharbor", label: "Nullharbor" },
  { href: "#features", label: "Features" },
  { href: "#gallery", label: "Gallery" },
  { href: "#studio", label: "Studio" },
] as const;

export const stats = [
  { value: "192", label: "Deterministic systems" },
  { value: "64", label: "Charted core around Solace" },
  { value: "128", label: "Uncharted Reach" },
  { value: "4", label: "Guilds with commissions" },
] as const;

export const features = [
  {
    id: "exploration",
    title: "Exploration & discovery",
    body: "Pulse a system to catalog its star and worlds, then close in for a detailed survey. Charted space pays. The Uncharted Reach pays more. Dock and sell at Cartographics — each catalog and world pays once.",
  },
  {
    id: "economy",
    title: "Trading & mining",
    body: "Work the markets, strip the belt, and scoop fuel from the primary star. Faction standing shifts local prices. Depleted rocks and defeated ships stay gone when you come back.",
  },
  {
    id: "factions",
    title: "Factions & guilds",
    body: "Pledge to the Orion Concord, Cinder Directorate, or Outer Freeholds. Join Trading, Miners, Freelancer, and Explorers desks for sequential commissions — and the modules that come with them.",
  },
  {
    id: "expeditions",
    title: "Planetary expeditions",
    body: "Slow below 100 m/s, land a skiff, and sweep six persistent anomalies: mineral veins, relics, biosignatures, radio echoes. Hard impacts scar the hull. Emergency ascent leaves the data behind.",
  },
  {
    id: "ships",
    title: "Ships & modules",
    body: "New hulls stay in the hangar with their own loadout, fuel, and condition. Strip modules to storage, swap ships, or move a fit directly from another owned hull. Cargo stays with the pilot.",
  },
  {
    id: "platforms",
    title: "Browser + Android",
    body: "Play in a desktop browser or install the progressive web app on Android. Local progression, no account, no live-service calendar. Touch stick and keyboard both fly the same ship.",
  },
] as const;

export const screenshots = [
  {
    id: "flight",
    title: "Flight",
    caption: "Local space — stars, stations, and the next jump.",
    featured: true,
  },
  {
    id: "stations",
    title: "Stations",
    caption: "Markets, desks, hangars, and Cartographics.",
  },
  {
    id: "galaxy-map",
    title: "Galaxy map",
    caption: "A circular human core. The Reach in every direction.",
  },
  {
    id: "planetary-expedition",
    title: "Planetary expedition",
    caption: "Side-view skiff flight over procedural terrain.",
  },
] as const;

export const screenshotExtensions = ["jpg", "jpeg", "webp", "png", "svg"] as const;
