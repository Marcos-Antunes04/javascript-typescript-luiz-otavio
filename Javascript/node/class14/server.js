require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true }) // process.env.CONNECTIONSTRING vem do arquivo .env
    .then(() => {
        console.log('Contectei à base de dados');
        app.emit('ready');
    })
    .catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');
const {globalMiddleware} = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extend: true})); // permite pegar dados de uma rota post

app.use(express.static('./public'));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos próprios middlewares
app.use(globalMiddleware); // sempre que ouver uma requisição será chamado globalMiddleware;
app.use(routes);

app.on('ready', () => {
    app.listen(3000, () => { // a conexão só ocorrerá quando for emitido um sinal de 'pronto', vide linha 7. Isso é eficaz para que evite de um cliente acessar o site sem que haja a conexão com o banco de dados antes
        console.log('Server running on port 3000');
        console.log('Access http://localhost:3000');
    });
});
