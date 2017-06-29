const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();

app.use(bodyParser.json());
require('./cron');

app.use('/', require('./api'));

app.listen(config.port, () => console.log(`API Start at Port ${config.port}`));

