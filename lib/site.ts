/**
 * Voidwake Studios — site copy and links.
 *
 * Starwake is a paid game sold on Google Play; there is no free or web build.
 * Early-access enrollment happens on the Google Play store listing.
 * The paid early-access release is publicly available on Google Play.
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
    "Starwake is out now in paid early access on Google Play for Android. Trade, fight and explore a million star systems, then step out into stations and onto planets with animated characters and controls built for touch.",
  heroBody:
    "Trade between stations, mine asteroid rings and hunt pirate aces — then leave the cockpit. Walk a lively concourse, make a home among the stars or set foot on an uncharted world.",
  heroSecondaryLabel: "See what's new",
  storeLabel: "Join early access",
  notifyLabel: "Notify me at launch",
  heroCtaNote:
    "Out now in paid early access on Google Play · Still in development · One purchase: no ads, no in-app purchases",
  heroPendingCtaNote:
    "Paid early access coming to Google Play · Still in development · One purchase: no ads, no in-app purchases",
  earlyAccessTitle: "Join the frontier in early access",
  earlyAccessBody:
    "Starwake is available in paid early access on Google Play. Join the early access program from the store listing. The game is still in development; your feedback and bug reports help shape what comes next.",
  earlyAccessPendingTitle: "Early access coming soon",
  earlyAccessPendingBody:
    "Starwake is coming to Google Play in paid early access. Leave your email and we'll write once it's available — no newsletter.",
  featuresIntro:
    "Starwake is in paid early access on Android through Google Play. Everything below is in the current build.",
  featuresPendingIntro:
    "Starwake is preparing for paid early access on Android through Google Play. Everything below is in the current build.",
  platformsNote:
    "Android first on Google Play. Steam and itch.io versions are planned.",
  contactEmail: "gabe@voidwakestudios.com",
  contactLabel: "Email the studio",
  siteUrl: "https://www.voidwakestudios.com",
  // Android package name, as registered in Google Play Console.
  androidPackage: "com.voidwakestudios.starwake",
  // Public early-access availability confirmed by the studio on 19 October 2026.
  googlePlayLive: true,
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
  { href: "/#whats-new", label: "What's new" },
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

export const featureShowcase = {
  eyebrow: "What's new in the current build",
  title: "A livelier frontier. A clearer view.",
  body: "Original characters in motion, more control in a dogfight and sharper detail on your phone. Explore the latest additions to Starwake and help shape what comes next.",
  browseLabel: "Explore all features",
  animation: {
    eyebrow: "01 / Life on foot",
    title: "Step out. The frontier is moving.",
    body: "All 18 on-foot characters now animate using their original artwork. Walk, run and idle in the station concourse, at home and on planet surfaces — from your pilot and surface suit to the people you meet along the way.",
    image: {
      src: "/screenshots/station-life.png",
      alt: "Starwake's station concourse with the orange-suited pilot, station staff and visitors between the market, mission board and bar.",
      width: 1280,
      height: 800,
    },
  },
  improvements: [
    {
      id: "controls",
      eyebrow: "02 / Built for touch",
      title: "Keep your target. Take the shot.",
      body: "Target and Chase sit beside Fire. Let Chase follow and aim at your target while you handle the weapons. Larger flight and map controls make the next move easier to tap.",
      detail: "Target · Chase · Fire",
    },
    {
      id: "graphics",
      eyebrow: "03 / A sharper frontier",
      title: "See the detail, from orbit to the concourse.",
      body: "Sharp graphics mode uses your screen's full pixel density, keeping HUD text and station interiors crisp. Phone menus stay within the screen even when a larger system font is selected.",
      detail: "Sharp graphics · Clearer phone menus",
    },
  ],
} as const;

export const characterPreview = {
  label: "Original in-game artwork",
  note: "Walk cycles taken directly from Starwake.",
  playLabel: "Play animation",
  pauseLabel: "Pause animation",
  characters: [
    { id: "pilot", label: "Pilot", src: "/characters/pilot-animated.webp?v=c4baf07c8005", fallbackSrc: "/characters/pilot.webp", rows: 8, startRow: 2 },
    { id: "astronaut", label: "Surface suit", src: "/characters/astronaut-animated.webp?v=c4baf07c8005", fallbackSrc: "/characters/astronaut.webp", rows: 8, startRow: 2 },
    { id: "security", label: "Security", src: "/characters/security-animated.webp?v=c4baf07c8005", fallbackSrc: "/characters/security.webp", rows: 4, startRow: 1 },
  ],
} as const;

export const galleryCopy = {
  body: "Gameplay from Starwake: combat above Solace IV, the galaxy map, careers, a home of your own and planetary exploration. The latest concourse and on-foot captures show the original character artwork in the game.",
} as const;

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
    body: "Apply at a staffed Security, freight, Syndicate, research or mining office. Train with an instructor, qualify and choose your first paid posting. Across five careers, 26 core practicals and 16 optional field lessons teach the work. Promotions bring convoy escorts, heists, close stellar passes, deep-core blasting and wingmen of your own.",
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
    body: "Set down on rocky, icy and metal-rich worlds, deploy a rover and sample alien plants on foot. Explore crash sites, settlements, geyser fields and ancient ruins guarded by sentinel drones. Back at the station, walk the concourse and meet engineers who upgrade your modules.",
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
    caption: "A pirate Harrier jumps you above Solace IV, and the police come in with lights on.",
    featured: true,
  },
  {
    id: "galaxy-map",
    title: "Galaxy map",
    caption: "Solace at the heart of the home systems, a million more stars beyond.",
  },
  {
    id: "station-life",
    title: "Life on the concourse",
    caption: "Your pilot, station staff and visitors share the concourse, all using the original character artwork.",
  },
  {
    id: "shipyard",
    title: "Shipyard",
    caption: "Combat hulls from Kessler Armaments and Aurelian Works, side by side.",
  },
  {
    id: "careers",
    title: "Careers",
    caption: "Sign on with faction Security or a freight line, and climb five grades.",
  },
  {
    id: "housing",
    title: "Housing",
    caption: "A furnished suite, the planet out the window, and a bar contact dropping by.",
  },
  {
    id: "planetary-expedition",
    title: "Planetary landing",
    caption: "Flying low over a crash site on Solace IV, looking for somewhere to set down.",
  },
  {
    id: "surface-on-foot",
    title: "Out of the cockpit",
    caption: "Suit up and step onto Solace IV, with your ship waiting nearby.",
  },
] as const;

export const screenshotExtensions = [
  "jpg",
  "jpeg",
  "webp",
  "png",
  "svg",
] as const;
