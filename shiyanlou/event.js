const events = require('events')

// 创建 eventEmitter 对象
// 默认 事件监听器会按照添加顺序依次调用
const emitter = new events.EventEmitter()

// 添加监听器
emitter.on('connection', function(arg3, arg4) {
	console.log('hello world', arg3, arg4)
})

// emitter.prependListener() 方法可用于将事件监听器添加到监听器数组的开头
emitter.prependListener('connection', (arg1, arg2) => console.log('hello stranger', arg1, arg2))

setTimeout(() => {
	emitter.emit('connection', '愿善良的人', '都能被温柔以待')
}, 2000)


emitter.once('one', function() {
	console.log('this is once')
})
emitter.emit('one')
emitter.emit('one')