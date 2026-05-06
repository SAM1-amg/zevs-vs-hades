const slots = [
  "Gates-of-Olympus",
  "Sweet-Bonanza",
  "Starlight-Princess",
  "The-Dog-House",
  "Fruit-Party",
  "Big-Bass-Bonanza",
];
for (const s of slots) {
  const url = `https://slotcatalog.com/en/slots/${s}`;
  try {
    const t = await (await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } })).text();
    const all = [
      ...t.matchAll(
        /https:\/\/slotcatalog\.com\/userfiles\/image\/games\/Pragmatic-Play\/\d+\/[^"'\\s<>]+\.(?:jpg|jpeg|png|webp)/gi
      ),
    ].map((m) => m[0]);
    const uniq = [...new Set(all)];
    console.log("\n" + s);
    console.log(uniq.slice(0, 4).join("\n"));
  } catch (e) {
    console.log(s, e.message);
  }
}
