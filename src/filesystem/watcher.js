const fs = require('fs');

const PATH_FILE_WATCHED = '../dist/target.txt';

fs.watch(PATH_FILE_WATCHED, () => console.log('file has changed'));

console.log(`Now watching ${PATH_FILE_WATCHED} for changes...`);