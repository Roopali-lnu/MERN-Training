//WAP to reverse an integer

function reverseNumber(revnum) {
    const reverseNumber1 = revnum.toString().split('').reverse().join('');
    const reverseNum = parseInt(reverseNumber1);
    return reverseNum;
}

const originalNumber = 123456;
const reverseOriginalNum = reverseNumber(originalNumber);

console.log(`this is original number ${originalNumber}`);
console.log(`this is reversed number ${reverseOriginalNum}`);