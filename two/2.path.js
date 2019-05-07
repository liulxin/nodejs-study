const path = require('path');

let str = '/root/a/b/2.js';

console.log(path.dirname(str)) //  /root/a/b
console.log(path.basename(str))    // 2.js
console.log(path.extname(str))  //  .js

let path1 = path.resolve('/root/a/b','../z','build','..','s') //解析路径
console.log(path1)  //  /root/a/z/s

let path2 = path.resolve(__dirname, 'build');
console.log(path2); //  /Users/dongyuanjie/Desktop/work/nodejs-study/two/build 绝对路径

// __dirname 当前目录

