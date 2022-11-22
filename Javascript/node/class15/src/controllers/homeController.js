// Renderização da página inicial
exports.initialPage = (req, res) => {
    // ADICIONANDO INFORMAÇÕES NA SESSION DO USUÁRIO
    req.session.user = { firstname: 'Luiz', logged: true }; // quando configuramos a "session" em sessionOptions(server.js) ativamos esse recurso dentro da requisição, que possibilita o uso do objeto p/ adicionar/modificar informações na session

    // DADOS DA REQ.SESSION
    console.log('before', req.session.user);

    // CRIAÇÃO DAS FLASH MESSAGES
    req.flash('info', 'Hello World!') // 1º parâmetro é o tipo da flash message e o 2º parâmetro é o conteúdo da msg
    req.flash('error', 'An error here!')
    req.flash('success', 'Wow! Ok!')

    // RENDERIZAÇÃO DAS FLASH MESSAGES
    console.log(req.flash('error'), req.flash('success'), req.flash('info'));

    // RENDERIZAÇÃO DA HOME
    res.render('index');
    return;
};

exports.handlePost = (req, res)  => {
    res.send(req.body);
    return;
};