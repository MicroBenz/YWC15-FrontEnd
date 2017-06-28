// Define Global
global.__DEV__ =
  process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'staging';

const express = require('express');
const next = require('next');

const dev = __DEV__;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/', (req, res) => app.render(req, res, '/landing'));

  server.get('*', (req, res) => handle(req, res));
  server.listen(3000);
});
