// Arrays Creation and manipulation and its different methods
let arr1=[1,2,3,4,5,6,7,8,9,10];
console.log(arr1);
// Creating the array by suing the different methods
// 1. Using the Array constructor
let arr2=new Array(1,2,3,4,5,6,7,8,9,10);
console.log(arr2);
// 2. Using the array literal
let arr3=[1,2,3,4,5,6,7,8,9,10];
console.log(arr3);
// 3. Using the Array.of() method 
let arr4=Array.of(1,2,3,4,5,6,7,8,9,10); // Used to create a new array from a variable number of arguments
console.log(arr4);
// 4. Using the Array.from() method
let arr5=Array.from(arr1); // Used to create a new array from an existing array
console.log(arr5);
// using the spread operator to create a new array from an existing array
let arr6=[...arr1];
console.log(arr6);
//different types of arrays with different data types and different dimensions
// numeric array
const numArr = [1, 2, 3, 4, 5];
console.log("Numeric Array: ", numArr);
console.log("First element: ", numArr[0]);
// string array
const strArr = 
['GeeksforGeeks', 'JavaScript', 'TypeScript'];
console.log("String Array: ", strArr);
console.log("First element: ", strArr[0]);
// mixed array
const mixedArr = [1, 'GeeksforGeeks', true, null];
console.log("Mixed Array: ", mixedArr);
console.log("First element: ", mixedArr[0]);
// multidimensional array
const multiArr = [[1, 2], [3, 4], [5, 6]];
console.log("Multidimensional Array: ", multiArr);
console.log("First element: ", multiArr[0][0]);
// array of objects
const objArr = [{name: 'John', age: 30}, {name: 'Jane', age: 25}];
console.log("Array of Objects: ", objArr);
console.log("First element: ", objArr[0].name);
// empty array
const emptyArr = [];
console.log("Empty Array: ", emptyArr);
// Reference to an array
const arrRef = arr1;
console.log("Reference to an array: ", arrRef);
// recognizing an array using Array.isArray() method
console.log("Is arr1 an array? ", Array.isArray(arr1));
console.log("Is numArr an array? ", Array.isArray(numArr));
// Recognizing an array using instanceof operator
console.log("Is arr1 an instance of Array? ", arr1 instanceof Array);
// Accessing and manipulating  and modifying elements in arrays
// Accessing elements in an array
const fruits = ['Apple', 'Banana', 'Cherry'];
console.log("Fruits: ", fruits[0],fruits[1],fruits[2]);
// accessing elements in a multidimensional array
const matrix = [[1, 2], [3, 4], [5, 6]];
console.log("Matrix: ", matrix[0][0],matrix[0][1],matrix[1][0],matrix[1][1]);
// Converting multidimensonal array into 1D array using the flat () method
console.log(matrix.flat)
//accessing the last element of an array
const lastElement = fruits[fruits.length - 1];
console.log("Last element: ", lastElement);
// Modifying elements in an array by using the index of the element
fruits[1] = 'Mango';
console.log("Modified Fruits: ", fruits);
//array methods to add and remove elements from an array
// Adding elements to an array at the end using push() method
// Adding elements to an array at the start using unshift() method
fruits.unshift('Grapes');
console.log("Fruits after unshift: ", fruits);
fruits.push('Orange');
console.log("Fruits after push: ", fruits);
// Removing elements from an array at the end using pop() method
// Removing elements from an array at the start using shift() method
fruits.shift();
console.log("Fruits after shift: ", fruits);    
fruits.pop();
console.log("Fruits after pop: ", fruits);
// Removing elements from an array using splice() method
fruits.splice(1, 1);
console.log("Fruits after splice: ", fruits);
// Adding elements to an array using splice() method
fruits.splice(1, 0, 'Pineapple');
console.log("Fruits after splice: ", fruits);
// accessing the elements of an array using indexes and loops
// Accessing the elements of an array using .at() method
console.log("Fruits using .at() method: ", fruits.at(0),fruits.at(1),fruits.at(2));
// using for loop
for(let i=0; i<fruits.length; i++){ 
    console.log("Fruits using for loop: ", fruits[i]);
}
// Creating an Array and Initializing with Values
let as = ["HTML", "CSS", "JS"]
// Increase the array length to 7
as.length = 7;
console.log("After Increasing Length: ", as);
// Decrease the array length to 2
as.length = 2;
console.log("After Decreasing Length: ", as)
// Array methods to manipulate and modify the array
//The toString() method returns the elements of an array as a comma separated string.
const fruitss = ["Banana", "Orange", "Apple", "Mango",'Banana', "Orange", "Apple", "Mango"];
let myList = fruitss.toString();
console.log("My List: ", myList);
//The join() method returns the elements of an array as a string, separated by a specified separator.
let myList1 = fruitss.join(" * ");
console.log("My List1: ", myList1);
// Searching for an element in an array using indexOf() method
let index = fruitss.indexOf("Apple");
console.log("Index of Apple: ", index);
// Searching for an element in an array using lastIndexOf() method
let lastIndex = fruitss.lastIndexOf("Banana");
console.log("Last Index of Banana: ", lastIndex);
// searching for an element in an array using includes() method
let isPresent = fruitss.includes("Mango");
console.log("Is Mango present? ", isPresent);
// searching for an element in an array using find() method
let found = fruitss.find((element) => element === "Orange");
console.log("Found Element: ", found);
// searching for an element in an array using findIndex() method
let foundIndex = fruitss.findIndex((element) => element === "Mango");
console.log("Found Index: ", foundIndex);
// searching for an element in an array using filter() method
let filtered = fruitss.filter((element) => element === "Banana");
console.log("Filtered Elements: ", filtered);
// changing the elements of an array using map() method
let mapped = fruitss.map((element) => element + " Fruit");
console.log("Mapped Elements: ", mapped);
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2);
console.log(doubled);
// filtering the elements of an array using filter() method
let even = numbers.filter(num => num % 2 === 0);
console.log(even);
// converting the elements of an array to a single value using reduce() method
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);
// sorting the elements of an array using sort() method
let sorted = fruitss.sort();
console.log("Sorted Elements: ", sorted);
// reversing the elements of an array using reverse() method
let reversed = fruitss.reverse();
console.log("Reversed Elements: ", reversed);
// finding the maximum value in an array using reduce() method
let max = numbers.reduce(
    (largest, current) =>
        current > largest ? current : largest
);

