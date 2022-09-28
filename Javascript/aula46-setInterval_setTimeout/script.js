function showHour() {
    let date = new Date();

    return date.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

let timer = setInterval(() => {
    console.log(showHour())
}, 1000)

setTimeout(() => {
    clearInterval(timer);
}, 5000)