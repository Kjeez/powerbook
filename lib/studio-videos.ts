/** Extra studio clips in public/new videos — also packed into Download all videos. */
export const NEW_STUDIO_VIDEOS = [
  "WhatsApp Video 2026-09-04 at 20.20.45.mp4",
  "WhatsApp Video 2026-09-04 at 20.21.00.mp4",
  "WhatsApp Video 2026-09-04 at 20.21.37.mp4",
  "WhatsApp Video 2026-09-04 at 20.21.52.mp4",
] as const;

export function newStudioVideoUrl(name: string): string {
  return "/new%20videos/" + encodeURIComponent(name);
}
