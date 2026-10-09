/* Conditional Statements in JavaScript 
Conditional statements are used to perform different actions based on different conditions. The most common conditional statements in JavaScript are if, else if, else, else-if and switch statements. The if statement is used to execute a block of code if a specified condition is true. The else statement is used to execute a block of code if the condition is false. The else-if statement is used to specify a new condition to test, if the first condition is false. The switch statement is used to perform different actions based on different conditions.*/
// if satement syntax
/*if(condition){
    // block of code to be executed if the condition is true
}*/
function checkEligibility(age){
if (age>=18){
    console.log("You are eligible to vote");
}
}
let age=20
checkEligibility(age) // You are eligible to vote
if(true){
    console.log("This is true");
}
if(false){
    console.log("This is false");
}
if(1){
    console.log("This is true");
}
if(0){
    console.log("THis is false");
}
/* if-else statement syntax
if(condition){
    // block of code to be executed if the condition is true
} else {
    // block of code to be executed if the condition is false
} */
let number=10
if(number%2==0 && number>0){
    console.log("The number is  positive and even");
}
else{
    console.log("The number is not positive or even");
}
// if-else-if statement syntax
/*if(condition1){
    // block of code to be executed if condition1 is true
} else if(condition2){
    // block of code to be executed if condition2 is true
} else {
    // block of code to be executed if both condition1 and condition2 are false
}*/
function gradeChecker(marks){
    if (marks>=90){
        console.log("You got A grade");
    } else if (marks>=80){
        console.log("You got B grade");
    } else if (marks<=80 && marks>=70){
        console.log("You got C grade");
    } else {
        console.log("You got D grade");
    }   
}
console.log(gradeChecker(95)) // You got A grade


/* if-else-if statement syntax and switch statement is task and truthy and falsy values are also in the task */
/*In javascript the truthy values are the values that are considered true in a boolean context. The truthy values in javascript are:
1. true
2. any non-zero number
3. any non-empty string 
4. any object
5. any array
6. any function
7. any non-null value
The falsy values in javascript are the values that are considered false in a boolean context. The falsy values in javascript are:
1. false
2. 0
3. -0 Neagative Zero
4. 0n BigInt Zero
5. "" Empty String
6. null
7. undefined
8. NaN Not a NUmber
*/
// switch statement syntax
/*switch(expression){
    case value1:    
        // block of code to be executed if the expression is equal to value1
        break;  
    case value2:
        // block of code to be executed if the expression is equal to value2
        break;
    default:
        // block of code to be executed if the expression is not equal to any of the values
}*/
function reward(amount){
    switch(true){
        case(amount>=1000):
            console.log("You got a gold reward");
            break;
        case(amount>=500):
            console.log("You got a silver reward");
            break;
        case(amount>=100):
            console.log("You got a bronze reward");
            break;
        default:
            console.log("You did not get any reward");            
    }
}
reward(600)
reward(1100)
if(true){
    console.log("This is a  truthy value");
}
if(1){
    console.log("This is a  truthy value and it is any non-zero number");
}
if('Hello'){
    console.log("This is a  truthy value and it is any non-empty string");
}
if([]){
    console.log("This is a  truthy value and it is any array");
}
if({}){
    console.log("This is a  truthy value and it is any object");
}
if(function(){}){
    console.log("This is a  truthy value and it is any function");
}   
if(10n){
    console.log("This is a  truthy value and it is any non-null value");
}
if (false){
    console.log("This is a falsy value");
}
if (0){
    console.log("This is a falsy value and it is 0");
}
if (-0){
    console.log("This is a falsy value and it is -0");
}
if (0n){
    console.log("This is a falsy value and it is 0n");
}
if (""){
    console.log("This is a falsy value and it is an empty string");
}   
if (null){
    console.log("This is a falsy value and it is null");
}
if (undefined){
    console.log("This is a falsy value and it is undefined");
}
if (NaN){
    console.log("This is a falsy value and it is NaN");
}

