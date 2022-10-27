const HomeModel = require('../models/HomeModel.js');

HomeModel.create({
    title: 'Test title',
    description: 'A description test'
})
    .then(data => console.log(data))
    .catch(e => console.log(e));

exports.initialPage = (req, res) => {
    res.render('index');
    return;
};

exports.treatPost = (req, res) => {
    res.send(req.body);
    return;
}