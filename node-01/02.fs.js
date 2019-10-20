const fs = require('fs')
// const data = fs.readFileSync('./package.json')

// console.log(data.toString())

// fs.readFile('./package.json',(err, data) => {
//   console.log(data.toString('utf-8'))
// })


const {promisify} = require('util')
const readFile = promisify(fs.readFile)

readFile('./package.json').then(data => {
  console.log(data.toString('utf-8'))
})