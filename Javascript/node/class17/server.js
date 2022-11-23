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

const session = require('express-session'); // session p/ salvar os dados do usuário
const MongoStore = require('connect-mongo'); // faz a conexão com a session p/ salvar os dados
const flash = require('connect-flash'); // flash messages para avisos
const routes = require('./routes');
const {globalMiddleware, checkCsrfError, csrfMiddleware} = require('./src/middlewares/middleware'); // importação dos middlewares
const helmet = require('helmet');
const csrf = require('csurf');

app.use(express.urlencoded({ extend: true})); // permite pegar dados de uma rota post
app.use(express.static('./public'));
app.use(helmet());

// SESSION CONFIG
const sessionOptions = session({ 
    secret: 'aehu10jf084j3f22jad', 
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }), // onde o secret será salvo
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 *24 * 7, // duração do cookie em milésimos de segundos (nesse caso, 1 semana)
        httpOnly: true,
    }
});
app.use(sessionOptions);
app.use(flash());

const path = require('path');
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());
// Nossos próprios middlewares
app.use(globalMiddleware); // sempre que ouver uma requisição será chamado globalMiddleware;
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('ready', () => {
    app.listen(3000, () => { // a conexão só ocorrerá quando for emitido um sinal de 'pronto', vide linha 7. Isso é eficaz para que evite de um cliente acessar o site sem que haja a conexão com o banco de dados antes
        console.log('Server running on port 3000');
        console.log('Access http://localhost:3000');
    });
});
