//Get the requirements
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

//The URL specified
var url = 'mongodb://localhost:27017/Radiohead'; //database specified in the URL

//lets get connected
MongoClient.connect(url, function(err,db) 
{
	assert.equal(err,null);
	console.log("Connected correctly to server");
	
	var collection = db.collection("albums"); //collection name specified
	
	//insert document on to the collection
	collection.insertOne( {name :"Kid A", description:"Released in 2001"},
	function(err,result)
{  //this is a callback function that returns a result or an error
		assert.equal(err,null);
		console.log("After Insert:");
		console.log(result.ops); //this 'result' s an object that has a property called 'ops' 
		//ops contains an array of all the documents that has be inserted by this method.

	//find all documents that are part of the collection. We add in the 'call' for it inside this callback
	//cuz we want the insert to be called first and then the query to collection inside the callback funciton
	
	//lets find stuff
	collection.find({}).toArray(function(err,docs) //empty {} is the filter value, its a property. This is empty, which
	//means that it returns all the documents in the collection. Then toArray transfroms all the objects and turns them into an array. Also, notice how there is a callback to all of these steps. The database server query  takes time so,we need to wait for the operation to take place before it can finish and call the callback function to return the value 
	{
		assert.equal(err,null);
		console.log("Found: ");
		console.log(docs);
		
		//drop the collection
		db.dropCollection("albums", function(err,result) 
		{ assert.equal(err,null); db.close(); });
	});

	}); 
});

// OUTPUT
/*
Connected correctly to server
After Insert:
[ { name: 'Kid A',
    description: 'Released in 2001',
    _id: 57535da52987da4e00424285 } ]
Found: 
[ { _id: 57528fc0afd2e10ebc3480f1,
    name: 'OK Computer',
    description: 'Album released in 1997' },
  { name: 'Kid A',
    description: 'Released in 2001',
    _id: 57535da52987da4e00424285 } ]

*/ 
