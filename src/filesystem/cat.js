#!/usr/bin/env node --harmony

const fs = require('fs');
const filename = process.argv[2];

if (!filename) {

    throw Error("A file to watch must be specified");

}

fs.createReadStream(process.argv[2]).pipe(process.stdout);