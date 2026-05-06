import { MAIN_PAGES } from "./content/main.mjs";
import { PLAY_PAGES } from "./content/play-cluster.mjs";
import { DOWNLOAD_PAGES } from "./content/download-cluster.mjs";
import { PAY_PAGES } from "./content/payments.mjs";
import { ANALOG_PAGES } from "./content/analogs.mjs";
import { UNIQUE_SLUGS } from "./nav.mjs";
import { VOLUME_HTML } from "./content/volume-generated.mjs";

export function getPageBundle() {
  const bundle = {
    ...MAIN_PAGES,
    ...PLAY_PAGES,
    ...DOWNLOAD_PAGES,
    ...PAY_PAGES,
    ...ANALOG_PAGES,
  };
  for (const slug of UNIQUE_SLUGS) {
    if (!bundle[slug]) throw new Error("Missing slug in bundle: " + slug);
    if (!bundle[slug].ru || !bundle[slug].en) throw new Error("Missing lang for slug: " + slug);
    const vol = VOLUME_HTML[slug];
    /** Главная уже «тяжёлая» по тексту — без второго мегаблока */
    if (vol && slug !== "index") {
      bundle[slug].ru.bodyHtml += vol.ru;
      bundle[slug].en.bodyHtml += vol.en;
    }
  }
  return bundle;
}
