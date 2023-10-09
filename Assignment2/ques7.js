/*WAP to sort an array of objects on the basis of age 
For eg: [{name: “John”, age: 26}, {name: “Alice”, age: 30}, {name: “Bob”, age: 29}, {name: “Steve”, age: 35}]
Must output to:[{name: “John”, age: 26},{name: “Bob”, age: 29}, {name: “Alice”, age: 30}, {name: “Steve”, age: 35}]*/


const employees = [
    { name: "John", age: 26 },
    { name: "Alice", age: 30 },
    { name: "Bob", age: 29 },
    { name: "Steve", age: 35 }
];

employees.sort((age1, age2) => age1.age - age2.age);

console.log(employees);





