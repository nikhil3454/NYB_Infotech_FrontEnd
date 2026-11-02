const products = [
    { id: 1, name: "Laptop", price: 60000 },
    { id: 2, name: "Phone", price: 30000 },
    { id: 3, name: "Chair", price: 5000 },
    { id: 4, name: "Table", price: 8000 } ];

const expensive_products=products.filter(product=>product.price>10000)
console.log(expensive_products)
const product_arr=products.map(product=>product.name)
console.log(product_arr)
const total_Price=products.reduce((total,product)=>total+product.price,0)
console.log(total_Price)
const price_sorting=[...products].sort((a,b)=>b.price-a.price)
console.log(price_sorting)


console.log("1. Synchronous execution started");
setTimeout(() => {console.log("3. Asynchronous message after 2 seconds");}, 2000);
console.log("2. Synchronous execution completed");
const messagePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved after 1 second!");}, 1000);
});
messagePromise.then((message) => {
    console.log(message);
});
let count = 0;
const timer = setInterval(() => {
    count++;
    console.log("Timer execution:", count);
    if (count === 5) {
        clearInterval(timer);
        console.log("Timer stopped after 5 executions.");}
}, 1000);

 function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Data fetched successfully')}, 1000); })}
async function Display_data(){
    try{
        const message= await fetchData()
        console.log(message)
    }catch (error){
        console.log(`the error is ${error}`)}
    finally{
        console.log('Process Completed')}
}
Display_data()
