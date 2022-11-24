require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose'); // modela a base de dados e garante que os dados estarão salvos da forma que queremos - criação de schema
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true }) // process.env.CONNECTIONSTRING vem do arquivo .env
    .then(() => { // retorna uma promise, por isso é necessário o .then()
        console.log('Contectei à base de dados');
        app.emit('ready'); // emite uma mensagem que pode ser escutada e dar início à aplicação (ver linha 49)
    })
    .catch(e => console.log(e));

const session = require('express-session'); // session p/ salvar os dados do usuário e indentificá-lo futuramente
const MongoStore = require('connect-mongo'); // faz a conexão com a session p/ salvar os dados no banco de dados
const flash = require('connect-flash'); // flash messages (mensagens autodestrutivas) para avisos, erros, etc. É necessário ter uma sessão antes de criar flash messages, pois são salvas na sessão
const routes = require('./routes');
const {globalMiddleware, checkCsrfError, csrfMiddleware} = require('./src/middlewares/middleware'); // importação dos middlewares
const helmet = require('helmet');
const csrf = require('csurf'); // criação de tokens de formulário - impede com que os formulários não sejam invadidos por scripts maliciosos, já que os formulários só serão acessados por usuários com token

app.use(helmet());

app.use(express.urlencoded({ extend: true})); // permite pegar dados de uma rota post
app.use(express.json());
app.use(express.static('./public')); // arquivos estáticos que podem ser acessados diretamente (imagens, css, javascript, etc.)

// SESSION CONFIG
const sessionOptions = session({  // configurações de sessão
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
app.set('views', path.resolve(__dirname, 'src', 'views')); // arquivos que são renderizados na tela (geralmente html files)
app.set('view engine', 'ejs'); // escolha do view engine, no caso, arquivos ejs

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
