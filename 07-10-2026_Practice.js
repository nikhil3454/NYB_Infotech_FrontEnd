let employes = [
    {id:1,name:"John",salary:50000},
    {id:2,name:"Sam",salary:40000},
    {id:3,name:"David",salary:60000},
    {id:2,name:"Sam",salary:40000}
];
// Add Record
function addEmployee(employee){
    employees.push(employee);
}// Remove Record
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
console.log(displayEmployees());
// DOm manipulation and Event Listeners
/*The JavaScript HTML DOM (Document Object Model) represents the structure of an HTML document as a tree of objects. It allows JavaScript to interact with and modify the content and elements of a webpage dynamically.
By using the DOM, JavaScript can access and manipulate HTML elements, attributes, and styles.
DOM manipulation enables updating the content, structure, or styling of a page without reloading the webpage.
Tree Structure: Represents the HTML document as a hierarchical tree of nodes.
Element Access: Provides methods to select elements such as getElementById, getElementsByTagName, and querySelector.
Dynamic Manipulation: Allows changing content, attributes, and styles dynamically.
Event Handling: Supports handling user interactions like clicks and keyboard events.
*/
// Accessing the DOM elements by using the select DOM element methods
// getElementByid(),getElementByClassName(),getElementByTagname(),queryselector,queryselectorall,
let paragraph=document.getElementById('Paragraph1') // used to get the Html element in the DOm according to the Id attribute
console.log(paragraph)
let heading=document.getElementById('Heading')
console.log(heading,heading.innerText)
let paragraph2=document.getElementById('Paragraph2')
console.log(Paragraph2)
let paragraph_tags=document.getElementsByTagName('p') // Used to get all the Html elements according to the tag names
console.log(paragraph2)
let para_elements=document.getElementsByClassName('Para')
console.log(para_elements)
let query_selector_elements=document.querySelector('p')
console.log(query_selector_elements)
let query_selector_heading=document.querySelector('h1')
console.log(query_selector_heading)
let query_selector_all=document.querySelectorAll('p')
console.log(query_selector_all)
// Modifying the content of the elements
// changing Content
paragraph.innerHTML='This is a paragraph tag and its is a practice tag';
paragraph2.innerText='This is also a paragraph tag and it is a another tag';
// Changing the attributes for the tags
console.log(heading.id,heading.className,heading.value)
heading.style.color='blue'
const list = []
 const li=document.createElement("li");
li.textContent = "Task 1";
list.appendChild(li);
list.append(li);
li.remove();
parent.removeChild(li);