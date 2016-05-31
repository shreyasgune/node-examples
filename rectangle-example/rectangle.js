var rectmod = require('./rect-mod.js');
var rect = { area : function(x,y) { return (x*y) } } ;

function solveRect(l,b) 
{
	console.log("Length: "+l);
	console.log("Breadth:"+b); 

	console.log("Area : "+ rect.area(l,b));
	console.log("Area from Module:"+rectmod.area(l,b));  
} 

solveRect(4,3); 





