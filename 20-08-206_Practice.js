/* objects in JavaScript
Objects are variables that can store both values and functions
Objects are one of the most important concepts in JavaScript
If you understand objects, you understand JavaScript
Objects are variables that can store both values and functions.
Values are stored as key:value pairs called properties.
Functions are stored as key:function() pairs called methods.
Different cars have the same properties, but the property values can differ from car to car.
Different cars have the same methods, but the methods can be performed at different times.
Object examples: */
// keys will be of the string datatype and the values will be of any data type
const obj={ // Object created by using the object literals{}
    name:'Fiat',
    model : '500',
    weight: '300 kg',
    color: 'White'}
console.log(obj)
/* An object can be used by declared by using two methods and they are 
1. By using the object literal {}
2. By using the new keyword .
2. We can also create an empty object and add the properties and methods later to it. */
const person={ First_Name: 'John',Last_Name:'Doe', age : 50, EyeColor:'Blue'}
// we can first create the object and then add the properties.
const persons ={}
persons.First_Name='Nick'
persons.Last_Name='Nigger'
persons.age=42
persons.EyeColor='Brown'
console.log(person,persons)
// We can also create the objects by using the new keyword and create a object.
const parson= new Object( {First_Name:'Mad',Second_Name:'Rock',age:12,EyeColor:'Green'})
console.log(parson)
// object Constructor task
/* Constructor functions allow you to define a blueprint for objects and create multiple instances with similar properties. */
function Vehicle(name, maker, engine) {
   this.name = name;
   this.maker = maker;
   this.engine = engine;
}
const car = new Vehicle('GT', 'BMW', '1998cc');
console.log(car.name,car ,typeof(car)); // Output: GT

// Classical way E.F.6 task
class emp{
    constructor(a,b,c){
        this.Name=a
        this.role=b
        this.Dept=c
    }
}
var m=new emp('Nikhil Kumar','Software junior','IT')
console.log(m,m['Dept'])

/* Accessing  the object properties by using the different methods like . notation and [] notation */
console.log(persons.Last_Name) // Dot Notation
console.log(obj['color']) // Bracket Notation
/* adding and deletion of properties and methods in objects by using different in-built functions like delete */
persons. Salary = "20 Grand"
console.log(persons)
delete persons.Last_Name
console.log(persons)
 // copying of objects i.e., normal copy, deep copy and shallow copy
 // Normal copying of objects
 // When you assign one variable to another for primitive types (string, number, boolean, null, undefined, symbol, bigint), the value is copied directly. For reference types (objects, arrays, functions), only the reference (memory address) is copied — both variables point to the same object.

 // Primitive type copy
let a = 10;
let b = a; // value copied
b = 20;
console.log(a,b); // 10 (unchanged)
var original={
    a:'One',
    b:'Two',
    c:'Three',
    obj_m:{a:"Hello",b:'Hai'}
 }
var normal_copy=original
console.log(normal_copy,original)
normal_copy.d='Four'
console.log(original,normal_copy)
//shallow copy is achieved by using the spread operator
// A shallow copy creates a new object, but nested objects/arrays are still shared (copied by reference).
let shallow_copy={...original}
console.log(shallow_copy)
original.name='Nikhil'
shallow_copy.obj_m.a='Good Morning'
console.log(shallow_copy,original)
console.log(original,normal_copy,shallow_copy)
// Shallow copy can also be achieved by using the object .assign() method.
let shallow_copy2= Object.assign({},original)
console.log('Shallow_copy2',shallow_copy2)
console.log('original',original)
// In shallow copy the properties which have primitive data types will not be changed  in the original and the reference data types will be changed.
// Deep copy
// Deep Copy in js can be achieved by using the JSON methods like JSON.Parse(json.stringfiy())
var deep_copy=JSON.parse(JSON.stringify(original))
console.log('deep_copy',deep_copy)
deep_copy.one='bye'
console.log('original',original)
console.log('deep_copy',deep_copy)
// A deep copy creates a completely independent clone — all nested objects/arrays are also copied.
// a deep copy of object can also be achieved by using the structuredclone() method.
deep_copy2=structuredClone(original)
console.log(deep_copy2,original)



