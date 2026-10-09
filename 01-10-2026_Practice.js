//Out put methods in JavaScript
// console.log("Hello World"); // Output to console
// document.write("Hello World"); // Output to HTML document
// alert("Hello World"); // Output as an alert box
// prompt("Hello World"); // Output as a prompt box 
// confirm("Hello World"); // Output as a confirmation box
// console.error("Hello World"); // Output as an error message
// console.warn("Hello World"); // Output as a warning message
// console.info("Hello World"); // Output as an informational message
// console.table(["Hello", "World"]); // Output as a table
// console.clear(); 
// // Clear the console
let p=document.getElementById("demo")
p.innerHTML = "Hello World";
console.log("Hello World");
alert("Welcome");
document.write("Hello");
p.textContent = "Hello World";
prompt("Hello World");
confirm("Hello World");
console.error("Hello World");
console.warn("Hello World");
console.info("Hello World");
console.table(["Hello", "World"]);


// BOM stands for Browser Object Model. It allows us to interact with the browser and its components, such as the window, history, and location objects. The BOM provides methods and properties to manipulate the browser window, navigate through the browsing history, and access information about the current URL. It is an essential part of JavaScript programming for web development.
/*n JavaScript, BOM stands for Browser Object Model. It is a set of objects provided by the browser that allows JavaScript to interact with the browser environment outside of the HTML document itself. While DOM (Document Object Model) deals with the structure and content of the webpage, BOM focuses on the browser window and its features.
Key BOM Objects:
window – The global object representing the browser window. All other BOM objects are accessed through it.
navigator – Provides information about the browser (e.g., name, version, platform).
screen – Gives details about the user’s screen (e.g., resolution, color depth).
location – Represents the current URL and allows navigation to new URLs.
history – Lets you navigate through the browser’s session history. */
console.log(window,window.innerWidth,window.innerHeight,window.outerWidth,window.outerHeight,window.location,window.history,window.navigator,window.screen)
window.alert("Hello");
console.log(navigator,navigator.appName,navigator.appVersion,navigator.platform,navigator.userAgent)
console.log(screen,screen.width,screen.height)
console.log(location,location.href,location.protocol,location.host,location.hostname,location.port,location.pathname,location.search,location.hash)
console.log(history,history.length,history.state)
let data = prompt("enter your name:");
console.log(data);
let confirmData = confirm("Are you sure you want to proceed?");
if (confirmData) {
  console.log("User confirmed to proceed.");  
}  
  else{
    console.log("User canceled the action.");
  }
let tableData = ["Name", "Age", "Gender"];
console.table(tableData);
window.open()
// APi methods in Javascript
// get post put patch delete methods are used to perform CRUD operations on the server. These methods are used to send and receive data from the server. The get method is used to retrieve data from the server. The post method is used to send data to the server. The put method is used to update data on the server. The patch method is used to update a part of the data on the server. The delete method is used to delete data from the server.
// get --> used to get the data from the server
// post --> used to send the data to the server
// put --> used to update the data on the server
// patch --> used to update a part of the data on the server
// delete --> used to delete the data from the server
// fetch("https://jsonplaceholder.typicode.com/users")
// frontend --> API(get) --> backend
let datas =fetch("https://jsonplaceholder.typicode.com/users") // get method
console.log(datas) // pending
datas.then((response)=>{
  return response.json()
}).then((userData)=>{
  console.log(userData);
});     
// Post method
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "JavaScript",
        body: "Fetch API",
        userId: 1
    })
})
.then(response => response.json())
.then(data => console.log(data));
fetch("https://jsonplaceholder.typicode.com/posts/1", {  // put method
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        id: 1,
        title: "Updated",
        body: "New Content",
        userId: 1
    })
})
.then(response => response.json())
.then(data => console.log(data));
fetch("https://jsonplaceholder.typicode.com/posts/1", {  // patch method
    method: "PATCH",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Patched Title"
    })
})
.then(response => response.json())
.then(data => console.log(data));
fetch("https://jsonplaceholder.typicode.com/posts/1", {  // delete method
    method: "DELETE" ,
    headers: {
        "Content-Type": "application/json"
    }
})
.then(response => response.json())
.then(data => console.log(data));
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        id: 1,
        title: "Updated",
        body: "New Content",
        userId: 1
    })
})
.then(response => response.json())
.then(data => console.log(data));
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Updated Title"
    })
})
.then(response => {
    console.log(response);
    return response.json();
})
.then(data => console.log(data));

fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE"
})
.then(() => console.log("Deleted"));
/* fetch(url, {
    method: "GET"
});  request syntax
*/
const obj = {
    name: "John",
    age: 25
};

const jsonData = JSON.stringify(obj);
console.log(jsonData);
// conver t JSON string back to JavaScript object
const parsedData = JSON.parse(jsonData);
console.log(parsedData);
// Api call with fectch async and await and error handling
async function fetchUsers() {
    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        localStorage.setItem(
            "users",
            JSON.stringify(data)
        );

        console.log(data);

    }
    catch(error) {

        console.log(error.message);

    }
}
fetchUsers();