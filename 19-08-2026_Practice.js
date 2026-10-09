// JavaScript in-built methods.
// for of and for in loops.
var arr=[1,2,3,4,5,6,7,8,9]
console.log(arr.map(i => i+1))
for (k of arr ){
    console.log(k)
}
for (j in arr){
    console.log(j,arr[j],arr[j]=arr[j]+1)
}
//testing the array with some and every operator
console.log(arr.some(i => i>1))
console.log(arr.every(i => i>3))
//join and sort functions
console.log(arr.join(','))
let arr1=[9,12,7,8,60,5,4,2,3,1]
console.log(arr1.sort())
console.log(arr1.sort((a,b) => a-b))
// sorting the array without using the in-built methods can be done by using various sorting alogorithms like bubble sort and selection sort
function bubbleSort(arr) {
 let n = arr.length;
 for (let i = 0; i < n - 1; i++) {
   for (let j = 0; j < n - i - 1; j++) {
     if (arr[j] > arr[j + 1]) {
       let temp = arr[j];
       arr[j] = arr[j + 1];
       arr[j + 1] = temp;
     }
   }
 }
 return arr;
}
let numbers = [5, 3, 8, 6, 2];
console.log("Sorted Array:", bubbleSort(numbers));
// flattening of a 2d array into a single array
let a=[1,2,3,4,[1,2,3,[2,1,3]]]
console.log(a.flat(1))
// removing duplicates
var m =[1,2,3,1,2]
var n= new Set(m)
console.log(m==n)
// apart from using the set method we can also use indexof() method to find the duplicates.
// how to add, remove and if the element is present in array
// map filter and reduce and reduce functions in array.
// map function
/*In JavaScript, map(), filter(), and reduce() are powerful array methods for transforming, filtering, and aggregating data in a clean, functional style.
map() – Transform each element Creates a new array by applying a callback to every element.*/
let number=[1,2,3,4,5,6,7,8]
let d_numbers= number.map(i => i*2)// map function
console.log(number,d_numbers)
/*Useful when you want to modify or extract data without changing the original array.

filter() – Select elements conditionally Returns a new array containing only elements that satisfy a condition.
//filter() – Select elements conditionally Returns a new array containing only elements that satisfy a condition. */
let even_numbers=number.filter(i => i%2==0)
console.log(number,even_numbers)
/*Ideal for removing unwanted items while keeping the original intact.

reduce() – Accumulate into a single value Executes a reducer function on each element to produce one output value.*/
let sum_of_numbers=number.reduce((acc,curr) => acc+curr,0)
console.log(number,sum_of_numbers)
// for-each loop
// The forEach loop in JavaScript is a method that executes a provided function once for each array element. It is commonly used to iterate over arrays.
const fruits = ["apple", "orange", "cherry"];
fruits.forEach((i,j) => {
 console.log(i,j);
});
m.forEach((i,j) =>{
    console.log(i,jsi)
})
// Output:
// apple
// orange
// cherry


