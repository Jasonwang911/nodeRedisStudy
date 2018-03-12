var redis = require('redis');

var client = redis.createClient(6379, 'localhost');

Object.prototype.toString = function() {
	return JSON.stringify(this)
}

client.set('hello', {
	'name': 'jason'
});

client.get('hello', (err, v) => {
	if (!err) {
		console.log(v);
	} else {
		console.log(err)
	}
})


// redis 有序集合  地理位置坐标  列表和数组很相似
