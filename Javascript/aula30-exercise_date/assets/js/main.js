//MODELO 1
function getDate() {
    const date = new Date(Date.now());

    const day = date.getDay();
    const formatedDay = formatDay(day);

    const numberDay = date.getDate();

    const month = date.getMonth();
    const formatedMonth = formatMonth(month);

    const year = date.getFullYear();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const getFullHour = formatHours(hours, minutes);

    const fullDate = `${formatedDay}, ${numberDay} de ${formatedMonth} de ${year} ${getFullHour}`
    document.getElementById('fullDate').innerHTML = fullDate;
}

function formatDay(day) {
    switch(day) {
        case 0: 
            return 'Domingo'
        case 1:
            return 'Segunda-feira'
        case 2:
            return 'Terça-feira'
        case 3:
            return 'Quarta-feira'
        case 4:
            return 'Quinta-feira'
        case 5:
            return 'Sexta-feira'
        case 6:
            return 'Sábado'
        default:
            console.log('Houve um erro em dia da semana')
    }
}

function formatMonth(month) {
    switch(month) {
        case 0:
            return 'janeiro';
        case 1:
            return 'fevereiro';
        case 2:
            return 'março';
        case 3:
            return 'abril';
        case 4:
            return 'maio';
        case 5:
            return 'junho';
        case 6:
            return 'julho';
        case 7:
            return 'agosto';
        case 8:
            return 'setembro';
        case 9:
            return 'outubro';
        case 10:
            return 'novembro';
        case 11:
            return 'dezembro';
        default:
            console.log('Houve um erro em mês')
    }
}

function formatHours(hours, minutes) {
    let formatedHours = hours;
    let formatedMinutes = minutes;

    if (hours < 10) {
        formatedHours = `0${hours}`
    }

    if (minutes < 10) {
        formatedMinutes = `0${minutes}`
    }

    return `${formatedHours}:${formatedMinutes}`
}

getDate()


//MODELO 2
function getDate2() {
    const date = new Date(Date.now());
    const options = {dateStyle: 'full'}
    const fullDate = date.toLocaleDateString('pt-BR', options);
    const fullHour = date.toLocaleTimeString('pt-BR');

    document.getElementById('fullDate2').innerHTML = fullDate + " " + fullHour
}

getDate2()