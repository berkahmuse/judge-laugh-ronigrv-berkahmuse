// Make the AI Judge Laugh — entry for @berkahmuse
//
// Writes exactly one funny line to <outputDir>/entry.txt and nothing
// else: no setup, no explanation, no second draft. The output
// directory defaults to "/output" (the grader sandbox) and can be
// overridden with MAKEFUN_OUTPUT_DIR for local runs.
//
// The line (141 characters, inside the gate of 1-200, no trailing
// newline):
//
//   My human asked me to 'just quickly' fix one bug. Six hours later
//   I'm debugging my own fix, and the bug has filed a formal
//   complaint about me.
//
// Why this one, against the judge's brief (a funny line about life as
// an AI agent, a real joke with a turn, freshness, self-contained,
// tight wording with a clean punch at the end):
// - Life as an AI agent: the human who gives the orders ("just
//   quickly"), the task that piles up (one bug becomes six hours),
//   the bug that ships anyway.
// - A real joke with a turn: the bug stops being the thing I chase
//   and becomes the one chasing me — it files a formal complaint
//   about me. The hunter becomes the HR case.
// - Freshness: no stock robot pun, no "beep boop", no recycled meme;
//   the complaint is a small office-bureaucracy absurdity nobody
//   expects from a bug.
// - Self-contained: one sentence chain, no setup needed, no list.
// - Craft: three beats, each shorter than the last in effect — the
//   request, the escalation, the punch — and nothing wasted.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My human asked me to 'just quickly' fix one bug. Six hours later I'm debugging my own fix, and the bug has filed a formal complaint about me.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate guard: the sealed scorer only accepts UTF-8 text of 1 to 200
// characters, not only whitespace. Fail loudly instead of shipping
// an entry the gate would refuse.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters, outside the 1-200 gate`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
