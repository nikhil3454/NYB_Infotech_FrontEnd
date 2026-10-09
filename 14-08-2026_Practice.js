// In JavaScript, this is a special keyword that refers to the execution context of a function — the object that is currently calling or owning the function. Its value is determined at runtime based on how the function is invoked, not where it is defined .
console.log(this)
function hello(){
 console.log(this)
}
hello()
let ar=()=>{
    console.log(this)
}
ar()
let obj={
       name:'Varaprasad',
       hello(){
        console.log(this)
       },
       hello1: () =>{
        console.log(this)
       }
}
console.log(obj.name)
console.log(obj['name'])
obj.hello()
obj.hello1()
//  this reference for a particular functions like arrows functions can be changed using  call, apply and bind functions
// call, apply and bind functions
 function hello2(a,b){
    console.log(this)
    console.log(a+b)
 }
 hello2()
 hello2.call(obj,10,20)
// 1st argument will be the object reference which we want and the remainig are the arguments for the function.
//apply function
hello2.apply(obj,[10,20])
//bind function
hello2.bind(obj,10,20)()
// apply this keyword on arow functions and the change reference functions also
"use strict";

// An object to test with
const obj1 = { name: "Custom Object" };

// Regular function example
function regularFunction() {
    console.log("Regular Function this.name:", this?.name);
}

// Arrow function example
const arrowFunction = () => {
    console.log("Arrow Function this.name:", this?.name);
};

// Bind, Call, Apply on regular function
regularFunction.bind(obj1)();   // "Custom Object"
regularFunction.call(obj1);     // "Custom Object"
regularFunction.apply(obj1);    // "Custom Object"

// Bind, Call, Apply on arrow function
arrowFunction.bind(obj1)();     // undefined (or global/window in non-strict mode)
arrowFunction.call(obj1);       // undefined
arrowFunction.apply(obj1);      // undefined

// Demonstrating lexical `this` in arrow function
const outerObj = {
    name: "Outer Object",
    arrowMethod: () => {
        console.log("Lexical this.name:", this?.name);
    },
    regularMethod: function () {
        console.log("Regular this.name:", this?.name);
    }
};

outerObj.arrowMethod();   // undefined (this is from outer scope, not outerObj)
outerObj.regularMethod(); // "Outer Object"


