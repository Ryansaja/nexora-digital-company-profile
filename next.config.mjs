/** @type {import('next').NextConfig} */
const nextConfig={images:{remotePatterns:[{protocol:'https',hostname:'images.unsplash.com'},{protocol:'https',hostname:'i.pravatar.cc'}],formats:['image/avif','image/webp']},experimental:{optimizePackageImports:['lucide-react','framer-motion']}};export default nextConfig;
