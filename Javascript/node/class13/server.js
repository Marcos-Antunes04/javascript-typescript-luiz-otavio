const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const {globalMiddleware, otherMiddleware} = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extend: true})); // permite pegar dados de uma rota post

app.use(express.static('./public'));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos próprios middlewares
app.use(globalMiddleware); // sempre que ouver uma requisição será chamado globalMiddleware;
app.use(otherMiddleware); // testando outro middleware criado em middleware.js
app.use(routes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
    console.log('Access http://localhost:3000');
});