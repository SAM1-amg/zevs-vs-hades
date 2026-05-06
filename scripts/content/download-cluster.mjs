import { h2, h3, p, ul, ol, callout } from "./helpers.mjs";

export const DOWNLOAD_PAGES = {
  "download-android": {
    ru: {
      metaTitle: "Скачать Zeus vs Hades на Android — APK, Google Play, безопасность",
      metaDesc:
        "Как скачать Zeus vs Hades на Android: клиент казино, разрешения, обновления, альтернатива в браузере. Безопасные сценарии без вредоносных APK.",
      keywords: ["zeus vs hades скачать", "zeus vs hades android", "zeus vs hades apk"],
      h1: "Скачать Zeus vs Hades на Android",
      lead: "Слот открывается внутри приложения оператора — ищите официальный пакет, а не «взлом с гарантией заноса».",
      bodyHtml: `
${h2("Почему нельзя скачать «только Zeus» отдельным файлом")}
${p(
  "Провайдеры распространяют игру через казино‑платформы. На Android вы ставите либо клиент из Google Play (если доступен), либо APK с сайта бренда, либо играете в Chrome без установки.",
  "Для ключа «zeus vs hades android» важно проговорить риск сторонних APK: банкинг внутри поддельного клиента = прямой путь к краже данных."
)}
${h2("Чеклист безопасной установки")}
${ol([
  "Сверьте разработчика пакета с брендом казино.",
  "Включайте «неизвестные источники» только на время установки доверенного файла.",
  "После обновления ОС проверяйте, что клиент стартует и проходит SSL.",
])}
${callout(`<strong>APK:</strong> отдельная страница с ещё более жёсткими предупреждениями — переходите туда, если планируете обход магазина.`)}
${h3("Производительность на бюджетных смартфонах")}
${p(
  "Закройте фоновые игры, снизьте анимации в настройках слота, не запускайте screen recorder одновременно с покупкой бонуса — задержка сети в этот момент критична."
)}
`,
      faq: [
        { q: "Где безопасный APK?", a: "Только на домене оператора с HTTPS и контрольной информацией." },
        { q: "Почему Google Play не показывает казино?", a: "Политика региона/страны — используйте веб или локальный магазин бренда." },
        { q: "Нужны ли root‑права?", a: "Нет и не должны — это тревожный признак." },
        { q: "Как обновлять?", a: "Через тот же канал, откуда установили, либо автообновление внутри клиента." },
        { q: "Можно ли на планшет?", a: "Да, если разрешения экрана поддерживаются." },
        { q: "Сколько весит клиент?", a: "Зависит от казино — смотрите в магазине/у файла." },
        { q: "Переключение аккаунтов?", a: "Обычно логаут в меню — не храните пароль в заметках без шифрования." },
        { q: "Можно ли клон приложения?", a: "Параллельные клоны опасны — лучше одна официальная копия." },
        { q: "Нужен ли антивирус?", a: "Базовый сканер полезен для сторонних APK, но не заменяет здравый смысл." },
        { q: "Почему не запускается?", a: "Совместимость с версией Android, нехватка RAM, битый кэш — очистить осторожно." },
        { q: "Можно ли играть в split‑screen?", a: "Иногда да, но ошибки касаний вероятнее." },
        { q: "Где читать разрешения приложения?", a: "Страница приложения в системных настройках Android." },
      ],
    },
    en: {
      metaTitle: "Download Zeus vs Hades on Android — Play vs APK safety",
      metaDesc:
        "Install Zeus vs Hades on Android via licensed casino apps, trusted APKs, or HTML5—avoid cracked loaders.",
      keywords: ["zeus vs hades download", "zeus vs hades android", "zeus vs hades apk"],
      h1: "Download Zeus vs Hades on Android",
      lead: "You install the operator shell—the slot streams inside.",
      bodyHtml: `
${h2("No standalone Zeus binary")}
${p(
  "Providers bundle titles inside casino apps or browser frames. For zeus vs hades android queries, stress official APK signing—not SEO malware mirrors.",
)}
${h2("Safe install recipe")}
${ol([
  "Match developer IDs with brand names.",
  "Toggle unknown sources only for trusted installers.",
  "Re-test TLS after OS upgrades.",
])}
${callout(`<strong>Heads-up:</strong> our APK page goes deeper on sideload cautions.`)}
${h3("Budget phone tuning")}
${p(
  "Kill background games, lower slot animations, avoid recording screens during bonus buys—latency hurts timed interactions."
)}
`,
      faq: [
        { q: "Safe APK host?", a: "Operator HTTPS domain only." },
        { q: "Why missing on Play?", a: "Regional policies—use web/PWA." },
        { q: "Root needed?", a: "Never—red flag." },
        { q: "Updates?", a: "Same channel you installed from." },
        { q: "Tablets OK?", a: "If layout scales." },
        { q: "App weight?", a: "Casino-dependent." },
        { q: "Multi accounts?", a: "Logout cleanly—no plaintext passwords." },
        { q: "Parallel clones?", a: "Risky—stick to one signed build." },
        { q: "AV scans?", a: "Helpful for sideloads—not sole defense." },
        { q: "Won’t boot?", a: "Android version, RAM, corrupt cache." },
        { q: "Split screen?", a: "Possible—mis-tap risk." },
        { q: "Permissions review?", a: "Android settings → app info." },
      ],
    },
  },

  "download-ios": {
    ru: {
      metaTitle: "Скачать Zeus vs Hades на iPhone и iPad — App Store и Safari",
      metaDesc:
        "ZEUS vs HADES на iOS: легальные пути установки, региональные ограничения, Safari‑версия и типичные ошибки входа.",
      keywords: ["zeus vs hades скачать", "zeus vs hades ios", "zeus vs hades слот онлайн"],
      h1: "Скачать Zeus vs Hades на iOS",
      lead: "Apple строже к азартным приложениям — чаще побеждает веб‑клиент.",
      bodyHtml: `
${h2("Почему iOS отличается от Android")}
${p(
  "В России и ряде стран App Store может не показывать казино‑клиенты. Официальный Safari‑вход или PWA на домене оператора остаётся рабочим сценарием.",
  "Для SEO‑ключа «zeus vs hades ios» важно не обещать «чудо‑установку обходом магазина» — это небезопасно и часто нарушает правила."
)}
${h2("Рекомендованный порядок действий")}
${ol([
  "Проверьте регион Apple ID и доступность приложения.",
  "Если приложения нет — закрепите сайт на домашнем экране (Add to Home Screen).",
  "Включите Face ID только если доверяете устройству и не делитесь им с детьми.",
])}
`,
      faq: [
        { q: "Можно ли без App Store?", a: "Легально — редко; Safari‑версия чаще." },
        { q: "Почему просит геолокацию?", a: "Некоторые операторы проверяют регион — читайте политику." },
        { q: "Работает ли на старых iPhone?", a: "Зависит от RAM и версии iOS — может лагать." },
        { q: "Можно ли screen time ограничить?", a: "Да — полезно для ответственной игры." },
        { q: "Face ID безопасен?", a: "Для входа в казино — да, если телефон личный." },
        { q: "Почему слот вылетает?", a: "Память Safari, вкладки — перезапустите без лишних табов." },
        { q: "Можно ли играть на iPad split view?", a: "Возможно, но удобство ниже." },
        { q: "Нужен ли VPN?", a: "Только если это разрешено оператором." },
        { q: "Можно ли перенести с Android?", a: "Аккаунт облачный — прогресс слота не переносится как в RPG." },
        { q: "Почему не приходит пуш?", a: "Проверьте разрешения уведомлений для сайта/PWA." },
        { q: "Где хранить пароль?", a: "Менеджер паролей, не заметки в открытом виде." },
        { q: "Можно ли играть через LTE?", a: "Да, следите за стабильностью и трафиком." },
      ],
    },
    en: {
      metaTitle: "Download Zeus vs Hades on iOS — Safari, TestFlight myths",
      metaDesc:
        "Zeus vs hades iOS paths: App Store availability, Safari/PWA fallbacks, and why sideload hype is unsafe.",
      keywords: ["zeus vs hades download", "zeus vs hades ios", "zeus vs hades online slot"],
      h1: "Download Zeus vs Hades on iOS",
      lead: "Apple’s store policies push many brands toward responsive web apps.",
      bodyHtml: `
${h2("Store realities")}
${p(
  "Casino apps may be geo-blocked on iOS. Legit flows use Safari + bookmark/PWA rather than shady enterprise certificates.",
)}
${h2("Preferred flow")}
${ol([
  "Check Apple ID region vs operator availability.",
  "If no native app, add the verified site to Home Screen.",
  "Use Screen Time if you need external guardrails.",
])}
`,
      faq: [
        { q: "Need sideload?", a: "Avoid—stick to licensed web/PWA." },
        { q: "Geo prompts?", a: "Compliance—read disclosures." },
        { q: "Old iPhones?", a: "RAM/iOS version may lag." },
        { q: "Screen Time limits?", a: "Helpful discipline aid." },
        { q: "Face ID?", a: "Fine on personal devices." },
        { q: "Crashes?", a: "Kill Safari tabs to free RAM." },
        { q: "Split View iPad?", a: "Works—awkward taps." },
        { q: "VPN?", a: "Only if operator permits." },
        { q: "Android carryover?", a: "Account yes—slot grind no." },
        { q: "Missing pushes?", a: "Check notification permissions." },
        { q: "Password storage?", a: "Use a password manager." },
        { q: "LTE play?", a: "Yes—watch packet loss." },
      ],
    },
  },

  "download-pc": {
    ru: {
      metaTitle: "Скачать Zeus vs Hades на ПК — Windows, браузер, производительность",
      metaDesc:
        "Zeus vs Hades на компьютере: клиент казино для Windows, браузерные профили, аппаратное ускорение и безопасность учётной записи.",
      keywords: ["zeus vs hades скачать", "zeus vs hades слот онлайн", "zeus vs hades играть"],
      h1: "Zeus vs Hades на ПК — большой экран, тот же RNG",
      lead: "ПК удобен для стриминга и мультимонитора, но дисциплина важнее диагонали.",
      bodyHtml: `
${h2("EXE‑файл слота существует?")}
${p(
  "Как правило, нет отдельного Zeus vs Hades.exe — вы ставите десктоп‑клиент казино или играете в браузере. Не скачивайте «кряки RTP» — это вредоносы.",
  "Для «скачать на ПК» ценно указать: двухмониторные схемы повышают риск случайного клика по ставке — будьте внимательны."
)}
${h2("Оптимизация Windows")}
${ul([
  "Включите аппаратное ускорение в браузере.",
  "Обновите GPU‑драйвер, если видите артефакты.",
  "Используйте отдельный профиль браузера только для игры — меньше случайных расширений.",
])}
`,
      faq: [
        { q: "Лучший браузер?", a: "Актуальный Chrome/Edge/Firefox — без лишних плагинов." },
        { q: "Нужен ли игровой ПК?", a: "Слот не как AAA‑игра — средний ноутбук часто достаточен." },
        { q: "Можно ли fullscreen?", a: "Да, следите за тем, чтобы не промахнуться по кнопкам." },
        { q: "Почему фризит?", a: "Расширения, драйвер, перегрев — диагностируйте по очереди." },
        { q: "Стоит ли второй монитор для статистики?", a: "Удобно, но не превращайте в информационный шум." },
        { q: "Можно ли играть через удалённый рабочий стол?", a: "Задержка может мешать — не рекомендуется для покупки бонусов." },
        { q: "Где хранить сессию?", a: "Выходите из аккаунта на общих компьютерах." },
        { q: "Нужен ли антивирус?", a: "Да, базовый, особенно если качаете клиент." },
        { q: "Линукс?", a: "Зависит от поддержки браузера и DRM — чаще всего работает через браузер." },
        { q: "Mac?", a: "Safari/Chrome — как на типичном веб‑слоте." },
        { q: "Можно ли горячие клавиши?", a: "Иногда да в клиенте — смотрите справку." },
        { q: "Блокировки работодателя?", a: "Не играйте с корпоративной сети — политика и безопасность." },
      ],
    },
    en: {
      metaTitle: "Download Zeus vs Hades on PC — desktop clients & browser hygiene",
      metaDesc:
        "Play Zeus vs Hades on PC: casino desktop wrappers, GPU acceleration, dual-monitor caution, and malware avoidance.",
      keywords: ["zeus vs hades download", "zeus vs hades online slot", "zeus vs hades play"],
      h1: "Zeus vs Hades on PC — wide screen, same math",
      lead: "No cracked RTP binaries—only legit clients or browsers.",
      bodyHtml: `
${h2("Executable fantasies")}
${p(
  "There’s rarely a standalone Zeus.exe—install the licensed casino desktop app or use hardened browser profiles.",
  "Dual monitors help multitasking but increase mis-click risk on stake controls."
)}
${h2("Windows tuning")}
${ul([
  "Enable GPU rasterization where stable.",
  "Update GPU drivers if artifacts appear.",
  "Dedicated browser profile = fewer rogue extensions.",
])}
`,
      faq: [
        { q: "Best browser?", a: "Current Chrome/Edge/Fx—minimal plugins." },
        { q: "Need gaming rig?", a: "Usually no—slots are light." },
        { q: "Fullscreen OK?", a: "Yes—mind button edges." },
        { q: "Stutter causes?", a: "Extensions, thermals, drivers." },
        { q: "Second monitor stats?", a: "Helpful if not distracting." },
        { q: "Remote desktop?", a: "Latency hurts timed buys." },
        { q: "Shared PCs?", a: "Always logout." },
        { q: "AV needed?", a: "Yes for downloaded clients." },
        { q: "Linux?", a: "Browser-first—DRM quirks possible." },
        { q: "macOS?", a: "Safari/Chrome typically fine." },
        { q: "Hotkeys?", a: "Some desktop apps support—check help." },
        { q: "Corp networks?", a: "Avoid—policy + MITM risk." },
      ],
    },
  },

  "download-apk": {
    ru: {
      metaTitle: "Zeus vs Hades APK — безопасная установка и антифрод",
      metaDesc:
        "Zeus vs hades apk: только официальные пакеты, проверка подписи, отказ от модов с «фиксированным RTP».",
      keywords: ["zeus vs hades apk", "zeus vs hades android", "zeus vs hades скачать"],
      h1: "Zeus vs Hades APK — осторожность прежде всего",
      lead: "Сторонний APK может украсть не игру, а ваши платёжные данные.",
      bodyHtml: `
${h2("Красные флаги «волшебного APK»")}
${ul([
  "Обещание гарантированного RTP или взлома бонусов.",
  "Ссылка на файлообменник без HTTPS.",
  "Запрос прав на SMS, звонки, контакты без причины.",
])}
${h2("Безопасный алгоритм")}
${ol([
  "Скачайте файл только с домена бренда.",
  "Сравните SHA/версию, если оператор публикует хеши.",
  "После установки отключите разрешения, которые не нужны игре.",
])}
${callout(`<strong>Юридический дисклеймер:</strong> ответственность за установку неизвестных файлов лежит на пользователе — мы рекомендуем веб‑версию, если сомневаетесь.`)}
`,
      faq: [
        { q: "Можно ли модифицировать APK?", a: "Нарушает правила и ломает безопасность." },
        { q: "Почему антивирус ругается?", a: "Любой сторонний установщик подозрителен." },
        { q: "Где взять предыдущую версию?", a: "У поддержки оператора — не у случайных форумов." },
        { q: "Можно ли обновлять изнутри?", a: "Если клиент поддерживает OTA." },
        { q: "Что делать при краше после обновления?", a: "Откатите версию через поддержку или перейдите в браузер." },
        { q: "Нужны ли root‑права?", a: "Нет." },
        { q: "Можно ли хранить APK в облаке?", a: "Да, но проверяйте контрольную сумму при переносе." },
        { q: "Почему запрещено делиться файлом друзьям?", a: "Риск подмены и бана аккаунта." },
        { q: "Дети на устройстве?", a: "Используйте профили и родительский контроль." },
        { q: "Можно ли параллельно две версии?", a: "Не стоит — путаница с аккаунтами." },
        { q: "Что при запросе странных разрешений?", a: "Удаляйте приложение." },
        { q: "Финал?", a: "Когда сомневаетесь — играйте в браузере." },
      ],
    },
    en: {
      metaTitle: "Zeus vs Hades APK — sideload safety playbook",
      metaDesc:
        "Zeus vs hades apk guidance: verify signatures, reject cracked RTP mods, prefer browser play when unsure.",
      keywords: ["zeus vs hades apk", "zeus vs hades android", "zeus vs hades download"],
      h1: "Zeus vs Hades APK — sideload with skepticism",
      lead: "Malicious APKs target wallets—not reels.",
      bodyHtml: `
${h2("Red flags")}
${ul([
  "Guaranteed RTP hacks.",
  "HTTP/file locker mirrors.",
  "Excessive Android permissions.",
])}
${h2("Safer flow")}
${ol([
  "Download only from brand domains.",
  "Match checksums if published.",
  "Revoke unused permissions post-install.",
])}
${callout(`<strong>If unsure:</strong> stick to HTTPS browser sessions—less attack surface.`)}
`,
      faq: [
        { q: "Mod APK OK?", a: "Never—ToS + malware risk." },
        { q: "AV false positives?", a: "Sideloading triggers warnings." },
        { q: "Older builds?", a: "Ask support—avoid forums." },
        { q: "OTA updates?", a: "If client supports." },
        { q: "Crash post-patch?", a: "Rollback via support or fallback web." },
        { q: "Root?", a: "Not required." },
        { q: "Cloud APK storage?", a: "Verify checksum after copy." },
        { q: "Share with friends?", a: "Tamper risk + bans." },
        { q: "Kids on device?", a: "Profiles + parental controls." },
        { q: "Dual installs?", a: "Confusing—avoid." },
        { q: "Weird permissions?", a: "Uninstall immediately." },
        { q: "Final advice?", a: "Browser play beats mystery APKs." },
      ],
    },
  },
};