console.log(max);
// Joining two or more arrays using concat() method
let arrA = [1, 2, 3];
let arrB = [4, 5, 6];
let arrC = arrA.concat(arrB);
console.log(arrC);
// Merging two or more arrays using the spread operator
let arrD = [...arrA, ...arrB];
console.log(arrD);
// Copying an array using the slice() method
let arrE = arrA.slice();
console.log(arrE);
// checking conditions on the elements of an array using every() method
let allEven = numbers.every(num => num % 2 === 0);
console.log(allEven);
// checking conditions on the elements of an array by using the some() method
let allpostive=numbers.some(num => num>0);
console.log(allpostive)
// Iterating throught the arrays using the loops
for(let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}
// By using the for of loop
for(let fruit of fruits) {
console.log(fruit);
}
// By using the for-in loop
for (let index in fruits){
    console.log(index,fruits[index])
}
let i = 0;
while(i < fruits.length) {
console.log(fruits[i]);
i++;}
// by using the do-while loop
do{
console.log(fruits[i]);
i++;
}
while (i<fruits.length);
fruits.forEach((fruit, index) => {
    console.log(index, fruit+'fruit');
});
let nums = [1, 2, 2, 3, 3, 4, 5];
let unique = [...new Set(nums)];
console.log(unique);
// Objects in JavaScript
//An object is a collection of key-value pairs.
let person = { // Declaring a object with an object literal
    name: "Nikhil",
    age: 22,
    city: "Hyderabad"};
