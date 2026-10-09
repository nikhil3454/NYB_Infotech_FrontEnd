function DisplayDate(){
document.getElementById('demo').innerHTML=Date()
}
function Alert(){
    alert("We are checking whether the alert option is working or not")
}
/* JavaScript code is executed in 2 phases:
JavaScript is a single-threaded and synchronous language, meaning it executes one command at a time in a specific order. To understand how JavaScript code runs, it's essential to grasp the concepts of Execution Context and Call Stack.

Execution Context

An Execution Context is an environment where JavaScript code is evaluated and executed. It consists of two main phases:

1.Memory Allocation Phase: During this phase, variables and functions are stored in memory. Variables are initialized with undefined, while functions are stored as complete definitions.

2.Code Execution Phase: JavaScript executes the code line by line, updating variable values and invoking functions. */
/* Scopes in JavaScript Variables.
1.Global Scope :
Definition: Variables declared outside of any function or block.
Accessibility: Can be accessed from anywhere in the program.
2.Function scope(Local scope):
Definition: Variables declared inside a function (using var, let, or const) are accessible only within that function.
Scope Type	Declared With	Accessible Where?
Global	var, let, const	Anywhere
Function	var, let, const	Inside the function only
Block	let, const	Inside the block only
Module	var, let, const	Inside the module only
Lexical	N/A (concept)	Inner functions access outer variables
*/
let f=40
function hai(a,b){
    let m=100
    console.log(m)
    console.log(a,b,f)

}
hai(19,12)

//recursive function
let sum=0
let one=function rec(n){
    if (n==0){
        return 0
    }
    else{
        sum+=n
        one(n-1)
        return sum
    }
}
console.log(one(10))
/*IIFE Immediately invoked function expression  is a type of function that is called immediately after initialization is known as IIFE.
It’s wrapped in parentheses to be treated as an expression, followed by () to invoke it. IIFEs are often used to create a private scope and avoid polluting the global namespace.

Example: 

(function(name) {
console.log("I run immediately!,${name}");
}) (nikhil) */

/* function Function currying in JavaScript is a functional programming technique where a function that takes multiple arguments is transformed into a sequence of functions, each taking only one argument and returning another function until all arguments are provided.

It’s often used to make functions more reusable, modular, and composable.

function functionName(){

}
functionName(10,20,30,40) */
function curriedAdd(a){
    return function(b){
        return function(c){
            return function(d){
                return a+b+c+d;
            }
        }
    }
}
curriedAdd(10,20,30,40)
/* first class function
Pure function
impure function */
/*A first-class function is a function that is treated like any other variable in a programming language. This means that functions can be assigned to variables, passed as arguments to other functions, returned from other functions, and stored in data structures. This concept is fundamental in many programming languages, especially those that support functional programming.

Key Principles

Assigning Functions to Variables: Functions can be assigned to variables, allowing them to be invoked using the variable name.

const foo = () => {
    console.log("foobar");
};
foo(); // Outputs: foobar
Copy
Passing Functions as Arguments: Functions can be passed as arguments to other functions, enabling higher-order funct */

