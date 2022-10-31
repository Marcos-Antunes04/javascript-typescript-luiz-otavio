const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    if(req.session.user) return res.render('login-logged');
    return res.render('login');
}

exports.register = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.register();
    
        if(login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(() => {
                return res.redirect('/login/index');
            });
            return;
        }

        req.flash('success', 'Account created successfully');
        req.session.save(() => {
            return res.redirect('/login/index')
        });
    } catch(e) {
        console.log(e);
        return res.render('404');
    }

}

exports.login = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.login();
    
        if(login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(() => {
                return res.redirect('/login/index');
            });
            return;
        }
    
        req.flash('success', 'You have logged successfully connected.');
        req.session.user = login.user;
        req.session.save(() => {
            return res.redirect('/login/index')
        });
    } catch(e) {
        console.log(e);
        return res.render('404');
    }

}

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/login/index');
}