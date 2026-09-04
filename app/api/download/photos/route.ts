import { zipMediaResponse } from "@/lib/zip-media";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 300;

export function GET() {
  return zipMediaResponse("photos", "powerbook-photos.zip");
}
