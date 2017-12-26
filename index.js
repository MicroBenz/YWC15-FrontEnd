const express = require('express');
const next = require('next');
const httpProxy = require('http-proxy');
const LRUCache = require('lru-cache');
const config = require('./config');

const dev = !config.isProduction;
const app = next({ dev });
const handle = app.getRequestHandler();

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60
});

function renderAndCache(req, res, pagePath, queryParams) {
  if (dev) {
    return app.render(req, res, pagePath, queryParams);
  }
  const key = req.url;
  if (ssrCache.has(key)) {
    console.log(`CACHE HIT: ${key}`);
    res.send(ssrCache.get(key));
    return; // eslint-disable-line
  }

  return app.renderToHTML(req, res, pagePath, queryParams)
    .then((html) => {
      console.log(`CACHE MISS: ${key}`);
      ssrCache.set(key, html);
      res.send(html);
    })
    .catch(err => app.renderError(err, req, res, pagePath, queryParams));
}

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

  server.get('/', (req, res) => renderAndCache(req, res, '/landing'));
  server.get('/score', (req, res) => renderAndCache(req, res, '/score'));
  // server.get('/media', (req, res) => renderAndCache(req, res, '/media'));
  // server.get('/register', (req, res) => res.redirect('/register/step1'));
  // server.get('/register/step1', (req, res) => app.render(req, res, '/registration', { step: 1 }));
  // server.get('/register/step2', (req, res) => app.render(req, res, '/registration', { step: 2 }));
  // server.get('/register/step3', (req, res) => app.render(req, res, '/registration', { step: 3 }));
  // server.get('/register/step4', (req, res) => app.render(req, res, '/registration', { step: 4 }));
  // server.get('/register/verify', (req, res) => app.render(req, res, '/registration', { step: 5 }));
  // server.get('/register/completed', (req, res) => app.render(req, res, '/registration/completed'));
  server.get('/annoucement', (req, res) => renderAndCache(req, res, '/finalist'));
  server.get('/semi-final', (req, res) => renderAndCache(req, res, '/announce'));
  server.get('/queue', (req, res) => renderAndCache(req, res, '/queue'));

  server.get('*', (req, res) => handle(req, res));
  server.listen(config.port, () => console.log(`YWC15 Registration Front-End is started at port ${config.port}`));
});
