const { Transform } = require('stream');

const upperCaseWordProcessor = new Transform({
    transform(chunk, encoding, callback) {
        // processing
        const upperCaseString = chunk.toString().toUpperCase();
        callback(null, upperCaseString);
    }
})

module.exports = upperCaseWordProcessor;