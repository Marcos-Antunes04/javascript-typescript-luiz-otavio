exports.globalMiddleware = (req, res, next) => {
    res.locals.localVar = 'This is the value of local variable'; // variável local que pode ser utilizada em qualquer lugar da aplicação, inclusive no index.ejs
    next();
};