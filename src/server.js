  
const express = require('express');
const routes = require('./api/routes/Cliente_routes')

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333);