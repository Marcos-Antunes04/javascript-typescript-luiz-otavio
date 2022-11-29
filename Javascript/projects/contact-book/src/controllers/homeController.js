// Renderização da página inicial
exports.initialPage = (req, res) => {
    // RENDERIZAÇÃO DA HOME
    res.render('index', {
        title: 'Title of page',
    });
    return;
};

exports.handlePost = (req, res)  => {
    res.send(req.body);
    return;
};