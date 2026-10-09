//Arrays
//array is a non-primitive data type in js and it is known as the collection of data (like collection of both homogenous and hetrogenous data).
// an array is declared by using []  square brackets
/* An Array is an object type designed for storing data collections.

Key characteristics of JavaScript arrays are:

Elements: An array is a list of values, known as elements.

Ordered: Array elements are ordered based on their index.

Zero indexed: The first element is at index 0, the second at index 1, and so on.

Dynamic size: Arrays can grow or shrink as elements are added or removed.

Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays).
*/
const cars=['volvo','audi','bugati'] 
/* what are the different ways to create an array.
1.by using the array literal []
2.by using the array constructor.
3. we can also declare the array and then assign the elements to it.*/
var numbers = new Array(1,2,3,4)
console.log(cars,numbers)
//like
cars[3]='BMW'
cars[4]='Suzuki'
console.log(cars,numbers) // displaying the array an array can be displayed by refering to their variable name.
// acessing the array elements and changing them
cars[0]='opel' // changing the array elements
for ( let i=0; i<cars.length; i++){ 
    console.log(cars[i]) //acessing  the array elements

}
// Converting an array into a string by using the Tostring() method.
console.log(cars.toString(),cars.toString().length)
// converting an array into Json format.
console.log(JSON.stringify(cars),JSON.toString(cars))
// to add new elements in the array we can also use the push function and by using the push function the aaded element will be in the last index
numbers.push('1')
console.log(numbers)
// Suppose if we want to add the element in the first of the array then we can  use the unshift() function of the array
numbers.unshift('12')
console.log(numbers)
//if we want to add the elements in any middle index then we can use the splice() function of the array.
/* The splice() method in JavaScript allows you to add, remove, or replace elements in an array. This method modifies the original array and returns an array containing the deleted elements.
array.splice(start, deleteCount, item1, item2, ...); 
the splice function in array can also be used for deleting elements in the array.*/
numbers.splice(6,0,5,6,7)
console.log(numbers)
let numbers_deleted=numbers.splice(4,4)
console.log(numbers,numbers_deleted)
// elements in the last index of the  array can be removed by using the pop()function.
//elements in the first index of the array can be removed by using the shift() function.
console.log(cars.pop(),cars.shift())
let car= cars.pop()
console.log(car,cars)

/* array methods are konwn as the pre-defined functions used toperform operations on the array.
1.Length
2.Sort */
console.log(cars.length)
console.log(cars.sort())






