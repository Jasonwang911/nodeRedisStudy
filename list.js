var client = require('./client.js');

client.rpush('testLists', 'a');
client.rpush('testLists', 'b');
client.rpush('testLists', 'c');
client.lpush('testLists', '2');
// 出栈 在列表中从最左面删除
client.lpop('testLists', function(err, v) {
	if (!err) {
		console.log('client.lpop,', v)
	}
})
client.rpop('testLists', function(err, v) {
	if (!err) {
		console.log('client.lpop,', v)
	}
})
// 查找列表，需要指定列表的名字，以及从哪里开始从哪里结束。 如果大于等0--从左面开始计数，小于等于0,---从右面开始计数 
// 0,-1表示从第一个开始取，一直取到最后一个为止
client.lrange('testLists', 0, -1, function(err, lists) {
	console.log('client.lrange,err,lists', err, lists)
})