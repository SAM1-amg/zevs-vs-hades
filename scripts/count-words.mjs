import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "../ru");
const rows = [];
for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith(".html")) continue;
  const c = fs.readFileSync(path.join(dir, f), "utf8");
  const m = c.match(/<article class="card prose"[^>]*>([\s\S]*?)<\/article>/);
  if (!m) continue;
  const t = m[1].replace(/<[^>]+>/g, " ");
  const w = t.trim().split(/\s+/).filter(Boolean).length;
  rows.push({ f, w });
}
rows.sort((a, b) => a.w - b.w);
console.log(rows.map((r) => `${r.w}\t${r.f}`).join("\n"));
console.log("\nMin:", rows[0].w, "Max:", rows[rows.length - 1].w, "Avg:", Math.round(rows.reduce((s, r) => s + r.w, 0) / rows.length));
