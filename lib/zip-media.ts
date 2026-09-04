import archiver from "archiver";
import path from "path";
import { listMedia, mediaDir } from "./media-files";

export function zipMediaResponse(kind: "photos" | "videos", filename: string): Response {
  const files = listMedia(kind);
  const dir = mediaDir();

  const stream = new ReadableStream({
    start(controller) {
      const archive = archiver("zip", { zlib: { level: 1 } });
      archive.on("data", (chunk: Buffer) => controller.enqueue(new Uint8Array(chunk)));
      archive.on("end", () => controller.close());
      archive.on("error", (err) => controller.error(err));
      for (const file of files) {
        archive.file(path.join(dir, file), { name: file });
      }
      void archive.finalize();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}
