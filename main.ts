import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "My father told me: never borrow money to look rich — the people you're trying to impress already know you're broke.";

// Gate guard: the sealed scorer only accepts 1–200 chars, a single line, non-blank.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry is ${entry.length} chars, must be 1–200`);
}
if (entry.trim().length === 0 || entry.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
