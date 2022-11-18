const express = require('express');
const app = express();

app.use(express.urlencoded({ extend: true})); // permite pegar dados de uma rota post

app.get('/', (req, res) => {
    res.send(`
        <h1>Hello World!</h1>
        <form action="/" method="POST">
            Firstname:
            <input type="text" name="firstname">
            <button>Send</button>
        </form>
    `)
});

// REQ.PARAMS -> na url do navegador: http://localhost:3000/tests/toshio/25
// app.get('/tests/:firstname?/:age?', (req, res) => { // o sinal de "?" ao final do parâmetro torna o envio dele opcional. Caso não tenha ele e não houver o envio de nenhum parâmetro, a aplicação apontará um erro de execução.
//     console.log(req.params);
//     res.send(req.params);
// });

// REQ.QUERY -> na url do navegador: http://localhost:3000/tests/?firstname=Toshio&lastname=Yasunaka&age=25
app.get('/tests/', (req, res) => {
    console.log('query', req.query);
    res.send(req.query);
});


app.post('/', (req, res) => {
    console.log(req.body); // permite utilizar os dados enviados através do navegador pelo método post - verificar linha 4 para sua utilização
    res.send(`Hi, ${req.body.firstname}. Welcome!`) // esse "firstname" de req.body vem de name="firstname" do input do forms
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
    console.log('Access http://localhost:3000');
});