console.log("Start");
setTimeout(() => {
  console.log("Timeout 1");
}, 1000);
Promise.resolve().then(() => {
  console.log("Promise 1");
});
setTimeout(() => {
  console.log("Timeout 2");
}, 0);
Promise.resolve().then(() => {
  console.log("Promise 2");
});
console.log("End");

/*
Start
End
Promise 1
Promise 2
Timeout 2
Timeout 1
The event loop checks if the call stack is empty. 
Since it is, the second setTimeout callback (console.log("Timeout 2")) is executed 
and logs "Timeout 2" to the console.
and after that  first setTimeout callback (console.log("Timeout 1");) is executed after 1 sec.
*/