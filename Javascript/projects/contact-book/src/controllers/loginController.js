const { async } = require('regenerator-runtime');
const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    if(req.session.user) return res.render('login-logged');
    return res.render('login');
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

exports.login = async (req, res) => {
    try {
        const login = new Login(req.body); // nova instância de Login importada do LoginModel
        await login.login();
    
        if(login.errors.length > 0) {
            req.flash('errors', login.errors) // exibição de erros por meio das flash messages
            req.session.save(function() { // salvamento da sessão para poder redirecionar o usuário
                return res.redirect('/login/index'); // redirecionamento para a tela anterior(tela de login)
            })
            return;
        }
        
        req.flash('success', 'You entered the system.'); // mensagem de sucesso por meio das flash messages
        req.session.user = login.user;
        req.session.save(function() { // salvamento da sessão para poder redirecionar o usuário
            return res.redirect('/login/index'); // redirecionamento para a tela anterior(tela de login)
        });
        
    } catch(e) {
        console.log(e);
        return res.render('404');
    }
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
}