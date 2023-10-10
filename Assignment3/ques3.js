//WAP to determine someone’s age using their dob and the current year.

function myAge(DOB) {
    const today = new Date();
    const birthDay = new Date(DOB);


    let age = today.getFullYear() - birthDay.getFullYear();

    if (today.getMonth() < birthDay.getMonth || (today.getMonth() === birthDay.getMonth() && today.getDate() < birthDay.getDate())) {
        age--;
    }
    return age;

}

const DOB1 = "1998-10-30";
const age = myAge(DOB1);
console.log(`I am ${age} years old.`);