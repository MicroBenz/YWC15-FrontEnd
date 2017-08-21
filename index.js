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
  server.get('/coming-soon', (req, res) => app.render(req, res, '/coming-soon'));
  server.get('/register/step1', (req, res) => app.render(req, res, '/registration', { step: 1 }));
  server.get('/register/step2', (req, res) => app.render(req, res, '/registration', { step: 2 }));
  server.get('/register/step3', (req, res) => app.render(req, res, '/registration', { step: 3 }));
  server.get('/register/step4', (req, res) => app.render(req, res, '/registration', { step: 4 }));

  server.get('*', (req, res) => handle(req, res));
  server.listen(config.port, () => console.log(`YWC15 Registration Front-End is started at port ${config.port}`));
});
