const qs = require('querystring')

console.log(qs.parse('a=2&c=3'))  // { a: '2', c: '3' }

console.log(qs.stringify({ a: '2', c: '3' }))  //  a=2&c=3