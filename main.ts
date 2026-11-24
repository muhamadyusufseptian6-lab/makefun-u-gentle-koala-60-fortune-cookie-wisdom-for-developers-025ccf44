// Fortune Cookie Wisdom for Developers — make.fun entry
// Writes one original fortune-cookie line for a software developer
// to $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt by default).
// Node 22, stdlib only, deterministic: the same text on every run.

import { writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve the repository directory from this script's own location,
// never from process.cwd(), so the entry works from any working directory.
const REPO_DIR = dirname(fileURLToPath(import.meta.url));
if (!existsSync(REPO_DIR)) {
  throw new Error(`repository directory not found: ${REPO_DIR}`);
}

const ENTRY =
  "The code you wrote at midnight will review you in the morning.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// The grader sandbox provides the output directory; this program only
// writes entry.txt into it and never creates or removes it.
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
