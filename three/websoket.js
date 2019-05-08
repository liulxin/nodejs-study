const http = require('http');
const io = require('socket.io');

let server = http.createServer((req,res) => {

}).listen(8080)

let wsServer = io.listen(server);

wsServer.on('connection', sock => {
    //sock.emit('name',数据)
    //sock.on('name',function(数据){})

    sock.on('aaa', function (a , b) {
        console.log(a , b, a+ b)
    })
})