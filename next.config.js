/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true, // Optional: Disable image optimization for static export
    },
  };
  
  module.exports = nextConfig;
  
