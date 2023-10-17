/* Event Loop: The event loop is a continuous process that checks the call stack and the event queue. It operates as follows:

It checks if the call stack is empty. If it is, it takes the first task from the event queue and 
pushes it onto the call stack for execution.
If the call stack is not empty, the event loop waits until it becomes empty.
*/

console.log("Start");
setTimeout(() => {
  console.log("Timeout 1");
}, 0);
setTimeout(() => {
  console.log("Timeout 2");
}, 0);
console.log("End");

// outputs : Start, End, Timeout 1, Timeout 2 

/*Even though both setTimeout callbacks have a delay of 0 milliseconds, 
the event loop ensures that they are executed after the current code execution is complete, 
in the order they were added to the event queue.
*/