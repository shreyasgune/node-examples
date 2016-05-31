var http = require('http'); 
 
var hostname = 'localhost';
var port = 3000;

//create a server , print out the request message to console and then give out a response

var server = http.createServer(function(req,res) 
{
	//lets get access to the headewrs
	console.log(req.headers);
	
	//response message
	res.writeHead(200, { 'Content-Type': 'text/html' } ); 
	res.end('\n<h1> Hello Shreyas </h1>\n'); 
})  

//Start the server
server.listen(port, hostname, function() 
{
	console.log('Server running at http://'+hostname+' and port: '+port); 
})  
