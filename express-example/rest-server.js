var express =  require('express');
var http = require('http'); 
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;

var app = express(); 
app.use(morgan('dev')); 
app.use(bodyParser.json()); //if the body of the incoming message is JSON, parse it and convert it into JS objects that can be accessed. 


var dishRouter = express.Router();
dishRouter.use(bodyParser.json()); // if the request contains JSON, it will be available as a JS object
dishRouter.route('/')
.all(function(req,res,next) 
{
	res.writeHead(200,{'Content-Type':'text/plain'});
})
.get(function(req,res,next)
{
	res.end('Will send all the albums')
})
.post(function(req,res,next)
{
	res.end('will add the album: '+req.body.name+' with details:'+req.body.description);
})
.delete(function(req,res,next)
{
	res.end('Deleting all albums');
});

dishRouter.route(':albumId')
.all(function(req,res,next)
{
	res.writeHead(200,{ 'Content-Type':'text/html'} ); 
});

app.use('/albums',dishRouter); 


/*

app.all('/albums', function(req,res,next) //parser continutes with 'next'
{
	res.writeHead(200, {'Content-Type':'text/plain'});
	next(); 
});

app.get('/albums', function(req,res,next) 
{
	res.end('Will send all the albums to you!') 
}); 

app.post('/albums',function(req,res,next)
{
	res.end('Will add the album: '+req.body.name+' with details: '+req.body.description);
}); 

app.delete('/albums', function(req,res,next)
{
	res.end('Deleting all albums');
}); 


app.get('/albums/:albumID',function(req,res,next)
{
	res.end('Will send details of the album: '+req.params.albumID+' to you')
}); 


app.put('/albums/albumID',function(req,res,next)
{
	res.writeHead('Updating the album :'+req.params.albumID+'\n');
	res.end('Will update the album: '+req.body.name +' with details: '+req.body.description);
});

*/


app.use(express.static(__dirname+'/public')); //run the app flexibly


app.listen(port,hostname, function()
{
	console.log('Server running at http://'+hostname+':'+port);
});

/*
app.use(function(req,res,next) 
{
	res.writeHead(200,{'Content-Type':'text/html'}); 
	res.end('<html><body><h1>Hello World</h1></body></html>');
}); 

var server = http.createServer(app);	
server.listen(port,hostname,function() 
{
	console.log('Server running at http://'+hostname+' and port:'+port);
});

*/ 

