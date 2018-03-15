'use strict';

const net = require('net');
const server = net.createServer((connection) => {
    console.log('Subscriber connected');

    // send the first chunk immediately
    connection.write('{"type": "changed", "file":"targ');

    // after a one second delay, send the other chunk
    let timer = setTimeout(() => {
        connection.write('et.txt", "timestamp": 1521112184}' + '\n');
        connection.end();
    }, 3000);

    connection.on('end', () => {
        clearTimeout(timer);
        console.log('Subscriber disconnected');
    });
});

server.listen(5432, () => {
    console.log('Test server listening for subscribers...');
});