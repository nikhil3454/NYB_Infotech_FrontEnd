// Acessing the last element in the array using the length property.
const fruits=['apple','banana','orange','mango']
console.log(fruits[fruits.length -1]) //Negative indexing is not present in JavaScript
/* looping around the elements in the array can be done by using two methods:
1. by using a for loop
2. by using forEach() function */
let fruit
for(let i=0;i<fruits.length;i++){
 fruit += fruits[i]  // By using the for loop
}
console.log(fruit)
// to check the datatype of the array we can use 3 methods
console.log(typeof(fruits)) //returns object type
console.log(Array.isArray(fruits)) // returns true bool
console.log(fruits instanceof Array) //returns true bool
// indexof function is used to index of the particular element in an array it returns the index if the element is present and if not the function returns -1
console.log(fruits.indexOf('orange'))
let cars=new Array('Volvo','BMW','Audi')
console.log(cars)
console.log(cars.includes("BMW"))
// LastIndexof is the task
// All the elemets in a array can be removed by using splice() method by giving the  array length zero and pass an empyt array in the replacement session.
console.log(cars.splice(0,cars.length),cars)
//combination of two arrays is known as concatnation.
var a=[1,2,3,4]
var b =[5,6,7,8]
console.log(a.concat(b))
var d=[...a,...b] // two arrays can also be combined by using the  spread operator method
console.log(d)
// two arrays can also be combined by using the loops and push the items into any one array
const parentArray = [1, 2];
const childArray = [3, 4];
for (let item of childArray) {
   parentArray.push(item);
}
console.log(parentArray); // Output: [1, 2, 3, 4]
const nestedArray = [1, [2, 3], [4]];
const flattenedArray = nestedArray.flat();
console.log(flattenedArray); // Output: [1, 2, 3, 4]
// Iterating over the elemeents of the array can be also achieved by using the for of and for loops to display the elements .
// for in loop is used to iterate the keys of an object
/*The for...of and for...in loops in JavaScript are used for iteration, but they serve different purposes.

for...of Loop

The for...of loop iterates over the values of an iterable object such as arrays, strings, maps, sets, or custom iterables.

Example:

const array = [10, 20, 30];
for (const value of array) {
console.log(value); // Output: 10, 20, 30
}
Copy
for...in Loop

The for...in loop iterates over the keys (or property names) of an object. It is commonly used for objects but can also iterate over array indices.

Example:

const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
console.log(key); // Output: a, b, c
} */
for(k of d){
    console.log(k)
}
for(j in d){
    console.log(j)
}
/*In JavaScript, the some() and every() methods are used to test conditions on elements of an array. Both methods take a callback function as an argument and return a Boolean value, but they differ in how they evaluate the array.
some() Method
the some() method checks if at least one element in the array satisfies the given condition. If the callback function returns true for any element, some() immediately returns true. Otherwise, it returns false.
Syntax:
array.some(callback(element, index, array), thisArg);
Copy
Example:
const numbers = [2, 4, 6, 8];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // Output: true
Here, the method returns true because all numbers are even.
Key Points:
Stops iterating as soon as it finds a false condition.
Returns true for empty arrays (vacuously true).
Does not modify the original array.
Differences Between some() and every()
Condition Evaluation: some() returns true if any element satisfies the condition. every() returns true only if all elements satisfy the condition.
Behavior on Empty Arrays: some() returns false for empty arrays. every() returns true for empty arrays. */
// Some () method
console.log(d.some(i => i>1))
console.log(d.every(i=>i>1))
// join and sort
console.log(d.join(','))
d.sort()
console.log(d)



