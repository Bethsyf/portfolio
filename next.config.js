/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', 'ejemplo.com'],
  },
};

module.exports = nextConfig;
