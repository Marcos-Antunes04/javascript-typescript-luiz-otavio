// Pegar os contatos da base de dados para renderizá-los em tela
const Contact = require('../models/ContactModel');

// Renderização da página inicial
exports.index = async (req, res) => {
    // RENDERIZAÇÃO DA HOME
    const contacts = await Contact.searchContacts();
    res.render('index', { contacts });
};