/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: false,  // Disable turbopack
  },
  webpack(config) {
    // Find the existing rule for handling .svg files
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    // Modify it to exclude SVG files
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    // Add a new rule for @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false, // Keep the viewBox for proper scaling
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
