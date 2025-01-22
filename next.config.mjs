/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "urban-api.barrzen.com",
          pathname: "/**",
        },
      ],
    },
  };

export default nextConfig;
