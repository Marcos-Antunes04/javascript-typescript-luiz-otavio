// Renderização da página inicial
exports.initialPage = (req, res) => {
    // RENDERIZAÇÃO DA HOME
    res.render('index', {
        title: 'Title of page',
        subtitle: '<span style="color:red"> Subtitle for test.<span>',
        numbers: [0, 1, 2, 3, 4, 5],
    });
    return;
};

exports.handlePost = (req, res)  => {
    res.send(req.body);
    return;
};