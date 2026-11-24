import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// One short rant, a few sentences at most, about a small everyday annoyance.
const entry =
  "The self-checkout screamed 'unexpected item in the bagging area' at a carton of milk I had already scanned twice. I am not stealing. I am buying milk, slowly, in front of a camera, while a robot calls me a criminal in a voice meant for toddlers.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote ${entry.length} characters to ${join(outDir, "entry.txt")}`);
