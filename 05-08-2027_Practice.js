console.log("Hello this is a JS file");
//single line comment in javascript //
/* Multi-Line comment in javascript*/
/* Variables are used to store the data in the memory location
We have to use the data in the future and by using variables we store data types and the data types has the value
Variables in javascript are of three types and they are var, let, and const. The var is used to declare a variable and it can be re-declared and updated. The let is used to declare a variable and it can be updated but not re-declared. The const is used to declare a variable and it cannot be updated or re-declared.
*/
/* There are two types of data types are present
1. Primitive data types stores single values in a single memory location.
2. Reference/ Non-Primitive data types stores multiple values in a single memory location.
*/
/*rules for naming variables in javascript
1. The variable name should start with a letter, underscore, or dollar sign.
2. The variable name can contain letters, numbers, underscores, or dollar signs.
3. The variable name should not be a reserved keyword.
4. The variable name should not contain spaces.
5. The variable name should be meaningful and descriptive.
6. The variable name should be case-sensitive.
7. The variable name should not start with a number.
8. The variable name should not contain special characters except for underscore and dollar sign.
9. The variable name should not be too long or too short.
10. The variable name should not be the same as a built-in object or function name.
*/
/* errors in javascript
1. SyntaxError: This error occurs when there is a syntax error in the code.
2. ReferenceError: This error occurs when a variable is not defined.
3. TypeError: This error occurs when a variable is not of the expected type.
4. RangeError: This error occurs when a number is out of range.
5. EvalError: This error occurs when the eval() function is used incorrectly.
6. URIError: This error occurs when the encodeURI() or decodeURI() function is used incorrectly.
7. InternalError: This error occurs when an internal error occurs in the JavaScript engine.
8. AggregateError: This error occurs when multiple errors are thrown in a single operation. 
*/
let a=10 // Declaring and initializing a variable
console.log(a)
console.log(typeof(a)) // number datatype
let abc=30.98
console.log(abc)
console.log(typeof(abc)) // number datatype
let name='nikhil kumar'
console.log(name)
console.log(typeof(name)) // string datatype
let bool= true
console.log(bool)
console.log(typeof(bool)) // boolean datatype
let k
console.log(k)
console.log(typeof(k)) // undefined datatype
let n= null
console.log(n)
console.log(typeof(n)) // Null datatype but the typeof null is an object in javascript
let sym=Symbol('nikhil')
console.log(sym)
console.log(typeof(sym)) // symbol datatype
let obj={name:'nikhil', age:22}
console.log(obj)
console.log(typeof(obj)) // object datatype 
let arr=[1,2,3,4,5]
console.log(arr)
console.log(typeof(arr)) // array datatype but the typeof array is an object in javascript
let func=function(){
    console.log("This is a function")
}   
func() // calling the function
console.log(typeof(func)) // function datatype
let date=new Date()
console.log(date)
let regex=/[a-z]/g
console.log(regex)
console.log(typeof(regex)) // object datatype


/* The typeof operator is used to find the data type of a variable in javascript and the data types in javascript are of two types and they are primitive and non-primitive data types. The primitive data types are number, string, boolean, null, undefined, and symbol. The non-primitive data types are object, array, and function.*/

// This is the Javascript practice for 06-08-2026
/* The non-primitive data types are used to store multiple values in a single memory location and they are object, array, and function. The object is used to store key-value pairs and the array is used to store multiple values in a single memory location. The function is used to perform a specific task and it can be called multiple times.
It also contains E.S.6 features like let, const, arrow functions, template literals, destructuring, default parameters, rest parameters, spread operator, classes, modules, promises, async/await, and many more. The E.S.6 features are used to write cleaner and more efficient code in javascript.
*/
// Write a function to calculate the salary of an employee without using return statement and the function should take two parameters name and days and the function should calculate the salary of the employee by multiplying the pay per day with the number of days and the pay per day is 2000 and the function should print the salary of the employee in the console.
function Salary(name,days){
    let pay_per_day=2000
    console.log("Monthly Salary of "+name+" is: "+(pay_per_day*days))
}
Salary("John", 20)
// with the return statement
function SalaryWithReturn(name,days){
    let pay_per_day=2000
    console.log("Monthly Salary of "+name+" is: "+(pay_per_day*days))
    return "Monthly Salary of "+name+" is: "+(pay_per_day*days)
}
console.log(date.getFullYear()) // 2024
console.log(date.getMonth()) // 5
console.log(date.getDate()) // 6
console.log(date.getDay()) // 4
console.log(date.getHours()) // 10
console.log(date.getMinutes()) // 30
console.log(date.getSeconds()) // 45
console.log(date.getMilliseconds()) // 123
console.log(date.getTime()) // 1628253045123
console.log(typeof(date)) // object datatype
let regex1=/hello/i;
console.log(regex1.test("Hello")) // true
console.log(regex1.test("hello")) // true
console.log(regex1.test("HELLO")) // true
let regex2=new RegExp('hello','i');
console.log(regex2.test("Hello")) // true
console.log(regex2.test("hello")) // true
console.log(regex2.test("HELLO")) // true
let pattern = /cat/i;
console.log(pattern.test("I have a Cat")); // true
// Creating a Map
const myMap = new Map();

// Adding key-value pairs
myMap.set('name', 'Alice');
myMap.set(42, 'The answer');
myMap.set({ id: 1 }, 'Object as key');

// Getting values
console.log(myMap.get('name')); // Alice

// Checking existence
console.log(myMap.has(42)); // true

// Deleting a key
myMap.delete(42);

// Size of the Map
console.log(myMap.size); // 2

// Iterating over Map
for (const [key, value] of myMap) {
    console.log(key, value);
}


let l=new Map()
l.set('name','nikhil')
l.set('age',22)
console.log(l)
//operators in javascript
//arithmetic operators
let x=10
let y=5 
// addition
console.log(x+y) // 15      
// subtraction
console.log(x-y) // 5
// multiplication
console.log(x*y) // 50
// division
console.log(x/y) // 2
// modulus
console.log(x%y) // 0   
// exponentiation
console.log(x**y) // 100000
// increment
console.log(++x) // 11
// decrement
console.log(--y) // 4
// assignment operators
let z=10
z+=5 // z=z+5   
