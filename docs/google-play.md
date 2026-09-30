# Starwake on Google Play — listing kit

Everything the Play Console asks for, ready to paste. Keep this in step with the game's README and
`app/privacy/page.tsx` when features or data handling change.

## URLs

| Play Console field | Value |
| --- | --- |
| Privacy policy | https://www.voidwakestudios.com/privacy |
| Website | https://www.voidwakestudios.com |
| Support / contact page | https://www.voidwakestudios.com/support |
| Delete data (Data safety → "provide a link") | https://www.voidwakestudios.com/privacy#delete-data |
| Contact email | the studio inbox in `lib/site.ts` → `contactEmail` (Play shows it publicly) |
| Package name | `com.voidwakestudios.starwake` |

After the listing is published, set `googlePlayLive: true` in `lib/site.ts`: the site then links to
`https://play.google.com/store/apps/details?id=com.voidwakestudios.starwake` instead of saying "coming soon".

## Store listing

Plain-text copies for pasting: `docs/google-play/short-description.txt` and `full-description.txt`.

**App name** (30 max)

```
Starwake: Space Frontier
```

**Short description** (80 max)

```
Trade, fight and chart your way across a million-star galaxy. No ads or IAP.
```

**Full description** (4,000 max; about 2,700 here). Blank lines separate the sections and `<b>` bolds the headings; Play supports both.

```
Starwake is a 2D space frontier: a whole spiral galaxy of about a million star systems, with work to do in every one of them.


Start in a little Wisp at Sorensen Relay. Run cargo between stations, strip asteroid rings, answer distress calls and hunt pirate aces for bounties — or jump out past the charted systems and sell what you find to the Cartographic Guild.


<b>A LIVING GALAXY</b>
• 64 hand-built home systems, then a million more generated star by star: old stars toward the core, young blue stars on the arms, red dwarfs at the rim.
• Eight landmarks, from The Maw, the black hole at the galactic core, to Last Light at the rim, and nine nebulae that pay more for data.
• Traders fly real routes and jump to real neighbouring systems. Police patrol in pairs and scan cargo — yours included.
• Markets react: sell a load and the price drops. Famines, booms, outbreaks and pirate surges move prices across the map.


<b>CAREERS</b>
Freelance, or sign on with faction Security, a freight line, the Syndicate, a research institute or a mining consortium. Every promotion changes the work: convoy escorts and judgment calls, heists and protection rackets, close stellar passes, deep-core blasting. Fly company ships in your employer's colours, and earn one to keep.


<b>SHIPS AND OUTFITTING</b>
26 hulls from six shipyards, from the starter Wisp to the Imperator super-freighter. Hardpoints, utility mounts and optional slots; modules in classes 1–6 and marks Mk1–Mk5; a power budget to respect. Own a fleet and store ships at stations.


<b>EXPLORE AND LAND</b>
Tune the resonance scanner onto hidden bodies, fire mapping probes at planets, then land on rocky, icy and metal-rich worlds. Drive a rover, sample alien plants on foot, and explore crash sites, settlements and ancient ruins.


<b>WALK THE STATIONS</b>
Dock and walk the concourse: market, shipyard, bar contacts with special contracts, and engineers who upgrade your modules. Buy a home — from a bunk pod to a penthouse — and arrange the furniture.


<b>MISSIONS</b>
Courier, delivery, mining, survey and assassination contracts, passenger charters and VIPs with demands, all tracked in the mission journal. An autopilot flies long routes for you, refuel stops included.


<b>SOUND</b>
About ninety minutes of recorded orchestral score that follows you from open space into combat and back home, plus an onboard computer voice and pirates who hail before they attack.


<b>ONE PURCHASE, THE WHOLE GAME</b>
• No ads, no in-app purchases, no account.
• Touch controls, or plug in a gamepad or keyboard.
• Optional cloud save carries your pilots between your devices.


Made by Voidwake Studios, an independent studio.
```

**Category:** Game → Simulation (alternatively Adventure). **Tags:** Space, Sci-fi, Open world, Trading, Exploration.

## Graphics

