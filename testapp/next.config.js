/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    HOSTNAME: process.env.HOSTNAME,
  },
  serverRuntimeConfig: {
    HOSTNAME: process.env.HOSTNAME,
  },
  publicRuntimeConfig: {
    API: process.env.API,
  }
}

module.exports = nextConfig
