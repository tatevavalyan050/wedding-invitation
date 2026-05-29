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

Upload all files to any static host (GitHub Pages, Netlify, Vercel, etc.).
