import { SLOT_MEDIA_POOL } from "./site-config.mjs";

/** Детерминированный хеш строки (стабильный выбор картинок по slug) */
export function hashSlug(str) {
  let h = 0;
  const s = String(str);
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

/**
 * Уникальные кадры из пула по slug (разные страницы — разные наборы).
 * @param {string} salt — меняет выборку (strip / mid / sidebar)
 * @param {number} count
 * @param {string[]} excludeSrc — уже использованные URL
 */
export function pickUniqueMedia(salt, count, excludeSrc = []) {
  const exclude = new Set(excludeSrc.filter(Boolean));
  const h = hashSlug(salt);
  const out = [];
  let step = 0;
  const maxSteps = Math.max(SLOT_MEDIA_POOL.length * 5, 64);
  while (out.length < count && step < maxSteps) {
    const item = SLOT_MEDIA_POOL[(h + step * 17) % SLOT_MEDIA_POOL.length];
    if (!exclude.has(item.src)) {
      out.push(item);
      exclude.add(item.src);
    }
    step++;
  }
  return out;
}
