# Isofarian Guard Companion

A mobile-first companion app for tracking game state in The Isofarian Guard (2nd Edition).

## Features

- **Guard panels** — HP, AP (gray + temp), equipment, satchel (with expanded satchel toggle), speaking stones with cooldown tracking, chip bag with per-type +/−, end battle reset
- **Cities tab** — prestige (0–3), puzzle quest, and two bounties per city for all Campaign 1 cities
- **Stash & stonebound** — Fort Istra stash with all crafting materials by category and search; configurable stonebound cube tracker
- **Session log** — auto-logged events for all state changes
- **Settings** — configure max HP, starting black chips, stone slots per guard
- **Export / Import** — JSON save file for backup and restore

## Local development

```bash
npm install
npm run dev
```

## Deploying to GitHub Pages

1. Create a new GitHub repository named `isofarian-companion`
2. In `vite.config.js`, confirm `base: '/isofarian-companion/'` matches your repo name
3. In GitHub repo settings → Pages → Source, select **GitHub Actions**
4. Push to `main`:

```bash
git init
git remote add origin https://github.com/YOUR_USERNAME/isofarian-companion.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

The Actions workflow builds and deploys automatically. Your app will be live at:
`https://YOUR_USERNAME.github.io/isofarian-companion/`

## Adding materials

All crafting materials live in `src/data/materials.js`. Add any missing items to the appropriate category array — they appear in the stash and all autocomplete inputs automatically.
