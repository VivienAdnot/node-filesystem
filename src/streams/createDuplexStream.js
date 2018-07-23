const { Duplex } = require('stream');

// read and write are totally independant
const inoutStream = new Duplex({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    },

    read(size) {
        global.setTimeout(() => {
            this.push(String.fromCharCode(this.currentCharCode));
            this.currentCharCode++;

            if (this.currentCharCode > 90) {
                this.push(null);
            }
        }, 2000);

    }
});

inoutStream.currentCharCode = 65;
process.stdin.pipe(inoutStream).pipe(process.stdout);