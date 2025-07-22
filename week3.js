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
function doSomething() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Other things to do before completion of the promise
      console.log("Did something");
      // The fulfillment value of the promise
      resolve("https://example.com/");
    }, 20);
  });
}