const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {

    console.log('received request');

    const src = fs.createReadStream('./big-file');
    src.pipe(res);
    console.log('end');

});

server.listen(8000);