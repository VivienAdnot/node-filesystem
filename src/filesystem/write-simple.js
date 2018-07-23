const fs = require('fs');

const PATH_FILE_WATCHED = '../dist/target.txt';
const message = 'Some message';

fs.writeFile(PATH_FILE_WATCHED, message, (err) => {

    if (err) throw err;

});