console.log(person)
// Different ways to create a object
//Using an Object Literal
//Using the new Keyword
//Using an Object Constructor
//Using Object.assign()
//Using Object.create()
//Using Object.fromEntries()
 let empolyee=new Object({ // by using the new keyword
    name:'Nikhil',
    Dept:'IT',
    Role:'Software Engineering',
    Salary:20000
})
function Employee(id, name) {
    this.id = id;
    this.name = name;
}

const emp1 = new Employee(101, "Nikhil");
class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

const emp2 = new Employee(101, "Nikhil");
const employee = {
    id: 101,
    name: "Nikhil"
};

console.log(employee.name);
console.log(employee["id"]);
employee.salary = 50000;
employee.salary = 60000;
delete employee.salary;
const employee = {
    name: "Nikhil",

    greet() {
        console.log(`Hello ${this.name}`);
    }
};

employee.greet();
const employee = {
    id: 101,

    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
};

console.log(employee.address.city);
console.log(Object.keys(employee));
console.log(Object.values(employee));
console.log(Object.entries(employee));
const obj1 = {
    name: "John"
};

const obj2 = {...obj1};
const obj3 = {
    address: {
        city: "Hyderabad"
    }
};

const obj4 = {...obj1};

obj3.address.city = "Delhi";

console.log(obj3.address.city);
const obj5 = {
    address: {
        city: "Hyderabad"
    }
};

const obj6 = structuredClone(obj1);

obj6.address.city = "Delhi";

console.log(obj5.address.city);
const employee = {
    id: 101,
    name: "Nikhil"
};

const {id, name} = employee;

console.log(id);
console.log(name);
const colors = ["Red","Blue","Green"];

const [first, second] = colors;

console.log(first);
function sum(...numbers) {
    return numbers.reduce((a,b)=>a+b,0);
}

console.log(sum(1,2,3,4));
console.log(employee.address.city);
console.log(employee.address?.city);
let names = null;

console.log(namea ?? "Guest");
console.log(`Hello ${name}`);
const employeeMap = new Map();

employeeMap.set(101, "Nikhil");
employeeMap.set(102, "John");

console.log(employeeMap.get(101));
let employees = [
    {id:1,name:"John",salary:50000},
    {id:2,name:"Sam",salary:40000},
    {id:3,name:"David",salary:60000},
    {id:2,name:"Sam",salary:40000}
];

// Add Record
function addEmployee(employee){
    employees.push(employee);
}

// Remove Record
function removeEmployee(id){
    employees =
    employees.filter(emp => emp.id !== id);
}

// Search Record
function searchEmployee(id){
    return employees.find(
        emp => emp.id === id
    );
}

// Filter Record
function filterEmployees(minSalary){
    return employees.filter(
        emp => emp.salary >= minSalary
    );
}

// Sort Record
function sortBySalary(){
    return [...employees].sort(
        (a,b)=>a.salary-b.salary
    );
}

// Total Salary
function totalSalary(){
    return employees.reduce(
        (sum,emp)=>sum+emp.salary,
        0
    );
}

// Average Salary
function averageSalary(){
    return totalSalary()/employees.length;
}

// Remove Duplicate Records
function removeDuplicates(){

    const ids = new Set();

    return employees.filter(emp => {

        if(ids.has(emp.id)){
            return false;
        }

        ids.add(emp.id);
        return true;

    });
}

// Display
function displayEmployees(){

    employees.forEach(emp => {

        console.log(
            `ID: ${emp.id}
Name: ${emp.name}
Salary: ₹${emp.salary}`
        );

    });
}

console.log(searchEmployee(1));
console.log(filterEmployees(45000));
console.log(sortBySalary());
console.log(totalSalary());
console.log(averageSalary());
console.log(removeDuplicates());

displayEmployees();