| Asset | Spec | Source |
| --- | --- | --- |
| App icon | 512 × 512 PNG | `docs/google-play/app-icon-512.png` (the game's own `icons/icon-512.png`) |
| Feature graphic | 1024 × 500 JPG/PNG, no alpha | `docs/google-play/feature-graphic.png` |
| Phone screenshots | 2–8, 16:9 or 9:16, 320–3840 px per side | `docs/google-play/phone-screenshots/` — seven 1920 × 1080 landscape captures with the touch controls, made by `PHONE=1 node tools/site-shots.mjs` in the game repo |
| 7" / 10" tablet screenshots | optional, needed for the tablet shelf | the same set works |

## Pricing (paid app)

- Set up a **payments profile** in Play Console (Settings → Payments profile) before you can set a price.
- Set the price under *Monetize → Products → App pricing*. Play converts it to local prices per country.
- **A paid app can never be made free and then paid again** — once free on Play, always free. Going
  from paid to free later is allowed.
- Answer "No" to in-app products and ads; the listing then shows "Contains no ads".
- Consider turning on **Play Integrity / automatic protection** (*Release → App integrity*) to make
  side-loaded copies of the APK refuse to run. It deters casual sharing; it won't stop a determined
  pirate, since the game is web files inside the app.

## Keeping it paid: no free copies

Starwake used to be public on GitHub with a free web build. Before launch:

1. Make `GabeTC99/Starwake` **private** (Settings → General → Danger zone → Change visibility).
   It had no forks, so no public copy of the repository remains. Releases become private with it.
2. **Unpublish GitHub Pages** (Settings → Pages). The Pages workflow has already been removed from
   the game repo. The game's service worker is network-first, so an installed web copy stops working
   the next time it loads online and gets the 404.
3. Optionally delete the old `android-build-*` / `windows-build-*` pre-releases.
4. The repository has a `LICENSE` stating all rights are reserved, so anyone re-uploading an old copy
   can be sent a DMCA takedown (Play Console also has a copyright complaint form).

## Data safety form

Based on what the Android app actually does (see the game's `js/22-cloud.js` and
`supabase/starwake_cloud_saves.sql`):

- **Does your app collect or share any of the required user data types?** Yes (cloud save only).
- **Is all of the user data collected by your app encrypted in transit?** Yes (HTTPS).
- **Do you provide a way for users to request that their data is deleted?** Yes — link above.
- **Account creation:** "My app does not allow users to create an account" (the sync code is not an account).
- **Data types collected:**
  - *App activity → Other actions* (Google's definition names "gameplay"): the save file and its summary
    (system, credits, ship, play time, device type). Collected, **not shared**, **optional** (only when the player turns on cloud
    save), **not processed ephemerally**. Purpose: **App functionality**.
- Nothing else: no location, personal info, contacts, identifiers, financial info, health, messages,
  photos, audio, files, calendar, web history or crash/diagnostics data leaves the device.
- The Chakra Petch typeface is loaded from Google Fonts at start-up. Font requests carry no user data
  beyond the connection itself, so they are not declared. Bundling the font into the game would remove
  this request altogether.

## Other Play Console sections

- **Ads:** No, the app does not contain ads.
- **Financial info (Data safety):** payments go through Google Play billing, which Google declares; the
  app itself collects no financial info.
- **App access:** All functionality is available without special access (no login).
- **Content rating (IARC questionnaire):** Violence — yes, fantasy violence between spaceships and
  against drones, no blood or gore, no humans harmed on screen. Crime themes — smuggling, bribery and
  protection rackets are optional career activities. No sexual content, profanity, gambling, drugs or
  user-to-user communication. No sharing of location, no purchases. Expect roughly PEGI 7 / ESRB Everyone 10+.
- **Target audience and content:** 13 and over (keeps the app out of the Families program requirements).
- **News app:** No. **COVID-19 app:** No. **Government app:** No. **Financial features:** None.
- **Health apps:** Not a health app.
- **Advertising ID:** The app does not use an advertising ID.

## Upload

Play only accepts Android App Bundles (`.aab`). The game's **Android APK** workflow builds a signed
`Starwake-<version>.aab` next to the APK on every signed build (tag `v1.2.3` or run it by hand); take it
from the workflow artifacts or the release assets. The upload key it's signed with is the one Play App
Signing should register as the **upload key** — Google then signs the installs with its own app signing
key. Target SDK is 36, which meets Play's current target API requirement.
