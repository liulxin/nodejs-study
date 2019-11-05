// 引入fs模块
var fs = require('fs')
//读取文件
fs.readFile('./syl.txt', function(err, data) {
	// 读取文件失败/错误
	if (err) {
		throw err
	}
	// 读取文件成功
	console.log(data.toString())
})

// 写入
fs.writeFile('./syl.txt', '我是新内容', err => {
	if (err) {
		throw err
	}
	console.log('Saved.')
	// 写入成功后读取测试
	fs.readFile('./syl.txt', 'utf-8', function(err, data) {
		if (err) {
			throw err
		}
		console.log(data.toString())

		// 写入 flag : a 增加内容  ==>  有一个专门的方法 fs.appendFile
		fs.writeFile('./syl.txt', '我是新内容', { flag: 'a' }, err => {
			if (err) {
				throw err
			}
			console.log('Saved.')
			// 写入成功后读取测试
			fs.readFile('./syl.txt', 'utf-8', function(err, data) {
				if (err) {
					throw err
				}
				console.log(data.toString())
			})
		})
	})
})
