const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const { globalMiddleware, anotherMiddleware } = require('./src/middleware/middleware');

app.use(express.urlencoded({extended:true}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
// app.set('views', './src/views');
app.set('view engine', 'ejs');

//Our own middlewares
app.use(globalMiddleware);
app.use(anotherMiddleware);
app.use(routes);

app.listen(3000, () => {
    console.log('Access http://localhost:3000');
    console.log('Server running on port 3000.');
});