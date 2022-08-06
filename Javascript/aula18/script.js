function criaPet(nome, animal, idade) {
    return {nome, animal, idade};
    /*
    mesmo que:
    return {nome: nome, sobrenome: sobrenome, idade: idade} 
    */
};

let pet1 = criaPet('Gabigol', 'cachorro', 2);
console.log(`${pet1.nome} é um ${pet1.animal} e tem ${pet1.idade} anos`);

//USANDO THIS EM MÉTODOS DENTRO DE UM OBJETO
let pessoa1 = {
    nome: 'Toshio',
    sobrenome: 'Yasunaka',
    idade: 25,

    //deve-se utilizar o "this" para referenciar atributos de um mesmo contexto, nesse caso do mesmo objeto
    apresentacao() {
        console.log(`Olá! Meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos.`);
    },

    incrementaIdade() {
        this.idade++;
    },
}

pessoa1.apresentacao();
pessoa1.incrementaIdade();
pessoa1.apresentacao();
pessoa1.incrementaIdade();
pessoa1.apresentacao();
pessoa1.incrementaIdade();