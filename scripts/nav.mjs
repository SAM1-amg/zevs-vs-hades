/** Полная карта сайта для перелинковки и меню */
export const MAIN_NAV = [
  { slug: "index", ru: "Главная", en: "Home" },
  { slug: "play", ru: "Играть", en: "Play" },
  { slug: "demo", ru: "Demo", en: "Demo" },
  { slug: "download", ru: "Скачать", en: "Download" },
  { slug: "how-to-win", ru: "Как выиграть", en: "How to win" },
  { slug: "strategies", ru: "Стратегии", en: "Strategies" },
  { slug: "reviews", ru: "Отзывы", en: "Reviews" },
  { slug: "rtp", ru: "RTP и выплаты", en: "RTP & payouts" },
];

export const PLAY_CLUSTER = [
  { slug: "play-real-money", ru: "На реальные деньги", en: "Real money" },
  { slug: "play-free", ru: "Бесплатно", en: "Free play" },
  { slug: "play-no-registration", ru: "Без регистрации", en: "No registration" },
  { slug: "play-online", ru: "Онлайн", en: "Online" },
  { slug: "play-mobile", ru: "На телефоне", en: "Mobile" },
];

export const DOWNLOAD_CLUSTER = [
  { slug: "download-android", ru: "Android", en: "Android" },
  { slug: "download-ios", ru: "iOS", en: "iOS" },
  { slug: "download-pc", ru: "ПК", en: "PC" },
  { slug: "download-apk", ru: "APK", en: "APK" },
];

export const PAY_CLUSTER = [
  { slug: "deposit-card", ru: "Карта", en: "Card deposit" },
  { slug: "mastercard", ru: "MasterCard", en: "MasterCard" },
  { slug: "visa", ru: "Visa", en: "Visa" },
  { slug: "bitcoin", ru: "Bitcoin", en: "Bitcoin" },
  { slug: "usdt", ru: "USDT", en: "USDT" },
  { slug: "qiwi", ru: "Qiwi", en: "Qiwi" },
  { slug: "sbp", ru: "СБП", en: "SBP" },
  { slug: "yandex-pay", ru: "Яндекс Пэй", en: "Yandex Pay" },
  { slug: "neteller", ru: "Neteller", en: "Neteller" },
  { slug: "skrill", ru: "Skrill", en: "Skrill" },
];

export const ANALOG_CLUSTER = [
  { slug: "slot-gates-of-olympus", ru: "Gates of Olympus", en: "Gates of Olympus" },
  { slug: "slot-sweet-bonanza", ru: "Sweet Bonanza", en: "Sweet Bonanza" },
  { slug: "slot-starlight-princess", ru: "Starlight Princess", en: "Starlight Princess" },
  { slug: "slot-dog-house", ru: "The Dog House", en: "The Dog House" },
  { slug: "slot-fruit-party", ru: "Fruit Party", en: "Fruit Party" },
  { slug: "slot-big-bass-bonanza", ru: "Big Bass Bonanza", en: "Big Bass Bonanza" },
];

export const ALL_SLUGS = [
  ...MAIN_NAV.map((x) => x.slug),
  ...PLAY_CLUSTER.map((x) => x.slug),
  ...DOWNLOAD_CLUSTER.map((x) => x.slug),
  ...PAY_CLUSTER.map((x) => x.slug),
  ...ANALOG_CLUSTER.map((x) => x.slug),
];

/** Уникальный набор — без дублей */
export const UNIQUE_SLUGS = Array.from(new Set(ALL_SLUGS));
