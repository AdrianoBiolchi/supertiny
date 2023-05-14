const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    'https://api.tiny.com.br/api2',
    createProxyMiddleware({
      target: 'https://api.tiny.com.br/api2', // URL da API de terceiros
      changeOrigin: true,
    })
  );
};
