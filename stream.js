// const {Readable, Writable} = require('stream');

// const readableStream = new Readable({
//     highWaterMark: 6,
//     read() {}
// });

// const writableStream = new Writable({
//     write(s) {
//         console.log('writing ', s.toString());
//     }
// });

// readableStream.on('data', (chunk) => {
//     console.log('Date incoming..', chunk.toString());
//     writableStream.write(chunk);
// })

// console.log(readableStream.push('Heyy! from ashish'));

