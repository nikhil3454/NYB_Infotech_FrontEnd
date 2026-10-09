// Promises and advanced methods
/*A JavaScript Promise is an object representing the eventual completion or failure of an asynchronous operation, with states pending, fulfilled, or rejected, and it lets you attach handlers using .then(), .catch(), and .finally().
JavaScript Promises make handling asynchronous operations like API calls, file loading, or time delays easier. Think of a Promise as a placeholder for a value that will be available in the future. It can be in one of three states*/
// the promises also contain methods like  promise.all(),Promise.allSetteled(), Promise.race,Promise.any, promise.reslove, promise.reject, promise.finally(), promise.prototype
let checkEven = new Promise((resolve, reject) => {
    let number = 5;
    if (number % 2 === 0) resolve("The number is even!");
    else reject("The number is odd!");
});
checkEven
    .then((message) => console.log(message)) // On success
    .catch((error) => console.error(error)); // On failure
function getUserData() {
    return new Promise((resolve, reject) => {
        console.log("Fetching user data...");
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve({
                    id: 1,
                    name: "Nikhil",
                    role: "Software Engineer"});}
            else {
                reject("Failed to fetch user data");
            }}, 2000);})}

getUserData()
    .then((user) => {
        console.log("Data received:", user);
    })
    .catch((error) => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("User data request finished.");
    })

Promise.resolve("Hello")  // the promise.resolve is used to generate an immediately resolved Promise
    .then(result => console.log(result));
//Promise .reject is also a promise m
// Promise.all is a in-built method fro the promise object which is used to wait for multiple promises to finish their executions and return the results in the form of array and it only returns resolve if all the promises have resolved ele it will reject
// Waits for all promises to resolve and returns their results as an array. If any promise is rejected, it immediately rejects.
Promise.all([getUserData(),checkEven]).then((results)=>{
    console.log(`the result is: ${results}`)})
    .catch((error)=>{
        console.log(`error${error}`)
    })
let p1 = Promise.resolve("Success");
let p2 = Promise.reject("Failed");
//Waits for all Promises, whether they succeed or fail.
Promise.allSettled([p1, p2])
    .then(result => console.log(result));
//
let p3 = new Promise(resolve =>
    setTimeout(() => resolve("First"), 1000)
);

let p4 = new Promise(resolve =>
    setTimeout(() => resolve("Second"), 2000)
);

Promise.race([p3, p4])
    .then(result => console.log(result));

let p5 = Promise.reject("Error");
let p6 = new Promise(resolve =>
    setTimeout(() => resolve("Success"), 1000)
);

Promise.any([p5, p6])
    .then(result => console.log(result));

let p=new Promise((resolve,reject)=>{
    let n= true
    if (n){
        resolve("True")}
        else{
            reject('False')
        }
})
Promise.all([
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task A done"), 1000)),
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task B done"), 500))
])
    .then(([resultA, resultB]) => {
        console.log(resultA, resultB);
        return new Promise((resolve) =>
            setTimeout(() => resolve("Final Task done"), 700));
    })
    .then((finalResult) =>
        console.log(finalResult));
