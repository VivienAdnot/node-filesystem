const fs = require('fs');

const PATH_FILE_WATCHED = '../dist/target.txt';

fs.readFile(PATH_FILE_WATCHED, (err, data) => {

    if (err) throw err;
    console.log(data.toString());

});