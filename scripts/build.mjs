import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  AFFILIATE_URL,
  SITE_NAME,
  SITE_ORIGIN,
  SLOT_IMAGES,
  SIMILAR_SLOT_COVERS,
} from "./site-config.mjs";
import { pickUniqueMedia } from "./slot-media.mjs";
import { UNIQUE_SLUGS } from "./nav.mjs";
import { esc, assetPath, pickRelatedSlugs } from "./html-utils.mjs";
import { getPageBundle } from "./pages-data.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

function fileNameForSlug(slug) {
  return slug === "index" ? "index.html" : `${slug}.html`;
}

function schemaJsonLd({ lang, title, description, url, faqItems, datePublished }) {
  const graph = [];
  graph.push({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME[lang],
    url: SITE_ORIGIN + `/${lang}/`,
    inLanguage: lang,
  });
  graph.push({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    inLanguage: lang,
    mainEntityOfPage: url,
    datePublished: datePublished || "2026-05-01",
    author: { "@type": "Organization", name: SITE_NAME[lang] },
  });
  if (faqItems && faqItems.length) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((x) => ({
        "@type": "Question",
        name: x.q,
        acceptedAnswer: { "@type": "Answer", text: x.a },
      })),
    });
  }
  return `<script type="application/ld+json">${JSON.stringify(graph)}</script>`;
}

function renderHeader({ lang, activeSlug, labelsBySlug }) {
  const ap = assetPath(1);
  const navItems = [
    "index",
    "play",
    "demo",
    "download",
    "how-to-win",
    "strategies",
    "reviews",
    "rtp",
  ];
  const navHtml = navItems
    .map((slug) => {
      const label = labelsBySlug[slug][lang];
      return `<a href="${fileNameForSlug(slug)}"${slug === activeSlug ? ' aria-current="page"' : ""}>${esc(
        label
      )}</a>`;
    })
    .join("");
  const hrefRu = lang === "ru" ? fileNameForSlug(activeSlug) : `../ru/${fileNameForSlug(activeSlug)}`;
  const hrefEn = lang === "en" ? fileNameForSlug(activeSlug) : `../en/${fileNameForSlug(activeSlug)}`;
  const openMenu = lang === "ru" ? "Открыть меню разделов" : "Open site menu";
  const mobileNavTitle =
    lang === "ru" ? "Олимп · Подземелье · Навигация" : "Olympus · Underworld · Menu";
  return `
<header class="site-header" id="site-header">
  <div class="nav-backdrop" id="nav-backdrop" aria-hidden="true"></div>
  <div class="wrap header-grid">
    <a class="brand" href="${fileNameForSlug("index")}">
      <span class="brand-mark" aria-hidden="true"></span>
      <span class="brand-text">ZEVS × HADES</span>
    </a>
    <div class="lang-switch" role="navigation" aria-label="Language">
      <a class="${lang === "ru" ? "is-active" : ""}" href="${hrefRu}" hreflang="ru">RU</a>
      <a class="${lang === "en" ? "is-active" : ""}" href="${hrefEn}" hreflang="en">EN</a>
    </div>
    <button class="nav-toggle" type="button" id="nav-toggle" aria-expanded="false" aria-controls="main-nav" aria-label="${esc(
      openMenu
    )}">
      <span class="nav-toggle-box" aria-hidden="true">
        <span class="nav-toggle-line"></span>
        <span class="nav-toggle-line"></span>
        <span class="nav-toggle-line"></span>
      </span>
    </button>
    <nav class="nav-main" id="main-nav" aria-label="${lang === "ru" ? "Разделы" : "Sections"}">
      <div class="mobile-nav__shell">
        <div class="mobile-nav__head">
          <span class="mobile-nav__bolt" aria-hidden="true"></span>
          <span class="mobile-nav__title-text">${esc(mobileNavTitle)}</span>
        </div>
        <div class="mobile-nav__links">${navHtml}</div>
      </div>
    </nav>
  </div>
</header>`;
}

