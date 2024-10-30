import type { NextConfig } from 'next'

const clientId = process.env.CLIENT_ID_SPOTIFY
const clientSecret = process.env.CLIENT_SECRET_SPOTIFY

const nextConfig: NextConfig = {
  env: {
    CLIENT_ID_SPOTIFY: clientId,
    CLIENT_SECRET_SPOTIFY: clientSecret,
  },
}

export default nextConfig
