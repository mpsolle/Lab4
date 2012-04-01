var twitter = require('ntwitter');
var redis = require('redis');
var credentials = require('./credentials.js');

//Redis Creation                                                                                                                                                                                                                      
var client = redis.createClient();

var t = new twitter({
    consumer_key: credentials.consumer_key,
    consumer_secret: credentials.consumer_secret,
    access_token_key: credentials.access_token_key,
    access_token_secret: credentials.access_token_secret
});

t.stream('statuses/filter', { track: ['awesome'] },
    function(stream) {
        stream.on('data', function(tweet) {
            console.log(tweet.text);       
			if(tweet.text.match(/awesome/)) {
			client.incr('awesome');
        });
    }
);
