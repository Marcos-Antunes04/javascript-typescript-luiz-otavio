class ValidateForms {
    constructor() {
        this.forms = document.querySelector('.forms');
        this.events();
    }

    events() {
        this.forms.addEventListener('submit', e=> {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const validFields = this.areValidFields();
        const validPassword = this.isValidPassword();

        if(validFields && validPassword) {
            document.alert('Ok')
            this.forms.submit();
        }
    }

    areValidFields() {
        let valid = true;

        for(let errorText of this.forms.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let field of this.forms.querySelectorAll('.validate')) {
            const labelText = field.previousElementSibling.innerHTML;
            if (!field.value) {
                this.createError(field, `The ${labelText} field cannot be empty.`);
                valid = false;  
            }
            
            if(field.id === 'cpf') {
                if (!this.validateCpf(field)) valid = false;
            }

            if(field.id === 'user') {
                if(!this.validateUser(field)) valid = false;
            }
        }

        return valid;
    }

    createError(field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
    }

    validateCpf(field) {
        const cpf = new ValidateCpf(field.value);

        if(!cpf.validate()) {
            this.createError(field, 'Invalid CPF.');
            return false;
        }
        return true
    }

    validateUser(field) {
        const user = field.value;
        let valid = true;

        if (user.length < 3 || user.length > 12) {
            this.createError(field, 'User must have between 3 and/or 12 characters.')
            valid = false;
        } 

        if (!user.match(/^[a-zA-Z0-9]+$/g)) {
            this.createError(field, 'User must have only letters and numbers.')
            valid = false;
        } 
        return valid;
    }

    isValidPassword(){
        let valid = true;
        const password = this.forms.querySelector('#password');
        const confirmPassword = this.forms.querySelector('#confirm-password');

        if(password.value !== confirmPassword.value) {
            this.createError(password, 'The fields Password and Confirm Password must be the same');
            this.createError(confirmPassword, 'The fields Password and Confirm Password must be the same');
            valid = false;
        }

        if(password.length < 6 || password.length > 12) {
            this.createError(password, 'Password must be have between 6 and 12 characters');
            valid = false;
        }

        if(confirmPassword.length < 6 || confirmPassword.length > 12) {
            this.createError(confirmPassword, 'Confirm password must be have between 6 and 12 characters');
            valid = false;
        }

        return valid;
    }
}

const validate = new ValidateForms();