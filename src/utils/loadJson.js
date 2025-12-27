import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Always resolve relative to /src
const SRC_DIR = path.join(__dirname, "..");

export const loadJson = (relativePath) => {
  const filePath = path.join(SRC_DIR, relativePath);
  const rawData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(rawData);
};
