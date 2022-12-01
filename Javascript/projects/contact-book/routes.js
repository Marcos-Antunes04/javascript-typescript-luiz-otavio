const express = require('express');
const route = express.Router(); // ficará com todas as rotas da aplicação, por isso devemos exportar o "route" para o server
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

// Home routes
route.get('/', homeController.index);

// Login routes
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

module.exports = route;