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
| Early Access enrollment and purchase | https://play.google.com/store/apps/details?id=com.voidwakestudios.starwake |

Starwake uses Play Console's dedicated **Early Access** track. The Console allows anyone to join the
program from the store listing; enrollment and purchase happen there. The website's shared buttons
say "Join early access" and use that same listing URL.

**Public early access is live:** the studio confirmed availability on 19 October 2026.
`googlePlayLive: true` in `lib/site.ts` activates the store buttons and early-access availability
copy across the site. Early access is paid and the game is still in development.

## Store listing

Plain-text copies for pasting: `docs/google-play/short-description.txt` and `full-description.txt`.

**App name** (30 max)

```
Starwake
```

**Short description** (80 max)

```
Explore a million-star frontier. Trade, fight and train through five careers.
```

**Full description** (4,000 max). Blank lines separate the sections and ★ marks the headings. Plain text on purpose: Play Console's review summary shows HTML tags literally.

```
Paid early access: Starwake is still in development. Features, balance and presentation may change as we improve the game. Please send feedback and bug reports to gabe@voidwakestudios.com.


Starwake is a 2D space frontier: a whole spiral galaxy of about a million star systems, with work to do in every one of them.


Start in a little Wisp at Sorensen Relay. Run cargo between stations, strip asteroid rings, answer distress calls and hunt pirate aces for bounties — or jump out past the charted systems and sell what you find to the Cartographic Guild.


★ A LIVING GALAXY
• 64 hand-built home systems, then a million more generated star by star: old stars toward the core, young blue stars on the arms, red dwarfs at the rim.
• Eight landmarks, from The Maw, the black hole at the galactic core, to Last Light at the rim, and nine nebulae that pay more for data.
• Traders fly real routes and jump to real neighbouring systems. Police patrol in pairs and scan cargo — yours included.
• Markets react: sell a load and the price drops. Famines, booms, outbreaks and pirate surges move prices across the map.


★ CAREERS
Freelance, or apply at a staffed Security, freight, Syndicate, research or mining office. Train with an instructor, qualify and choose your first paid posting. Across five careers, 26 core practicals and 16 optional field lessons teach the work. Every promotion changes the duties: convoy escorts, heists, close stellar passes and deep-core blasting. Fly company ships in your employer's colours, and earn one to keep.


★ SHIPS AND OUTFITTING
26 hulls from six shipyards, from the starter Wisp to the Imperator super-freighter. Hardpoints, utility mounts and optional slots; modules in classes 1–6 and marks Mk1–Mk5; a power budget to respect. Own a fleet and store ships at stations.


★ EXPLORE AND LAND
Tune the resonance scanner onto hidden bodies, fire mapping probes at planets, then land on rocky, icy and metal-rich worlds. Drive a rover, sample alien plants on foot, and explore crash sites, settlements and ancient ruins.


★ WALK THE STATIONS
Dock and walk the concourse: market, shipyard, bar contacts with special contracts, and engineers who upgrade your modules. Buy a home — from a bunk pod to a penthouse — and arrange the furniture. All 18 on-foot characters animate with their original artwork, bringing walking, running and idle poses to stations, homes and planet surfaces.


★ MISSIONS
Courier, delivery, mining, survey and assassination contracts, passenger charters and VIPs with demands, all tracked in the mission journal. An autopilot flies long routes for you, refuel stops included.


★ SOUND
About ninety minutes of recorded orchestral score that follows you from open space into combat and back home, plus an onboard computer voice and pirates who hail before they attack.


★ ONE PURCHASE
• No ads, no in-app purchases, no account.
• Touch controls, or plug in a gamepad or keyboard. Target and Chase sit beside Fire, with larger flight and map controls.
• Sharp graphics mode keeps HUD text and station interiors crisp at your screen's full pixel density.
• Optional cloud save carries your pilots between your devices.


Made by Voidwake Studios, an independent studio.
```

**Category:** Game → Simulation. **Tags:** Simulation, Sandbox, Role-playing, Action-adventure, Vehicle shooter.

## Graphics

| Asset | Spec | Source |
| --- | --- | --- |
| App icon | 512 × 512 PNG | `docs/google-play/app-icon-512.png` (the game's own `icons/icon-512.png`) |
| Feature graphic | 1024 × 500 JPG/PNG, no alpha | `docs/google-play/feature-graphic.png` |
| Phone screenshots | 2–8, 16:9 or 9:16, 320–3840 px per side | `docs/google-play/phone-screenshots/` — seven selected 1920 × 1080 landscape JPGs: six current Chrome captures through normal game controls with touch UI, plus the retained housing capture. All are 16:9 and under 8 MB. |
| 7" / 10" tablet screenshots | optional, needed for the tablet shelf | the same set works |

Selected upload order:

1. `01-flight.jpg` — 1920 × 1080
2. `02-stations.jpg` — 1920 × 1080
3. `04-galaxy-map.jpg` — 1920 × 1080
4. `05-shipyard.jpg` — 1920 × 1080
5. `06-careers.jpg` — 1920 × 1080
6. `07-housing.jpg` — 1920 × 1080, retained from the previous kit
7. `08-academy.jpg` — 1920 × 1080

The active kit omits the obsolete `03-planetary-expedition.jpg`; its old version remains in Git history.
Dimensions, byte sizes, SHA-256 hashes, source-copy verification and visual-review notes are recorded in
[`google-play/screenshot-manifest.json`](google-play/screenshot-manifest.json).

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
- **Content rating (IARC questionnaire, matching the submitted answers):** Violence against humans
  (implied ship pilots, assassination contracts and a "Murder" crime) and non-humans (ships and drones),
  in a fantastical setting with unrealistic reactions and no blood or gore. Attacking defenceless ships
  carries penalties. No sex, drugs, gambling, bad language or user-to-user chat. Do not infer a numeric
  regional rating from this summary; use the certificates shown in Play Console.
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
