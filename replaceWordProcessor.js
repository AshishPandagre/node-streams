const { Transform } = require('stream');

const replaceWordProcessor = new Transform({
    transform(chunk, encoding, callback) {
        // processing
        const replaceWordProcessed = chunk.toString().replaceAll(/ipsum/gi, '***');
        callback(null, replaceWordProcessed);
    }
})

module.exports = replaceWordProcessor;