//What are first class citizens
/*JavaScript treats functions as first-class citizens, 
allowing you to work with them in a flexible and versatile manner. 
This capability is fundamental to many advanced programming techniques and patterns in JavaScript, 
including callbacks, closures, and functional programming.*/

//Functions can be assigned to variables

const firstClass = function () {
    console.log("Function with variables");

}
firstClass();

// //Functions can be passed as arguments
function firstClass1(argu) {
    console.log("Functions with arguments")
    argu();

}
firstClass1(function () {
    console.log("callback function")
});

//Functions can be returned from other functions
function firstClass2() {
    let num = 0;
    return function () {
        return num++;
    };
}
const number = firstClass2();
console.log(number());
console.log(number());
console.log(number()); // increment +1

//Functions can be stored in data structures :You can store functions in data structures like arrays or objects

const firstClass3 = [
    function () {
        console.log("A");
    },
    function () {
        console.log("B");
    }
];
firstClass3[1](); // call 2nd function "B"

//Functions can have properties and methods

function firstClass4 (methods){
    console.log(`properties ${methods}`);
}
firstClass4.fun = 'prop1';
console.log(firstClass4.fun );