function renderBreadcrumbs({ lang, slug, title }) {
  const crumbs = [
    { slug: "index", label: lang === "ru" ? "Главная" : "Home" },
  ];
  if (slug !== "index") {
    crumbs.push({ slug, label: title });
  }
  const parts = crumbs.map((c, i) => {
    if (i === crumbs.length - 1) {
      return `<span>${esc(c.label)}</span>`;
    }
    return `<a href="${fileNameForSlug(c.slug)}">${esc(c.label)}</a>`;
  });
  return `<nav class="breadcrumbs" aria-label="breadcrumb">${parts.join(" / ")}</nav>`;
}

function renderSidebar({ lang, winLines, sidebarThumb }) {
  const t =
    lang === "ru"
      ? {
          live: "Онлайн сейчас",
          big: "Большие выигрыши",
          demo: "Демо без риска",
          thumb: "Кадр из Zeus vs Hades",
        }
      : {
          live: "Online now",
          big: "Big wins",
          demo: "Risk-free demo",
          thumb: "Zeus vs Hades frame",
        };
  const wins = winLines
    .map(
      (w) => `<li><span>${esc(w.user)}</span><strong>${esc(w.sum)}</strong></li>`
    )
    .join("");
  const thumbBlock =
    sidebarThumb &&
    `<div class="widget widget--slot-thumb">
    <h3>${esc(t.thumb)}</h3>
    <a class="slot-thumb-link" href="${AFFILIATE_URL}" rel="nofollow sponsored noopener noreferrer" target="_blank">
      <img data-src="${esc(sidebarThumb.src)}" alt="${esc(
      lang === "ru" ? sidebarThumb.altRu : sidebarThumb.altEn
    )}" width="${sidebarThumb.w}" height="${sidebarThumb.h}" class="slot-thumb-img" loading="lazy" decoding="async" />
    </a>
    <p class="small muted" style="margin-top:0.5rem">${lang === "ru" ? "Реальный скрин слота — перейти к игре." : "Real slot screenshot — play."}</p>
  </div>`;
  return `
<aside class="sidebar" aria-label="${lang === "ru" ? "Дополнительно" : "Extras"}">
  <div class="widget">
    <div class="live-counter"><span id="live-counter-value">1 247</span><small>${esc(t.live)}</small></div>
    <p class="small muted">${lang === "ru" ? "Показатель меняется в реальном времени и отражает активность зала." : "Number fluctuates to reflect lobby activity."}</p>
  </div>
  ${thumbBlock || ""}
  <div class="widget">
    <h3>${esc(t.big)}</h3>
    <ul class="win-list">${wins}</ul>
    <a class="btn" style="width:100%;margin-top:0.5rem" href="${AFFILIATE_URL}" rel="nofollow sponsored noopener noreferrer" target="_blank">${lang === "ru" ? "Играть сейчас" : "Play now"}</a>
  </div>
  <div class="widget">
    <h3>${esc(t.demo)}</h3>
    <p class="small muted">${lang === "ru" ? "Протестируйте механику в спокойном режиме и вернитесь к реальным ставкам, когда будете готовы." : "Test mechanics calmly, then return to real stakes when ready."}</p>
    <a class="btn btn--ghost" style="width:100%;margin-top:0.5rem" href="${fileNameForSlug("demo")}">${lang === "ru" ? "Открыть демо-страницу" : "Open demo page"}</a>
  </div>
</aside>`;
}

function renderSlotStrip({ lang, items }) {
  if (!items.length) return "";
  const title = lang === "ru" ? "Реальные кадры слота Zeus vs Hades" : "Real Zeus vs Hades slot frames";
  const cells = items
    .map(
      (m) => `
  <figure class="slot-strip__cell">
    <img data-src="${esc(m.src)}" alt="${esc(lang === "ru" ? m.altRu : m.altEn)}" width="${m.w}" height="${m.h}" loading="lazy" decoding="async" class="slot-strip__img" />
  </figure>`
    )
    .join("");
  return `
<section class="slot-strip wrap" aria-label="${esc(title)}">
  <div class="slot-strip__intro">
    <span class="slot-strip__icon" aria-hidden="true">⚡</span>
    <h2 class="slot-strip__title">${esc(title)}</h2>
  </div>
  <div class="slot-strip__grid">${cells}</div>
</section>`;
}

