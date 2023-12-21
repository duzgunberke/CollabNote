/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "files.edgestore.dev"
    ]
  }
}
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: false,
})

module.exports = withPWA({
  reactStrictMode: false,
  swcMinify: false,
})
module.exports = nextConfig
