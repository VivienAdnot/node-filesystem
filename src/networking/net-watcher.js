'use strict';

const fs = require('fs');
const net = require('net');
const filename = process.argv[2];

if (!filename) {
    throw Error('No target filename was specified');
}

const server = net.createServer((connection) => {
    // reporting
    console.log('Subscriber connected');
    connection.write(`Now watching ${filename} for changes...\n`);

    // watcher setup
    let watcher = fs.watch(filename, () => {
        connection.write(`File ${filename} changed: ${Date.now()} \n`);
    });

    //cleanup
    connection.on('close', () => {
        console.log('Subscriber disconnected');
        watcher.close();
    });
});

server.listen(5432, () => {
    console.log('listening for subscribers');
});

// to connect, open a terminal and run 'telnet localhost 5432'