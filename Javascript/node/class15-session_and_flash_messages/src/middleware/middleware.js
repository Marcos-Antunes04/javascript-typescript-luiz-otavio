exports.globalMiddleware = (req, res, next) => {
    if(req.body.client) {
        console.log();
        req.body.client += ' - intercepted in middleware';
        req.body.client = req.body.client.replace('Toshio', 'Walter');

        console.log(`I saw that you posted ${req.body.client}`);
        console.log('Changed "Toshio" for "Walter"');
    } 
    next();
}

exports.anotherMiddleware = (req, res, next) => {
    console.log('Another middleware');
    next();
}