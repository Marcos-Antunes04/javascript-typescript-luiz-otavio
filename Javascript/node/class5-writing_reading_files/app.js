const path = require('path');
const pathFile = path.resolve(__dirname, 'test.json');
const write = require('./modules/write');
const read = require('./modules/read');

// const people = [
//     {firstName: 'Toshio'},
//     {firstName: 'Walter'},
//     {firstName: 'Yasunaka'},
//     {firstName: 'Luffy'},
// ]

// const json = JSON.stringify(people, '', 2);
// write(pathFile, json);

async function readFile(pathFile) { //here we should use "async", because in "write" and "read" file, a promise was used;
    const data = await read(pathFile);
    renderData(data);
}

function renderData(data) {
    data = JSON.parse(data);
    data.forEach(element => console.log(element.firstName));
}

readFile(pathFile);