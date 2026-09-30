/**
 * Voidwake Studios — site copy and links.
 *
 * Starwake is a paid game sold on Google Play; there is no free or web build.
 * Until `googlePlayLive` is true, every store button asks to be notified at
 * launch (a mailto) instead of linking to the unpublished listing.
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
    "Starwake is a 2D space frontier for Android: trade between stations, mine asteroid rings, hunt pirate aces, sign on for a career, land on planets, walk stations and explore a spiral galaxy of about a million star systems.",
  storeLabel: "Get it on Google Play",
  notifyLabel: "Notify me at launch",
  heroCtaNote:
    "Coming soon to Google Play · Touch, gamepad or keyboard · One purchase: no ads, no in-app purchases",
  platformsNote:
    "Android first, on Google Play. Steam and itch.io versions are planned.",
  contactEmail: "gabe@voidwakestudios.com",
  contactLabel: "Email the studio",
  siteUrl: "https://www.voidwakestudios.com",
  // Android package name, as registered in Google Play Console.
  androidPackage: "io.github.gabetc99.starwake",
  // Flip to true once the Play listing is published; until then the site says "coming soon".
  googlePlayLive: false,
  privacyUpdated: "30 September 2026",
} as const;

export const googlePlayUrl = `https://play.google.com/store/apps/details?id=${site.androidPackage}`;

export const mailto = `mailto:${site.contactEmail}?subject=${encodeURIComponent(
  `${site.game} — hello from the site`,
)}`;

export const notifyMailto = `mailto:${site.contactEmail}?subject=${encodeURIComponent(
  `Tell me when ${site.game} launches`,
)}`;

// Root-relative so the header and footer work from /privacy and /support too.
export const nav = [
  { href: "/#starwake", label: "Starwake" },
  { href: "/#features", label: "Features" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#studio", label: "Studio" },
  { href: "/support", label: "Support" },
] as const;

export const legalNav = [
  { href: "/privacy", label: "Privacy policy" },
  { href: "/support", label: "Support" },
] as const;

export const stats = [
  { value: "~1M", label: "Star systems" },
  { value: "5", label: "Careers to sign on with" },
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
    body: "Run cargo between economies, strip asteroid rings, and chase bounties on named pirate aces. Selling a load moves the price, so the real margins are a jump away. Famines, booms, outbreaks and pirate surges move markets across the map.",
  },
  {
    id: "signals",
    title: "Signals & missions",
    body: "Drop out of slipstream on wrecks, distress calls, pirate nests and anomalies. Courier, delivery, survey and assassination contracts, passenger charters and VIPs with demands — all tracked in the mission journal.",
  },
  {
    id: "traffic",
    title: "Living traffic",
    body: "Traders fly real errands between stations and jump to neighbouring systems, where they actually arrive and sell. Police patrol in pairs, stop ships for cargo scans (yours too) and answer pirate attacks. Nearby pilots chatter on comms.",
  },
  {
    id: "discovery",
    title: "Scan & chart",
    body: "Tune the resonance scanner onto a system's hidden bodies, then fire mapping probes onto a planet's surface. Sell the data to the Cartographic Guild — it pays more the further from home, and more again inside a nebula.",
  },
  {
    id: "ships",
    title: "Ships & outfitting",
    body: "Twenty-six hulls from six manufacturers, from the starter Wisp to the Imperator super-freighter. Core internals, hardpoints and optional slots, modules in classes 1–6 and marks Mk1–Mk5, and a power budget to respect.",
  },
  {
    id: "careers",
    title: "Careers",
    body: "Sign on with faction Security, a freight line, the Syndicate, a research institute or a mining consortium. Every promotion changes the work: convoy escorts, heists, close stellar passes, deep-core blasting — and wingmen of your own at the top grade.",
  },
  {
    id: "fleet",
    title: "Company ships & your fleet",
    body: "Clock in to fly a company ship in your employer's colours, serviced free and replaced if lost. Make grade four and one is yours to keep. Own several hulls, store them at stations and switch between them. Security ships come with police lights.",
  },
  {
    id: "housing",
    title: "A home among the stars",
    body: "Buy anything from a bunk pod to a penthouse at any station. Your first home is your home port. Fit lockers, a data vault, hydroponics or a sublet room, arrange the furniture, and invite contacts from the bar over to talk business.",
  },
  {
    id: "landings",
    title: "Land, drive & walk",
    body: "Set down on rocky, icy and metal-rich worlds, deploy a rover, sample alien plants on foot. Dock and walk the concourse — market, shipyard, bar and engineers who upgrade modules with what you gathered.",
  },
  {
    id: "sound",
    title: "Soundtrack & ship voice",
    body: "About ninety minutes of recorded orchestral score that crossfades between open space, combat, stations, the deep frontier and home. An onboard computer calls out shields, heat and interdictions, and pirates hail before they attack.",
  },
  {
    id: "platforms",
    title: "Made for your phone",
    body: "Built for touch, with full gamepad and keyboard support. One purchase: no ads, no in-app purchases, no account. An optional sync code carries your pilots between devices, and an autopilot handles the long hauls.",
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
    id: "careers",
    title: "Careers",
    caption: "Five employers, five grades, and company ships on shift.",
  },
  {
    id: "housing",
    title: "Housing",
    caption: "A furnished penthouse with the station's planet out the window.",
  },
  {
    id: "planetary-expedition",
    title: "Planetary landing",
    caption: "Flying low over a rocky world before touchdown.",
  },
] as const;

export const screenshotExtensions = [
  "jpg",
  "jpeg",
  "webp",
  "png",
  "svg",
] as const;
