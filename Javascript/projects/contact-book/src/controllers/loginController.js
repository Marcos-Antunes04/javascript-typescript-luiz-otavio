const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    res.render('login');
};

exports.register = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.register();
    
        if(login.errors.length > 0) {
            req.flash('errors', login.errors) // exibição de erros por meio das flash messages
            req.session.save(function() { // salvamento da sessão para poder redirecionar o usuário
                return res.redirect('/login/index'); // redirecionamento para a tela anterior(tela de login)
            })
            return;
        }
        
        req.flash('success', 'Your account has been created successfully.') // exibição de erros por meio das flash messages
        req.session.save(function() { // salvamento da sessão para poder redirecionar o usuário
            return res.redirect('/login/index'); // redirecionamento para a tela anterior(tela de login)
        })
        
    } catch(e) {
        console.log(e);
        return res.render('404');
    }
};