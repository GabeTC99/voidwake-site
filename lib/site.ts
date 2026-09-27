/**
 * Voidwake Studios — site copy and links.
 *
 * `playUrl` is the live GitHub Pages build of Starwake. It installs as a PWA
 * (Add to Home Screen / Install app) on Android, iOS and desktop.
 * `contactEmail` is the single studio inbox behind every mailto link; the
 * address is not printed on the page.
 * Screenshot filenames live in `screenshots` — drop matching files in
 * `public/screenshots/` (see that folder's README).
 */

export const site = {
  studio: "Voidwake Studios",
  studioShort: "Voidwake",
  game: "Starwake",
  kicker: "a 2D space frontier",
  tagline: "Trade, fight and chart your way across a million stars.",
  description:
    "Starwake is a 2D space frontier for the browser: trade between stations, mine asteroid rings, hunt pirate aces, land on planets, walk stations and explore a spiral galaxy of about a million star systems.",
  playUrl: "https://gabetc99.github.io/Starwake/",
  playLabel: "Play Starwake",
  heroCtaNote:
    "Free in your browser · Keyboard, mouse, touch and gamepad · Installs as an app · No login",
  installNote:
    "On a phone, open the game and choose Add to Home Screen to play it full-screen and offline.",
  sourceUrl: "https://github.com/GabeTC99/Starwake",
  sourceLabel: "Source on GitHub",
  contactEmail: "gabe@voidwakestudios.com",
  contactLabel: "Email the studio",
} as const;

export const mailto = `mailto:${site.contactEmail}?subject=${encodeURIComponent(
  `${site.game} — hello from the site`
)}`;

export const nav = [
  { href: "#starwake", label: "Starwake" },
  { href: "#features", label: "Features" },
  { href: "#gallery", label: "Gallery" },
  { href: "#studio", label: "Studio" },
] as const;

export const stats = [
  { value: "~1M", label: "Star systems" },
  { value: "64", label: "Hand-built home systems" },
  { value: "26", label: "Hulls from six shipyards" },
  { value: "6", label: "Factions with territory" },
] as const;

export const features = [
  {
    id: "galaxy",
    title: "A million-system galaxy",
    body: "A spiral disc 200,000 ly across, generated sector by sector: old stars toward the core, young blue stars on the arms, red dwarfs at the rim. Eight landmarks, from The Maw to Last Light, and nine nebulae that pay more for data.",
  },
  {
    id: "trade",
    title: "Trade, mine & hunt",
    body: "Run cargo between economies, strip asteroid rings, and chase bounties on named pirate aces. Famines, booms, outbreaks and pirate surges move prices across the map — markets show the news nearby.",
  },
  {
    id: "signals",
    title: "Signals & missions",
    body: "Drop out of supercruise on wrecks, distress calls, pirate nests and anomalies. Courier, delivery, survey and assassination contracts, passenger charters and VIPs with demands — all tracked in the mission journal.",
  },
  {
    id: "ships",
    title: "Ships & outfitting",
    body: "Twenty-six hulls from six manufacturers, from the starter Wisp to the Imperator super-freighter. Core internals, hardpoints and optional slots, modules in classes 1–6 and grades E–A, and a power budget to respect.",
  },
  {
    id: "landings",
    title: "Land, drive & walk",
    body: "Set down on rocky, icy and metal-rich worlds, deploy an SRV, sample alien plants on foot. Dock and walk the concourse — market, shipyard, bar and engineers who upgrade modules with what you gathered.",
  },
  {
    id: "platforms",
    title: "Anywhere you have a browser",
    body: "No install, no build, no account. Keyboard and mouse, touch or gamepad. Add it to your home screen and it runs full-screen and offline, with an autopilot for long hauls and cloud saves across devices.",
  },
] as const;

export const screenshots = [
  {
    id: "flight",
    title: "Flight",
    caption: "Launching from Sorensen Relay in the Solace system.",
    featured: true,
  },
  {
    id: "galaxy-map",
    title: "Galaxy map",
    caption: "Solace at the heart of the home systems, routes plotted by A*.",
  },
  {
    id: "stations",
    title: "Stations",
    caption: "Walk the concourse from the hangar to the market and bar.",
  },
  {
    id: "shipyard",
    title: "Shipyard",
    caption: "Twenty-six hulls, each with its own slots and stock loadout.",
  },
  {
    id: "planetary-expedition",
    title: "Planetary landing",
    caption: "Flying low over a rocky world before touchdown.",
  },
] as const;

export const screenshotExtensions = ["jpg", "jpeg", "webp", "png", "svg"] as const;
