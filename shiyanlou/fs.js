const fs = require('fs')

fs.open('syl.txt', 'r+', (err, fd) => {
	if (err) {
		return console.error(err)
	}
	console.log('文件打开 成功')
	fs.close(fd, err => {
		if (err) {
			console.log(err)
		}
		console.log('文件关闭成功')
	})
})
