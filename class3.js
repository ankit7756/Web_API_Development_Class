// List / Array
const arr = [3, 4, 5]
const arr2 = [1, true, undefined, "Hello"]
// data type is not restricted in JS
// Spread operator
const arr3 = [arr, 3, 5] // [[3,4,5], 3, 5]
const arr4 = [...arr, 3, 5] // [3, 4, 5, 3, 5]
const arr5 = [...arr, ...arr2] // [3, 4, 5, 1, true, undefined, "Hello"]
console.log(arr5);
arr.push(10) // adds element at the end
console.log(arr); // [3, 4, 5, 10]
const popper = arr.pop() // removes element from the end
console.log(popper); // 10
arr.unshift(100); // adds element at the start
const shifted = arr.shift(); // removes element from the start
console.log(shifted); // 100
console.log(arr); // [4, 5]

// array access
console.log(arr[0]); // 4
console.log(arr.at(0)); // 4
arr[0] = 500 // although variable is const, we can change the elements

// Iterate array
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Iterate with index
for (let index in arr) {
    console.log(`Index is ${index} and value is ${arr[index]}`);
}

// Iterate with value
for (let value of arr) {
    console.log(`Value is ${value}`);
}

// Object/Map/Record
const person = {
    firstName: "Ankit",
    lastName: "Kumar",
    age: 24,
    isAdmin: false,
    hobbies: ["Reading", "Coding", "Gaming"],
    address: {
        street: "Kathmandu",
        country: "Nepal"
    }
}

console.log(person)
console.log(person.firstName); // Ankit
console.log(person["firstName"]); // Ankit

// modify, add, delete property

person.age = 25; // modify
person.isAdmin = true; // modify
console.log(person.hobbies[1]); // Coding
console.log(person.address.country); // Nepal
delete person.hobbies; // delete property
console.log(person);

// Nullish check
console.log(person.address.home) // undefined
console.log(person.address.home.number) // error, cannot read property 'number' of undefined
console.log(person.address.home?.number) // undefined, optional chaining
console.log(person.address?.home?.number?.prefix) // undefined

console.log(person.address?.home?.number ?? 0) // 0, nullish coalescing
console.log(person.address?.continent ?? "Not specified") // "Not specified"
console.log(person.gender?.type ?? "N/A") // N/A, nullish coalescing

// Array / iterable functions
// forEach, map, filter, reduce
arr.toEach(
    (value, index) => {
        console.log(`Index is ${index} and value is ${value}`);
    }
)

// Callback can take 3 arguments value, index, array
arr.forEach(elem => console.log(elem * 2));
// forEach does not return anything

const mappedArr = arr.map(val => val * 3);
console.log(mappedArr); // [1500, 15]
const mappedArr2 = arr.map((value, index) => {
    return value + index
})

console.log(mappedArr2); // map returns a new array / with same length

const names = ["Ankit", "Bob", "Alice", "Charlie"];
const components = names.map(
    name => `<li>${name}</li>`
)

console.log(components); // ["<li>Ankit</li>", "<li>Bob</li>", "<li>Alice</li>", "<li>Charlie</li>"]

const filteredArr = arr.filter(val => val > 10);
console.log(filteredArr); // filter returns a new array / with length <= original array

const reducedValue = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0 // 2nd args, initial value of accumulator
);

console.log(reducedValue); // reduce returns single aggregated value

// const cart = {
// { name: "Milk", category: "Dairy", price: 2, quantity: 2, inStock: true },
// { name: "Shampoo", category: "Personal Care", price: 5, quantity: 1, inStock: false },
// { name: "Egg", category: "Grocery", price: 3, quantity: 12, inStock: true },
// };

// Use filter to keep only in-stock grocery items
// Use map to transform each kept item into {name, quantity, totalPrice
// Use reduce to compute the grandTotal cost of the kept items

const groceryItems = cart
    .filter(item => item.inStock && item.category === "Grocery")
    .map(item => ({
        name: item.name,
        quantity: item.quantity,
        totalPrice: item.price * item.quantity
    }));

const grandTotal = groceryItems.reduce(
    (acc, item) => acc + item.totalPrice,
    0
);


