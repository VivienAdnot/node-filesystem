const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {

    console.log('received request');

    fs.readFile('./big-file', (err, data) => {

        if (err) {

            throw err;

        }

        res.end(data);
        console.log('end');

    })

});

server.listen(8000);