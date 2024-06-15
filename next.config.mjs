/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{hostname: 'down-br.img.susercontent.com'}]
  }
};

export default nextConfig;
