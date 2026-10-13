// Fetches the live price feed, saves it as data/prices.json and data/prices.csv,
// keeps a dated snapshot in data/history/, and rebuilds the README table.
// Runs daily from .github/workflows/update.yml; no dependencies.
import { mkdir, readFile, writeFile } from "node:fs/promises";

const SOURCE = "https://zurelay.com";

const fetchText = async (path) => {
  const res = await fetch(`${SOURCE}${path}`);
  if (!res.ok) throw new Error(`${path} answered ${res.status}`);
  return res.text();
};

const json = JSON.parse(await fetchText("/prices.json"));
const csv = await fetchText("/prices.csv");
const day = json.updated_at.slice(0, 10);

// The snapshot leaves out updated_at so an unchanged day doesn't make a commit.
const { updated_at, ...stable } = json;
await mkdir("data/history", { recursive: true });
await writeFile("data/prices.json", `${JSON.stringify(stable, null, 2)}\n`);
await writeFile("data/prices.csv", csv);
await writeFile(`data/history/${day}.json`, `${JSON.stringify(stable, null, 2)}\n`);

// $1.40, $0.125, $0.0336: two decimals from $1, three significant digits below.
const money = (value) => {
  if (value === undefined || value === null) return "—";
  if (value >= 1) return "$" + value.toFixed(2);
  const text = String(Number(value.toPrecision(3)));
  return "$" + (text.split(".")[1]?.length === 1 ? Number(text).toFixed(2) : text);
};
const link = (model) => `[${model.name}](${model.url})`;

const chat = json.models
  .filter((model) => model.kind === "chat")
  .sort((a, b) => a.price.output_per_1m - b.price.output_per_1m);
const image = json.models.filter((model) => model.kind === "image");
const video = json.models.filter((model) => model.kind === "video");

const chatRows = chat.map(
  (m) =>
    `| ${link(m)} | ${m.lab} | ${money(m.reference_price.input_per_1m)} / ${money(m.reference_price.output_per_1m)} | ${money(m.price.input_per_1m)} / ${money(m.price.output_per_1m)} | ${m.saving_percent}% |`,
);
const imageRows = image.map(
  (m) =>
    `| ${link(m)} | ${m.lab} | ${money(m.reference_price.per_image)} | ${money(m.price.per_image)} | ${m.saving_percent}% |`,
);
const videoRows = video.map((m) => {
  const ref = m.reference_price.per_second_by_resolution ?? {};
  const [res, refPrice] = Object.entries(ref)[0] ?? [];
  return `| ${link(m)} | ${m.lab} | ${refPrice ? `${money(refPrice)}/s at ${res} (${m.compared_with})` : "—"} | from ${money(m.price.per_second_from)}/s | ${m.saving_percent ? `${m.saving_percent}%` : "—"} |`;
});

const template = await readFile("scripts/README.template.md", "utf8");
const readme = template
  .replace("{{updated}}", day)
  .replace("{{count}}", String(json.models.length))
  .replace("{{chat}}", chatRows.join("\n"))
  .replace("{{image}}", imageRows.join("\n"))
  .replace("{{video}}", videoRows.join("\n"));
await writeFile("README.md", readme);
console.log(`${json.models.length} models, ${day}`);
