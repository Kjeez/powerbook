"use client";

import { useState } from "react";
import { zipSync } from "fflate";
import { DownloadIcon } from "./icons";

export interface DownloadFile {
  name: string;
  url: string;
}

/**
 * Builds the "download all" zip in the visitor's browser from the static files
 * the CDN already serves, so no server function streams hundreds of MB per click.
 */
export default function DownloadAllButton({
  files,
  zipName,
  label,
  className,
}: {
  files: DownloadFile[];
  zipName: string;
  label: string;
  className: string;
}) {
  const [status, setStatus] = useState<string | null>(null);

  async function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    if (status || !files.length) return;

    try {
      const entries: Record<string, [Uint8Array, { level: 0 }]> = {};
      let done = 0;
      setStatus(`Preparing 0/${files.length}…`);

      for (const file of files) {
        const res = await fetch(file.url);
        if (!res.ok) throw new Error(`Could not fetch ${file.name}`);
        const data = new Uint8Array(await res.arrayBuffer());
        let name = file.name;
        for (let n = 2; entries[name]; n++) name = `${n}-${file.name}`;
        entries[name] = [data, { level: 0 }]; // photos/videos are already compressed
        done++;
        setStatus(`Preparing ${done}/${files.length}…`);
      }

      const zipped = zipSync(entries);
      const blobUrl = URL.createObjectURL(new Blob([zipped], { type: "application/zip" }));
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = zipName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(blobUrl), 60_000);
    } catch {
      window.alert("Download failed. Please check your connection and try again.");
    } finally {
      setStatus(null);
    }
  }

  return (
    <a href="#" role="button" className={className} onClick={handleClick} aria-busy={!!status}>
      <DownloadIcon /> {status ?? label}
    </a>
  );
}
