// thisfolder is used for practice of the concepts which are learned in the previous days on JavaScript and the concepts are explained in the comments of the code.
// this folder is for JavaScript practice
// Variable declaration and initialization
// In JavaScript, variables can be declared using var, let, or const. The choice of which to use depends on the scope and mutability requirements of the variable.
// In JavaScript we have some rules for variable declaration and initialization
// A variable name must start with a letter, underscore (_), or dollar sign ($).
// Variable names can contain letters, digits, underscores, and dollar signs.
// Variable names are case-sensitive (e.g., myVar and myvar are different variables).
// reserved words (like JavaScript keywords) cannot be used as variable names.
// Variable names should be descriptive and meaningful to improve code readability.
// Varible names should not contain spaces or special characters (except for underscores and dollar signs).
// Variable names should not start with a digit.
// Variable names should not be too long or too short; they should strike a balance between clarity and brevity.
console.log('Hello, World!'); // This line prints "Hello, World!" to the console.
// the var keyword is used to declare a variable in JavaScript. It has function scope and can be redeclared and updated within its scope.
console.log(a); // This line attempts to print the value of variable 'a' to the console, but 'a' is not defined yet, so it will throw a ReferenceError.
var a = 10;// the keyword var is used to declare a variable in JavaScript. It has function scope and can be redeclared and updated within its scope.
console.log(a);
a =30; // This line updates the value of variable 'a' to 30. Since 'a' was declared with var, it can be reassigned.
console.log(a);
var a =50;// This line redeclares the variable 'a' and assigns it a new value of 50. Since 'a' was declared with var, it can be redeclared within the same scope.
console.log(a); // This line prints the updated value of variable 'a' to the console, which is now 50.
// the let keyword is used to declare a block-scoped variable in JavaScript. It cannot be redeclared within the same scope, but it can be updated.
let b = 20;
console.log(b);
b = 40; // This line updates the value of variable 'b' to 40. Since 'b' was declared with let, it can be reassigned.
console.log(b);
try{
let b = 60; // This line would throw a SyntaxError because 'b' is already declared with let in the same scope. 
} catch (error) {
    console.error(error.message);
}
// the const keyword is used to declare a block-scoped variable in JavaScript that cannot be reassigned or redeclared. It must be initialized at the time of declaration.
const c = 30;
console.log(c);
try{
    c = 50; // This line would throw a TypeError because 'c' is declared as a constant and cannot be reassigned.
} catch (error) {
    console.error(error.message);
}
//const c = 70; // This line would throw a SyntaxError because 'c' is already declared as a constant in the same scope.    
// scopes in JavaScript
// In JavaScript, scope refers to the accessibility or visibility of variables and functions in different parts of the code. There are three main types of scope: global scope, function scope, and block scope.
var globalVar = "I am a global variable"; // This variable is declared in the global scope and can be accessed from anywhere in the code.   
if (true) {
    var x = 10;
    let y = 20;
    console.log(x);  // 10 (var is function-scoped)
    console.log(y);  // 20 (let is block-scoped) 
}

console.log(x);  // 10 (var is function-scoped)
console.log(globalVar);  // "I am a global variable" (accessible globally   )
try{
    console.log(y);  // Error (let is block-scoped)
} catch (error) {
    console.error(error.message);
} 
if (true) {
  var x = 10; 
}
// Accessible outside the block
// because we are in same function
console.log(x);
// Declaring a global variable
let xs = 10;

