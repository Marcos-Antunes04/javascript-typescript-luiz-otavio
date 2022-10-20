import GenerateCpf from './modules/GenerateCpf';
import './assets/css/style.css';

(function() {
    const generate = new GenerateCpf();
    const generatedCpf = document.querySelector('.generated-cpf');
    generatedCpf.innerHTML = generate.generateNewCpf();
})();