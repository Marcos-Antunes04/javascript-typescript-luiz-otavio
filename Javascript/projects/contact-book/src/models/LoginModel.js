const mongoose = require('mongoose'); // responsável por inserir os dados no banco de dados (base de dados, tabelas, dados)
const validator = require('validator'); // para validação dos campos de formulário
const bcryptjs = require('bcryptjs'); // criar um hash de senha

// data configs
const LoginSchema = new mongoose.Schema({ // tratamento e modelagem dos dados antes de salvá-lo no banco de dados (MongoDB)
    email: { type: String, required: true }, 
    password: { type: String, required: true }, 
});

const LoginModel = mongoose.model('Login', LoginSchema); // 1º parâmetro é o nome do model e o 2º o nome do Schema

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async login() {
        this.validate();
        if(this.errors.length > 0) return;
        
        this.user = await LoginModel.findOne({ email: this.body.email });

        if(!this.user) { // verificação de e-mail (usuário)
            this.errors.push('User not exists.');
            return;
        }
        
        if(!bcryptjs.compareSync(this.body.password, this.user.password)) { // validação de senha do usuário
            this.errors.push('Invalid password.');
            this.user = null;
            return;
        }; 
    }

    async register() {
        this.validate();
        if(this.errors.length > 0) return;

        await this.userExists();
        if(this.errors.length > 0) return;

        const salt = bcryptjs.genSaltSync(); // gera um salt
        this.body.password = bcryptjs.hashSync(this.body.password, salt); // faz o hash da senha baseado no valor da senha e do salt gerado

        this.user = await LoginModel.create(this.body);

    }

    async userExists() {
        this.user = await LoginModel.findOne({ email: this.body.email });
        if(this.user) this.errors.push('User already exists.');
    }

    validate() {
        this.cleanUp();

        // VALIDATION
        // The e-mail must be valid
        if(!validator.isEmail(this.body.email)) this.errors.push('Invalid e-mail.');

        // The password must be between 3 and 50 characters
        if(this.body.password.length < 3 || this.body.password.length > 50) {
            this.errors.push('The password must be between 3 and 50 characters.')
        };
    }

    cleanUp() {
        for(let key in this.body) {
            if(typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }
}

module.exports = Login;