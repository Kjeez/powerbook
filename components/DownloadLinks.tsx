import { listMedia } from "@/lib/media-files";
import DownloadAllButton from "./DownloadAllButton";

export default function DownloadLinks({ variant }: { variant: "hero" | "page" }) {
  const cls = variant === "hero" ? "hd" : "pd-dl";
  // Read from public/ at build time (these pages are statically generated).
  const photos = listMedia("photos").map(({ name, url }) => ({ name, url }));
  const videos = listMedia("videos").map(({ name, url }) => ({ name, url }));
  return (
    <>
      <DownloadAllButton files={photos} zipName="powerbook-photos.zip" label="Download all photos" className={cls} />
      <DownloadAllButton files={videos} zipName="powerbook-videos.zip" label="Download all videos" className={cls} />
    </>
  );
}
