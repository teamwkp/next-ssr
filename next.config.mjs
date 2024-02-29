/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.insta360.com",
        port: "",
      },
    ],
  },
}

export default nextConfig
