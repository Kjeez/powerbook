import fs from "fs";
import path from "path";

const PHOTO = /\.(png|jpe?g|webp|gif)$/i;
const VIDEO = /\.mp4$/i;

export interface MediaEntry {
  name: string;
  abs: string;
  url: string;
}

function publicDir(...parts: string[]): string {
  return path.join(process.cwd(), "public", ...parts);
}

function scanDir(rel: string, test: RegExp): MediaEntry[] {
  const dir = publicDir(rel);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => test.test(name))
    .map((name) => ({
      name,
      abs: path.join(dir, name),
      url: "/" + rel.split("/").map(encodeURIComponent).join("/") + "/" + encodeURIComponent(name),
    }));
}

export function listMedia(kind: "photos" | "videos"): MediaEntry[] {
  if (kind === "photos") {
    return scanDir("media", PHOTO).sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
  }
  const fromMedia = scanDir("media", VIDEO);
  const fromNew = scanDir("new videos", VIDEO);
  return [...fromMedia, ...fromNew].sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
}
