// 引入fs模块
const fs = require('fs')
// 异步打开文件
fs.open('syl.txt', 'r+', function(err, fd) {
	if (err) {
		return console.error(err)
	}
	console.log('文件打开成功！')
	console.log('准备读取文件：')
	// 创建一个大小为 1024 字节的缓存区
	const buf = Buffer.alloc(1024)
	// 异步读取文件
	fs.read(fd, buf, 0, buf.length, 0, function(err, bytes, buf) {
		if (err) {
			console.log(err)
		}
		console.log(bytes + '字节被读取')
		// 仅输出读取的字节
		if (bytes > 0) {
			console.log(buf.slice(0, bytes).toString())
		}
		// 异步关闭文件
		fs.close(fd, function(err) {
			if (err) {
				console.log(err)
			}
			console.log('文件关闭成功')
		})
	})
})
