console.log("Start");
setTimeout(() => {
  console.log("Timeout");
}, 0);
Promise.resolve().then(() => {
  console.log("Promise 1");
});
Promise.resolve().then(() => {
  console.log("Promise 2");
});
console.log("End");

/* outputs
Start
End
Promise 1
Promise 2
Timeout
the event loop checks if the call stack is empty. Since it is, 
the setTimeout callback (console.log("Timeout")) is executed, logging "Timeout" to the console.
*/