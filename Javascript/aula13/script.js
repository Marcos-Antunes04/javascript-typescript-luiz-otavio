function showResults() {
    let name = document.getElementById('name').value;

    document.getElementById('resultado').innerHTML += `Seu nome é: ${name} <br/>`;
    document.getElementById('resultado').innerHTML += `Seu nome tem ${name.replace( /\s/g, '' ).length} letras <br/>`;
    document.getElementById('resultado').innerHTML += `A segunda letra do seu nome é: ${name[1]} <br/>`;
    document.getElementById('resultado').innerHTML += `O primeiro índice da letra "a" no seu nome é: ${name.indexOf('a')} <br/>`;
    document.getElementById('resultado').innerHTML += `O último índice da letra "a" no seu nome é: ${name.lastIndexOf('a')} <br/>`;
    document.getElementById('resultado').innerHTML += `As três últimas letras do seu nome são: ${name.slice(-3)} <br/>`;
    document.getElementById('resultado').innerHTML += `As palavras do seu nome são: ${name.split(' ')} <br/>`;
    document.getElementById('resultado').innerHTML += `Seu nome com letras maiúsculas: ${name.toUpperCase()} <br/>`;
    document.getElementById('resultado').innerHTML += `Seu nome com letras minúsculas: ${name.toLowerCase()} <br/>`;
}