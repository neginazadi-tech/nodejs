var rect = require('./rectangle');
function solveRect (l,b){
    if(l<= 0 || b<=0){
        console.log("rectangle dimension should be greater than zero");
    }
    else{
       rect(l,b, (err, rectangle)=> {
           if(err){console.log("Error" + err);}
           else {
             console.log("area is " + rectangle.area());  
             console.log("perimeter is " + rectangle.perimeter());  
           }
       })
    }
}
solveRect(-2,3);
solveRect(2,3);