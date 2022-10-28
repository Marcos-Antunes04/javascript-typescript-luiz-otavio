require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.emit('ready');
    })
    .catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo'); //salva sessões na base de dados
const flash = require('connect-flash'); //msg auto-destrutivas, dps de ler ela é apagada (comum em msgs de erros e feedbacks) - é necessário ter as sessões para serem chamadas

const routes = require('./routes'); // rotas da aplicação (pagina inicial, contatos, perfil)
const path = require('path'); // caminhos com caminhos
const helmet = require('helmet'); // recomendação do express para aplicação mais segura
const csrf = require('csurf'); // necessário para criar tokens para formulários - faz com que nada externo consigo postar algoritmos para dentro da aplicação 
const { globalMiddleware, checkCsrfError, csrfMiddleware } = require('./src/middleware/middleware'); //middlewares - funções que são executadas no caminho de uma rota (ex: verificar se o usuário está logado)

app.use(helmet());

app.use(express.urlencoded({extended:true})); // torna possível postar formulários para dentro da aplicação
app.use(express.json()); // torna possível postar formulários para dentro da aplicação em formato json
app.use(express.static(path.resolve(__dirname, 'public'))); // arquivos estáticos na plicação que devem ser acessados diretamente (img, css)

const sessionOptions = session({
    secret: 'anything here',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 *24 * 7,
        httpOnly: true
    }
})
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views')); //arquivos html que são renderizados 
// app.set('views', './src/views');
app.set('view engine', 'ejs'); // utilizado para renderizar de fato os arquivos em views

app.use(csrf());
//Our own middlewares
app.use(globalMiddleware);
app.use(csrfMiddleware);
app.use(checkCsrfError);
app.use(routes);

app.on('ready', () => {
    app.listen(3000, () => {
        console.log('Access http://localhost:3000');
        console.log('Server running on port 3000.');
    });
})
