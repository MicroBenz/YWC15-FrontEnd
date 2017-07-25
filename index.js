const express = require('express');
const next = require('next');
const httpProxy = require('http-proxy');
const config = require('./config');

const dev = !config.isProduction;
const app = next({ dev });
const handle = app.getRequestHandler();
const proxy = httpProxy.createProxyServer({
  target: config.apiPath,
  secure: false,
});

app.prepare().then(() => {
  const server = express();

  server.use('/api', (req, res) => {
    proxy.web(req, res, {
      target: config.apiPath,
      prependPath: false,
      changeOrigin: true,
    });
  });

  server.get('/', (req, res) => app.render(req, res, '/landing'));
  server.get('/register', (req, res) => app.render(req, res, '/registration'));

  server.get('*', (req, res) => handle(req, res));
  server.listen(3000, () => console.log('YWC15 Registration Front-End is started'));
});
