// 1. Variable Types
// const, let, var

const firstName = "Ankit" // const cannot be reassigned / changed
// const firstName = "Ram" // cannot be reassigned
// firstname = "Ram" // cannot be changed

let lastname = "Rai" // let cannot be reassigned / changed
// let lastName = "Sharma" // cannot be reassigned
lastName = "Sharma" // csn be changed

var age = 25 // var cannot be reassigned / changed
var age = 30 // can be reassigned
age = 32 // can be changed

// scope of variables { }

console.log(continent) // undefined due to hoisting

if (true) {
    const city = "Kathmandu" // block scope
    let country = "Nepal" // block scope
    var continent = "Asia" // function scope

    console.log(city)
    console.log(country)
    console.log(continent)
}

// console.log(city) // cannot be accessed outside the block
// console.log(country) // cannot be accessed outside the block
console.log(continent) // can be accessed outside the block

// 2. Data Types
const stringType = "This is a string" // String "", '', ``
const numberType = 12345 // Number 1, 2, 3, 4.5, 0.5
const booleanType = true // Boolean true, false
const nullType = null // Null - intended empty value
let undefinedType // Undefined undefined // not assigned any value
let bigNumber = 1234567890123456789012345678901234567890n // BigInt if the number is greater than 2^31
const symbolType1 = Symbol("This is a symbol") // Symbol - unique identifier
const symbolType2 = Symbol("This is a symbol") // Symbol - unique identifier
// symbolType1 does not equal to symbolType2

console.log(typeof stringType) // string
console.log(typeof nullType) // object (empty object)
console.log(typeof undefinedType) // undefined
console.log(typeof bigNumber) // bigint
console.log(symbolType1 === symbolType2) // false

// 3. Operators
// = (equal)
let x1 = 10 // one =, assignment operator
let x2 = 10 == "10" // two =, comparison operator
let x3 = 10 === "10" // three =, strict comparison operator

console.log(x1) // 10
console.log(x2) // true
console.log(x3) // false

console.log(true == "1")
console.log(10.2 === "10.2")
console.log(null == undefined)
console.log(0 == undefined)
console.log(0 == null)

// Arthematic / Mathematical Operators
console.log(5 + 3) // Addition
console.log(5 - 3) // Subtraction
console.log(5 * 3) // Multiplication
console.log(5 / 3) // Division
console.log(5 % 3) // Modulus / Remainder
console.log(5 ** 3) // Exponentiation
let num1 = 5
console.log(num1++) // 5 (returns the value then increments)
console.log(num1--) // 6 (returns the value then decrements)

// Assignment Operators
let num2 = 10
num2 += 5 // num2 = num2 + 5
console.log(num2)
// any arithematic operator can be used with assignment operator

// Comparison Operators
console.log(5 > 3) // Greater than
console.log(5 < 3) // Less than
console.log(5 >= 3) // Greater than or equal to
console.log(5 <= 3) // Less than or equal to
console.log(5 != 3) // Not equal to
console.log(5 === "5") // Strict equal to
console.log(5 !== "3") // Strict not equal to

// Logical Operators - Returns boolean value
console.log(true && false) // AND
console.log(true || false) // OR
console.log(!true) // NOT

// Nullish Coalescing Operator (??)
let stats = "Ram"
let var2 = stats ?? "N/A" // if stats is null or undefined, return "N/A"
console.log(var2) // "N/A"

// Ternary Operator
let age1 = 18
let canVote = age1 >= 18 ? "Yes, can vote" : "No, cannot vote" // if age1 is greater than or equal to 18, return "Yes", else return "No"
console.log(canVote) // "Yes"

// conditional (if-else) statements
if (true) {
    console.log("This is true")
}

if (false) {
    console.log("if block");
} else if (1 == 1) {
    console.log("else if block");
}
else {
    console.log("else block");
}

// switch case
let day = 2
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Other day");
        break;
}

// loops
// for loop
for (let i = 0; i < 5; i++) {
    console.log("For loop iteration: " + i);
}

// while loop
let j = 0
while (j < 5) {
    console.log("While loop iteration: " + j);
    j++
}

// do-while loop

do {
    console.log("Runs 1")
} while (false)