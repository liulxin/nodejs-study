const url = require('url')

let str1 = 'http://www.baidu.com/tengx';

console.log(url.parse(str1))

// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'www.baidu.com',
//     port: null,
//     hostname: 'www.baidu.com',
//     hash: null,
//     search: null,
//     query: null,
//     pathname: '/tengx',
//     path: '/tengx',
//     href: 'http://www.baidu.com/tengx' }