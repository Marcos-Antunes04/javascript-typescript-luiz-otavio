import validator from 'validator';

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    };

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        })
    }

    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordlInput = el.querySelector('input[name="password"]');
        let error = false;

        if(!validator.isEmail(emailInput.value)) {
            alert('Invalid e-mail.');
            error = true;
        }

        if(passwordlInput.value.length < 4 || passwordlInput.value.length > 50) {
            alert('Invalid password.');
            error = true;
        }

        if(!error) el.submit();
    }
}