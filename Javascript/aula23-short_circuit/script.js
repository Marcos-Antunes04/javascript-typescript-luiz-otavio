/*
    && 
    && -> para sua condição ser satisfeita, todos os valores devem ser verdadeiros.
        Caso toda a expressão seja verdadeira, será retornado o último valor.
*/
    let teste = true && 'opa' && 'isso vai ser retornado'
    if (teste) { //ambas condições são verdadeiras, então há continuação no if
        console.log('&&', teste) //retorna 'opa'
    } else {
        console.log('&&', `o elemento ${teste} é falso.` )
    }

/*
        Caso ache algum elemento falso, irá retornar o valor do primeiro elemento falso.
*/
    let teste2 = false && 'opa'
    if (teste2) {
        console.log('&&', teste2) 
    } else {
        console.log('&&', ` o elemento ${teste2} é falso.` )
    }


/*
    ||
    || -> para sua condição ser satisfeira, basta um único valor ser verdadeiro.
        Caso um único elemento seja verdadeiro, retornará o PRIMEIRO valor que satisfaz sua condição
*/
    console.log('||', 0 || false || null || 'retorna isso' || true)

    /* vamos pensar em um cenário onde o cliente pode escolher uma cor, e, se caso ele escolher a cor, ela será utilizada
    caso contrário, se o cliente não escolher nenhuma cor, utilizaremos uma cor padrão*/
    let corUsuario = null;
    const corPadrao = corUsuario || 'black';

    console.log('||', corPadrao)

    /* caso nenhum valor seja verdadeiro, então será retornado o ÚLTIMO valor FALSO*/
    const a = false;
    const b = '';
    const c = 0;
    const d = undefined;
    const e = NaN;

    console.log('||', a || b || c || d || e)

