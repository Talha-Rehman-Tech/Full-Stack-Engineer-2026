let re1 = new RegExp('c.t');
let re2 = /c.t/;
console.log(re1.test("cat")); // -> true
console.log(re2.test("cut")); // -> true
console.log(re2.test("ct")); // -> false

let re = /c.t/;
console.log(re.exec("haircut")); // -> ["cut", index: 4, input: "haircut", groups: undefined]
console.log(re.exec("ct")); // -> null

// String -> match, search, replace, ...
let re = /c.t/;
let str = "dog and cat";
console.log(str.match(re)); // -> ["cat", index: 8, input: "dog and cat", groups: undefined]
console.log(str.search(re)); // -> 8
console.log(str.replace(re, 'unicorn')); // -> dog and unicorn
console.log(str); // -> dog and cat

let re = /c\.t/;
console.log(re.exec("cut")); // -> null
console.log(re.exec("c.t")); // -> ["c.t", index: 0, input: "c.t", groups: undefined]
