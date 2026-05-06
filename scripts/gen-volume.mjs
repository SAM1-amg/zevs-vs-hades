/**
 * Генератор дополнительного уникального текста для SEO-объёма.
 * Запуск: node scripts/gen-volume.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { UNIQUE_SLUGS } from "./nav.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const aspectsRu = [
  "таблицей выплат и подсказками внутри игры",
  "лимитами ответственной игры и таймерами сессий",
  "условиями бонусов и тем, как вейджер меняет реальную стоимость спина",
  "скоростью депозита и тем, насколько прозрачно казино описывает комиссии",
  "мобильной вёрсткой и удобством кнопок при длинной серии спинов",
  "отличиями демо от реальных ставок и эмоциональной устойчивостью",
  "перекрёстными ссылками на страницы RTP, стратегий и отзывов",
  "тем, как выбранный платёжный метод влияет на скорость вывода",
  "вероятностью серии без бонуса и необходимостью банкролл‑дисциплины",
  "проверкой лицензии оператора до первого пополнения счёта",
  "тем, как разные аналоги слотов распределяют волатильность по времени",
  "безопасностью входа: пароль, двухфакторка и официальные домены",
];

const aspectsEn = [
  "paytables and in-game help panels",
  "responsible-gaming caps and session timers",
  "bonus wagering and how it changes the true spin cost",
  "deposit speed and whether fees are stated clearly",
  "mobile ergonomics during long sessions",
  "demo vs real-money psychology",
  "internal links to RTP, strategy, and review hubs",
  "how payout rails affect withdrawal ETA",
  "variance streaks and bankroll discipline",
  "license verification before funding",
  "how analog slots distribute volatility differently",
  "account safety: passwords, 2FA, official domains",
];

const actionsRu = [
  "имеет смысл заранее открыть нужные разделы сайта и сохранить чек",
  "полезно записать лимит проигрыша до первого клика по ставке",
  "рационально сравнить несколько методов оплаты и выбрать менее стрессовый",
  "стоит проверить, не исключён ли слот из отыгрыша конкретной акции",
  "важно не путать рекламный ролик с «типичной» сессией",
  "лучше сделать паузу, если чувствуете усталость или раздражение",
  "уместно читать правила вывода до пополнения, а не после",
  "разумно использовать демо как тренажёр интерфейса, а не как предсказание удачи",
  "не следует наращивать ставку после серии пустых спинов",
  "полезно фиксировать длительность сессии и выходить по таймеру",
];

const startersRu = [
  "По нашему опыту обзоров,",
  "Для максимально прозрачного сценария,",
  "Если сравнивать с «сырым» трафиком из рекламы,",
  "С точки зрения перелинковки,",
  "С практической стороны,",
  "Когда речь о конверсии в клик,",
];

const startersEn = [
  "In our review workflow,",
  "For a transparent path,",
  "Compared to raw ad traffic,",
  "From an interlinking angle,",
  "Practically speaking,",
  "When focusing on CTA clicks,",
];

const actionsEn = [
  "open the right hub pages early and keep receipts",
  "write your loss cap before the first stake click",
  "compare rails and pick the least stressful path",
  "verify the slot isn’t excluded from promo wagering",
  "don’t confuse highlight ads with median sessions",
  "pause when fatigue or tilt appears",
  "read withdrawal rules before funding—not after",
  "treat demo as UI training—not luck forecasting",
  "avoid raising stakes to chase dead-air stretches",
  "time-box sessions and exit on alarm",
];

function hash(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

function escTemplate(s) {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function paragraphsForSlug(slug, lang) {
  const aspects = lang === "ru" ? aspectsRu : aspectsEn;
  const actions = lang === "ru" ? actionsRu : actionsEn;
  const label = slug.replace(/-/g, " ");
  let h = hash(slug + lang);
  const parts = [];
  for (let i = 0; i < 8; i++) {
    h = (h * 1103515245 + 12345) >>> 0;
    const a = aspects[h % aspects.length];
    h = (h * 1103515245 + 12345) >>> 0;
    const act = actions[h % actions.length];
    h = (h * 1103515245 + 12345) >>> 0;
    const n = 40 + (h % 120);
    const st = (lang === "ru" ? startersRu : startersEn)[(i + (h % 5)) % 6];
    if (lang === "ru") {
      parts.push(
        `${st} тема «${label}» естественно сочетается с ${a}. Zeus vs Hades остаётся развлечением на генераторе случайных чисел, а эта подборка помогает разнести интенты (zeus vs hades слот, demo, rtp) по отдельным URL без дублей. Игроку из РФ рационально заранее задать бюджет, проверить лицензию площадки и помнить, что ${act}. Ключи вроде zeus vs hades бонус и zeus vs hades фриспины читайте в правилах конкретного казино. Служебный индекс ${n} фиксирует уникальность абзаца и не является «секретным множителем».`
      );
    } else {
      parts.push(
        `${st} the “${label}” cluster aligns with ${a}. Zeus vs Hades stays RNG entertainment—this hub sequences intents (zeus vs hades slot, demo, rtp) across URLs to limit duplication. Set budgets, verify licensing, and remember to ${act}. Bonus/free-spin promos live under each operator’s contract. Token ${n} marks uniqueness—not a betting signal.`
      );
    }
  }
  return parts;
}

let out = `/** Автогенератор объёма — не редактировать от руки; пересоздать: node scripts/gen-volume.mjs */\n`;
out += `export const VOLUME_HTML = {\n`;

for (const slug of UNIQUE_SLUGS) {
  const ruParas = paragraphsForSlug(slug, "ru");
  const enParas = paragraphsForSlug(slug, "en");
  const ruHtml =
    `<section class="long-read" aria-label="Подробнее">` +
    `<h2>Развёрнутый SEO‑блок: ${slug.replace(/-/g, " ")}</h2>` +
    ruParas.map((t) => `<p>${t}</p>`).join("") +
    `</section>`;
  const enHtml =
    `<section class="long-read" aria-label="Deep dive">` +
    `<h2>Expanded SEO notes: ${slug.replace(/-/g, " ")}</h2>` +
    enParas.map((t) => `<p>${t}</p>`).join("") +
    `</section>`;
  out += `  ${JSON.stringify(slug)}: {\n`;
  out += `    ru: \`${escTemplate(ruHtml)}\`,\n`;
  out += `    en: \`${escTemplate(enHtml)}\`,\n`;
  out += `  },\n`;
}
out += `};\n`;

const outPath = path.join(__dirname, "content", "volume-generated.mjs");
fs.writeFileSync(outPath, out, "utf8");
console.log("Wrote", outPath);
