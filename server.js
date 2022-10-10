const http = require('http');
const fs = require('fs');
const { Transform } = require('stream');

const server = http.createServer((req, res) => {

    // req is a readableStream
    // res is a writebleStream

    if (req.url !== '/') {
        return res.end();
    }

    // Downloading file bad way
    // const file = fs.readFileSync('sample.txt');
    // return res.end(file);

    // Downloading file good way (Streams)
    // const readableStream = fs.createReadStream('sample.txt');       // create a stream
    // readableStream.pipe(res);                                       // readableStream -> writableStream is called pipe

    // streaming video bad way
    // const file = fs.readFileSync('video.mp4');
    // res.writeHead(200, {'Content-Type': 'video/mp4'});
    // return res.end(file);

    // streaming video good way
    // const readableStream = fs.createReadStream('video.mp4');
    // res.writeHead(200, {'Content-Type': 'video/mp4'});
    // readableStream.pipe(res);

    // copy files using bad way
    // const file = fs.readFileSync('sample.txt');
    // fs.writeFileSync('output.txt', file);
    // res.end();

    // copy files good way
    // const readStream = fs.createReadStream('sample.txt');
    // const writeStream = fs.createWriteStream('output.txt');
    // readStream.on('data', (chunk) => {
    //     console.log('Chunk : ', chunk.toString());
    //     writeStream.write(chunk);
    // })

    // string processing
    const sampleFileStream = fs.createReadStream('sample.txt');
    const outputWritableStream = fs.createWriteStream('output.txt');

    const replaceWordProcessing = new Transform({
        transform(chunk, encoding, callback) {
            // process
            const upperCaseString = chunk.toString().toUpperCase();
            const finalString = upperCaseString.replaceAll(/ipsum/gi, '***');
            console.log(finalString);
            callback(null, finalString);
        }
    })

    // sampleFileStream.on('data', (chunk) => {
    //     console.log('data received : ', chunk.toString());

    //     // process
    //     const upperCaseString = chunk.toString().toUpperCase();
    //     const finalString = upperCaseString.replaceAll(/ipsum/gi, '***');

    //     // writable stream write
    //     outputWritableStream.write(finalString);
    // })

    sampleFileStream.pipe(replaceWordProcessing).pipe(outputWritableStream);


    res.end();

    console.log('request incoming..', req.url);
})

PORT = 5700;
server.listen(PORT, () => console.log(`Listening pon PORT ${PORT}`));
