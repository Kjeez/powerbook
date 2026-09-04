import fs from "fs";
import path from "path";

export function mediaDir(): string {
  return path.join(process.cwd(), "public", "media");
}

const PHOTO = /\.(png|jpe?g|webp|gif)$/i;
const VIDEO = /\.mp4$/i;

export function listMedia(kind: "photos" | "videos"): string[] {
  const dir = mediaDir();
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => (kind === "photos" ? PHOTO.test(name) : VIDEO.test(name)))
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
}
