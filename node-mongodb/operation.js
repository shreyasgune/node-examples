var assert = require('assert');

exports.insertDocument = function(db, document, collection, callback)
{
	//get the documents collection 
	var coll = db.collection(collection); //refers to a specific collection
	
	//Insert some documents
	coll.insert(document, function(err, result) 
	{
		assert.equal(err,null);	
		console.log("Inserted "+result.result.n+" documents into the document collection "+collection);
		callback(result);
	});
};

exports.findDocuments = function(db,collection,callback) 
{
	//get documents collection
	var coll = db.collection(collection);
	
	//find some docs
	coll.find({}).toArray(function(err,docs) 
	{
		assert.equal(err,null);
		callback(docs);
	});
};

exports.removeDocument = function(db, document,collection, callback)
{
	//get the document from the collection
	var coll = db.collection(collection);
	//Delete the first  documents
	coll.deleteOne(document, function(err,result)
	{
		assert.equal(err,null);
		console.log("removed the document"+ document);
		callback(result); 	
	});
};

exports.updateDocument = function(db, document, update, collection, callback) 
{
	//get the collection from the documents
	var coll = db.collection(collection);
	
	//update the document where a is 2, set b equal to 1
	coll.updateOne(document, { $set:update }, null, function(err,result) //the part in the {} is the  specific field we are updating
	{
		assert.equal(err,null);	
		console.log("Updated the document with "+ update);
		callback(result); 
	});
}; 


