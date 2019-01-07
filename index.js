const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./config/router');
const { port } = require('./config/environment');

app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.json());

app.use('/api', router);
app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(port, () => console.log(`Up and running on port ${port}`));

module.exports = app;
