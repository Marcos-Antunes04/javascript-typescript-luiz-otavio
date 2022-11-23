exports.globalMiddleware = (req, res, next) => {
    res.locals.localVar = 'This is the value of local variable'; // variável local que pode ser utilizada em qualquer lugar da aplicação, inclusive no index.ejs
    next();
};

exports.checkCsrfError = (err, req, res, next) => { // caso tenha algum erro, então será renderizado a página 404
    if (err && err.code === 'EBADCSRFTOKEN') {
        return res.render('404')
    }
}

exports.csrfMiddleware = (req, res, next) => { // enviará para todas as páginas um csrfToken, para que possibilite a criação de formulários em páginas
    res.locals.csrfToken = req.csrfToken();
    next();
}