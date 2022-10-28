const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

// Home routes
route.get('/', homeController.index); // escolhe qual model e qual view será utilizado na página

// Login routes
route.get('/login/index', loginController.index);

module.exports = route;