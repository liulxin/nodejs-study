const buf1 = Buffer.alloc(10)
console.log(buf1)

const buf2 = Buffer.from([1,2,3])
console.log(buf2)

const buf3 = Buffer.from('this is buffer')
console.log(buf3)
console.log(buf3.toString('utf-8'))

buf1.write('hello')

console.log('buf1', buf1)

const buf4 = Buffer.concat([buf1, buf3])
console.log(buf4)