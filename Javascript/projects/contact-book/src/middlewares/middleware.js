exports.globalMiddleware = (req, res, next) => {
    res.locals.errors = req.flash('errors'); // variável local que pode ser utilizada em qualquer lugar da aplicação, inclusive no index.ejs. Nesse caso foram utilizadas 
    res.locals.success = req.flash('success');
    next();
};

exports.checkCsrfError = (err, req, res, next) => { // caso tenha algum erro, então será renderizado a página 404
    if (err) {
        return res.render('404')
    }
    next();
}

exports.csrfMiddleware = (req, res, next) => { // enviará para todas as páginas um csrfToken, para que possibilite a criação de formulários em páginas
    res.locals.csrfToken = req.csrfToken();
    next();
}