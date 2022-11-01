const mongoose = require('mongoose');
const validator = require('validator');

const ContactSchema = new mongoose.Schema({
    firstname: { type: String, required: false },
    lastname: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    cellphone: { type: String, required: false, default: '' },
    createdAt: { type: Date, default: Date.now },
});

const ContactModel = mongoose.model('Contact', ContactSchema);

function Contact(body) {
    this.body = body;
    this.errors = [];
    this.contact = null;
}

Contact.searchById = async function(id) {
    if(typeof id !== 'string') return;
    const user = await ContactModel.findById(id);
    return user;
}

Contact.prototype.register = async function() {
    this.validate();
    if(this.errors.lenght > 0) return;
    this.contact = await ContactModel.create(this.body);
}

Contact.prototype.validate = function() {
    this.cleanUp();
    // The e-mail must be valid
    if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('Invalid e-mail.');
    if(!this.body.firstname) this.errors.push('Firstname is required');
    if(!this.body.email && !this.body.cellphone) this.errors.push('E-mail or phone number is required');
}

Contact.prototype.cleanUp = function() {
    for(const key in this.body) {
        if(typeof this.body[key] !== 'string') {
            this.body[key] = ';'
        };
    }

    this.body = {
        firstname: this.body.firstname,
        lastname: this.body.lastname,
        email: this.body.email,
        cellphone: this.body.cellphone,
    }
}

Contact.prototype.edit = async function(id) {
    if(typeof id !== 'string') return;
    this.validate();
    if(this.errors.length > 0) return;
    this.contact = await ContactModel.findByIdAndUpdate(id, this.body, { new: true });
}


module.exports = Contact;