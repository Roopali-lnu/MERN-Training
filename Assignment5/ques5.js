console.log("Start");
setTimeout(() => {
  console.log("Timeout 1");
  setTimeout(() => {
    console.log("Nested Timeout");
  }, 0);
}, 0);
setTimeout(() => {
  console.log("Timeout 2");
}, 0);
console.log("End");

/*
Start
End
Timeout 1
Timeout 2
Nested Timeout
the event loop checks the event queue again and executes the "Nested Timeout" callback.
 This logs "Nested Timeout" to the console.
 The event loop ensures that callbacks are executed in the order they were added to the event queue.
*/