const fs = require('fs');

// fs.writeFile(path,data,callback);
// fs.readFile(path,callback)

/*
fs.writeFile('./one/a.js','this is a.js',(err) => {
    if(err){
        console.log('error',err)
    }else{
        console.log('success')
    }
})
*/

fs.readFile('./one/a.js',(err, data) => {
    if(err){
        console.log('error',err)
    }else{
        // console.log('success',data) //success <Buffer 74 68 69 73 20 69 73 20 61 2e 6a 73>
        console.log('success',data.toString())
    }
})


