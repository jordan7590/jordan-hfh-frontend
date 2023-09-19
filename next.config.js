const nextConfig = {
  env: {
    API_URL: "http://34.238.162.105:4000/graphql",
  },
  reactStrictMode: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
        },
      },
    });

    return config;
  },
};
module.exports = nextConfig;
const withImages = require('next-images');

module.exports = withImages({
  images: {
    disableStaticImages: true,
  },
});