function renderSlotArticleVisuals({ lang, items }) {
  if (!items.length) return "";
  const cap =
    lang === "ru"
      ? "Скриншоты из игрового клиента Zeus vs Hades — Gods of War™ (иллюстративно)."
      : "Screens from Zeus vs Hades — Gods of War™ client (illustrative).";
  const cells = items
    .map(
      (m) => `
  <figure class="slot-article-visuals__cell">
    <img data-src="${esc(m.src)}" alt="${esc(lang === "ru" ? m.altRu : m.altEn)}" width="${m.w}" height="${m.h}" loading="lazy" decoding="async" class="slot-article-visuals__img" />
  </figure>`
    )
    .join("");
  return `
<section class="slot-article-visuals" aria-label="${esc(lang === "ru" ? "Дополнительные кадры" : "Extra frames")}">
  <div class="slot-article-visuals__grid">${cells}</div>
  <p class="small muted slot-article-visuals__cap">${esc(cap)}</p>
</section>`;
}

function renderSimilarSlots({ lang, assetsPrefix }) {
  const items =
    lang === "ru"
      ? [
          ["slot-gates-of-olympus", "Gates of Olympus", "Мифология и множители"],
          ["slot-sweet-bonanza", "Sweet Bonanza", "Каскады и сладкие выигрыши"],
          ["slot-starlight-princess", "Starlight Princess", "Аниме-энергия и фриспины"],
          ["slot-dog-house", "The Dog House", "Липкие вайлды"],
          ["slot-fruit-party", "Fruit Party", "Фруктовые кластеры"],
          ["slot-big-bass-bonanza", "Big Bass Bonanza", "Рыболовный бонус"],
        ]
      : [
          ["slot-gates-of-olympus", "Gates of Olympus", "Mythology & multipliers"],
          ["slot-sweet-bonanza", "Sweet Bonanza", "Tumbles & sweets"],
          ["slot-starlight-princess", "Starlight Princess", "Anime energy & free spins"],
          ["slot-dog-house", "The Dog House", "Sticky wilds"],
          ["slot-fruit-party", "Fruit Party", "Fruit clusters"],
          ["slot-big-bass-bonanza", "Big Bass Bonanza", "Fishing bonus"],
        ];
  const cards = items
    .map(([slug, name, sub]) => {
      const cover = SIMILAR_SLOT_COVERS[slug];
      const img =
        cover &&
        `<span class="slot-chip__media"><img src="${esc(assetsPrefix)}${esc(cover.src)}" alt="${esc(
          lang === "ru" ? cover.altRu : cover.altEn
        )}" width="${cover.w}" height="${cover.h}" class="slot-chip__img" loading="lazy" decoding="async" /></span>`;
      return `
    <a class="slot-chip" href="${fileNameForSlug(slug)}">
      ${img || ""}
      <span class="slot-chip__body">
        <strong class="slot-chip__title">${esc(name)}</strong>
        <span class="slot-chip__sub">${esc(sub)}</span>
      </span>
    </a>`;
    })
    .join("");
  return `
<section class="card" style="margin-top:1rem;padding:1rem 1.25rem">
  <h2 style="margin-top:0">${lang === "ru" ? "Похожие слоты" : "Similar slots"}</h2>
  <div class="similar-slots">${cards}</div>
</section>`;
}

function renderRelated({ lang, related }) {
  const h =
    lang === "ru" ? "Перелинковка: полезные страницы" : "Internal guides & hubs";
  const links = related
    .map(
      (r) =>
        `<a href="${fileNameForSlug(r.slug)}">${esc(r.label)} — Zeus vs Hades</a>`
    )
    .join("");
  return `
<section class="card" style="margin-top:1rem;padding:1rem 1.25rem">
  <h2 style="margin-top:0">${esc(h)}</h2>
  <div class="link-grid">${links}</div>
</section>`;
}

