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

    // chunk is a Buffer, containing binary data.
    // it points to a blob of memory allocated by node's native core, outside of the Javascript engine.
    // it requires decoding to convert to js string.
    // decoding will copy the buffer's content into node's heap.
    ls.stdout.on('data', (chunk) => output += chunk.toString());

    ls.on('close', () => {
        let parts = output.split(/\s+/);
        console.dir([
            parts[0], // permissions
            parts[4], // size
            parts[8]  // file name
        ]);
    });

    // We want to send the standard output from the child process, directly to our own standard output stream.
    ls.stdout.pipe(process.stdout);

});

console.log(`Now watching ${filename} for changes...`);