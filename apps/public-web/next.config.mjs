/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  experimental: {
    externalDir: true
  },
  compiler: {
    styledComponents: false
  }
};

export default nextConfig;
