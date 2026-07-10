let multiply = (a b) => a + b; // -> Uncaught SyntaxError: Unexpected identifier
let result = multiply(10, 20);
console.log(result);

let multipl = (a, b) => a + b;
let result = multiply(10, 20); // -> Uncaught ReferenceError: multiply is not defined
console.log(result);

let multiply = (a, b) => a + b;
let result = multiply(10, 20);
console.log(result); // -> 30 ?

try {
    console.log('abc'); // -> abc
    conole.log('abc');
} catch (error) {
    console.log(error.message); // -> conole is not defined
}

console.log(100 / 0); // -> Infinity
console.log(100 * "2"); // -> 200
console.log(100 * "abc"); // -> NaN

"use strict";
iff (true) { //-> Uncaught SyntaxError: Unexpected token '{'
    console.log("true");
}
let a = b; // -> Uncaught ReferenceError: b is not defined

fun(); / -> Uncaught ReferenceError: fun is not defined

const someConstValue = 5;
someConstValue = 7; // -> Uncaught TypeError: Assignment to constant variable.

