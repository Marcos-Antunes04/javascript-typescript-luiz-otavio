import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';

const registration = new Login('.form-registration');
const login = new Login('.form-login');

login.init();
registration.init();