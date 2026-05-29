import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const imagesDir = path.join(root, "images");
const originalsDir = path.join(imagesDir, "originals");

const HERO = "IMG_9801.jpeg";
const GALLERY = [
  "IMG_9619.jpeg",
  "IMG_9671.jpeg",
  "IMG_9795.jpeg",
  "IMG_9796.jpeg",
  "IMG_9802.jpeg",
  "IMG_9797.jpeg",
];

if (!fs.existsSync(originalsDir)) {
  fs.mkdirSync(originalsDir, { recursive: true });
}

async function backupIfNeeded(filename) {
  const src = path.join(imagesDir, filename);
  const dest = path.join(originalsDir, filename);
  if (!fs.existsSync(src)) return false;
  if (!fs.existsSync(dest)) {
    fs.copyFileSync(src, dest);
  }
  return true;
}

async function compress(filename, maxWidth, quality) {
  const src = path.join(imagesDir, filename);
  const tmp = path.join(imagesDir, `_opt_${filename}`);

  await sharp(src)
    .rotate()
    .resize(maxWidth, null, { fit: "inside", withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true })
    .toFile(tmp);

  fs.unlinkSync(src);
  fs.copyFileSync(tmp, src);
  fs.unlinkSync(tmp);
  const size = fs.statSync(src).size;
  console.log(`  ${filename}: ${(size / 1024).toFixed(0)} KB`);
}

async function createOgImage() {
  const src = path.join(imagesDir, HERO);
  const dest = path.join(root, "og-image.jpg");

  await sharp(src)
    .resize(1200, 630, { fit: "cover", position: "centre" })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(dest);

  console.log(`  og-image.jpg: ${(fs.statSync(dest).size / 1024).toFixed(0)} KB`);
}

console.log("Backing up originals…");
for (const file of fs.readdirSync(imagesDir).filter((f) => f.endsWith(".jpeg"))) {
  await backupIfNeeded(file);
}

console.log("\nCompressing hero…");
await compress(HERO, 1920, 82);

console.log("\nCompressing gallery…");
for (const file of GALLERY) {
  if (await backupIfNeeded(file)) {
    await compress(file, 1200, 80);
  }
}

console.log("\nCompressing remaining photos…");
for (const file of fs.readdirSync(imagesDir).filter((f) => f.endsWith(".jpeg"))) {
  if (file === HERO || GALLERY.includes(file)) continue;
  await compress(file, 1200, 80);
}

console.log("\nCreating OG preview image…");
await createOgImage();

console.log("\nDone.");
