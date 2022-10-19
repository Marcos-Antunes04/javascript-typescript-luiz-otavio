const firstname = 'Toshio';
const lastname = 'Yasunaka';
const age = '25';

function sum(x, y) {
    return x + y;
}

export { firstname, lastname, age, sum };

// create and export simultaneously
class Manga {
    constructor(name, mainCharacter) {
        this.name = name;
        this.mc = mainCharacter;
    }
}

export const onePiece = new Manga('One Piece', 'Monkey D. Luffy');