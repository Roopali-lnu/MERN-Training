//WAP to remove duplicates from a string (for eg: “Hello Yellow” -> “Helo Yw” )

function duplicateString(str) {
    let string = '';

    for (let i = 0; i < str.length; i++) {
        const string1 = str[i];
        if (string.indexOf(string1) === -1) {
            string += string1;
        }
    }
    return string;
}

const originalString = "Hello Yellow";
const duplicatedString = duplicateString(originalString);
console.log(duplicatedString);