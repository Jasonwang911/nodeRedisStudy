var client = require('./client');

// 订阅一个频道（testPublish）， 当订阅的频道中发布了消息，则会收到消息
client.subscribe('testPublish')

// 获取消息后的监听 channel是订阅的频道
client.on('message', function(channel, v) {
	console.log('message', channel, v)
})

// 两个进程之间进行消息通信