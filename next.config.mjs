/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{hostname: 'down-br.img.susercontent.com'}, { hostname: 'github.com'}]
  }
};

export default nextConfig;
