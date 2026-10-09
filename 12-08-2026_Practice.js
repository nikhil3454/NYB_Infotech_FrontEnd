/* functions in JavaScript are blocks of code used to group statements that perform a specific task. They can be defined once and called multiple times. Functions can take parameters and return values. The syntax for defining a function is:
function functionName(parameters){
    // block of code to be executed 
}*/ 
/* functionName is the name of the function, and parameters are optional values that can be passed to the function. The block of code inside the function is executed when the function is called. Functions can also return values using the return statement. The syntax for returning a value from a function is:
the return statement is used to return a value from a function. The syntax for returning a value from a function is:
return value;
the variables defined inside a function are called local variables, and they can only be accessed within that function. The variables defined outside a function are called global variables, and they can be accessed from anywhere in the code.
the vaiables defined inside the parameters of a function are called parameters, and they can be used to pass values to the function. The values passed to the parameters are called arguments. The syntax for passing arguments to a function is:
function functionName(parameter1, parameter2, ...){
    // block of code to be executed 
}
functionName(argument1, argument2, ...);*/
function add(a,b){ // function to add two numbers in which a and b are parameters
    return a + b; // With return statement, the function will return the sum of a and b when called. The return value can be stored in a variable or used directly in an expression.
}
console.log(add(5,10)); // calling the function with arguments 5 and 10
// function without a return value
function addition(c,d){
    console.log(c+d);
}
console.log(addition(10,20))
// varying parameters and arguments
function varying(a=10,b,c,d,...f){
    console.log(a,b,c,d)
    console.log(arguments)
    console.log(f,typeof(f) )// a=10 is the known as the default parameter
    console.log(f.reduce((a,b)=>a+b,0)) // ...f the three dot symbols is known as rest parameters
}
varying(undefined,12,3,4,5,6,7,8,9
)
// rest parameters and argument objects
/* Types of functions in JavaScript. There are three types of functions :
1. Named Function : A function that has its own name when declared and its easier for debugging and reuse because the name shows up during execution and errors.
2.Anonymous Function: An anonymous function is a function that is declared without an explicit name and it is commonly used as an callback or assigned to a variable
3. Function Expression
A function expression is a function created as part of an expression and assigned to a variable or passed to another function. It can be named or anonymous.
const add = function(a, b) {
  return a + b;
4.Arrow Function:A new way to write functions using the = syntax. They are shorter and do not have their own this binding, which makes them useful in some cases.
const square = n => n * n;
console.log(square(4));*/
function multiply(a,b){
    return(a*b)
}
console.log(multiply(3,7)) // Named Function
let name=function(){
    console.log("This is an anonymous function.")
}
name()
const cube =n => n**3
console.log(cube(3))
/* Usages for different functions like anonymous functions are regularly used for rescursive function */
var h= 112
console.log(h)
h=11
console.log(h)
var y=30
console.log(h
)
let n=23
console.log(n)
let n=45
console.log(n)