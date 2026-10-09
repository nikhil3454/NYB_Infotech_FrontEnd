// Promises are used to avoid call back hell
//A Promise is a JavaScript object that represents the future result of an asynchronous operation.
// asynchronous tasks
function OrderPizza(callback){
    setTimeout(()=>{
         let pizza= 'peproni'
         callback(pizza)
    },2000)
}
function Pizza_ready(pizza){
    console.log(`${pizza} is ready` )
}
OrderPizza(Pizza_ready)
//A JavaScript Promise is an object representing the eventual completion or failure of an asynchronous operation, with states pending, fulfilled, or rejected, and it lets you attach handlers using .then(), .catch(), and .finally().
// Promises can be used to organise ythe asynchronous code clean and the promis also contains stages like pending , fulfilled(resolved) and rejected
let promise = new Promise((resolve, reject) => {
    let status=true
    if(status){
        //console.log('resolved')
        resolve('data Received')

    }
    else{
        //console.log('rejected')
        reject('Request Failed')
    }

});
console.log(typeof promise,promise)
promise
    .then(result=>{
        console.log(result);
    })
    .catch(error=>{
        console.log(error);
    });
let number = 5;
let checkEven = new Promise((resolve, reject) => {
  if (number % 2 === 0) resolve("The number is even!");
  else reject("The number is odd!");
});
checkEven
  .then((message) => console.log(message)) // On success
  .catch((error) => console.error(error)); // On failure
// resolved promise
let promises = new Promise((resolve,reject)=>{
    resolve("User Found");
});

promises.then(data=>{
    console.log(data);
});
// rejected promise
let reject_promise=new Promise((resolve,reject) =>{
    reject ('User not found')
});
reject_promise.then(data=>{
    console.log(data)
})
reject_promise.catch(error=>{
    console.log(error)
})
//Promise chaning
Promise.resolve(10)
    .then(num=>{
        console.log(num);
        return num * 2;
    })
    .then(num=>{
        console.log(num);
        return num * 3;
    })
    .then(num=>{
        console.log(num);
    });
// Promise with Async js or real-world application promise
function fetchUser(){
    return new Promise((resolve,reject)=>{setTimeout(()=>{
            resolve({
                id:1,
                name:"Nikhil"});},2000);});}

fetchUser()
    .then(user=>{
        console.log(user);
    })
    .catch(error=>{
        console.log(error);
    });
function getStudent() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let serverWorking = false;
            if (serverWorking) {
                resolve({
                    id: 101,
                    name: "Nikhil",
                    course: "JavaScript"
                });
            }
            else {
                reject("Server Error");
            }

        }, 3000);

    });
}

getStudent()
    .then(student => {
        console.log("Student Details:");
        console.log(student);
    })
    .catch(error => {
        console.log(error);
    });
// revision


