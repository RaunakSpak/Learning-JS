
// 1. Callback Challenge
function getUser(id, callback) {
  setTimeout(() => {
    callback({ id, name: "Raunak" });
  }, 1000);
}
getUser(1, function(user) {
  console.log("Callback User:", user);
});

// 2. Promises Challenge
function fakeAPI(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) resolve("Success: " + value);
      else reject("Error: No value");
    }, 1000);
  });
}
fakeAPI("JS")
  .then(res => console.log("Promise Result:", res))
  .catch(err => console.error("Promise Error:", err));

// 3. async/await Challenge
async function loadData() {
  try {
    const result = await fakeAPI("Async Await");
    console.log("Async/Await Result:", result);
  } catch (e) {
    console.error("Async/Await Caught:", e);
  }
}
loadData();

// 4. (Optional) Fake Product Loader – demo only (no UI here)
async function loadProduct(name) {
  console.log("Loading product...");
  await new Promise(r => setTimeout(r, 1000)); // simulate delay
  console.log("Product loaded:", name);
}
loadProduct("Widget 3000");


// – How does the JavaScript event loop work? –

// When the JS engine runs code it uses a single call stack for synchronous tasks, while async tasks
// (like timers and promise callbacks) are offloaded to Web APIs and then queued. The event loop
// continually checks the stack and, when it’s empty, moves tasks from the microtask queue (promises)
// first, then from the macrotask queue (timers), back onto the stack for execution.
