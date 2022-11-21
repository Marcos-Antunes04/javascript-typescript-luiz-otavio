exports.globalMiddleware = (req, res, next) => {
    
    if(req.body.client) {
        req.body.client = req.body.client.replace('Toshio', 'CHANGED HERE') // interceptou-se o valor enviado pelo formulário e o alterou
        console.log();
        console.log(`Vi que você postou ${req.body.client}`);
        console.log();
    }

    next();
};

exports.otherMiddleware = (req, res, next) => {
    console.log('Other middleware here.');
    next();
};