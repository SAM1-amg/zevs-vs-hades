/** Безопасная сборка HTML-блоков контента (авторский текст, без пользовательского ввода) */
export function h2(t) {
  return `<h2>${t}</h2>`;
}

export function h3(t) {
  return `<h3>${t}</h3>`;
}

export function p(...lines) {
  return lines.map((line) => `<p>${line}</p>`).join("");
}

export function callout(text) {
  return `<div class="callout">${text}</div>`;
}

export function tableRtp(rows) {
  const head = `<thead><tr><th>Символ / параметр</th><th>Комментарий</th></tr></thead>`;
  const body = `<tbody>${rows.map(([a, b]) => `<tr><td>${a}</td><td>${b}</td></tr>`).join("")}</tbody>`;
  return `<div class="table-wrap"><table class="data">${head}${body}</table></div>`;
}

export function tableRtpEn(rows) {
  const head = `<thead><tr><th>Parameter</th><th>Notes</th></tr></thead>`;
  const body = `<tbody>${rows.map(([a, b]) => `<tr><td>${a}</td><td>${b}</td></tr>`).join("")}</tbody>`;
  return `<div class="table-wrap"><table class="data">${head}${body}</table></div>`;
}

export function tablePay(rows) {
  const head = `<thead><tr><th>Метод</th><th>Скорость</th><th>Комиссии</th></tr></thead>`;
  const body = `<tbody>${rows.map(([a, b, c]) => `<tr><td>${a}</td><td>${b}</td><td>${c}</td></tr>`).join("")}</tbody>`;
  return `<div class="table-wrap"><table class="data">${head}${body}</table></div>`;
}

export function tablePayEn(rows) {
  const head = `<thead><tr><th>Method</th><th>Speed</th><th>Fees</th></tr></thead>`;
  const body = `<tbody>${rows.map(([a, b, c]) => `<tr><td>${a}</td><td>${b}</td><td>${c}</td></tr>`).join("")}</tbody>`;
  return `<div class="table-wrap"><table class="data">${head}${body}</table></div>`;
}

export function ol(items) {
  return `<ol>${items.map((i) => `<li>${i}</li>`).join("")}</ol>`;
}

export function ul(items) {
  return `<ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
}
