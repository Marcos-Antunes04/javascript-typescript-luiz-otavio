const HomeModel = require('../models/HomeModel');

// Criação de dados no banco de dados
HomeModel.create({ // retorna uma promessa
    title: 'A title of test',
    description: 'A description test.'
})
    .then(data => console.log(data))
    .catch(e => console.log(e));

// Renderização da página inicial
exports.initialPage = (req, res) => {
    res.render('index');
};

exports.handlePost = (req, res)  => {
    res.send(req.body);
};