let array1 = [10, 20, 30];
let array2 = ["cat", "dog"];
let array3 = array1.concat(array2); // -> [10, 20, 30, "cat", "dog"];
console.log(array1.length); // -> 3
console.log(array3[0]); // -> 10
console.log(array3[3]); // -> "cat"

let numbers = [10, 20, 30, 50, 80, 90, 100]; // -> [10, 20, 30, 50, 80, 90, 100]
console.log(numbers[0]); // -> 10
numbers.reverse(); // -> [100, 90, 80, 50, 30, 20, 10]
console.log(numbers[0]); // -> 100

let petsArray = ["cat", "dog", "hamster"];
for( let pet of petsArray) {
    console.log(pet); // -> cat -> dog -> hamster
};

let anotherPetsObj = {"snakes": 1,"cats": 3,"dogs": 2};
Object.keys(anotherPetsObj).forEach(key=>console.log(key)); // -> snakes -> cats -> dogs
Object.values(anotherPetsObj).forEach(key=>console.log(key)); // -> 1 -> 3 -> 2
Object.entries(anotherPetsObj).forEach(key=>console.log(key)); // -> ["snakes", 1] -> ["cats", 3] -> ["dogs", 2]

let petsObj = {"cats": 1, "dogs": 3, "hamsters": 2};
let newPetsObj = {...petsObj, "sharks": 1}; // -> {cats: 1, dogs: 3, hamsters: 2, sharks: 1}
