const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController');
const aboutController = require('./src/controllers/aboutController');

function myMiddleware(req, res, next) {
    req.session = { name: 'Toshio', lastname: 'Yasunaka'};
    console.log();
    console.log('Pass in the middleware');
    console.log();
    next();
}

// Home routes
route.get('/', homeController.initialPage); // escolhe qual model e qual view será utilizado na página
route.post('/', homeController.treatPost);

// Contact routes
route.get('/contacts', contactController.initialPage);

//About routes
route.get('/about', aboutController.apresentation);

module.exports = route;