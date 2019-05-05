const http = require('http');
const fs = require('fs');

let server = http.createServer((request,response) => {
    // console.log('server starting')

    // console.log(request.url)
    fs.readFile(`one/www${request.url}`,(err, buffer) => {
        if(err){
            response.writeHeader(404);
            response.write('not found');
            response.end();
        }else{
            response.write(buffer);
            response.end();
        }
    })
});

server.listen(8080)
