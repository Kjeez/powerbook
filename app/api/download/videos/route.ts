// Old server-side zip endpoint. The zip is now built in the browser from static
// files (see components/DownloadAllButton.tsx); old links are sent to the home page.
export function GET(req: Request) {
  return Response.redirect(new URL("/", req.url), 308);
}
