/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  // Enable Turbo mode for faster development
  experimental: {
    turbo: {
      resolveAlias: {
        // Add any alias optimizations here if needed
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.cloudmlmsoftware.com"
      },{
        protocol: "https",
        hostname: "cloudmlmsoftware.com"
      },{
        protocol: "https",
        hostname: "bpract.com"
      },{
        protocol: "https",
        hostname: "images.unsplash.com"
      },{
        protocol: "https",
        hostname: "businessmlmsoftware.com"
      },
      {
        protocol: "http",
        hostname: "localhost"
      },
      {
        protocol: "https",
        hostname: "localhost"
      }
    ]
  },
  webpack: (config, { isServer, dev }) => {
    // Fix for missing vendor chunks in development
    if (dev && isServer) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
      };
      // Ensure jose and other NextAuth dependencies are properly bundled
      config.resolve.alias = {
        ...config.resolve.alias,
      };
    }
    // Optimize file watching for Docker
    if (dev) {
      config.watchOptions = {
        poll: 1000, // Check for changes every second
        aggregateTimeout: 300, // Delay before rebuilding
        ignored: ['**/node_modules', '**/.git', '**/.next'],
      };
    }
    return config;
  },
};

export default nextConfig;
