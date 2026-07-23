console.log(Math.PI); // -> 3.141592653589793
console.log(Math.E); // -> 2.718281828459045
 
console.log(Math.ceil(10.2)); // -> 11
console.log(Math.floor(10.2)); // -> 10
console.log(Math.round(10.2)); // -> 10

console.log(Math.random()); // -> ?

let randomInteger = (min, max) => {
    let _min = Math.ceil(min);
    let _max = Math.floor(max);
    return Math.floor(Math.random() * (_max - _min) + _min);
}
console.log(randomInteger(10,20)); // -> ?

console.log(Math.abs(-3.25)); // -> 3.25
console.log(Math.abs(10)); // -> 10

Console.log(Math.pow(2, 3)); // -> 8 => 23
console.log(Math.pow(4, 2)); // -> 16 => 42