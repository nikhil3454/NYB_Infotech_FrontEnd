import createUser,
{
    sum,
    pi,
    add,
    subtract
}
from "./30-09-2026_Practice.js";

console.log(sum(12,13));
console.log(pi);
console.log(add(10,5));
console.log(subtract(10,5));

const user = createUser("Rahul",22);

console.log(user);
localStorage.setItem("username", "Rahul");
const username = localStorage.getItem("username");
console.log(username);
localStorage.setItem("age", 25);
localStorage.setItem("name", "John");
localStorage.setItem("city", "Hyderabad");
const name = localStorage.getItem("name");
console.log(name);
localStorage.removeItem("name");
localStorage.clear();
const fruits = ["Apple", "Banana", "Mango"];
localStorage.setItem("fruits", JSON.stringify(fruits));
const users = {
    name: "Rahul",
    age: 22
};

const data = JSON.stringify(users);

console.log(data);
const datas = '{"name":"Rahul","age":22}';

const parsedUsers = JSON.parse(datas);

console.log(parsedUsers.name);

const userData = {
    name: "Rahul",
    age: 22,
    city: "Hyderabad"
};

// Store
localStorage.setItem("user", JSON.stringify(user));

// Retrieve
const storedUser = localStorage.getItem("user");

// Convert back to object
const parsedUser = JSON.parse(storedUser);

console.log(parsedUser.name);
console.log(parsedUser.age);
sessionStorage.setItem("username", "Rahul");
const usernames = sessionStorage.getItem("username");

console.log(usernames);
// throw try and catch error handling
function withdraw(amount) {
    if (amount <= 0) {
        throw new Error("Amount must be greater than zero");
    }

    console.log("Withdrawal successful");
}

try {
    withdraw(-100);
} catch (error) {
    console.log(error.message);
}

