exports.globalMiddleware = (req, res, next) => {
    res.locals.errors = req.flash('errors'); // variável local que pode ser utilizada em qualquer lugar da aplicação, inclusive no index.ejs. Nesse caso foram utilizadas 
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
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

exports.loginRequired = (req, res, next) => {
    if(!req.session.user) {
        req.flash('errors', 'You need to be logged.'); // caso o usuário não estiver logado, ele não poderá acessar a página
        req.session.save(() => res.redirect('/')); // como usuário não está logado, ele deve ser redirecionado para outra página
        return;
    }

    next();
}