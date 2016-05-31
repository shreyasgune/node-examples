var rectmod = require('./rectangle-callback.js');
var rect = { area : function(x,y) { return (x*y) } } ;
var argv = require('yargs')
    .usage('Usage: node $0 --l=[num] --b=[num]')
    .demand(['l','b']) 
    .argv;  


function solveRect(l,b) 
{
   rectmod(l,b,function (err,rectangle)
		{		
		if (err) { console.log(err); } 
		else 
		{
		
		console.log("Length: "+l);
		console.log("Breadth:"+b); 

		console.log("Area : "+ rect.area(l,b));
		console.log("Area from Module:"+rectangle.area());  
		} 

		});		 
};   



solveRect(argv.l,argv.b);
//solveRect(4,3); 
//solveRect(-3,4);




