const express = require('express');
const route = express.Router(); // ficará com todas as rotas da aplicação, por isso devemos exportar o "route" para o server
const homeController = require('./src/controllers/homeController');
const contactsController = require('./src/controllers/contactsController');

// Home routes
route.get('/', homeController.initialPage);
route.post('/', homeController.handlePost);

// Contacts routes
route.get('/contacts', contactsController.initialPage);

module.exports = route;