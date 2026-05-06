import { h2, h3, p, ul, ol, callout, tablePay, tablePayEn } from "./helpers.mjs";

export const PAY_PAGES = {
  "deposit-card": {
    ru: {
      metaTitle: "Депозит картой для Zeus vs Hades — карты РФ и лимиты",
      metaDesc:
        "Депозит через карту для игры в Zeus vs Hades: МИР/Visa/MC где доступно, 3‑D Secure, лимиты банка и типичные отказы.",
      keywords: ["депозит карта zeus vs hades", "zeus vs hades играть", "visa mastercard казино"],
      h1: "Депозит через карту — Zeus vs Hades",
      lead: "Карта остаётся привычным способом, но банковские политики меняются — проверяйте до пополнения.",
      bodyHtml: `
${h2("Как работает депозит через карту")}
${p(
  "Вы привязываете карту в кассе казино или вводите реквизиты для одноразового платежа. Для РФ актуальны карты МИР там, где это поддерживает оператор, а также зарубежные бренды в разрешённых сценариях. Ключ «депозит карта» часто сочетают с запросами zeus vs hades играть — поэтому эта страница напрямую объясняет трение на этапе оплаты.",
  "Перед первым пополнением откройте лимиты интернет‑платежей в банке и включите 3‑D Secure — это снижает отказы и повышает доверие системы."
)}
${tablePay([
  ["Карта банка РФ", "Минуты при успешной авторизации", "Зависит от банка; иногда бесплатно для клиента"],
  ["Международная карта", "Минуты", "Возможна конвертация валюты"],
  ["Корпоративная карта", "Часто дольше", "Может быть запрещена политикой компании"],
])}
${h2("Почему платёж отклоняют")}
${ul([
  "Недостаточно лимита на онлайн‑операции.",
  "Карта не открыта для международных эквайеров.",
  "Сработал антифрод — позвоните в банк и подтвердите операцию.",
])}
${callout(`<strong>Перелинковка:</strong> если у вас конкретный бренд карты — читайте страницы Visa и MasterCard для уточнений по эквайрингу.`)}
`,
      faq: [
        { q: "Можно ли карту МИР?", a: "Если оператор и эквайер поддерживают — да." },
        { q: "Нужен ли CVV каждый раз?", a: "Для одноразовых форм — да; для токенизированной карты — по правилам казино." },
        { q: "Сколько ждать зачисления?", a: "Обычно мгновенно; редко до нескольких минут." },
        { q: "Что делать при двойном списании?", a: "Сохраните квитанции и свяжитесь с банком и поддержкой казино." },
        { q: "Можно ли анонимно?", a: "Полностью нет — карта привязана к личности." },
        { q: "Почему банк блокирует казино?", a: "Внутренняя политика риска или класс MCC." },
        { q: "Есть ли минимальный депозит?", a: "Да, определяется казино и акцией." },
        { q: "Можно ли виртуальную карту?", a: "Иногда да — уточняйте у эмитента." },
        { q: "Нужен ли VPN?", a: "Не для оплаты — VPN может наоборот вызвать гео‑конфликт." },
        { q: "Как удалить карту из профиля?", a: "В настройках кассы или через поддержку." },
        { q: "Связь с zeus vs hades бонус?", a: "Некоторые акции требуют первый депозит картой — читайте правила." },
        { q: "Что безопаснее — карта или СБП?", a: "Зависит от вашего банка и привычек; СБП может быть быстрее в РФ." },
      ],
    },
    en: {
      metaTitle: "Card deposits for Zeus vs Hades — limits & declines",
      metaDesc:
        "Deposit via bank card to play Zeus vs Hades: 3DS, issuer blocks, FX spreads, and how to pair with Visa/MC hubs.",
      keywords: ["card deposit zeus vs hades", "zeus vs hades play", "visa mastercard casino"],
      h1: "Card deposit — Zeus vs Hades",
      lead: "Cards feel familiar—issuer policies still gate igaming.",
      bodyHtml: `
${h2("How card deposits route")}
${p(
  "Tokenized vaulting vs one-off forms depends on the operator. RU players may lean on MIR where supported; cross-border cards watch FX + acceptance.",
)}
${tablePayEn([
  ["Local debit", "Minutes", "Issuer fees vary"],
  ["International card", "Minutes", "FX spreads possible"],
  ["Corporate card", "May delay", "Often banned by employer policy"],
])}
${h2("Why payments decline")}
${ul([
  "Online limit too low.",
  "Cross-border acquiring blocked.",
  "Fraud scoring—call issuer to approve.",
])}
${callout(`<strong>See also:</strong> Visa & MasterCard pages for brand-specific quirks.`)}
`,
      faq: [
        { q: "MIR supported?", a: "If acquirer + operator align." },
        { q: "CVV each time?", a: "Depends on vaulting." },
        { q: "Settlement speed?", a: "Usually instant." },
        { q: "Double charge?", a: "Receipts + chargeback path via bank." },
        { q: "Anonymous?", a: "No—KYC ties in." },
        { q: "Bank blocks gambling?", a: "Issuer risk codes." },
        { q: "Minimum deposit?", a: "Promo-specific." },
        { q: "Virtual cards?", a: "Issuer-dependent." },
        { q: "VPN for payments?", a: "Avoid—geo mismatch risk." },
        { q: "Remove saved card?", a: "Cashier settings/support." },
        { q: "Bonus coupling?", a: "Some promos require card first deposit." },
        { q: "Card vs instant rails?", a: "Pick lowest friction for your region." },
      ],
    },
  },

  mastercard: {
    ru: {
      metaTitle: "MasterCard депозит — Zeus vs Hades и онлайн‑казино",
      metaDesc:
        "Пополнение MasterCard для Zeus vs Hades: эквайринг, валюта, отказы банка и альтернативы (СБП, кошельки).",
      keywords: ["mastercard zeus vs hades", "депозит карта", "zeus vs hades реальные деньги"],
      h1: "MasterCard — депозит под Zeus vs Hades",
      lead: "MasterCard может иметь разные уровни доступа к международным платежам — уточняйте у банка.",
      bodyHtml: `
${h2("Особенности MasterCard в РФ")}
${p(
  "Некоторые карты ориентированы на внутренний рынок, другие — на международный эквайринг. Для zeus vs hades реальные деньги это значит: один и тот же банк может пропускать платёж на одном процессинге и блокировать на другом.",
  "Если отказ повторяется, попробуйте альтернативный метод со страницы СБП или электронного кошелька — конверсия арбитража часто спасается вторым способом оплаты."
)}
${h2("Рекомендации")}
${ol([
  "Включите SMS/пуш авторизации.",
  "Проверьте лимит на интернет‑эквайринг за один день.",
  "Держите запасной метод, если едете в серию депозитов.",
])}
`,
      faq: [
        { q: "Debit или Credit?", a: "Зависит от политики банка; уточняйте класс карты." },
        { q: "Комиссия казино?", a: "Редко; чаще комиссия банка за конвертацию." },
        { q: "Можно ли prepaid MC?", a: "Если позволяет баланс и верификация." },
        { q: "Почему просят верификацию после депозита?", a: "AML — стандартная процедура." },
        { q: "Связь с Neteller?", a: "Иногда пополнение кошелька картой проще прямого эквайринга." },
        { q: "Можно ли удалить лимит?", a: "Через банк — иногда временно." },
        { q: "Что при краже карты?", a: "Блокировка через банк, смена реквизитов в казино." },
        { q: "Работает ли Apple Pay с MC?", a: "Если казино поддерживает токен — иногда да." },
        { q: "Нужен ли паспорт для карты?", a: "Для выпуска — да; для депозита иногда достаточно 3DS." },
        { q: "Можно ли совместить с бонусом?", a: "Смотрите правила — иногда исключены карты виртуального банка." },
        { q: "Почему разные суммы минимума?", a: "Акции и VIP‑уровни меняют порог." },
        { q: "Куда жаловаться на двойное списание?", a: "Банк + поддержка казино с чеком." },
      ],
    },
    en: {
      metaTitle: "MasterCard deposits — Zeus vs Hades funding tips",
      metaDesc:
        "Fund Zeus vs Hades with MasterCard: issuer quirks, FX, chargebacks, and wallet fallbacks.",
      keywords: ["mastercard zeus vs hades", "card deposit zeus vs hades", "zeus vs hades real money"],
      h1: "MasterCard deposits for Zeus vs Hades",
      lead: "Issuer routing decides acceptance—not the slot.",
      bodyHtml: `
${h2("Regional quirks")}
${p(
  "Domestic vs international BIN behavior changes approval odds. Keep backup rails (SBP analogs, e-wallets, crypto) when scaling paid traffic.",
)}
${h2("Operational tips")}
${ol([
  "Enable push approvals.",
  "Raise daily internet limits temporarily.",
  "Pre-stage secondary deposit paths.",
])}
`,
      faq: [
        { q: "Debit vs credit?", a: "Bank policies differ." },
        { q: "Casino fees?", a: "Rare—watch FX instead." },
        { q: "Prepaid MC?", a: "If load + KYC align." },
        { q: "Post-deposit KYC?", a: "AML norms." },
        { q: "Neteller bridge?", a: "Sometimes smoother than direct." },
        { q: "Raise limits?", a: "Temporary issuer approvals." },
        { q: "Stolen card?", a: "Bank block + update vault." },
        { q: "Apple Pay?", a: "Token-dependent acceptance." },
        { q: "ID for deposit?", a: "3DS often suffices initially." },
        { q: "Bonus eligibility?", a: "Some promos exclude virtual BINs." },
        { q: "Dynamic mins?", a: "Promo tiers adjust thresholds." },
        { q: "Double charges?", a: "Bank dispute + casino ticket." },
      ],
    },
  },

  visa: {
    ru: {
      metaTitle: "Visa депозит для Zeus vs Hades — эквайринг и безопасность",
      metaDesc:
        "Пополнение Visa для запуска Zeus vs Hades: Verified by Visa, лимиты, отказы и альтернативные методы.",
      keywords: ["visa zeus vs hades", "депозит карта", "zeus vs hades казино онлайн"],
      h1: "Visa — пополнение для Zeus vs Hades",
      lead: "Visa широко узнаваема, но та же логика лимитов и антифрода, что и у других карт.",
      bodyHtml: `
${h2("Почему Visa популярна в SEO")}
${p(
  "Ключ «visa» часто идёт рядом с zeus vs hades казино онлайн — пользователи ищут привычный логотип. Расскажите им правду: успех зависит от банка‑эмитента и страны эквайера, а не от слота.",
  "Используйте двухфакторку банка и не сохраняйте карту на чужих устройствах."
)}
${h3("Если эквайер не проходит")}
${p(
  "Попробуйте другую карту того же банка (дебет вместо кредита), снизьте сумму первого депозита или перейдите на СБП/кошелёк — это частый способ сохранить конверсию."
)}
`,
      faq: [
        { q: "Нужен Verified by Visa?", a: "Если банк требует — да." },
        { q: "Работает ли виртуальная Visa?", a: "Часто да, если не одноразовая просроченная." },
        { q: "Можно ли USD карту?", a: "Будет конвертация — смотрите курс." },
        { q: "Почему списание в другой валюте?", a: "Эквайер конвертирует по своим правилам." },
        { q: "Как избежать лишних комиссий?", a: "Счёт в валюте оператора или локальный метод." },
        { q: "Можно ли привязать несколько Visa?", a: "Обычно да, с лимитами безопасности." },
        { q: "Что при краже CVV?", a: "Перевыпуск карты и смена токенов." },
        { q: "Нужен ли стейтмент?", a: "Для споров — да." },
        { q: "Связь с Skrill?", a: "Можно пополнить Skrill Visa и дальше в казино — иногда выгоднее." },
        { q: "Ночные отказы?", a: "Банковский антифрод не спит — звоните в поддержку банка." },
        { q: "Можно ли chargeback?", a: "Только по правилам платёжной системы и не для проигрыша по правилам игры." },
        { q: "Мобильная Visa?", a: "Google Pay/Apple Pay зависят от токенизации казино." },
      ],
    },
    en: {
      metaTitle: "Visa deposits — Zeus vs Hades cashier alignment",
      metaDesc:
        "Deposit with Visa to play Zeus vs Hades: issuer approvals, FX notes, wallet hops, and fraud exits.",
      keywords: ["visa zeus vs hades", "card deposit zeus vs hades", "zeus vs hades casino online"],
      h1: "Visa deposits — Zeus vs Hades",
      lead: "Brand trust ≠ guaranteed approval.",
      bodyHtml: `
${h2("Why Visa shows up in SERPs")}
${p(
  "Players recognize the badge. Approval still hinges on BIN country + merchant category codes.",
)}
${h3("Soft declines")}
${p(
  "Retry smaller deposits, alternate debit products, or pivot to e-wallets/crypto rails documented onsite."
)}
`,
      faq: [
        { q: "Verified by Visa?", a: "If issuer demands." },
        { q: "Virtual Visa?", a: "Often OK—watch expiry." },
        { q: "USD cards?", a: "FX spreads apply." },
        { q: "Foreign currency posting?", a: "Acquirer conversion rules." },
        { q: "Fee dodge?", a: "Match account currency." },
        { q: "Multiple Visas?", a: "Usually allowed—watch vault limits." },
        { q: "CVV leak?", a: "Reissue + retokenize." },
        { q: "Statements?", a: "Keep for disputes." },
        { q: "Skrill hop?", a: "Sometimes cleaner routing." },
        { q: "Night declines?", a: "Issuer fraud desks." },
        { q: "Chargebacks?", a: "Strict rules—not for gambling losses." },
        { q: "Mobile wallets?", a: "Depends on token acceptance." },
      ],
    },
  },

  bitcoin: {
    ru: {
      metaTitle: "Bitcoin депозит — Zeus vs Hades и крипто‑касса",
      metaDesc:
        "Пополнение Bitcoin для игры в Zeus vs Hades: комиссии сети, подтверждения, ошибки адреса и безопасность кошелька.",
      keywords: ["bitcoin zeus vs hades", "usdt zeus vs hades", "zeus vs hades реальные деньги"],
      h1: "Bitcoin для Zeus vs Hades",
      lead: "BTC даёт гранулярный контроль, но требует аккуратности с адресом и сетью.",
      bodyHtml: `
${h2("Как проходит крипто‑депозит")}
${p(
  "Казино выдаёт адрес или invoice; вы отправляете BTC с комиссией майнеров. После подтверждений баланс становится доступен для zeus vs hades реальные деньги.",
  "Никогда не копируйте адрес из чужих мессенджеров — только из личного кабинета на HTTPS."
)}
${h2("Типичные ошибки")}
${ul([
  "Отправка не в ту сеть (BTC vs другая монета).",
  "Слишком низкая комиссия — транзакция зависает.",
  "Повторное использование адреса без проверки суммы.",
])}
`,
      faq: [
        { q: "Сколько подтверждений нужно?", a: "Зависит от оператора — обычно от 1 до 6." },
        { q: "Можно ли Lightning?", a: "Редко у казино — уточняйте." },
        { q: "Что если отправил меньше минимума?", a: "Средства могут не зачислиться автоматически — поддержка." },
        { q: "Налоги?", a: "Консультируйтесь с бухгалтером по локальному закону." },
        { q: "Анонимность?", a: "Полная анонимность нереалистична при выводе на банк." },
        { q: "Можно ли QR?", a: "Да, если уверены в источнике QR." },
        { q: "Как не потерять ключи?", a: "Аппаратный кошелёк или менеджер с бэкапом." },
        { q: "Почему курс отличается?", a: "Провайдер может использовать свой спот." },
        { q: "Можно ли BTC через обменник?", a: "Да, но проверяйте репутацию и AML." },
        { q: "Взаимосвязь с USDT?", a: "См. страницу USDT — меньше волатильность при определённых стейблках." },
        { q: "Что при зависшей транзакции?", a: "RBF/ускорители — зависит от кошелька." },
        { q: "Можно ли играть до подтверждения?", a: "Обычно нет — ждите зачисления." },
      ],
    },
    en: {
      metaTitle: "Bitcoin deposits — Zeus vs Hades crypto cashier",
      metaDesc:
        "Fund Zeus vs Hades with BTC: confirmations, fee markets, wrong-chain disasters, and wallet hygiene.",
      keywords: ["bitcoin zeus vs hades", "usdt zeus vs hades", "zeus vs hades real money"],
      h1: "Bitcoin — Zeus vs Hades funding",
      lead: "Self-custody power—operator mistakes hurt.",
      bodyHtml: `
${h2("Flow")}
${p(
  "Invoice/address → broadcast with adequate fee → confirmations credit playable balance.",
)}
${h2("Failure modes")}
${ul([
  "Wrong asset/chain.",
  "Underpaid invoices.",
  "QR phishing via chat.",
])}
`,
      faq: [
        { q: "Confirmations needed?", a: "Operator-specific." },
        { q: "Lightning?", a: "Rare—ask cashier." },
        { q: "Below minimum?", a: "Manual recovery tickets." },
        { q: "Tax?", a: "Local law advisor." },
        { q: "Anonymous?", a: "Cash-out bridges pierce privacy." },
        { q: "QR safety?", a: "Scan only in-account codes." },
        { q: "Key custody?", a: "Hardware wallets + backups." },
        { q: "Rate spreads?", a: "Spot vs operator FX." },
        { q: "OTC exchangers?", a: "Reputation matters." },
        { q: "USDT alt page?", a: "Stablecoin nuances differ." },
        { q: "Stuck tx?", a: "Fee bump strategies vary." },
        { q: "Play before conf?", a: "Usually blocked." },
      ],
    },
  },

  usdt: {
    ru: {
      metaTitle: "USDT депозит — Zeus vs Hades на стейблкоине",
      metaDesc:
        "Пополнение USDT для Zeus vs Hades: сети TRC20/ERC20, комиссии, ошибки контракта и скорость зачисления.",
      keywords: ["usdt zeus vs hades", "bitcoin zeus vs hades", "депозит крипто"],
      h1: "USDT для Zeus vs Hades",
      lead: "Стейблкоин снижает волатильность между депозитом и первым спином.",
      bodyHtml: `
${h2("Почему USDT отдельно от Bitcoin")}
${p(
  "Пользователи ищут «usdt zeus vs hades», ожидая предсказуемую сумму в долларовом эквиваленте. Важно выбрать правильную сеть: TRC20, ERC20, BEP20 и т.д. Перепутали — средства могут быть потеряны без гарантии возврата.",
  "Начните с малого тестового перевода, если казино позволяет."
)}
${h2("Таблица ориентиров")}
${tablePay([
  ["TRC20", "Обычно дешевле комиссия", "Проверяйте поддержку у казино"],
  ["ERC20", "Может быть дороже газ", "Высокая совместимость с кошельками"],
])}
`,
      faq: [
        { q: "Можно ли смешивать сети?", a: "Нет." },
        { q: "Что такое мемо/тег?", a: "Для некоторых блокчейнов обязателен — уточняйте." },
        { q: "Нужен ли KYC для крипто?", a: "На стороне фиатных выводов часто да." },
        { q: "Почему сумма зачисления чуть отличается?", a: "Спред обмена у оператора." },
        { q: "Можно ли держать USDT на бирже?", a: "Можно, но учитывайте риски биржи." },
        { q: "Связь с бонусами?", a: "Иногда крипто депозиты имеют отдельный вейджер." },
        { q: "Что при фишинговом адресе?", a: "Немедленно остановитесь — проверьте домен." },
        { q: "Можно ли автоконвертацию?", a: "У некоторых операторов да." },
        { q: "Мобильные кошельки?", a: "Проверяйте, что сеть выбрана верно." },
        { q: "Можно ли USDT через P2P?", a: "Да, но только доверенные контрагенты." },
        { q: "Стоит ли хранить долго на игровом счёте?", a: "Лучше выводить лишнее по своим правилам безопасности." },
        { q: "Комиссия вывода?", a: "Смотрите кассу — иногда фикс в сети." },
      ],
    },
    en: {
      metaTitle: "USDT deposits — Zeus vs Hades stablecoin rails",
      metaDesc:
        "Deposit USDT to play Zeus vs Hades: chain selection (TRC20/ERC20), memo fields, and FX spreads.",
      keywords: ["usdt zeus vs hades", "bitcoin zeus vs hades", "crypto deposit casino"],
      h1: "USDT deposits — Zeus vs Hades",
      lead: "Stable-ish value—chain mistakes aren’t stable at all.",
      bodyHtml: `
${h2("Why USDT gets its own SEO page")}
${p(
  "Players want USD-pegged certainty; operators still need exact chain selection.",
)}
${tablePayEn([
  ["TRC20", "Often cheaper fees", "Confirm casino support"],
  ["ERC20", "Higher gas days", "Wallet ubiquity"],
])}
`,
      faq: [
        { q: "Mix chains?", a: "Never." },
        { q: "Memo/tag?", a: "Some chains require—double-check." },
        { q: "KYC?", a: "Often at fiat off-ramps." },
        { q: "Amount mismatch?", a: "Operator FX spread." },
        { q: "Exchange custody?", a: "Counterparty risk." },
        { q: "Bonus rules?", a: "Crypto-specific wagering possible." },
        { q: "Phishing?", a: "Verify domains obsessively." },
        { q: "Auto-convert?", a: "Some cashiers support." },
        { q: "Mobile wallets?", a: "Chain picker discipline." },
        { q: "P2P?", a: "Reputation matters." },
        { q: "Leave balance onsite?", a: "Minimize idle exposure." },
        { q: "Withdraw fees?", a: "Network fee + platform fee." },
      ],
    },
  },

  qiwi: {
    ru: {
      metaTitle: "Qiwi и Zeus vs Hades — пополнение через кошелёк",
      metaDesc:
        "Депозит через Qiwi для игры в Zeus vs Hades: доступность сервиса, лимиты кошелька, комиссии и альтернативы.",
      keywords: ["qiwi zeus vs hades", "депозит кошелёк", "zeus vs hades играть"],
      h1: "Qiwi — депозит для Zeus vs Hades",
      lead: "Электронные кошельки удобны, но всегда проверяйте актуальность метода у оператора.",
      bodyHtml: `
${h2("Контекст использования Qiwi")}
${p(
  "В РФ‑ориентированных SEO‑кластерах запрос qiwi до сих пор встречается, хотя доступность сервиса может меняться. Эта страница объясняет логику: если метод поддерживается, вы пополняете кошелёк и переводите в казино в рамках лимитов.",
  "Если Qiwi недоступен, используйте перелинковку на СБП или карты."
)}
${h2("Практические советы")}
${ul([
  "Пройдите идентификацию кошелька заранее — иначе лимиты малы.",
  "Следите за комиссией провайдера при переводе.",
  "Храните чеки для спорных операций.",
])}
`,
      faq: [
        { q: "Работает ли метод у всех казино?", a: "Нет — только у подключённых." },
        { q: "Можно ли без верификации?", a: "Обычно лимиты низкие." },
        { q: "Есть ли комиссия?", a: "Зависит от тарифов кошелька и казино." },
        { q: "Скорость?", a: "Часто быстро, но не мгновенно при проверках." },
        { q: "Можно ли вывод на Qiwi?", a: "Если оператор поддерживает симметрично." },
        { q: "Что при блокировке кошелька?", a: "Поддержка Qiwi + казино." },
        { q: "Альтернатива?", a: "СБП, карта, крипто — см. другие страницы." },
        { q: "Можно ли бизнес‑кошелёк?", a: "Зависит от правил и категории." },
        { q: "Влияет ли метод на бонус?", a: "Иногда да — читайте правила." },
        { q: "Безопасность SMS?", a: "Защитите сим‑карту от дублирования." },
        { q: "Можно ли пополнить наличными?", a: "Если терминалы доступны в вашем городе." },
        { q: "Что новичку?", a: "Начать с минимальной суммы и проверить зачисление." },
      ],
    },
    en: {
      metaTitle: "Qiwi wallets — Zeus vs Hades deposits (RU-oriented)",
      metaDesc:
        "Qiwi funding context for Zeus vs Hades: availability drift, wallet tiers, fees, and regional alternatives.",
      keywords: ["qiwi zeus vs hades", "e-wallet deposit casino", "zeus vs hades play"],
      h1: "Qiwi — Zeus vs Hades deposits",
      lead: "Wallet rails shift—verify cashier availability live.",
      bodyHtml: `
${h2("Regional relevance")}
${p(
  "RU-facing arbitrage still keywords Qiwi although availability evolves—always confirm inside the casino cashier.",
)}
${h2("Tips")}
${ul([
  "Complete wallet KYC early.",
  "Track fee schedules.",
  "Save receipts.",
])}
`,
      faq: [
        { q: "Universal method?", a: "No—operator-specific." },
        { q: "No verification?", a: "Low caps." },
        { q: "Fees?", a: "Wallet + house rules." },
        { q: "Speed?", a: "Usually fast—fraud holds happen." },
        { q: "Withdraw parity?", a: "If supported symmetrically." },
        { q: "Blocked wallet?", a: "Wallet CS + casino trail." },
        { q: "Alternatives?", a: "SBP/ cards/ crypto." },
        { q: "Business wallets?", a: "Policy-dependent." },
        { q: "Bonus impact?", a: "Sometimes excluded." },
        { q: "SIM security?", a: "Guard swap fraud." },
        { q: "Cash-in terminals?", a: "Geo-dependent." },
        { q: "Newbies?", a: "Micro-test deposits." },
      ],
    },
  },

  sbp: {
    ru: {
      metaTitle: "СБП депозит — быстрое пополнение для Zeus vs Hades",
      metaDesc:
        "Депозит через Систему быстрых платежей для Zeus vs Hades: банки, лимиты, QR и типичные отказы.",
      keywords: ["сбп депозит zeus vs hades", "депозит карта", "zeus vs hades реальные деньги"],
      h1: "СБП — быстрый депозит под Zeus vs Hades",
      lead: "СБП популярен в РФ за скорость — но лимиты и банки всё равно нужно проверить.",
      bodyHtml: `
${h2("Как работает СБП в кассе")}
${p(
  "Вы выбираете сумму, получаете QR или подсказку банка, подтверждаете в приложении банка. Зачисление часто происходит быстро, что удобно для конверсии «zeus vs hades реальные деньги».",
  "Убедитесь, что номер телефона в банке совпадает с ожиданиями казино, если это требуется."
)}
${h2("Если платёж не прошёл")}
${ol([
  "Проверьте лимиты СБП в приложении.",
  "Попробуйте другой банк‑участник.",
  "Сохраните скрин ошибки для поддержки.",
])}
`,
      faq: [
        { q: "Мгновенно ли?", a: "Часто да, но бывают задержки." },
        { q: "Комиссия?", a: "Зависит от банка и казино." },
        { q: "Можно ли крупную сумму?", a: "Лимиты СБП могут потребовать разбить." },
        { q: "Нужен ли QR?", a: "Удобнее — но есть альтернативные потоки." },
        { q: "Можно ли с корпоративного счёта?", a: "Обычно нет для СБП физлиц." },
        { q: "Что при ошибке телефона?", a: "Сверьте привязку в банке." },
        { q: "Работает ли ночью?", a: "Зависит от банка — обычно да." },
        { q: "Можно ли возврат?", a: "Только через процедуры банка и казино." },
        { q: "Связь с лимитами игрока?", a: "Используйте ответственные инструменты казино." },
        { q: "Можно ли совместить с бонусом?", a: "Проверьте допустимость СБП в правилах акции." },
        { q: "Безопасность?", a: "Не делитесь QR со сторонними." },
        { q: "Альтернатива?", a: "Карта или крипто — см. соответствующие страницы." },
      ],
    },
    en: {
      metaTitle: "SBP instant deposits — Zeus vs Hades RU rail",
      metaDesc:
        "Russia’s Faster Payments System for Zeus vs Hades: QR flows, bank caps, night failures, bonus coupling.",
      keywords: ["sbp deposit zeus vs hades", "fast payment ru casino", "zeus vs hades real money"],
      h1: "SBP deposits — Zeus vs Hades",
      lead: "Speed king—still bank-governed.",
      bodyHtml: `
${h2("Cashier flow")}
${p(
  "QR/in-app approvals push funds quickly—great for conversion if banks cooperate.",
)}
${h2("Failure playbook")}
${ol([
  "Check SBP limits inside banking app.",
  "Retry another member bank.",
  "Screenshot errors for support.",
])}
`,
      faq: [
        { q: "Always instant?", a: "Often—not guaranteed." },
        { q: "Fees?", a: "Bank+brand rules." },
        { q: "Large tickets?", a: "Split when capped." },
        { q: "QR required?", a: "Preferred—not sole path." },
        { q: "Corporate accounts?", a: "Usually blocked." },
        { q: "Phone mismatch?", a: "Fix bank profile." },
        { q: "Night ops?", a: "Mostly yes." },
        { q: "Refunds?", a: "Formal dispute rails." },
        { q: "RG limits?", a: "Use casino tooling." },
        { q: "Bonus eligible?", a: "Read promo fine print." },
        { q: "QR safety?", a: "Never share publicly." },
        { q: "Fallbacks?", a: "Cards/crypto pages." },
      ],
    },
  },

  "yandex-pay": {
    ru: {
      metaTitle: "Яндекс Пэй и Zeus vs Hades — оплата через Yandex Pay",
      metaDesc:
        "Пополнение через Яндекс Пэй для Zeus vs Hades: карты внутри сервиса, лимиты, безопасность и доступность у оператора.",
      keywords: ["яндекс пэй zeus vs hades", "депозит онлайн", "zeus vs hades казино онлайн"],
      h1: "Яндекс Пэй — оплата для Zeus vs Hades",
      lead: "Удобный UX оплаты — при условии, что казино интегрировало метод.",
      bodyHtml: `
${h2("Как пользователи находят эту страницу")}
${p(
  "Запросы «яндекс пэй zeus vs hades» идут от людей, уже привыкших к экосистеме. Опишите честно: доступность зависит от конкретного бренда и региона.",
  "Перед оплатой проверьте, что вы на официальном домене казино, а не на фишинговой копии."
)}
${h2("Памятка безопасности")}
${ul([
  "Включите двухфакторку на Яндекс ID.",
  "Не сохраняйте сессию на общих ПК.",
  "Следите за SMS‑подтверждениями переводов.",
])}
`,
      faq: [
        { q: "Всегда ли доступен метод?", a: "Нет — смотрите кассу." },
        { q: "Нужен ли Яндекс ID?", a: "Обычно да." },
        { q: "Комиссии?", a: "Зависят от связки карта/баланс." },
        { q: "Можно ли привязать несколько карт?", a: "Да, удобно для разных лимитов." },
        { q: "Что при неверном списании?", a: "Чек + поддержка." },
        { q: "Работает ли на iOS?", a: "Если приложение/браузер поддерживает." },
        { q: "Можно ли бонусы?", a: "Смотрите правила — иногда электронные методы особые." },
        { q: "Возвраты?", a: "По процедуре банка и казино." },
        { q: "Мошенничество?", a: "Никогда не переходите по «вторым» ссылкам из чатов." },
        { q: "Лимиты?", a: "В настройках платежного профиля." },
        { q: "Можно ли разбить платеж?", a: "Зависит от лимитов — иногда лучше другой метод." },
        { q: "Альтернатива?", a: "СБП или карта напрямую." },
      ],
    },
    en: {
      metaTitle: "Yandex Pay — Zeus vs Hades ecosystem deposits",
      metaDesc:
        "Yandex Pay deposits for Zeus vs Hades: ecosystem UX, ID security, availability variance vs other RU rails.",
      keywords: ["yandex pay zeus vs hades", "ru wallet casino deposit", "zeus vs hades casino online"],
      h1: "Yandex Pay — Zeus vs Hades",
      lead: "Ecosystem convenience—still operator-dependent.",
      bodyHtml: `
${h2("Intent")}
${p(
  "RU users already trust Yandex IDs—pair that trust with HTTPS vigilance.",
)}
${h2("Security")}
${ul([
  "Lock Yandex 2FA.",
  "Avoid shared PCs.",
  "Watch SMS approvals.",
])}
`,
      faq: [
        { q: "Always available?", a: "Cashier-dependent." },
        { q: "Yandex ID needed?", a: "Typically yes." },
        { q: "Fees?", a: "Funding source dependent." },
        { q: "Multiple cards?", a: "Often yes." },
        { q: "Wrong charge?", a: "Receipt + ticket." },
        { q: "iOS OK?", a: "If flow supported." },
        { q: "Bonus quirks?", a: "Read promo exclusions." },
        { q: "Refunds?", a: "Formal rails." },
        { q: "Scams?", a: "Reject chat links." },
        { q: "Limits?", a: "Wallet settings." },
        { q: "Split payments?", a: "Maybe—another rail could beat friction." },
        { q: "Fallback?", a: "SBP/direct card." },
      ],
    },
  },

  neteller: {
    ru: {
      metaTitle: "Neteller — пополнение для Zeus vs Hades через кошелёк",
      metaDesc:
        "Депозит Neteller для игры в Zeus vs Hades: верификация, комиссии, связка с картой и вывод обратно.",
      keywords: ["neteller zeus vs hades", "skrill zeus vs hades", "депозит кошелёк"],
      h1: "Neteller и Zeus vs Hades",
      lead: "Глобальные кошельки популярны у арбитража международного трафика.",
      bodyHtml: `
${h2("Сценарий использования")}
${p(
  "Вы пополняете Neteller картой или банковским переводом, затем переводите на игровой счёт. Это может быть удобнее прямого эквайринга, если банк блокирует MCC.",
  "Учитывайте комиссии входа/выхода — они влияют на реальную стоимость бонуса."
)}
${h2("Сравнение со Skrill")}
${p(
  "Оба сервиса часто идут рядом; условия меняются — проверяйте актуальные тарифы и доступность у оператора. Страница Skrill у нас отдельная, чтобы не смешивать ключи."
)}
`,
      faq: [
        { q: "Нужна ли верификация?", a: "Для полного функционала — да." },
        { q: "Скорость?", a: "Обычно быстро после первичной настройки." },
        { q: "Можно ли VIP статус?", a: "Снижает комиссии — для активных пользователей." },
        { q: "Вывод на карту?", a: "Возможен по правилам сервиса." },
        { q: "Валюта счёта?", a: "Выбирайте близкую к игре, чтобы меньше терять на FX." },
        { q: "Можно ли P2P?", a: "Осторожно — риск мошенников." },
        { q: "Связь с Mastercard?", a: "Иногда выпускается карта Neteller." },
        { q: "Что при блокировке аккаунта?", a: "Документы + поддержка сервиса." },
        { q: "Можно ли несколько казино?", a: "Да, но следите за общим банкроллом." },
        { q: "Бонусы?", a: "Иногда исключаются — читайте оферту." },
        { q: "Безопасность входа?", a: "Аппаратный ключ/OTP обязательны." },
        { q: "Альтернатива?", a: "Skrill или крипто." },
      ],
    },
    en: {
      metaTitle: "Neteller deposits — Zeus vs Hades wallet rail",
      metaDesc:
        "Neteller funding for Zeus vs Hades: verification tiers, FX fees, MC synergy, Skrill differences.",
      keywords: ["neteller zeus vs hades", "skrill zeus vs hades", "e-wallet casino deposit"],
      h1: "Neteller — Zeus vs Hades",
      lead: "Wallet hopping beats stubborn issuer blocks—watch cumulative fees.",
      bodyHtml: `
${h2("Flow")}
${p(
  "Load wallet → push to casino balance → reverse similarly when cashing out.",
)}
${h2("Vs Skrill")}
${p(
  "Parallel keyword page keeps clusters distinct—compare fee schedules live.",
)}
`,
      faq: [
        { q: "Verification?", a: "Required for full limits." },
        { q: "Speed?", a: "Fast post-onboarding." },
        { q: "VIP?", a: "Fee discounts." },
        { q: "Card out?", a: "If service permits." },
        { q: "Wallet currency?", a: "Pick close to play currency." },
        { q: "P2P risk?", a: "Scam-prone—avoid casual trades." },
        { q: "MC synergy?", a: "Plastic/virtual cards exist regionally." },
        { q: "Account freezes?", a: "Docs + compliance." },
        { q: "Multi casinos?", a: "Yes—manage aggregate exposure." },
        { q: "Bonus exclusions?", a: "Common—read T&Cs." },
        { q: "Login safety?", a: "OTP/hardware tokens." },
        { q: "Fallback?", a: "Skrill/crypto rails." },
      ],
    },
  },

  skrill: {
    ru: {
      metaTitle: "Skrill — депозит для Zeus vs Hades и вывод",
      metaDesc:
        "Пополнение Skrill для Zeus vs Hades: тарифы, лимиты, верификация и отличия от Neteller.",
      keywords: ["skrill zeus vs hades", "neteller zeus vs hades", "депозит кошелёк"],
      h1: "Skrill и Zeus vs Hades",
      lead: "Ещё один глобальный кошелёк — сравните комиссии перед выбором.",
      bodyHtml: `
${h2("Когда выбирают Skrill")}
${p(
  "Если прямой платёж отклоняется, Skrill может стать мостом. Для SEO отделяем «skrill zeus vs hades» от Neteller, чтобы не плодить дубли на одной странице.",
  "Помните: каждый дополнительный хоп добавляет комиссию — пересчитайте выгодность бонуса."
)}
${h2("Практика")}
${ol([
  "Создайте счёт в нужной валюте.",
  "Пройдите KYC до крупных сумм.",
  "Проверьте правила вывода обратно на карту.",
])}
`,
      faq: [
        { q: "Чем отличается от Neteller?", a: "Тарифы/акции — уточняйте на сайте Paysafe." },
        { q: "Можно ли мгновенный депозит?", a: "Часто да после настройки." },
        { q: "Есть ли комиссия на бездействие?", a: "Иногда да — читайте договор." },
        { q: "Можно ли бизнес‑аккаунт?", a: "Отдельные правила." },
        { q: "Безопасность?", a: "Сильный пароль + 2FA." },
        { q: "Можно ли P2P?", a: "Риск мошенничества — избегайте." },
        { q: "Вывод на банк?", a: "Зависит от страны." },
        { q: "Влияние на бонусы?", a: "Иногда метод исключён." },
        { q: "Можно ли карту Skrill?", a: "В некоторых регионах да." },
        { q: "Что при блокировке?", a: "Документы и служба поддержки." },
        { q: "Мультивалюта?", a: "Поддерживается — следите за курсами." },
        { q: "Альтернатива?", a: "Neteller, crypto, карта." },
      ],
    },
    en: {
      metaTitle: "Skrill deposits — Zeus vs Hades wallet routing",
      metaDesc:
        "Skrill funding for Zeus vs Hades: Paysafe ecosystem notes, dormancy fees, bonus exclusions vs Neteller.",
      keywords: ["skrill zeus vs hades", "neteller zeus vs hades", "e-wallet casino deposit"],
      h1: "Skrill — Zeus vs Hades",
      lead: "Bridge rails—mind cumulative fees.",
      bodyHtml: `
${h2("Why Skrill gets its page")}
${p(
  "Separate keyword ownership from Neteller—same family, different promos.",
)}
${h2("Practice")}
${ol([
  "Choose wallet currency deliberately.",
  "Finish KYC before large loads.",
  "Map card-out paths early.",
])}
`,
      faq: [
        { q: "Vs Neteller?", a: "Promo/fee deltas—verify live." },
        { q: "Instant?", a: "Usually post-setup." },
        { q: "Dormancy fees?", a: "Possible—read T&Cs." },
        { q: "Biz accounts?", a: "Different rulebook." },
        { q: "Security?", a: "Strong passwords + 2FA." },
        { q: "P2P?", a: "Scam-prone." },
        { q: "Bank outs?", a: "Geo-dependent." },
        { q: "Bonus impact?", a: "Sometimes banned." },
        { q: "Skrill card?", a: "Regional availability." },
        { q: "Frozen account?", a: "Compliance docs." },
        { q: "Multi-currency?", a: "FX spreads apply." },
        { q: "Fallback?", a: "Neteller/crypto/card." },
      ],
    },
  },
};
