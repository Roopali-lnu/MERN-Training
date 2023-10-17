console.log("Start");
setImmediate(() => {
  console.log("setImmediate 1");
});
Promise.resolve().then(() => {
  console.log("Promise 1");
});
setImmediate(() => {
  console.log("setImmediate 2");
});
Promise.resolve().then(() => {
  console.log("Promise 2");
});
console.log("End");

/*
Start
End
Promise 1
Promise 2
setImmediate 1
setImmediate 2

the event loop checks if the call stack is empty. Since it is, the setImmediate callbacks are executed.
*/
