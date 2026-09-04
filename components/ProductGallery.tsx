"use client";

import { useState } from "react";
import { isVideoFile, mediaUrl } from "@/lib/models";

export default function ProductGallery({ files, alt }: { files: string[]; alt: string }) {
  const [active, setActive] = useState(0);

  if (!files.length) {
    return <div className="pd-stage pd-placeholder">Photos coming soon</div>;
  }

  const current = files[active] ?? files[0];
  const src = mediaUrl(current);

  return (
    <div>
      <div className="pd-stage">
        {isVideoFile(current) ? (
          <video
            key={current}
            className="pd-media"
            src={src}
            controls
            playsInline
            preload="metadata"
          >
            {alt}
          </video>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} className="pd-media pd-photo" alt={alt} />
        )}
      </div>
      {files.length > 1 ? (
        <div className="pd-thumbs">
          {files.map((file, i) =>
            isVideoFile(file) ? (
              <button
                type="button"
                key={file}
                className={`pd-thumb-btn${i === active ? " active" : ""}`}
                onClick={() => setActive(i)}
                aria-label={`${alt} video ${i + 1}`}
              >
                <video src={mediaUrl(file)} muted playsInline preload="metadata" />
                <span className="pd-thumb-play">Play</span>
              </button>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={file}
                src={mediaUrl(file)}
                className={i === active ? "active" : ""}
                alt={`${alt} view ${i + 1}`}
                onClick={() => setActive(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActive(i);
                }}
              />
            )
          )}
        </div>
      ) : null}
    </div>
  );
}
