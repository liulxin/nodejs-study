const events = require('events')

// 创建 eventEmitter 对象
// 默认 事件监听器会按照添加顺序依次调用
const emitter = new events.EventEmitter()

const callback = function() {
	console.log('hello world')
}
// 添加监听器
emitter.on('connection', callback)
emitter.emit('connection');
emitter.removeListener('connection', callback)

emitter.emit('connection');