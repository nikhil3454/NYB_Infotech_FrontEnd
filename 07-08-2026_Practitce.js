// Assignment: 07-08-2026 Practice
let a=10 // Declaring and initializing a variable
let b=20
let c="10"
console.log(a+=11)// a=a+11 short hand operators
console.log(a-=11)// a=a-11
console.log(a*=11)// a=a*11
console.log(a/=11)// a=a/11
console.log(a%=11)// a=a%11
console.log(a**=11)// a=a**11
/* Comparison operators in javascript
1. == : equal to operator
2. === : equal value and equal type operator 
3. != : not equal to operator
4. !== : not equal value or not equal type operator
5. > : greater than operator
6. < : less than operator
7. >= : greater than or equal to operator
8. <= : less than or equal to operator
Comparison operators are used to compare two values and return a boolean value (true or false) based on the comparison.*/
console.log(a==b) // false
console.log(a == c) // true because the value of a and c is same but the type is different
console.log(a===b) // false
console.log(a===c) // false
console.log(a!=b) // true   
console.log(a!==b) // true
console.log(a>b) // false
console.log(a<b) // true
console.log(a>=b) // false
console.log(a<=b) // true
let d=20
let e='20'
console.log(d==e) // true
console.log(d===e) // false
/* logical operators in javascript
1. && : logical AND operator
2. || : logical OR operator
3. ! : logical NOT operator
Logical operators are used to combine two or more conditions and return a boolean value (true or false) based on the conditions.*/
console.log(2<4)// true
console.log(2>4)// false
console.log(2<4 && 2>4) // false
console.log(2<4 && 2<4) // true
console.log(2<4 || 2>4) // true
console.log(2>4 || 2>4) // false
console.log(!(2<4)) // false
console.log(!(2>4)) // true
//bitwise operators in javascript
/* Bitwise operators are used to perform bit-level operations on binary numbers. The bitwise operators in javascript are:
1. & : bitwise AND operator 
2. | : bitwise OR operator
3. ^ : bitwise XOR operator
4. ~ : bitwise NOT operator
5. << : left shift operator
6. >> : right shift operator
7. >>> : unsigned right shift operator  
*/
console.log(5&1) // 1
console.log(5|1) // 5
console.log(5^1) // 4
console.log(~5) // -6
console.log(5<<1) // 10
console.log(5>>1) // 2
console.log(5>>>1) // 2
/* ternary operator in javascript
The ternary operator is a shorthand way of writing an if-else statement. It takes three operands and returns a value based on the condition. The syntax of the ternary operator is:
condition ? value1 : value2
*/
let x = 10;
let y = 20;
let z = (x > y) ? x : y; // z will be assigned the value of x if x is greater than y, otherwise it will be assigned the value of y
console.log(z); // 20
// in javascript string operators are used to concatenate two or more strings. The string operators in javascript are:
/* 1. + : concatenation operator
2. += : concatenation assignment operator
*/
let str1 = "Hello";
let str2 = "World";
let str3 = str1 + " " + str2; // str3 will be assigned the value of "Hello World"
console.log(str3); // "Hello World"
str1 += " " + str2; // str1 will be updated to "Hello World"
console.log(str1); // "Hello World" 
/* Template literals in javascript
Template literals are a way to create strings in javascript. They are enclosed by backticks (`) instead of single or double quotes. Template literals allow for multi-line strings and string interpolation. String interpolation allows for embedding expressions inside a string using the ${} syntax.
*/
let str4 = `Hello ${str2}`; // str4 will be assigned the value of "Hello World"
console.log(str4); // "Hello World"     


