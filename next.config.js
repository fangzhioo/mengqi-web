/** @type {import('next').NextConfig} */
module.exports = {
  // https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files
  output: 'standalone',
  // i18n: {
  //   locales: ['en-US', 'zh-CN'],
  //   defaultLocale: 'en-US',
  // },
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,

  // Uncoment to add domain whitelist
  images: {
    domains: ['img.paulzzh.com', '8.142.142.4'],
  },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};
