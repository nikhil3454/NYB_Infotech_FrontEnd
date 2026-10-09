/*Async/Await in JavaScript allows you to write asynchronous code in a clean, synchronous-like manner, making it easier to read, understand, and maintain while working with promises.
async functions always return a Promise.
await pauses execution until the Promise is resolved or rejected.
Improves readability compared to .then() and .catch() chaining.
Makes error handling simpler using try...catch.
Ideal for managing complex asynchronous flows in a structured way.*/
const getData = async () => {
    let data = "Hello World";
    return data;
}
getData().then(data => console.log(data));
const getDatas = async () => {
    let y = await Promise.resolve("Hello World");
    console.log(y);
}

console.log(1);
getDatas();
console.log(2);

function orderFood() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Pizza Delivered");
        }, 3000);
    });
}

async function eatFood() {
    console.log("Ordering Pizza...");

    const food = await orderFood();

    console.log(food);
    console.log("Eating Pizza");
}

eatFood();
//error handling using async and await
function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Unable to fetch user");
        }, 1000);
    });
}

async function displayUser() {
    try {
        const user = await getUser();

        console.log(user);
    } catch (error) {
        console.log("Error:", error);
    }
}

displayUser();
// array and object destruction means breaking down the array and objects into variables and 
//The destructuring assignment syntax can unpack objects and arrays and strings into variables:
// let {object properties}=varibale
const person=new Object({
    firstName: "John",
  lastName: "Doe",
  age: 50
})
console.log(person)
const name=person.firstName
const age=person.age
console.log(name,age)
const user = {
    name: "Anil",
    age: 25,
    city: "Hyderabad"
};

const { username, user_age } = user;

console.log(username);
console.log(user_age);

// array destructing
const numbers = [10, 20, 30,40];

const first = numbers[0];
const second = numbers[1];

console.log(first);
console.log(second);

const [firste, , third] = numbers;

console.log(firste);
console.log(third);
const[First, Second,...remaining]=numbers
console.log(First,Second,remaining)
// multi-dimensional array destruction 
const matrix = [[1, 2], [3, 4], [5, 6]];

// Nested destructuring
const [[a1, a2], [b1, b2], [c1, c2]] = matrix;
console.log(a1, b2, c2); // 1 4 6

// Partial destructuring
const [, [x1, x2]] = matrix;
console.log(x1, x2); // 3 4



