# Moving to a new PC

Everything that makes the site is in this GitHub repo. A fresh machine needs only the tools, a clone and one script.

## 1. On the old PC (before you wipe or retire it)

- [ ] **Push everything.** In each repo, `git status` should show nothing to commit and `git log origin/main..` should print nothing. Push any branches you want to keep.
- [ ] **Local files git ignores.** This repo ignores `.env*`, `.vercel/` and `*.pem`. The site needs no environment variables today, so normally there is nothing to copy. If you made a `.env.local` yourself, copy it to a password manager or USB drive, not to GitHub.
- [ ] **Google Play Console and Vercel logins.** Make sure you can log in to both, and that two-factor recovery codes are not stored only on the old PC.
- [ ] **Studio email** (`contactEmail` in `lib/site.ts`): confirm you can reach that inbox from the new machine.

## 2. On the new PC

### Windows (PowerShell)

```powershell
winget install --id Git.Git -e
winget install --id OpenJS.NodeJS.LTS -e
# open a NEW terminal so git/node are on PATH
mkdir $HOME\code; cd $HOME\code
git clone https://github.com/GabeTC99/voidwake-site.git
git clone https://github.com/GabeTC99/Nullharbor.git
cd voidwake-site
powershell -ExecutionPolicy Bypass -File scripts\setup.ps1
```

`setup.ps1 -Install` installs any missing Git and Node through winget for you.

### macOS / Linux / WSL

```sh
git clone https://github.com/GabeTC99/voidwake-site.git
cd voidwake-site && ./scripts/setup.sh
```

The script checks Git and Node (22 LTS, pinned in `.nvmrc`), runs `npm ci`, lint and a production build. Once it reports success, start with `npm run dev` → http://127.0.0.1:43127.

### Git identity (first time only)

```sh
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

The first `git push` opens a browser to sign in to GitHub (Git Credential Manager ships with Git for Windows).

## 3. Optional: Vercel CLI

Deploys run from GitHub through Vercel, so you don't need the CLI to ship. To use it locally anyway:

```sh
npm i -g vercel
vercel login
vercel link        # pick the existing voidwake-site project
vercel env pull    # only if environment variables are ever added
```

## Done when

- `scripts/setup.ps1` (or `setup.sh`) finishes with "Ready."
- `npm run dev` serves the landing page, `/privacy` and `/support`.
- `git push` from the new PC works.
