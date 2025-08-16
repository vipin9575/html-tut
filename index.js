console.log("Hello, World! This is the index.js file.");

function add (a,b){
    return a + b;
}

console.log("The sum of 5 and 3 is: " + add(5, 3));

const result = "Alice"/ 22;

console.log(result);

let name = "B";
console.log("The name is: " + name);

console.log("-------------------------------------------------------");
console.log("-------------------"+window.apple); // "red" ← from index.html script tag

// Number
console.log(typeof 42);                  // "number"
console.log(typeof 3.14);                // "number"
console.log(typeof NaN);                 // "number"
console.log(typeof Infinity);            // "number"
console.log("-----------------##########--------------------");
// String
console.log(typeof "Hello");             // "string"
console.log(typeof 'World');             // "string"
console.log(typeof `Template Literal`);  // "string"
console.log("-----------------##########--------------------");
// Boolean
console.log(typeof true);                // "boolean"
console.log(typeof false);               // "boolean"
console.log("-----------------##########--------------------");
// Undefined
let a;
console.log(typeof a);                   // "undefined"
console.log(typeof undefined);           // "undefined"
console.log("-----------------##########--------------------");
// Null (⚠️ JavaScript bug)
console.log(typeof null);                // "object" ← known bug
console.log("-----------------##########--------------------");
// BigInt
console.log(typeof 12345678901234567890n);  // "bigint"
console.log("-----------------##########--------------------");
// Symbol
console.log(typeof Symbol("id"));        // "symbol"


// var:
var person = "Alice";
var person = "Vipin";
person = "Bob";
console.log("Using var, person is now: " + person); // "Bob"

// let:
let p1 = "Alice";
// let p1 = "Vipin";
p1 = "Bob";
console.log("Using let, person is now: " + person); // "Vipin"

const p2 = "Alice";
p2 = "Vipin"; 
console.log("Using const, person is now: " + p2);

