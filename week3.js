// Event loop: microtasks and macrotasks

// let i = 0;
// let start = Date.now();
// function count() {
//   for (let j = 0; j < 1e9; j++) {
//     i++;
//   }
//   console.log("Done in " + (Date.now() - start) + "ms");
// }
// count();

// let i = 0;
// let start = Date.now();
// function count() {
//   do {
//     i++;
//   } while (i % 1e6 != 0);
//   if (i == 1e9) {
//     console.log("Done in " + (Date.now() - start) + 'ms');
//   } else {
//     setTimeout(count);
//   }
// }
// count();

// promise
// function doSomething() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Did something");
//       resolve("https://example.com/");
//     }, 20);
//   });
// }



// Promise
// function loadUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("👤 User loaded");
//     }, 3000);
//   });
// }

// loadUser()
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));


// async await function
// function fakeFetch() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("✅ Done fetching");
//     }, 2000);
//   });
// }

// async function getData() {
//   const data = await fakeFetch();
//   console.log(data);
// }

// getData(); 


// try catch method
// async function safeFetch() {
//   try {
//     const res = await Promise.reject("❌ Failed");
//     console.log(res);
//   } catch (err) {
//     console.error("Caught error:", err); 
//   }
// }
// safeFetch();


// global scope and block scope
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }


// for (var i = 0; i < 3; i++) {
//   (function(j) {
//     setTimeout(() => console.log(j), 100);
//   })(i);
// }


// function declaration
// function test(){
//   console.log("Hello, Raunak");
// }
// test();

// function expression
// const greet = function(){
//   console.log("Hello, Raunak")
// }
// greet();

// arrow function 
// const name = () => {
//   console.log("Hello, Raunak");
// }
// name();



// Practice set
// sayHi();
// sayHello();

// function sayHi(){
//   console.log("Hello, Raunak");
// }

// const sayHello = function(){
//   console.log("Hello, Raunak");
// }


// closure
function outer(){
  const name = "Raunak";

   function inner(){
    console.log("Hello, " + name);
  
  }
  return inner;
}

const greet = outer();
greet();