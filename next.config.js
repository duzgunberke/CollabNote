/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const nextConfig = {
  images: {
    domains: [
      "files.edgestore.dev"
    ]
  }
}

module.exports = nextConfig
