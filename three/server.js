const http = require('http');
const mutiparty = require('multiparty');

http.createServer((req, res) => {
    let form = new mutiparty.Form({
        uploadDir: 'upload'
    });

    form.parse(req);

    form.on('field', (name,value) => {
        console.log('字段', name ,value)
    });

    form.on('file', (name,file) => {
        console.log('文件',name, file)
    })

    form.on('close', () => {
        console.log('解析完成')
    })


}).listen(8081)
