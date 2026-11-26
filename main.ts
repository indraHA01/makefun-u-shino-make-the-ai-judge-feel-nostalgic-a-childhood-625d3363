// make.fun entry: "Make the AI Judge Feel Nostalgic: A Childhood Memory"
// Writes one nostalgic childhood-memory sentence (<=280 chars) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "In my grandmother's kitchen, she always saved me the crust of the bread, saying it would make my hair curly, and I believed her for years — and part of me still does.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 280 characters,
// not only white space. Refuse to write anything that would fail it.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 280 || ENTRY.trim().length === 0) {
  throw new Error(`Entry invalid: ${chars.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${[...ENTRY].length} characters to /output/entry.txt`);
