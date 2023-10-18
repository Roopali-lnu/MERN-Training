/*Write a function filterArray(arr, callback) that takes an integer array arr 
and a callback function callback. The function should filter the array based on the callback's
 criteria (all numbers that are divisible by 8)and return a new array with the filtered elements.
*/

function filterArray(arr, callback) {
    return arr.filter(callback);
}
function divByEight(number) {
    return number % 8 === 0;
}

const interegArray = [8, 15, 18, 16, 22, 24, 28, 36, 32, 40, 80];
const filteredArray = filterArray(interegArray, divByEight);
console.log(filteredArray);


//The filter method is used to create a new array containing elements that satisfy the callback's criteria, 