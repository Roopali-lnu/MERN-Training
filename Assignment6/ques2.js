/*Write a function mapArray(arr, callback) that takes an integer array arr 
and a callback function callback. The function should apply the callback to 
each element of the array and return a new array which has the cube of each element.
2
*/

function mapArray(arr, callback) {
    return arr.map(callback);
}

function cubeNumber(number) {
    return number ** 3;
}

const integerArr = [1, 2, 4, 6, 8];
const cubeArr = mapArray(integerArr, cubeNumber);
console.log(cubeArr);


//The map method is used to apply the callback to each element of the array and create a new array with the results,