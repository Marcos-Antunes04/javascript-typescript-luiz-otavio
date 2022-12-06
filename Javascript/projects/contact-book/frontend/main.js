import 'core-js/stable';
import 'regenerator-runtime/runtime';

//VALIDAÇÃO FRONT-END
import Login from './modules/Login'

const registration = new Login('.form-registration');
registration.init();

const login = new Login('.form-login');
login.init();

// import './assets/css/style.css';