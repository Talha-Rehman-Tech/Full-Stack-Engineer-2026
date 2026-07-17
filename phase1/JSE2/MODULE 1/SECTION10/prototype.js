figure = {
    getType: function() {
        return this.type ? this.type : "unknown";
    }
};
let circle = {
    type: "circle",
    center: {x:0, y:0},
    radius: 100
};
circle.__proto__ = figure;

console.log(figure.getType());
console.log(circle.getType());

Object.setPrototypeOf(circle, figure);
let proto = Object.getPrototypeOf(circle);
console.log(circle.getType());

let circle = Object.create(figure)
circle.type = "circle";
circle.center = {x:0, y:0},
circle.radius = 100;
console.log(circle.getType());

let Triangle = function(v1, v2, v3) {
    this.type = "triangle";
    this.vertices = [ v1, v2, v3];
};
Triangle.prototype = figure;
let triangle1 = new Triangle({x:0, y:0}, {x:50, y:50}, {x:10, y:100});
console.log(circle1.getType());
console.log(triangle1.getType());
