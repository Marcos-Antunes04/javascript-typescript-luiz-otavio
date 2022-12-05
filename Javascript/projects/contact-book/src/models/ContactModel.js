const mongoose = require('mongoose'); // responsável por inserir os dados no banco de dados (base de dados, tabelas, dados)
const validator = require('validator');

// data configs
const ContactSchema = new mongoose.Schema({
    firstName: { type: String, required: true }, // tratamento e modelagem dos dados antes de salvá-lo no banco de dados (MongoDB)
    lastName: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    phoneNumber: { type: String, required: false, default: '' },
    createdAt: { type: Date, default: Date.now },
});

const ContactModel = mongoose.model('Contact', ContactSchema); // 1º parâmetro é o nome do model e o 2º o nome do Schema

function Contact(body) {
    this.body = body;
    this.errors = [];
    this.contact = null;
};

Contact.searchById = async function(id) {
    if(typeof id !== 'string') return;
    const user = await ContactModel.findById(id);
    return user;
}

Contact.prototype.register = async function() {
    this.validate();
    
    if(this.errors.length > 0) return;
    this.contact = await ContactModel.create(this.body);
};

Contact.prototype.validate = function() {
    this.cleanUp();

    // VALIDATIONS
    if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('Invalid e-mail.');
    if(!this.body.firstName) this.errors.push('First name is required.');
    if(!this.body.email && !this.body.phoneNumber) this.errors.push('E-mail or phone number is required.');
};

Contact.prototype.cleanUp = function() {
    for(let key in this.body) {
        if(typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }

    this.body = {
        firstName: this.body.firstName,
        lastName: this.body.lastName,
        email: this.body.email,
        phoneNumber: this.body.phoneNumber,
    }
};

Contact.prototype.edit = async function(id) {
    if(typeof id !== 'string') return;
    this.validate();
    if(this.errors.length > 0) return;
    this.contact = await ContactModel.findByIdAndUpdate(id, this.body, { new: true }); // .findByIdAndUpdate atualiza os dados no banco, seu último parâmetro faz com que seja utilizados os novos dados ao invés dos antigos.
}

module.exports = Contact;