function func() {
    
    // Declaring a local variable
    let y = 20;

    // Accessing Local and Global
    // variables
    console.log(xs,",", y);
}
func();
// global scope
// Global Variable accessed from within a function 
const x_CONST = 10;
function fun1() {
    console.log(x_CONST);
}
fun1();
// local scope
function fun2(){
    // This variable is local to fun2() and 
    // cannot be accessed outside this function
    let x = 10;
    console.log(x);
}
fun2();
// block scope
{// Var can Accessible inside & outside the block scope 
     var x = 10;
    // let , const Accessible only inside the block scope
    const y = 20;
    let z = 30;
    console.log(x);
    console.log(y);
    console.log(z);
}
console.log(x);
// lexical scope
// In JavaScript, lexical scope refers to the scope of a variable that is determined by its position in the source code. It means that a function can access variables from its own scope and from the scopes of its parent functions, based on where it was defined in the code.
function outerFunction() {
    let outerVar = "I am from outer function";  
    function innerFunction() {
        let innerVar = "I am from inner function";  
        console.log(outerVar);
    }
    innerFunction();
}
outerFunction();
//data types
// In JavaScript, data types are used to classify the different types of values that can be stored and manipulated in a program. JavaScript has several built-in data types, which can be categorized into two main groups: primitive data types and reference data types.
let num = 42; // Number
let str = "Hello, World!"; // String
let bool = true;    // Boolean
let n = null;           // Null 
let u;                 // Undefined
let sym = Symbol("unique"); // Symbol
let bigInt = 1234567890123456789012345678901234567890n; // BigInt
let obj = { name: "Alice", age: 30 }; // Object
let arr = [1, 2, 3, 4, 5]; // Array
let func1 = function() { return "I am a function"; }; // Function
let date = new Date(); // Date
let regex = /ab+c/; // Regular Expression
let map = new Map(); // Map
let set = new Set();
let weakMap = new WeakMap(); // WeakMap
let weakSet = new WeakSet(); // WeakSet
let promise = new Promise((resolve, reject) => { resolve("Done"); }); // Promise
let error = new Error("Something went wrong"); // Error 
console.log(num,str,bool,n,u,sym,bigInt,obj,typeof num,typeof str,typeof bool,typeof n,typeof u,typeof sym,typeof obj)
console.log(arr,typeof arr)
console.log(func1,typeof func1)
console.log(date,typeof date)
console.log(regex,typeof regex)
console.log(map,typeof map)
console.log(set,typeof set)
console.log(weakMap,typeof weakMap)
console.log(weakSet,typeof weakSet)
console.log(promise,typeof promise)
console.log(error,typeof error)
map.set('key1', 'value1');
map.set('key2', 'value2');
set.add(1);
set.add(2);
set.add(3);
console.log('map',map)
console.log('set',set)
// type conversion and type coericion
// Type conversion is the process of explicitly converting a value from one data type to another, while type coercion is the automatic conversion of values by JavaScript when performing operations involving different data types.
let num1 = 42; // Number
let str1 = String(num1); // Explicit conversion to String
console.log(str1, typeof str1); // "42" "string"
// type coercion
let result1 = "The answer is: " + num1;
console.log(result1); // "The answer is: 42"    
console.log("5" + 2); // "52"
console.log("5" - 2); // 3
console.log(true + 1); // 2
//truthy and falsy values
// In JavaScript, truthy and falsy values are used in conditional statements to determine the flow of execution. A truthy value is a value that evaluates to true in a boolean context, while a falsy value is a value that evaluates to false.
// falsy values in JavaScript include: false, 0, -0, 0n (BigInt zero), "", null, undefined, and NaN. All other values are considered truthy.
if (true) {
    console.log("This is a truthy value");
}
if (false) {
    console.log("This is a falsy value");
}
// operators
// In JavaScript, operators are symbols that perform operations on operands (values or variables). They can be categorized into several types, including arithmetic, assignment, comparison, logical, bitwise, and more.
// Arithmetic operators perform mathematical operations like addition (+), subtraction (-), multiplication (*), division (/), and modulus (%).
let a1 = 10;
let b1 = 5;
console.log(a1 + b1); // 15 //addition
console.log(a1 - b1); // 5 subtraction
console.log(a1 * b1);       // 50 multiplication
console.log(a1 / b1); // 2 division
console.log(a1 % b1); // 0 modulus
// Assignment operators are used to assign values to variables, such as =, +=, -=, *=, and /=.
let c1 = 10;
c1 += 5; // equivalent to c1 = c1 + 5
console.log(c1);
c1 -= 3; // equivalent to c1 = c1 - 3
console.log(c1);
c1 *= 2; // equivalent to c1 = c1 * 2
console.log(c1);
c1 /= 4; // equivalent to c1 = c1 / 4
console.log(c1);    
c1 %= 3; // equivalent to c1 = c1 % 3
console.log(c1);
c1 **= 2; // equivalent to c1 = c1 ** 2
console.log(c1);
c1 = 10; // Reset c1 to 10
// Comparison operators compare two values and return a boolean result, such as ==, ===, !=, !==, >, <, >=, and <=.
console.log(10 == "10"); // true (loose equality)   
console.log(10 === "10"); // false (strict equality)
console.log(10 != "10"); // false (loose inequality)
console.log(10 !== "10"); // true (strict inequality)
console.log(10 > 5); // true greater than
console.log(10 < 5); // false less than
console.log(10 >= 10);   // true greater than or equal to
console.log(10 <= 10); // true less than or equal to
console.log(10 <= 5); // false less than or equal to
// logical operators are used to combine or invert boolean values, such as && (AND), || (OR), and ! (NOT).
console.log(true && false); // false (AND)
console.log(true || false); // true (OR)
console.log(!true); // false (NOT)
let age = 20;
let result = age >= 18
? "Adult"
: "Minor";
console.log(result);
let name = "John";
console.log(`Hello ${name}`)
let message = `
Welcome
to
JavaScript`;
console.log(message);

// a function to solve whether a number is even or odd
function isEvenOrOdd(num) { 
    if (num % 2 === 0) {    
        return `The number ${num} is even.`;
    } else {
        return `The number ${num} is odd.`;
    }
}
console.log(isEvenOrOdd(4));
 let largestnumber=function findLargestNumber(a,b,c){
    if(a>b && a>c){
        return `The largest number is ${a}`;
    }
    if(b>a && b>c){
        return `The largest number is ${b}`;
    }else{
    return `The largest number is ${c}`;}
    return arguments;
}
console.log(largestnumber(10, 20, 30));
const greet = function () {
console.log("Hello");
};
greet();
const greets = () => {

console.log("Hello");
};
greets();

let ages = 20;

if (ages >= 18) {
    console.log("Eligible to vote");
}
let agess = 16;

if (agess >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
let marks = 85;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}
let _lage = 25;
let hasLicense = true;

if (_lage >= 18) {
    if (hasLicense) {
        console.log("Can drive");
    }
}
let day = 3;

switch(day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}