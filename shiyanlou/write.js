const fs = require('fs')

fs.open('./syl.txt', 'a', (err, fd) => {
	if (err) {
		return console.error(err)
	}
	console.log('文件打开成功！')
	console.log('准备写入文件：')
	//新写入内容为 hello world
	var buffer = Buffer.from(new String(' hello world'))
	// 异步写入文件
	fs.write(fd, buffer, 0, 12, 0, function(err, bytes, buffer) {
		if (err) {
			throw err
		}
		console.log('写入成功')
		// 打印出buffer中存入的数据
		console.log(bytes + '字节被写入')
		console.log(buffer.slice(0, bytes).toString())
		// 异步关闭文件
		fs.close(fd, function(err) {
			if (err) {
				console.log(err)
			}
			console.log('文件关闭成功')
		})
	})
})
