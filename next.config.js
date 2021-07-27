const { NODE_ENV, APP_NAME } = process.env;

const nextConfig = {
  publicRuntimeConfig: {
    env: NODE_ENV,
    APP_NAME,
  },
};

module.exports = nextConfig;
