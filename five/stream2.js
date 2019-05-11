const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

let rs = fs.createReadStream(path.resolve(__dirname,'1.txt'));
let gz = zlib.createGzip();
let ws = fs.createWriteStream(path.resolve(__dirname,'2.txt.gz'));

rs.pipe(gz).pipe(ws);

rs.on('error', err => {
    console.log(err)
})

ws.on('finish', () => {
    console.log('over')
})