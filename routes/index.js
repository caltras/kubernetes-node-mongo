var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = `mongodb://${process.env.DATABASE}:27017`;
 
// Database Name
const dbName = 'test';

router.get('/', function(req, res, next) {


	res.send(url);
	
});

/* GET home page. */
router.get('/db', function(req, res, next) {


	MongoClient.connect(url, function(err, client) {
		try{
			assert.equal(null, err);
			console.log("Connected successfully to server");

			const db = client.db(dbName);

			client.close();
			res.send("Connected successfully to server");
		}catch(e) {
			res.send(e);
		}
	});
	
});

module.exports = router;
