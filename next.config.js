const { NODE_ENV, APP_NAME, HOTPEPPER_API_KEY , VERCEL_URL} = process.env;

const nextConfig = {
  publicRuntimeConfig: {
    env: NODE_ENV,
    APP_NAME,
    VERCEL_URL,
  },
  serverRuntimeConfig: {
    HOTPEPPER_API_KEY,
  },
};

module.exports = nextConfig;
