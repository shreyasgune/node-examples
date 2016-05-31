var rectmod = require('./rectangle-callback.js');
var rect = { area : function(x,y) { return (x*y) } } ;



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




solveRect(4,3); 
solveRect(-3,4);




