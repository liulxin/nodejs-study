console.log( `当前正在执行的脚本的文件名：${__filename}`)

console.log(`当前执行脚本所在的目录：${__dirname}`)

let timer = setTimeout(() => {
  console.log('setTimeout')
},1000)

let timer2 = setInterval(() => {
  console.log('setInterval')
},1000)

clearTimeout(timer)
clearTimeout(timer2)