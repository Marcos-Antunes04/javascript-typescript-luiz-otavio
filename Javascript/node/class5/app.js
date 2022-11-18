const path = require('path');
const pathFile = path.resolve(__dirname, 'test.json'); // create a test.json file on the pointed path;
const write = require('./modules/write');
const read = require('./modules/read')

// CREATE TEST.JSON FILE
// const person = [
//     {firstname: 'João'},
//     {firstname: 'Maria'},
//     {firstname: 'Eduardo'},
//     {firstname: 'Luísa'},
// ];

// const json = JSON.stringify(person, '', 2);
// write(pathFile, json);

// READ TEST.JSON
async function readFile(archivePath) {
    const data = await read(archivePath);
    renderData(data);
}

function renderData(data) {
    data = JSON.parse(data);
    data.forEach(value => console.log(value));
}

readFile(pathFile);