// Synchronous JavaScript
console.log("nikhil");
console.log(' this is a example of synchronous JavaScript')
console.log('Ordering Pizza')
function Pizza(){
    return 'The Pizza is prepared and deliverd ';
}
console.log(Pizza())
console.log('Eating and Enjoying the pizza')
document.write('this is the example of synchronous and single thread javaScript in which firat the paizza is ordered and immediately prepared and delivered and whereas in real-time the pizza will take a delay to be prepared but until that we should be witg  for the pizza without doing anything to bypass this  and to save executiontime we have asynchronous Javascript ')
//disadvantage of synchronous 
console.log("Start");
/*function heavyTask() {
for(let i = 0; i < 1000000000; i++) {}
}
heavyTask();*/
console.log("End");

// Asynchronous Javascript
// It Can be achieved by using four functions SetTimeout,SetInterval,ClearTimeout and clearinterval
console.log('Start the operation');
function operation (){
    return JSON.stringify('Operation Execution completed received data');
}
const async_timeOut=setTimeout(()=>{console.log(operation())},2000);
console.log('Operation Completed')
// SetInterval()
// used to run a function repeately after a cretain delay
function run(){
    console.log('Running...')
}
let runs=setInterval(run,2000)
clearTimeout(runs)
// Digital clock using SetInterval() function
function Timedisplay(){
    console.log(new Date().toLocaleTimeString())
}
const digital_clock=setInterval(Timedisplay,1000)
clearTimeout(async_timeOut);
clearInterval(digital_clock);

// real life explanation
console.log("OTP Sent");

const otpTimer = setTimeout(() => {
    console.log("OTP Expired");
}, 30000);

// User requests a new OTP after 10 seconds
setTimeout(() => {
    console.log("New OTP Generated");

    clearTimeout(otpTimer);
}, 10000);
// autologout due to user inactivity
let logouttimer;
console.log('User Logged in');
function startlogouttimer(){
    logouttimer=setInterval(()=>{
        console.log('User Logged out due to inactivity')
    },6000);
}
function useractivity(){
    console.log('User Activity detected')
    clearTimeout(logouttimer)
    startlogouttimer()
}
startlogouttimer();
const statusChecker = setInterval(() => {
console.log("Monitoring User...");}, 2000);
// Stop monitoring after 12 seconds
setTimeout(() => {
clearInterval(statusChecker);
console.log("Monitoring Stopped");
}, 12000);
// JavaScript Promise is an object representing the eventual completion or failure of an asynchronous operation, transitioning through the states pending, fulfilled, or rejected, and enabling cleaner async code using .then(), .catch(), and advanced methods like Promise.all() and Promise.race().
let p=new Promise((resolve,reject)=>{
    if(true){
        resolve('The result is True')
    }
    else{
        reject("the Data is not recieved")

    }
})
p.then((message)=>console.log(message))
p.catch((error)=>console.log(error))
p.finally(()=>console.log('Execution completed'))
// Promise methods
//Promise.all
Promise.all([
    Promise.resolve("Task 1 completed"),
    Promise.resolve("Task 2 completed"),
    Promise.reject("Task 3 failed")
])
    .then((results) => console.log(results))
    .catch((error) => console.log(error));
Promise.all([
    Promise.resolve("Task 1 completed"),
    Promise.resolve("Task 2 completed"),
    Promise.resolve("Task 3 completed")
])
    .then((results) => console.log(results))
    .catch((error) => console.log(error));
//Promise.allSetteled
Promise.allSettled([
    Promise.resolve("Task 1 completed"),
    Promise.reject("Task 2 failed"),
    Promise.resolve("Task 3 completed")
])
    .then((results) => console.log(results))
    .catch((error) => console.log(error));
//Promise.race
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 600, "one");
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, "two");
});

Promise.race([promise1, promise2]).then((value) => {
    console.log(value);
});
Promise.race([
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task 1 finished"), 1000)),
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task 2 finished"), 500)),
])
    .then((result) => console.log(result))
    .catch(err => console.error(err));
//Promise.any method
Promise.any([
    Promise.reject("Task 1 failed"),
    Promise.resolve("Task 2 completed"),
    Promise.resolve("Task 3 completed")
])
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
// Promise chaining
Promise.resolve(5)
    .then((value) => value * 2) // Multiplies by 2
    .then((value) => value + 3) // Adds 3
    .then((finalValue) => console.log(finalValue)); // Logs: 13

async function display() {
    let result = await Promise.resolve("Success");

    console.log(result);
}
display.then(result=>{
    console.log(result)
})
async function getData() {

    try {

        let result = await Promise.reject("Error");

    }
    catch(error) {
        console.log(error);
    }
    finally {
        console.log("Completed");}}
async function fetchData(url) {
  let loading = true;
  let error = null;
  let data = null;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    data = await response.json();
  } catch (err) {
    error = err.message;
  } finally {
    loading = false;
  }

  return { data, loading, error };
}

fetchData("https://jsonplaceholder.typicode.com/users")
  .then(result => {
    if (result.error) {
      console.error(result.error);
    } else {
      console.log(result.data);
    }
  });
