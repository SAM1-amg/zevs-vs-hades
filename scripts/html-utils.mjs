export function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function assetPath(depthFromLangRoot) {
  return "../".repeat(depthFromLangRoot) + "assets/";
}

/** Генерация перекрёстных ссылок для SEO */
export function pickRelatedSlugs(currentSlug, lang, labelsBySlug, count = 12) {
  const all = Object.keys(labelsBySlug).filter((s) => s !== currentSlug);
  const prioritized = [];
  const clusters = [
    "play",
    "demo",
    "rtp",
    "strategies",
    "reviews",
    "play-online",
    "play-free",
    "download-android",
    "deposit-card",
    "bitcoin",
  ];
  for (const c of clusters) {
    if (all.includes(c) && c !== currentSlug && !prioritized.includes(c)) prioritized.push(c);
  }
  for (const s of all) {
    if (!prioritized.includes(s)) prioritized.push(s);
  }
  return prioritized.slice(0, count).map((slug) => ({
    slug,
    label: labelsBySlug[slug][lang],
  }));
}
