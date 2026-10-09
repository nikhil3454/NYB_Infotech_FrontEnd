
// copying of arrays
 var array=[1,2,3,4,5,6,7,8,[32,4554,68745]]
 var copy_arr = array // normal copying
 console.log('arr',array)
console.log('copy_arr',copy_arr)
array[0]=10
console.log(array,copy_arr)
// shallow copying
var shallow_arr=[...array]
console.log('array',array)
console.log('shallow_arr',shallow_arr)
shallow_arr[0]=99999
shallow_arr[8][0]=10
console.log('array',array)
console.log('shallow_arr',shallow_arr)
// deep copy
var deep_copy_arr=JSON.parse(JSON.stringify(array))
console.log(deep_copy_arr)
deep_copy_arr[8][1]= 43
console.log('deep_copy_arr',deep_copy_arr)
console.log('array',array)
// Using spread operator
let arr1 = [1, 2, 3];
let copy1 = [...arr1];

// Using slice()
let copy2 = arr1.slice();

// Using Array.from()
let copy3 = Array.from(arr1);

// Using concat()
let copy4 = [].concat(arr1);

console.log(copy1, copy2, copy3, copy4);
let arr3 = [1, [2, 3], { a: 4 }];
let deepCopy2 = structuredClone(arr3);

console.log(deepCopy2); // Fully independent copy


// looping of onjects can be done by using for in loop
// get object key-value pairs by using the obj.keys(),obj.vlaues(),obj.entries() and the values will be returned as arrays
var original={
    a:'One',
    b:'Two',
    c:'Three',
    obj_m:{a:"Hello",b:'Hai'}
 }
 console.log(Object.keys(original))
 console.log(Object.values(original))
 console.log(Object.entries(original))
 // date
 // The Date object in JavaScript is used to work with dates and times. It can be created using the new Date() constructor, which provides various ways to instantiate a date object.
 let d=new Date() // Current date and time
 console.log(d)
 // To create a specific date  and time 
 const specificDate = new Date("October 13, 2014 11:13:00");
console.log(specificDate); // Outputs: Mon Oct 13 2014 11:13:00 GMT+0000 (UTC)
// You can also specify the year, month, day, hour, minute, second, and millisecond:
const detailedDate = new Date(2018, 11, 24, 10, 33, 30);
console.log(detailedDate); // Outputs: Mon Dec 24 2018 10:33:30 GMT+0000 (UTC)
// Template strings
/* In JavaScript, a template string (officially called a template literal) is a way to create strings that can:

Embed variables and expressions directly (string interpolation)
Span multiple lines without needing \n
Include expressions inside ${...} placeholders
They were introduced in ES6 (ECMAScript 2015) and use backticks ` instead of single ' or double " quotes. */
var k=20
var i=10
console.log('the value of a is',k, 'the value of b is ',i,'the sum of a and b is',k+i)
console.log(`the value of a is ${k} the value of b is ${ i} and the sum of a and b is ${k+i}`)

// Math object
var a=10
var b=10.8
console.log(Math.floor(b))
console.log(Math.ceil(b))
console.log(Math.round(b))
console.log(Math.sqrt(9))
console.log(Math.pow(2,3))
