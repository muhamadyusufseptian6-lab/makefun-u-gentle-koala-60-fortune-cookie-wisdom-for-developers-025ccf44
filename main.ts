// Fortune Cookie Wisdom for Developers
// Writes one fortune-cookie line for a developer to entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The fortune itself: the code you wrote at midnight will be the one
// reviewing you in the morning.
const FORTUNE =
  "The code you wrote at midnight will review you in the morning.";

// Resolve the repo directory from this script's location, not from the
// working directory, because the grader runs `node /bot/main.ts` from
// somewhere else entirely.
const repoDir = dirname(fileURLToPath(import.meta.url));

// Input and output directories come from the environment, with the
// standard /input and /output fallbacks.
const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// This entry reads no input files, but the directories are resolved here
// so the layout stays obvious.
void inputDir;
void repoDir;

// Create the output directory only when it is missing; never delete it
// or recreate it from scratch.
mkdirSync(outputDir, { recursive: true });

// Write the fortune exactly as-is, and nothing else: no extra files,
// no dotfiles in the output.
writeFileSync(join(outputDir, "entry.txt"), FORTUNE, "utf8");
