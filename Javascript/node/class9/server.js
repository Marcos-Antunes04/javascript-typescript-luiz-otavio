const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({ extend: true})); // permite pegar dados de uma rota post
app.use(routes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
    console.log('Access http://localhost:3000');
});