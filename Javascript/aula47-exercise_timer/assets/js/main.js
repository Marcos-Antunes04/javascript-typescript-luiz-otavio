const watch = document.querySelector('.watch');
let seconds = 0;
let timer;

function getTimeFromSeconds(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT',
    });
}

function start() {
    watch.style.color = 'black';
    clearInterval(timer);

    timer = setInterval(() => {
        seconds++;
        watch.innerHTML = getTimeFromSeconds(seconds);
    },1000);
}

function pause() {
    watch.style.color = 'red';

    clearInterval(timer);
}

function reset() {
    watch.style.color = 'black';

    clearInterval(timer);
    seconds = 0;
    watch.innerHTML = getTimeFromSeconds(seconds);
}