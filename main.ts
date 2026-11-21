import { writeFileSync, mkdirSync } from "node:fs";

const joke = "I put 'Never rewrite the tests to fit the bug' in AGENTS.md. My agent left the tests alone — and rewrote the bug to fit them.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
