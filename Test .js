function ValidateUser(name,age,email){
    const emailPattern = /.+@.+\..+/;
    if ( !name ||name===""){
        return  'Please enter a valid name'}
    if (age < 18 || age > 60){
        return  'Age should be in between the range of 18 and 60'}
    if (!emailPattern.test(email)){
        return 'Please enter a vaild email'
    }
    return "User details are vaild"}
function generateUSerMessage(name,age){
    return `the user's name is ${name} and the user is ${age}years old`
}
console.log(ValidateUser('Nikhil',23,'nikhilkumar@gmail.com'))
console.log(generateUSerMessage('nikhil',23))
// 2 QUESTIONS
function calculate(operation, ...numbers) {
    if (numbers.length === 0) {
    throw new Error("Please provide at least one number.");
  }
  if (operation === "add") {
    let result = 0;

    for (let number of numbers) {
      result += number;
    }return result;}
    if (operation === "subtract") {
    let result = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
      result -= numbers[i];
    }

    return result;
  }

  if (operation === "multiply") {
    let result = 1;

    for (let number of numbers) {
      result *= number;
    }

    return result;
  }throw new Error("Invalid operation.");
}
function executeCalculation(callback, operation, ...numbers) {
  return callback(operation, ...numbers);
}
console.log(executeCalculation(calculate, "add", 10, 20, 30));
console.log(executeCalculation(calculate, "subtract", 100, 20, 10));
console.log(executeCalculation(calculate, "multiply", 2, 3, 4));
try {
  console.log(executeCalculation(calculate, "divide", 10, 2));
} catch (error) {
  console.log(error.message);
}
try {
  console.log(executeCalculation(calculate, "add"));
} catch (error) {
  console.log(error.message);
}
// 3 Question
const employees = [
  { id: 1, name: "Ravi", department: "IT", salary: 45000 },
  { id: 2, name: "Priya", department: "HR", salary: 55000 },
  { id: 3, name: "Arjun", department: "IT", salary: 65000 },
  { id: 4, name: "Sneha", department: "Finance", salary: 50000 },
  { id: 5, name: "Kiran", department: "IT", salary: 75000 }
];
function displayITEmployees(){
    return employees.filter(employee=>employee.department==="IT")
}
function empolyeeSalarymoreThan5000(){
    return employees.filter(employee=>employee.salary > 5000)
}
function empolyeeTotalSalary(){
    return employees.reduce((total,employee)=>{
        return total+employee.salary},0)
    }
function getHighestPaidEmployee() {
  return employees.reduce((highest, employee) => {
    if (employee.salary > highest.salary) {
      return employee;
    }return highest;
  });
}
function getEmployeeNames() {
  return employees.map(employee => employee.name);
}

function sortBySalary() {
  return [...employees].sort((a, b) => b.salary - a.salary);
}
console.log(`ITEmployees: ${JSON.stringify(displayITEmployees())}`);
console.log(`Employees earning more than 50000: ${JSON.stringify(empolyeeSalarymoreThan5000())}`);
console.log(`Total Salary: ${JSON.stringify(empolyeeTotalSalary())}`);
console.log(`Highest Paid Employee: ${JSON.stringify(getHighestPaidEmployee())}`);
console.log(`Employee Names:${JSON.stringify(getEmployeeNames())}`);
console.log(`Employees sorted by salary: ${JSON.stringify(sortBySalary())}`)
// 4th Question
const users = [
  { id: 1, name: "Ravi", email: "ravi@test.com" },
  { id: 2, name: "Priya", email: "priya@test.com" },
  { id: 1, name: "Ravi", email: "ravi@test.com" },
  { id: 3, name: "Arjun", email: "arjun@test.com" }
];
function Removeduplicates(users){
    const seen=new Set(users);
    return users.filter(user => {
    if (seen.has(user.id)) {
      return false;
    }
    seen.add(user.id);
    return true;
  });
}
const uniqueUsers = Removeduplicates(users);
console.log(uniqueUsers);
console.log(users);
const newUser = {
  ...uniqueUsers[0],
  id: 4,
  name: "Nikhil",
  email: "nikhil@test.com"
};
console.log(newUser);
const { id, name, email } = newUser;
console.log(`User Details:
ID: ${id}
Name: ${name}
Email: ${email}`);