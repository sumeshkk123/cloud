/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  transpilePackages: ['sanitize-html', '@remixicon/react'],
  serverExternalPackages: ['@phosphor-icons/react'],
  async redirects() {
    return [
      { source: '/:lang/testimonial', destination: '/:lang/testimonials', permanent: true },
      { source: '/:lang/testimonial/:slug', destination: '/:lang/testimonials/:slug', permanent: true },
    ];
  },
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
    // Make cloudinary optional - don't bundle it, allow runtime require
    if (isServer) {
      config.externals = config.externals || [];
      if (typeof config.externals === 'function') {
        const originalExternals = config.externals;
        config.externals = [
          originalExternals,
          ({ request }, callback) => {
            if (request === 'cloudinary') {
              return callback(null, 'commonjs ' + request);
            }
            callback();
          },
        ];
      } else if (Array.isArray(config.externals)) {
        config.externals.push('cloudinary');
      }
    }
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
    // Memory optimizations for production builds
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization.splitChunks,
          cacheGroups: {
            ...config.optimization.splitChunks?.cacheGroups,
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              priority: -10,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
