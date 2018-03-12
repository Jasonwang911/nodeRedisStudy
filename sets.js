var client = require('./client');

client.sadd('testSet', 1);
client.sadd('testSet', 'a');
client.sadd('testSet', 'b');

client.smembers('testSet', function(err, v) {
	console.log('client.smenbers err, v', err, v);
})