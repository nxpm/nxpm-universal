export const configuration = () => ({
  prefix: 'api',
  environment: process.env.NODE_ENV,
  host: process.env.HOST,
  port: parseInt(process.env.PORT, 10),
  apiUrl: process.env.API_URL,
  api: {
    cookie: {
      name: process.env.API_COOKIE_NAME,
      options: {
        domain: process.env.API_COOKIE_DOMAIN,
        httpOnly: false,
      },
    },
    cors: {
      origin: [process.env.API_URL, process.env.WEB_URL],
    },
  },
})
