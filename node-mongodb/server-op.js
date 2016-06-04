//Get the requirements
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var dboper = require('./operation.js');



//The URL specified
var url = 'mongodb://localhost:27017/Radiohead'; //database specified in the URL

//lets get connected
MongoClient.connect(url, function(err,db) 
{
	assert.equal(err,null);
	console.log("Connected correctly to server");

	dboper.insertDocument(db, { name: "Hail to the Thief", description:"Released in 2003"}, "albums", function(result)
	{
		console.log(result.ops);
		console.log("INSERTED!\n");
 
		dboper.findDocuments(db, "albums", function(docs)
		{
			console.log(docs);
			console.log("FOUND!\n");

			dboper.updateDocument(db, {name:"Hail to the Thief"},{ description:"Update:Go To Sleep"},"albums", function(docs) 
			{
				console.log(result.result);
				console.log("UPDATED!\n");

				dboper.findDocuments(db, "albums", function(docs) 
				{
					console.log(docs);
					console.log("FOUND UPDATED!\n");

					db.dropCollection("albums", function(result) 
					{
						console.log(result);
						console.log("COLLECTION DROPPED");
						db.close();
						console.log("DB CLOSED!\n");
					});
				});
			});
		});
	});
});

 


/*

	
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
*/

//output
/*
Connected correctly to server
Inserted 1 documents into the document collection albums
[ { name: 'Hail to the Thief',
    description: 'Released in 2003',
    _id: 57536999c349601801457065 } ]
INSERTED!

[ { name: 'Hail to the Thief',
    description: 'Released in 2003',
    _id: 57536999c349601801457065 } ]
FOUND!

Updated the document with [object Object]
{ ok: 1, n: 1 }
UPDATED!

[ { _id: 57536999c349601801457065,
    description: 'Update:Go To Sleep',
    name: 'Hail to the Thief' } ]
FOUND UPDATED!

null
COLLECTION DROPPED
DB CLOSED!
*/ 




 
