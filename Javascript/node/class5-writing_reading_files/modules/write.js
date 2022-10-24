const fs = require('fs').promises;

module.exports = (pathFile, data) => {
    fs.writeFile(pathFile, data, { flag: 'w', encoding: 'utf8'});
    //the "w" flag erases the entire file and start writing from scratch;
    //the "a" (append) flag just adds the content to an existing one, without deleting anything;
}