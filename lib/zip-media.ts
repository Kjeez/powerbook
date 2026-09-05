import fs from "fs";
import path from "path";
import { zipSync } from "fflate";
import { listMedia } from "./media-files";

export function zipMediaResponse(kind: "photos" | "videos", filename: string): Response {
  const files: Record<string, Uint8Array> = {};
  for (const entry of listMedia(kind)) {
    const folder = path.basename(path.dirname(entry.abs));
    const zipName = files[entry.name] ? `${folder}/${entry.name}` : entry.name;
    files[zipName] = fs.readFileSync(entry.abs);
  }
  const zipped = zipSync(files, { level: 1 });
  return new Response(Buffer.from(zipped), {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}
