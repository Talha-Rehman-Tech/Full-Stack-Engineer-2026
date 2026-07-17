let createPoint  = function(x, y) {
    let obj = {};
    obj.x = x;
    obj.y = y;
    return obj;
};
let point1 = createPoint(1,1);
let point2 = createPoint(2,2);
console.log(point1.x); // ->  1
console.log(point2.x); // -> 2

let ColoredPoint = function(x, y, color) {
    let _info = "... object under construction";
    let _color = color;
    console.log(_info);
    
    this.x = x;
    this.y = y;
    this.getColor = function() {return _color};
};
let coloredPoint1 = new ColoredPoint(1, 1, "red");
let coloredPoint2 = new ColoredPoint(2, 2, "green"); 
console.log(coloredPoint1.getColor());    // -> red
console.log(coloredPoint2.getColor());    // -> green
console.log(coloredPoint1._color);   // -> undefined !!!

let emptyObject = new Object();
console.log(emptyObject.constructor.name); 

let reallyEmptyObject = Object.create(null);
console.log(typeof reallyEmptyObject.constructor);
