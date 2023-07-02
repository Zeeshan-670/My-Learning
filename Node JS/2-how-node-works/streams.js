const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  // Solution 1
  //   fs.readFile('./test-file.txt', (err, data) => {
  //     console.log(err);
  //     if (err) console.log(err);
  //     res.end(data);
  //   });
  // Solution 2: Streams
  //   const readAble = fs.createReadStream('./test-file.txt');
  //   readAble.on('data', (chunk) => {
  //     res.write(chunk);
  //   });
  //   readAble.on('end', () => {
  //     res.end();
  //   });
  //   readAble.on('error', (err) => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end('File not found!');
  //   });
  // Solution 3
  const readAble = fs.createReadStream('./test-file.txt');
  readAble.pipe(res);

  // readableSource.pipe(writeableDest)
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening....');
});
