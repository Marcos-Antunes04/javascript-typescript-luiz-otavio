const fs = require('fs').promises;

module.exports = (path, data) => {
    fs.writeFile(path, data, { flag: 'w' }); // path, content, flag - "w" overwrite / "a" append (only add a new text);
}
