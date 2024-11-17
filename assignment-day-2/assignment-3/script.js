// Create an array of fruits
let fruits = ["Apple", "Banana", "Cherry", "Orange"];

// Remove the first element
let removedFirst = fruits.shift();

// Remove the last element
let removedLast = fruits.pop();

// Add a new element at the beginning
let addedFirst = fruits.unshift("Mango");

// Add a new element at the end
let addedLast = fruits.push("Pineapple");

// Console log all the arrays along with the original modified array
console.log("Original modified array:", fruits);
console.log("Removed first element:", removedFirst);
console.log("Removed last element:", removedLast);
