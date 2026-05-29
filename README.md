# Տաթև & Վահան — Հարսանիքի հրավեր

Armenian wedding invitation website.

## Quick start

Open `index.html` in a browser, or run a local server:

```bash
npx serve .
```

Then visit http://localhost:3000

## Add your photos

1. Put 4–6 photos in the `images/` folder
2. Name them `photo1.jpg` through `photo6.jpg`
3. Update `index.html` gallery `src` attributes from `.svg` to `.jpg`
4. `photo1.jpg` is also used as the hero background

## Set wedding date

Edit `js/main.js` and change `WEDDING_DATE`:

```js
const WEDDING_DATE = new Date(2026, 6, 27, 11, 0, 0); // year, month (0-11), day, hour, minute
```

## Sections

- Hero with names and animated intro
- Countdown to wedding day
- Love story timeline (10 years together)
- Schedule: restaurant 11:00, church 14:00, honey ceremony 17:00, celebration 18:00
- Venue maps (Royal Yerevan + Surp Hovhannes Church)
- Photo gallery with lightbox
- Contact phone numbers

## Deploy

This is a **static site** — no build step. Upload the folder as-is.

### GitHub Pages (recommended)

1. Push to GitHub (already done)
2. Repo → **Settings** → **Pages**
3. Under **Build and deployment**, set **Source** to **GitHub Actions**
4. After the next push, the site will be at `https://tatevavalyan050.github.io/wedding-invitation/`

### Netlify

1. [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**
2. Connect the repo
3. Build command: **leave empty**
4. Publish directory: **`.`** (root)
5. Deploy

### Vercel

1. [vercel.com](https://vercel.com) → **Add New Project** → import the repo
2. Framework Preset: **Other**
3. Build Command: **leave empty**
4. Output Directory: **`.`**
5. Deploy

If deploy fails with `npm run build` error, clear the build command — this project has no build script.
