// function
function greet(name) {
    return `Hello, ${name}!`;
}

let first = greet("Alice");
console.log(first); // "Hello, Alice!"

// no restrictions on parameter and argument types
function greetNormal() {
    console.log("Hello, World!");
}
greetNormal(); // "Hello, World!"

// Arrow function
const arrowFunc = () => "Hello arrow function!";
console.log(arrowFunc()); // "Hello arrow function!"

const arrowFunc2 = (firstName) => {
    // function statement
    return "Hello" + " " + firstName;
}

console.log(arrowFunc2("Ankit")); // "Hello Ankit"

const add = (a, b) => a + b;
const subtract = (a, b) => {
    return a - b;
}

// Practice problems
// make a function with "function" keyword named average1
// that takes three parameters and returns their average
// make the same function using arrow function named average2 without scope
// make the same function using arrow function named average3 with scope
// print all 3 function calls with different arguments

function average1(a, b, c) {
    let avg = (a + b + c) / 3
    return avg;
}

const average2 = (a, b, c) => (a + b + c) / 3;

const average3 = (a, b, c) => {
    let avg = (a + b + c) / 3;
    return avg;
}

console.log(average1(10, 20, 30)); // 20
console.log(average2(15, 25, 35)); // 25
console.log(average3(20, 30, 40)); // 30

// Higher Order Functions and Callbacks
const cb1 = (a, b, opertion) => {
    console.log("Starting operation");
    // logics
    return opertion(a, b)
}

let num1 = 10
let num2 = 5
let sum = (a, b) => {
    let sum = a + b
    console.log("Sum is:", sum);
    return sum;
}

cb1(num1, num2, sum); // prints "Starting operation" and "Sum is: 15"

// Practice
// make a function named userStatus that takes 2 parameters
// first parameter is a string parameter
// second parameter is a callback function that username as parameter
// make 2 function to pass in the callback
// first function is named isAdmin that returns that if username is "admin", else lalse
// second function is named isGuest that returns true if username is "guest", else false
// call userStatus with different usernames and both functions and print the results

const userStatus = (username, callback) => {
    return callback(username);
}

const isAdmin = (username) => {
    return username === "admin";
}

const isGuest = (username) => {
    return username === "guest";
}

let scenario1 = userStatus("admin", isAdmin);
let scenario2 = userStatus("guest", isGuest);
let scenario3 = userStatus("user", isAdmin);
let scenario4 = userStatus("visitor", isGuest);

console.log(scenario1, scenario2, scenario3, scenario4); // true


// practice with anonymous functions
// pass an anonymous function as callback to check if user is "student"
let scenario5 = userStatus("student", function (username) {
    return username === "student";
});

console.log(scenario5); // true

let scenario6 = userStatus("teacher", function (username) {
    return username === "student";
});

console.log(scenario6); // false

// Closures
function outerFunction(outerVariable) {
    console.log("Outer Function Logic");
    return function innerFunction(innerVariable) {
        console.log("Outer Variable:", outerVariable);
        console.log("Inner Variable:", innerVariable);
    }
}

const newFunction = outerFunction("outside"); // runs outerFunction
newFunction("inside"); // runs innerFunction with outerVariable preserved

const counter = (start) => {
    let count = start;
    return () => {
        count++;
        return count;
    }
}

const addOne = counter(5);
console.log(addOne()); // 6
console.log(addOne()); // 7
console.log(addOne()); // 8

// Practice
// make a function studentRecord that takes a parameter name, age
// inside studentRecord, make another function addMarks that takes a parameter
// (science, math, english)
// addMarks should print name, age and average of marks
// studentRecord should return addMarks function
// call studentrecord with different names and store the returned function

function studentRecord(name, age) {
    return function addMarks(science, math, english) {
        let average = (science + math + english) / 3;
        console.log(`Name: ${name}, Age: ${age}, Average Marks: ${average}`);
    }
}
const student1 = studentRecord("Ankit", 20);
student1(85, 90, 95); // Name: Ankit, Age: 20, Average Marks: 90
const student2 = studentRecord("Rio", 22);
student2(80, 85, 90); // Name: Rio, Age: 22, Average Marks: 85
const student3 = studentRecord("Sam", 21);
student3(75, 80, 85); // Name: Sam, Age: 21, Average Marks: 80


studentRecord("Binnol", 24)(88, 92, 96); // Name: Luna, Age: 24, Average Marks: 92

