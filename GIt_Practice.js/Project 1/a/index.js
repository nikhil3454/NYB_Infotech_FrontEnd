console.log('Hello World');
console.log('hai');
console.log(2+3);
import { add,username,greet } from "./math.js";

console.log(add(10, 20));
console.log(username);
console.log(greet());
const numbers = [10, 20, 30];
const iterator = numbers[Symbol.iterator]();

console.log(iterator.next());
// { value: 10, done: false }

console.log(iterator.next());
// { value: 20, done: false }

console.log(iterator.next());
// { value: 30, done: false }

console.log(iterator.next());
// { value: undefined, done: true }
function* number() {
  yield 10;
  yield 20;
  yield 30;
}

const gen = number();

console.log(gen.next()); // { value: 10, done: false }
console.log(gen.next()); // { value: 20, done: false }
console.log(gen.next()); // { value: 30, done: false }
console.log(gen.next()); // { value: undefined, done: true }

class Student {
  study() {
    console.log("Student is studying");
  }
}

const s1 = new Student();
s1.study();
class Students {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const s2 = new Students("Ravi", 20);

console.log(s2.name); // Ravi
console.log(s2.age);  // 20

class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }
}

const calc = new Calculator();

console.log(calc.add(10, 5));      // 15
console.log(calc.subtract(10, 5)); // 5
const person = {
  greet() {
    console.log("Hello!");
  }
};

const student = Object.create(person);

student.greet(); // Hello!
console.log(Object.getPrototypeOf(student) === person);
// true
const animal = {
  eat() {
    console.log("Eating");
  }
};

const dog = Object.create(animal);

dog.bark = function () {
  console.log("Barking");
};

dog.bark(); // Barking
dog.eat();  // Eating
class Animal {
  eat() {
    console.log("Eating");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Barking");
  }
}

const dog = new Dog();

dog.eat();  // Eating
dog.bark(); // Barking

class Vehicle {
  start() {
    console.log("Vehicle started");
  }
}

class Car extends Vehicle {
  drive() {
    console.log("Car is driving");
  }
}

const car = new Car();

car.start(); // Vehicle started
car.drive(); // Car is driving
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

const dog = new Dog("Tommy", "Labrador");

console.log(dog.name);  // Tommy
console.log(dog.breed); // Labrador
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    super.speak();
    console.log("Dog barks");
  }
}

new Dog().speak();
try {
  let result = JSON.parse("{invalid json}");
  console.log(result);
} catch (error) {
  console.log("Something went wrong:", error.message);
}
try {
  console.log("Try block");
} catch (error) {
  console.log("Error occurred");
} finally {
  console.log("Always runs");
}
function checkAge(age) {
  if (age < 18) {
    throw new Error("You must be at least 18");
  }

  return "Access granted";
}

try {
  console.log(checkAge(16));
} catch (error) {
  console.log(error.message);
}
