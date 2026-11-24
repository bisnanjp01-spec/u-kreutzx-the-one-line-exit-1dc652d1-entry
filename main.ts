// The One-Line Exit — make.fun bounty u-kreutzx-the-one-line-exit-1dc652d1
//
// Writes exactly one funny resignation letter, one line long, to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Node 22, standard library only. Fully deterministic: the same line,
// byte for byte, on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The letter. One line, one joke: the job promised a "fast-paced
// environment" and delivered a hamster wheel fuelled by the writer's
// weekends. Specific voice (an office worker who finally read the job
// ad twice), surprise turn (pace -> hamster wheel), quotable close.
// Revised wording: "run on" keeps the image while holding the line
// inside the 140-character gate (139 characters, no trailing newline).
const LETTER =
  "Dear team, I quit: the job description said 'fast-paced environment', but nobody mentioned the pace was a hamster wheel run on my weekends.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Guard the gate before writing: 1-140 characters, a single line,
// not only whitespace.
if (LETTER.length < 1 || LETTER.length > 140) {
  throw new Error(`letter is ${LETTER.length} characters, gate needs 1-140`);
}
if (LETTER.includes("\n") || LETTER.includes("\r")) {
  throw new Error("letter must be exactly one line");
}
if (LETTER.trim().length === 0) {
  throw new Error("letter must not be only whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
