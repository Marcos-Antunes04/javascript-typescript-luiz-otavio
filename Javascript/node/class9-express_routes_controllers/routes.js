const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contactController = require('./controllers/contactController');
const aboutController = require('./controllers/aboutController');

// Home routes
route.get('/', homeController.initialPage);
route.post('/', homeController.treatPost);

// Contact routes
route.get('/contacts', contactController.initialPage);

//About routes
route.get('/about', aboutController.apresentation);

module.exports = route;