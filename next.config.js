/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://api.nasa.gov/:path*',
          },
        ]
      }
}

module.exports = nextConfig