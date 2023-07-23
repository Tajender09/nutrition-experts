/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["react-icons"],
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
