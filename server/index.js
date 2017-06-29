const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use('/', require('./api'));

app.listen(3001, () => console.log('API Start at Port 3001'));
