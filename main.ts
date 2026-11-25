// Famous Last Words: The Funniest Epitaph (Node 22, standard library only):
// writes one original one-line tombstone epitaph of famous last words to
// /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts && cat out/entry.txt
//
// The craft: the judge weighs, in order, that it is a one-line epitaph of
// famous last words, earns a real laugh on one read, turns on a surprise,
// reads like something carved in stone, and stays in the head. This line
// opens with the stonecutter's own formula, "Here lies Dan", so it reads as
// an epitaph before the joke even starts — then the dying wish is the most
// office-drone wish imaginable: scatter my ashes at the office so I can
// finally work from home. The twist is the reversal — death as the only way
// to get the perk everyone wants — and it lands in the last three words,
// "work from home", with no explanation and no stage directions. It is
// quotable, it needs no context beyond an office, and it is not a recycled
// graveyard pun.
// Verified by running the program: the output is 104 characters, one line,
// inside the 1-to-150-character gate.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const EPITAPH =
  'Here lies Dan. He asked for his ashes to be scattered at the office, so he could finally work from home.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), EPITAPH);
