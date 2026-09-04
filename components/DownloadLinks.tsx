import { DownloadIcon } from "./icons";

export default function DownloadLinks({ variant }: { variant: "hero" | "page" }) {
  const cls = variant === "hero" ? "hd" : "pd-dl";
  return (
    <>
      <a href="/api/download/photos" className={cls}>
        <DownloadIcon /> Download all photos
      </a>
      <a href="/api/download/videos" className={cls}>
        <DownloadIcon /> Download all videos
      </a>
    </>
  );
}
