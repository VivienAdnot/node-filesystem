const fs = require('fs');

const stream = fs.createReadStream(process.argv[2]);

stream.on('data', (chunk) => process.stdout.write('new chunk: ' + chunk));

stream.on('error', (err) => process.stderr.write('Error: ' + err.message + '\n'));