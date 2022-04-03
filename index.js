var rect = require('./rectangle');
function solveRect (l,b){
    if(l<= 0 || b<=0){
        console.log("rectangle dimension should be greater than zero");
    }
    else{
        console.log("The perimeter of the rectangle is " + rect.perimeter(l, b));
        console.log("The area of the rectangle is " + rect.area(l, b));
    }
}
solveRect(-2,3);
solveRect(2,3);