const fs = require("fs");
console.log("start");
setTimeout(() => {
    console.log("timeout finished")
}, 0);
fs.readFile("a.txt", (err, data) => {
    console.log("data returned");
})
setImmediate(() => {
    console.log("executing setImmediate callback");
    setTimeout(() => {
        console.log("second timeout finished")
    }, 0)
});
console.log("end");

/*
start
end
executing setImmediate callback
data returned
timeout finished
second timeout finished
*/