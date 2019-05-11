const fs = require('fs');
const path = require('path');

let rs = fs.createReadStream(path.resolve(__dirname,'1.txt'));
let ws = fs.createWriteStream(path.resolve(__dirname,'2.txt.gz'));

rs.pipe(ws);

rs.on('error', err => {
    console.log(err)
})

ws.on('finish', () => {
    console.log('over')
})