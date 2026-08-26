"use client";

export default function HeroVideo() {
  return (
    <video
      src="/assets/demo-lifestyle.mp4"
      poster="/assets/product-stand.jpg"
      autoPlay
      muted
      loop
      playsInline
      controls
      onClick={(e) => {
        const video = e.currentTarget;
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if ((video as any).webkitEnterFullscreen) {
          (video as any).webkitEnterFullscreen();
        }
      }}
      style={{ cursor: "pointer" }}
    />
  );
}
