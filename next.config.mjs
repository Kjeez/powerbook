/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Old zip download URLs: redirect at the CDN so no function runs.
  async redirects() {
    return [{ source: "/api/download/:kind(photos|videos)", destination: "/", permanent: true }];
  },
};

export default nextConfig;
