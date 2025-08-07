// week5.js
// Prototypal Inheritance Example
// Using __proto__ to set prototype chain
const animal = {
    eats: true,
    walk() {
        console.log("Animal walks");
    }
};

const rabbit = {
    jumps: true
};
rabbit.__proto__ = animal;

console.log(rabbit.jumps);
console.log(rabbit.eats);
rabbit.walk();





// object.create() example
const personProto = {
    greet() {
        console.log(`Hi, I'm ${this.name}!`);
    }
};

const raunak = Object.create(personProto);
raunak.name = "Raunak";
raunak.greet();





// constructor function example
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// shared methods go on Person.prototype
Person.prototype.introduce = function () {
    console.log(`My name is ${this.name}, I'm ${this.age}`);
};

const p1 = new Person("Raunak", 24);
p1.introduce();
console.log(p1.__proto__ === Person.prototype);






// Arrow functions and this context // Arrow functions do not have their own 'this' context
// They inherit 'this' from
const cat = {
    name: "Whiskers",
    speak: function () {
        console.log(this.name + " says meow");
    }
};

const speak = cat.speak;
cat.speak();
speak();

const dog = {
    name: "Rex",
    speak: () => {
        console.log(this.name + " says woof");
    }
};
dog.speak();





// Prototype & 'this'
function Car(make) {
    this.make = make;
}
Car.prototype.drive = function () {
    console.log(`${this.make} is driving`);
};

const c = new Car("Toyota");
c.drive();





// ES6 Classes
class User {
    constructor(username) {
        this.username = username;
    }

    // methods go on User.prototype
    sayHi() {
        console.log(`Hello, ${this.username}`);
    }

    static info() {
        console.log("Users are registered people");
    }
}

class Admin extends User {
    constructor(username, level) {
        super(username);
        this.level = level;
    }

    sayRole() {
        console.log(`${this.username} is an admin (level ${this.level})`);
    }
}

const u = new User("Dave");
u.sayHi();
User.info();

const a = new Admin("Eve", 5);
a.sayHi();
a.sayRole();







// Extend Array
Array.prototype.last = function () {
    return this[this.length - 1];
};

// Animal → Dog via constructors
function Animal(type) {
    this.type = type;
}

Animal.prototype.describe = function () {
    console.log(`This is a ${this.type}`);
};

function Dog(name) {
    Animal.call(this, "dog");
    this.name = name;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
    console.log(`${this.name} barks!`);
};



// What is the prototype chain and how does inheritance work in JS?
// The prototype chain is a fundamental mechanism in JavaScript that enables
// inheritance between objects. Every JavaScript object has an internal property, 
// [[Prototype]], which points to another object, its prototype.



// How do ES6 classes differ from constructor functions?
// ES6 classes provide a clearer and more concise syntax for creating objects and
// handling inheritance. They also support features like static methods and
// class fields, making the code more readable and maintainable compared to
// traditional constructor functions. Classes also enforce a more structured approach to inheritance, allowing for better encapsulation and organization of code.
// Additionally, ES6 classes use the `extends` keyword for inheritance, which is more intuitive