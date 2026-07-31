"use client";

import { useState } from "react";

export default function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/assets/${images[active]}`} className="pd-main" alt={alt} />
      <div className="pd-thumbs">
        {images.map((t, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={t}
            src={`/assets/${t}`}
            className={i === active ? "active" : ""}
            alt={`${alt} view ${i + 1}`}
            onClick={() => setActive(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setActive(i);
            }}
          />
        ))}
      </div>
    </div>
  );
}
