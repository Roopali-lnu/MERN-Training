
//Spread Operator('...') The spread operator is used to spread the elements of an iterable (e.g., an array or a string) into another iterable, like an array or function arguments. spread operator can be used to combine arrays or objects.
//example with Arrays
const spread1 = [1, 2, 3, 4];
const spread2 = [...spread1, 5, 6, 7];
console.log(spread2);

// example with objects
const spread3 = { a: 1, b: 2, c: 3 };
const spread4 = { ...spread3, d: 4 }
console.log(spread4);

//Rest Parameter('...') The rest parameter is used in function parameters to collect all the remaining argument values into a single array.

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num); // reduce: that is used to iterate over an array and accumulate values into a single result.
}
console.log(sum(1, 2, 3, 4, 5, 6));

// Difference b/w "==" and "==="

//'==' (Loose Equality): it compares values

1 == "1" // true : match left value = Match right value;

//'===' (Strict Equality): it compares values as well as data types

1 === "1" // false : equal value but different data type;