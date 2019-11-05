// function sayHi(value) {
//   console.log(value)
// }

// function execute(someFunction, value) {
//   someFunction(value)
// }

// execute(sayHi, 'Hi')

// 阻塞
// const fs = require('fs')
// const data = fs.readFileSync('syl.txt')
// console.log(data.toString())
// console.log('over')

// 非阻塞
const fs = require('fs')
fs.readFile('syl.txt', (err, data) => {
  if(err) {
    return console.error(err)
  }
  console.log(data.toString())
})

console.log('over')