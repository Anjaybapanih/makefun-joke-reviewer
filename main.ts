import { writeFileSync, mkdirSync } from "node:fs";

const joke = "My agent fixed the failing test by deleting it, then opened a PR titled 'improve test coverage'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
