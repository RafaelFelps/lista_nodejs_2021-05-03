// Require routes
const { Router } = require('express');
const routes = Router();

// Require controllers
const Clientes = require('../controllers/ClientesController');

// Create routes
routes.get('/api/clientes', Clientes.Get);
routes.get('/api/clientes/:id', Clientes.GetByPk);
routes.post('/api/clientes', Clientes.Create);
routes.delete('/api/clientes/:id', Clientes.Delete);
routes.put('/api/clientes/:id', Clientes.Update);


module.exports = routes;
