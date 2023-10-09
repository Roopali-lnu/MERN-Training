//WAP to find sum of numbers at even places in an array of integers using for in loop

function sumOfArray(arr) {
    let sum = 0;

    for (let index in arr) {
        if (index % 2 === 0) {
            sum += arr[index];
        }
    }
    return sum;

}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const result = sumOfArray(numbers);
console.log('sum of even places:', result);