/**
 * Скачивает JPG-постеры Slots Temple в assets/img/similar-slots/*.jpg
 * и правит site-config.mjs: подставляет .jpg вместо .svg для обложек.
 * Запуск: node scripts/download-similar-slot-covers.mjs
 */
import fs from "fs";
import https from "https";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "assets", "img", "similar-slots");

const TILES = [
  ["gates-of-olympus.jpg", "https://www.slotstemple.com/img/game_tiles/gates-of-olympus.jpg"],
  ["sweet-bonanza.jpg", "https://www.slotstemple.com/img/game_tiles/sweet-bonanza.jpg"],
  ["starlight-princess.jpg", "https://www.slotstemple.com/img/game_tiles/starlight-princess.jpg"],
  ["the-dog-house.jpg", "https://www.slotstemple.com/img/game_tiles/the-dog-house.jpg"],
  ["fruit-party.jpg", "https://www.slotstemple.com/img/game_tiles/fruit-party-2.jpg"],
  ["big-bass-bonanza.jpg", "https://www.slotstemple.com/img/game_tiles/big-bass-bonanza.jpg"],
];

function fetchBuf(url) {
  return new Promise((resolve, reject) => {
    https
      .get(
        url,
        {
          headers: { "User-Agent": "Mozilla/5.0 (compatible; ZeusSiteBuild/1)" },
        },
        (res) => {
          if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            fetchBuf(new URL(res.headers.location, url).href).then(resolve).catch(reject);
            return;
          }
          if (res.statusCode !== 200) {
            reject(new Error(`HTTP ${res.statusCode} ${url}`));
            return;
          }
          const chunks = [];
          res.on("data", (c) => chunks.push(c));
          res.on("end", () => resolve(Buffer.concat(chunks)));
        }
      )
      .on("error", reject);
  });
}

fs.mkdirSync(OUT_DIR, { recursive: true });

let ok = 0;
for (const [file, url] of TILES) {
  try {
    const buf = await fetchBuf(url);
    if (buf.length < 800) throw new Error("ответ слишком маленький");
    fs.writeFileSync(path.join(OUT_DIR, file), buf);
    console.log("OK", file, buf.length);
    ok++;
  } catch (e) {
    console.error("FAIL", file, e.message);
  }
}

if (ok === TILES.length) {
  const cfgPath = path.join(ROOT, "scripts", "site-config.mjs");
  let txt = fs.readFileSync(cfgPath, "utf8");
  txt = txt.replace(/img\/similar-slots\/gates-of-olympus\.svg/g, "img/similar-slots/gates-of-olympus.jpg");
  txt = txt.replace(/img\/similar-slots\/sweet-bonanza\.svg/g, "img/similar-slots/sweet-bonanza.jpg");
  txt = txt.replace(/img\/similar-slots\/starlight-princess\.svg/g, "img/similar-slots/starlight-princess.jpg");
  txt = txt.replace(/img\/similar-slots\/the-dog-house\.svg/g, "img/similar-slots/the-dog-house.jpg");
  txt = txt.replace(/img\/similar-slots\/fruit-party\.svg/g, "img/similar-slots/fruit-party.jpg");
  txt = txt.replace(/img\/similar-slots\/big-bass-bonanza\.svg/g, "img/similar-slots/big-bass-bonanza.jpg");
  fs.writeFileSync(cfgPath, txt);
  console.log("\nОбновлён scripts/site-config.mjs → пути к .jpg. Запустите: node scripts/build.mjs");
} else {
  console.log("\nЧасть загрузок не удалась — остаются локальные .svg. Повторите позже.");
}
