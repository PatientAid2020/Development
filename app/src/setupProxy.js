const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  const target = process.env.PROXY_TARGET || 'http://localhost:5000'
  app.use(
    '/api',
    createProxyMiddleware({
      target,
      changeOrigin: true,
    })
  )
}