function renderSticky({ lang }) {
  const t =
    lang === "ru"
      ? {
          note: "🔥 Слот сейчас активен · ⏳ Бонус ограничен · 👥 Сейчас играют 1200+ человек",
          a1: "Играть сейчас",
          a2: "Получить бонус",
          a3: "Попробовать бесплатно",
        }
      : {
          note: "🔥 Slot is hot · ⏳ Bonus window · 👥 1200+ players online",
          a1: "Play now",
          a2: "Claim bonus",
          a3: "Try free",
        };
  return `
<div class="sticky-cta" role="region" aria-label="${lang === "ru" ? "Быстрые действия" : "Quick actions"}">
  <div class="sticky-inner">
    <div class="sticky-note">${esc(t.note)}</div>
    <div class="sticky-actions">
      <a class="btn" href="${AFFILIATE_URL}" rel="nofollow sponsored noopener noreferrer" target="_blank">${esc(t.a1)}</a>
      <a class="btn btn--ghost" href="${AFFILIATE_URL}" rel="nofollow sponsored noopener noreferrer" target="_blank">${esc(t.a2)}</a>
      <a class="btn btn--ghost" href="${fileNameForSlug("demo")}">${esc(t.a3)}</a>
    </div>
  </div>
</div>`;
}

function renderReviewsStrip(lang) {
  const reviews =
    lang === "ru"
      ? [
          {
            name: "Игорь, Казань",
            text: "Зашёл ради темы Зевс/Аид — остался из‑за бонусов. Волатильность чувствуется, но пара крупных множителей окупили сессию.",
            avatar: "https://i.pravatar.cc/120?img=12",
          },
          {
            name: "Марина, СПб",
            text: "Демо помогло понять циклы. На реале не гоню ставку — держу банкролл и ловлю фриспины.",
            avatar: "https://i.pravatar.cc/120?img=45",
          },
          {
            name: "Денис, Екатеринбург",
            text: "Нравится визуал и озвучка. После серии пустых спинов лучше сделать паузу — так спокойнее играть.",
            avatar: "https://i.pravatar.cc/120?img=33",
          },
        ]
      : [
          {
            name: "Igor, Kazan",
            text: "Came for Zeus/Hades theme — stayed for features. Volatility bites, but two strong multipliers saved the session.",
            avatar: "https://i.pravatar.cc/120?img=12",
          },
          {
            name: "Marina, SPb",
            text: "Demo taught me the cadence. On real play I keep stakes sane and hunt free spins patiently.",
            avatar: "https://i.pravatar.cc/120?img=45",
          },
          {
            name: "Denis, Yekaterinburg",
            text: "Audio/visual is tight. After dead spins I pause — calmer mind, cleaner decisions.",
            avatar: "https://i.pravatar.cc/120?img=33",
          },
        ];
  const html = reviews
    .map(
      (r) => `
    <div class="review">
      <img class="avatar" src="${r.avatar}" width="48" height="48" alt="" loading="lazy" decoding="async" />
      <div>
        <div><strong>${esc(r.name)}</strong> <span class="stars" aria-hidden="true">★★★★★</span></div>
        <div class="meta">${lang === "ru" ? "Проверенный отзыв игрока" : "Player note"}</div>
        <p class="small" style="margin:0.35rem 0 0;color:#dbe0f5">${esc(r.text)}</p>
      </div>
    </div>`
    )
    .join("");
  return `
<section class="card" style="margin-top:1rem;padding:1rem 1.25rem">
  <h2 style="margin-top:0">${lang === "ru" ? "Отзывы игроков (живая лента)" : "Player notes (live strip)"}</h2>
  <div class="review-grid">${html}</div>
  <p class="small muted" style="margin-top:0.75rem">${lang === "ru" ? "Иллюстрации аватаров носят обобщённый характер." : "Avatars are illustrative."}</p>
</section>`;
}

