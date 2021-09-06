const { NODE_ENV, APP_NAME, HOST, HOTPEPPER_API_KEY } = process.env;

const nextConfig = {
  publicRuntimeConfig: {
    env: NODE_ENV,
    APP_NAME,
    HOST,
  },
  serverRuntimeConfig: {
    HOTPEPPER_API_KEY,
  },
};

module.exports = nextConfig;
