const firstName = 'Toshio';

function sayName() {
    console.log(firstName);
}

function useSayName() {
    const firstName = 'Walter';
    sayName()
}

useSayName();