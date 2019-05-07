const http = require('http');
const bufferSplit = require('./buffer');
const fs = require('fs');

http.createServer((req, res) => {
    // console.log(req.headers)

    let boundary = '--' + req.headers['content-type'].split('; ')[1].split('=')[1];

    console.log(boundary)

    let arr = []

    req.on('data', buffer => {
        arr.push(buffer)
    })

    req.on('end', () => {
        let buffer = Buffer.concat(arr);

        // 1.分隔符切分
        let array = bufferSplit(buffer, boundary);
        // console.log(array)

        array.pop();
        array.shift();

        //2.处理每一个
        array.forEach(buffer => {
            buffer = buffer.slice(2, buffer.length - 2)

            // console.log(buffer)

            let n = buffer.indexOf('\r\n\r\n');
            let info = buffer.slice(0,n).toString();
            let data = buffer.slice(n+ 4);

            // console.log(info.toString())
            // console.log(data.toString())

            if(info.indexOf('\r\n') != -1){
                //文件
                let res = info.split('\r\n')[0].split('; ');
                let name = res[1].split('=')[1];
                let filename = res[2].split('=')[1];

                name = name.substring(1, name.length-1 ); 
                filename = filename.substring(1, filename.length-1 ); 
                console.log(name,filename)

                fs.writeFile(`upload/${filename}`, data, err => {
                    if(err){
                        console.log(err)
                    }else{
                        console.log('上传成功')
                    }
                })
            }else{
                //普通信息
                let name = info.split('; ')[1].split('=')[1];
                name = name.substring(1, name.length-1 );
                console.log(name)
                console.log(data.toString())
            }

            
        })

  

        // console.log(buffer.toString())
    })

}).listen(8080)
