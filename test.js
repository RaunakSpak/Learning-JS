// factorial number
function myFact(n){
    let result = 1;
    for(let i=1; i<=n; i++){
        result *= i;
    }   
    return result;
}
console.log(myFact(5));


// Data types
console.log(typeof 'raunak')
console.log(typeof 823)
console.log(typeof Symbol())
console.log(typeof null)
console.log(typeof 872638423.8978)
console.log(typeof [])
console.log(typeof {})

// function scope
{
    var a = 10;
}
console.log(a);

{
    let b = "Raunak";
    console.log(b)
}
// console.log(b)


// hoisting
function myName() {
    console.log(haa);
    var haa = 20;
}
console.log(myName())

// variable 
var x = 10;
console.log(x)


let y = 20;
console.log(y);


const name = "Raunak"
console.log(name)


// call stack and execution context
function first() {
  console.log("Inside first function");
  second();
  console.log("Back to first function");
}

function second() {
  console.log("Inside second function");
  third();
  console.log("Back to second function");
}

function third() {
  console.log("Inside third function");
}

first();
console.log("Global execution");

const obj = { name: "you" };
const copy = obj;
copy.name = "changed";
console.log(obj.name); 



// function declaration
function sayH(){
  console.log("hello world");
}
sayH();

// function expression
const sayHello = function(){
  console.log("hello raunak")
}
sayHello();


// closure 
function counter(){
  let count = 0;
  return function (){
    count++;
    console.log(count);
  }
}

const myCounter = counter();
myCounter();
myCounter();



// this keyword
const person = {
  name : "raunak",
  greet(){
    console.log('Hello' + this.name);
  }
}
person.greet();
const greet = person.greet;
greet();


