/** Замените на ваш домен перед выкладкой */
export const SITE_ORIGIN = "https://YOURDOMAIN.com";

/** Реферальная ссылка (все CTA) */
export const AFFILIATE_URL =
  "https://h0xhaw0za1kg7e.xyz/click/6979c7c96bcc6364c87500ce/7/16899/subaccount";

export const SITE_NAME = {
  ru: "Zeus vs Hades — слот и стратегии",
  en: "Zeus vs Hades — slot guide & play",
};

/**
 * Скриншоты Zeus vs Hades — Gods of War™ (Pragmatic Play).
 * Источник витрины каталога слотов; при деплое можно скачать в /assets/img/ и сменить на относительные пути.
 */
export const SLOT_IMAGES = {
  gameplay:
    "https://slotcatalog.com/userfiles/image/games/Pragmatic-Play/30141/Zeus-vs-Hades-Gods-of-War-6983031.jpeg",
  bigWin:
    "https://slotcatalog.com/userfiles/image/big-wins/Pragmatic-Play/30141/Big-Win-Zeus-vs-Hades-Gods-of-War-2024-01-31-15000xBet.jpg",
  altGameplayRu: "zeus vs hades slot gameplay — барабаны и режимы Олимпа и Аида",
  altGameplayEn: "zeus vs hades slot gameplay — Olympus and Hades game modes on reels",
  altBigWinRu: "zeus vs hades big win — крупный выигрыш на экране слота",
  altBigWinEn: "zeus vs hades big win — large win on slot screen",
};

/**
 * Кадры из Zeus vs Hades — Gods of War™ (витрина SlotCatalog; при деплое можно зеркалировать в /assets/img/).
 * Используются каруселью/галереей на всех страницах.
 */
/**
 * Обложки «Похожие слоты» — локальные файлы в /assets/img/similar-slots/
 * (сейчас SVG-заставки; можно заменить на .jpg с тем же именем или запустить
 * `node scripts/download-similar-slot-covers.mjs` при стабильном интернете).
 */
export const SIMILAR_SLOT_COVERS = {
  "slot-gates-of-olympus": {
    src: "img/similar-slots/gates-of-olympus.svg",
    altRu: "Gates of Olympus — обложка слота Pragmatic Play",
    altEn: "Gates of Olympus — Pragmatic Play slot cover",
    w: 400,
    h: 400,
  },
  "slot-sweet-bonanza": {
    src: "img/similar-slots/sweet-bonanza.svg",
    altRu: "Sweet Bonanza — обложка слота Pragmatic Play",
    altEn: "Sweet Bonanza — Pragmatic Play slot cover",
    w: 400,
    h: 400,
  },
  "slot-starlight-princess": {
    src: "img/similar-slots/starlight-princess.svg",
    altRu: "Starlight Princess — обложка слота Pragmatic Play",
    altEn: "Starlight Princess — Pragmatic Play slot cover",
    w: 400,
    h: 400,
  },
  "slot-dog-house": {
    src: "img/similar-slots/the-dog-house.svg",
    altRu: "The Dog House — обложка слота Pragmatic Play",
    altEn: "The Dog House — Pragmatic Play slot cover",
    w: 400,
    h: 400,
  },
  "slot-fruit-party": {
    src: "img/similar-slots/fruit-party.svg",
    altRu: "Fruit Party — фруктовые кластеры, обложка слота Pragmatic Play",
    altEn: "Fruit Party — fruit clusters, Pragmatic Play slot cover",
    w: 400,
    h: 400,
  },
  "slot-big-bass-bonanza": {
    src: "img/similar-slots/big-bass-bonanza.svg",
    altRu: "Big Bass Bonanza — обложка слота Pragmatic Play",
    altEn: "Big Bass Bonanza — Pragmatic Play slot cover",
    w: 400,
    h: 400,
  },
};

export const SLOT_MEDIA_POOL = [
  {
    src: "https://slotcatalog.com/userfiles/image/games/Pragmatic-Play/30141/Zeus-vs-Hades-Gods-of-War-6983031.jpeg",
    altRu: "zeus vs hades slot gameplay — мифологический интерфейс и барабаны",
    altEn: "zeus vs hades slot gameplay — myth UI and reels",
    w: 1200,
    h: 675,
  },
  {
    src: "https://slotcatalog.com/userfiles/image/games/Pragmatic-Play/30141/Zeus-vs-Hades-Gods-of-War-6983032.jpeg",
    altRu: "zeus vs hades slot — заставка и видео-превью игры",
    altEn: "zeus vs hades slot — splash and video preview",
    w: 1200,
    h: 675,
  },
  {
    src: "https://slotcatalog.com/userfiles/image/games/Pragmatic-Play/30141/Zeus-vs-Hades-Gods-of-War-6983033.png",
    altRu: "zeus vs hades demo — стартовый экран выбора режима",
    altEn: "zeus vs hades demo — start screen mode pick",
    w: 1200,
    h: 675,
  },
  {
    src: "https://slotcatalog.com/userfiles/image/games/Pragmatic-Play/30141/Zeus-vs-Hades-Gods-of-War-6983034.png",
    altRu: "zeus vs hades slot — игровой экран с символами Олимпа",
    altEn: "zeus vs hades slot — Olympus symbols on reels",
    w: 1200,
    h: 675,
  },
  {
    src: "https://slotcatalog.com/userfiles/image/games/Pragmatic-Play/30141/Zeus-vs-Hades-Gods-of-War-6983035.png",
    altRu: "zeus vs hades slot gameplay — раунд на поле битвы богов",
    altEn: "zeus vs hades slot gameplay — gods battle field",
    w: 1200,
    h: 675,
  },
  {
    src: "https://slotcatalog.com/userfiles/image/games/Pragmatic-Play/30141/Zeus-vs-Hades-Gods-of-War-6983036.png",
    altRu: "zeus vs hades big win — экран крупного выигрыша",
    altEn: "zeus vs hades big win — major win screen",
    w: 1200,
    h: 675,
  },
  {
    src: "https://slotcatalog.com/userfiles/image/games/Pragmatic-Play/30141/Zeus-vs-Hades-Gods-of-War-6983037.png",
    altRu: "zeus vs hades slot — бонусные фриспины и множители",
    altEn: "zeus vs hades slot — bonus free spins multipliers",
    w: 1200,
    h: 675,
  },
  {
    src: "https://slotcatalog.com/userfiles/image/big-wins/Pragmatic-Play/30141/Big-Win-Zeus-vs-Hades-Gods-of-War-2024-01-31-15000xBet.jpg",
    altRu: "zeus vs hades big win — серия удачных спинов на экране",
    altEn: "zeus vs hades big win — winning streak on screen",
    w: 1100,
    h: 620,
  },
  {
    src: "https://slotcatalog.com/userfiles/image/games/Pragmatic-Play/30141/Zeus-vs-Hades-Gods-of-War-6979670_s.png",
    altRu: "zeus vs hades slot — логотип и обложка слота",
    altEn: "zeus vs hades slot — logo and cover art",
    w: 600,
    h: 600,
  },
];
