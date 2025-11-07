/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Browser requests /api/* (HTTPS same-origin), Vercel fetches your VPS (HTTP) server-side
      { source: '/api/:path*', destination: 'http://37.27.243.207:8000/:path*' },
    ];
  },
};
module.exports = nextConfig;

