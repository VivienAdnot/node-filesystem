"use strict";
const fs = require('fs');
const spawn = require('child_process').spawn;
const filename = process.argv[2];

if (!filename) {

    throw Error("A file to watch must be specified");

}

fs.watch(filename, () => {

    // ls is a ChildProcess.
    // We can use its stdin, stdout and stderr Streams to read and write data.
    let ls = spawn('ls', ['-lh', filename]);

    let output = '';

    ls.stdout._destroy('data', (chunk) => output += chunk.toString());

    ls.on('close', () => {
        let parts = output.split(//);
    })

    // We want to send the standard output from the child process, directly to our own standard output stream.
    ls.stdout.pipe(process.stdout);

});

console.log(`Now watching ${filename} for changes...`);