/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
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
  runtimeCaching
})

module.exports = withPWA({
  reactStrictMode: false,
  swcMinify: false,
})
module.exports = nextConfig