function buildHtmlPage({ lang, slug, page, labelsBySlug }) {
  const ap = assetPath(1);
  const fileSlug = fileNameForSlug(slug);
  const canonical = `${SITE_ORIGIN}/${lang}/${fileSlug}`;
  const altLangHrefRu = `${SITE_ORIGIN}/ru/${fileSlug}`;
  const altLangHrefEn = `${SITE_ORIGIN}/en/${fileSlug}`;
  const faqItems = page.faq || [];
  const title = page.metaTitle;
  const description = page.metaDesc;
  const keywords = (page.keywords || []).join(", ");

  const related = pickRelatedSlugs(slug, lang, labelsBySlug, 12);

  const winLines =
    lang === "ru"
      ? [
          { user: "player_msk", sum: "×612" },
          { user: "lucky_71", sum: "×420" },
          { user: "zeus_fan", sum: "×355" },
          { user: "hades_ok", sum: "×288" },
        ]
      : [
          { user: "player_msk", sum: "×612" },
          { user: "lucky_71", sum: "×420" },
          { user: "zeus_fan", sum: "×355" },
          { user: "hades_ok", sum: "×288" },
        ];

  const heroImg =
    page.heroImage ||
    {
      src: SLOT_IMAGES.gameplay,
      alt: lang === "ru" ? SLOT_IMAGES.altGameplayRu : SLOT_IMAGES.altGameplayEn,
    };

  const showHero = slug === "index";

  const heroExclude = showHero ? [heroImg.src, SLOT_IMAGES.bigWin] : [];
  const stripItems = pickUniqueMedia(`${slug}|strip`, showHero ? 3 : 2, heroExclude);
  const stripUsed = [...heroExclude, ...stripItems.map((x) => x.src)];
  const articleItems = pickUniqueMedia(`${slug}|article`, 2, stripUsed);
  const articleUsed = [...stripUsed, ...articleItems.map((x) => x.src)];
  const sidebarThumbPick = pickUniqueMedia(`${slug}|sb`, 1, articleUsed);
  const sidebarThumb = sidebarThumbPick[0] || null;

  const stripHtml = renderSlotStrip({ lang, items: stripItems });
  const articleVisualHtml = renderSlotArticleVisuals({ lang, items: articleItems });

  const articleInner = `
${showHero ? `
<section class="hero wrap spark">
  <div>
    <h1>${esc(page.h1)}</h1>
    <p class="lead">${esc(page.lead)}</p>
    <div class="btn-row">
      <a class="btn" href="${AFFILIATE_URL}" rel="nofollow sponsored noopener noreferrer" target="_blank">${lang === "ru" ? "Играть сейчас" : "Play now"}</a>
      <a class="btn btn--ghost" href="${AFFILIATE_URL}" rel="nofollow sponsored noopener noreferrer" target="_blank">${lang === "ru" ? "Получить бонус" : "Claim bonus"}</a>
      <a class="btn btn--ghost" href="${fileNameForSlug("demo")}">${lang === "ru" ? "Попробовать бесплатно" : "Try free"}</a>
    </div>
    <div class="pulse-badges">
      <span class="badge badge--hot">${lang === "ru" ? "🔥 слот сейчас активен" : "🔥 slot is active"}</span>
      <span class="badge badge--time">${lang === "ru" ? "⏳ бонус ограничен" : "⏳ bonus limited"}</span>
      <span class="badge badge--crowd">${lang === "ru" ? "👥 сейчас играют 1200+ человек" : "👥 1200+ online"}</span>
    </div>
  </div>
  <div class="hero-media">
    <img src="${esc(heroImg.src)}" alt="${esc(heroImg.alt)}" width="1200" height="675" fetchpriority="high" loading="eager" decoding="async" />
    <div class="hero-caption">
      <span>${lang === "ru" ? "Zeus vs Hades — мифологический слот с бонусными раундами" : "Zeus vs Hades — myth slot with bonus rounds"}</span>
      <span>${lang === "ru" ? "Демо доступно на отдельной странице" : "Demo lives on its own page"}</span>
    </div>
  </div>
</section>` : `
<section class="wrap hero" style="padding-bottom:0">
  ${renderBreadcrumbs({ lang, slug, title: page.h1 })}
  <div style="padding-top:0.5rem">
    <h1>${esc(page.h1)}</h1>
    <p class="lead">${esc(page.lead)}</p>
    <div class="btn-row">
      <a class="btn" href="${AFFILIATE_URL}" rel="nofollow sponsored noopener noreferrer" target="_blank">${lang === "ru" ? "Играть сейчас" : "Play now"}</a>
      <a class="btn btn--ghost" href="${AFFILIATE_URL}" rel="nofollow sponsored noopener noreferrer" target="_blank">${lang === "ru" ? "Получить бонус" : "Claim bonus"}</a>
      <a class="btn btn--ghost" href="${fileNameForSlug("demo")}">${lang === "ru" ? "Попробовать бесплатно" : "Try free"}</a>
    </div>
    <div class="pulse-badges">
      <span class="badge badge--hot">${lang === "ru" ? "🔥 слот сейчас активен" : "🔥 slot is active"}</span>
      <span class="badge badge--time">${lang === "ru" ? "⏳ бонус ограничен" : "⏳ bonus limited"}</span>
      <span class="badge badge--crowd">${lang === "ru" ? "👥 сейчас играют 1200+ человек" : "👥 1200+ online"}</span>
    </div>
  </div>
</section>`}
${stripHtml}
<div class="wrap page-grid">
  <div>
    <article class="card prose" itemscope itemtype="https://schema.org/Article">
      <meta itemprop="headline" content="${esc(title)}" />
      <meta itemprop="description" content="${esc(description)}" />
      ${page.bodyHtml}
      ${page.extraMedia ? page.extraMedia : ""}
      ${articleVisualHtml}
      <section class="faq" aria-label="${lang === "ru" ? "Вопросы и ответы" : "FAQ"}">
        <h2>${lang === "ru" ? "FAQ — частые вопросы" : "FAQ — common questions"}</h2>
        ${faqItems
          .map(
            (f) => `
        <details>
          <summary>${esc(f.q)}</summary>
          <p>${esc(f.a)}</p>
        </details>`
          )
          .join("")}
      </section>
    </article>
    ${renderReviewsStrip(lang)}
    ${renderSimilarSlots({ lang, assetsPrefix: ap })}
    ${renderRelated({ lang, related })}
  </div>
  ${renderSidebar({ lang, winLines, sidebarThumb })}
</div>`;

  const html = `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}" />
  <meta name="keywords" content="${esc(keywords)}" />
  <link rel="canonical" href="${esc(canonical)}" />
  <link rel="alternate" hreflang="ru" href="${esc(altLangHrefRu)}" />
  <link rel="alternate" hreflang="en" href="${esc(altLangHrefEn)}" />
  <link rel="alternate" hreflang="x-default" href="${esc(altLangHrefRu)}" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(description)}" />
  <meta property="og:url" content="${esc(canonical)}" />
  <meta property="og:locale" content="${lang === "ru" ? "ru_RU" : "en_US"}" />
  <meta property="og:image" content="${esc(SLOT_IMAGES.gameplay)}" />
  <meta property="og:image:alt" content="${esc(lang === "ru" ? SLOT_IMAGES.altGameplayRu : SLOT_IMAGES.altGameplayEn)}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(title)}" />
  <meta name="twitter:description" content="${esc(description)}" />
  <meta name="twitter:image" content="${esc(SLOT_IMAGES.gameplay)}" />
  <link rel="dns-prefetch" href="https://slotcatalog.com" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="${ap}css/style.css" />
  ${schemaJsonLd({ lang, title, description, url: canonical, faqItems })}
</head>
<body>
  <a class="skip-link" href="#main">${lang === "ru" ? "К контенту" : "Skip to content"}</a>
  ${renderHeader({ lang, activeSlug: slug, labelsBySlug })}
  <main id="main">
    ${articleInner}
  </main>
  <footer class="site-footer">
    <div class="wrap">
      <p class="small">${lang === "ru" ? "Материал носит информационный характер. Играйте ответственно. 18+" : "Informational guide only. Play responsibly. 18+"}</p>
      <p class="disclaimer">${lang === "ru" ? "Условия бонусов и платежей зависят от выбранного оператора и могут меняться. Всегда читайте правила на стороне казино перед депозитом." : "Bonus and payment terms depend on the operator and may change. Always read the casino rules before depositing."}</p>
    </div>
  </footer>
  ${renderSticky({ lang })}
  <script src="${ap}js/app.js" defer></script>
</body>
</html>`;
  return html;
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function writeSitemap() {
  const urls = [];
  for (const lang of ["ru", "en"]) {
    for (const slug of UNIQUE_SLUGS) {
      const f = fileNameForSlug(slug);
      urls.push(`${SITE_ORIGIN}/${lang}/${f}`);
    }
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${esc(u)}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;
  fs.writeFileSync(path.join(ROOT, "sitemap.xml"), xml, "utf8");
}

function writeRobots() {
  const body = `User-agent: *
Allow: /

Sitemap: ${SITE_ORIGIN}/sitemap.xml
`;
  fs.writeFileSync(path.join(ROOT, "robots.txt"), body, "utf8");
}

function buildLabels(bundle) {
  const ru = {};
  const en = {};
  for (const slug of UNIQUE_SLUGS) {
    ru[slug] = bundle[slug].ru.h1;
    en[slug] = bundle[slug].en.h1;
  }
  return { ru, en };
}

function main() {
  const bundle = getPageBundle();
  const labelsBySlug = {};
  labelsBySlug.ru = {};
  labelsBySlug.en = {};
  for (const slug of UNIQUE_SLUGS) {
    if (!bundle[slug]) throw new Error("Missing page: " + slug);
    labelsBySlug.ru[slug] = { ru: bundle[slug].ru.h1, en: bundle[slug].en.h1 };
    labelsBySlug.en[slug] = { ru: bundle[slug].ru.h1, en: bundle[slug].en.h1 };
  }

  /** Flat labels for related picker */
  const flatLabels = {};
  for (const slug of UNIQUE_SLUGS) {
    flatLabels[slug] = { ru: bundle[slug].ru.h1, en: bundle[slug].en.h1 };
  }

  ensureDir(path.join(ROOT, "ru"));
  ensureDir(path.join(ROOT, "en"));

  for (const slug of UNIQUE_SLUGS) {
    const ruHtml = buildHtmlPage({
      lang: "ru",
      slug,
      page: bundle[slug].ru,
      labelsBySlug: flatLabels,
    });
    const enHtml = buildHtmlPage({
      lang: "en",
      slug,
      page: bundle[slug].en,
      labelsBySlug: flatLabels,
    });
    fs.writeFileSync(path.join(ROOT, "ru", fileNameForSlug(slug)), ruHtml, "utf8");
    fs.writeFileSync(path.join(ROOT, "en", fileNameForSlug(slug)), enHtml, "utf8");
  }

  const rootIndex = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <title>Zeus vs Hades — RU/EN</title>
  <meta http-equiv="refresh" content="0; url=ru/index.html" />
  <link rel="alternate" hreflang="ru" href="${SITE_ORIGIN}/ru/index.html" />
  <link rel="alternate" hreflang="en" href="${SITE_ORIGIN}/en/index.html" />
  <script>
    var n = navigator.language || "";
    if (n.slice(0,2).toLowerCase() === "en") {
      location.replace("en/index.html");
    } else {
      location.replace("ru/index.html");
    }
  </script>
</head>
<body>
  <p><a href="ru/index.html">Русская версия</a> · <a href="en/index.html">English</a></p>
</body>
</html>`;
  fs.writeFileSync(path.join(ROOT, "index.html"), rootIndex, "utf8");

  writeSitemap();
  writeRobots();

  console.log("Built", UNIQUE_SLUGS.length * 2, "pages + index + sitemap + robots");
}

main();
