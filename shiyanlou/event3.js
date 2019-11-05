const events = require('events')

// 创建 eventEmitter 对象
// 默认 事件监听器会按照添加顺序依次调用
const emitter = new events.EventEmitter()

const callback1 = function() {
	console.log('hello world1')
	emitter.removeListener('connection', callback2)
}

const callback2 = function() {
	console.log('hello world2')
}
// 添加监听器
emitter.on('connection', callback1)
emitter.on('connection', callback2)

// 一旦事件被触发，所有绑定到该事件的监听器都会按顺序依次调用。也就是说在事件触发之后、且最后一个监听器执行完成之前，removeListener() 或 removeAllListeners() 不会从 emit() 中移除它们
// emitter.emit('connection')

// emitter.emit('connection')


//移除 connection 事件的所有监听器
// console.log(emitter.listenerCount('connection'))
// emitter.removeAllListeners('connection');
// console.log(emitter.listenerCount('connection'))
// //调用监听器
// emitter.emit('connection');


emitter.on('error', (err) => {
  console.error('错误信息');
});
emitter.emit('error');
