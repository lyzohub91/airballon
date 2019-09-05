// JS program to compute and print the sum of the two given integers
let x = 9;
let y = 6;
console.log("First integer number is: " + x);
console.log("Second integer number is: " + y);
console.log("Sum of two given integers:", x += y);

//JS program to create a new string adding “Test_" in front of a given string
let string1 = "Test_";
let string2 = "incident_created_by_user1";
console.log(string1 += string2);

// JS program to combine and print your first, last name and age
let firstName = "Andrii";
let lastName = "Lyzogub";
let age = 27;
console.log(firstName + " " + lastName + " - " + age + " years old");

//JS program to check a given integer is bigger then 100
let intNum = 60;
const z = 100;
//console.log(intNum>z);
if (intNum > z) {
    console.log(intNum + " is bigger then " + z);
}
if (intNum < z) {
    console.log(intNum + " is not bigger then " + z);
}
if (intNum == z) {
    console.log(intNum + " is equal " + z);
}

//JS program to find if the first number is larger from the two given positive integers
let firstNun = 34;
let secondNum = 33;
console.log(firstNun > secondNum);

//JS program to check two given numbers and return true if one of the number is 50 or if their sum is 50
let num1 = 20;
let num2 = 50;
if ((num1 === 50) || (num2 === 50) || (num1 + num2 === 50)) {
    console.log(true);

}

//JS program check if a given positive number is a multiple of 3 or a multiple of 7
let posNum1 = 50;
if (posNum1 % 3 === 0) {
    console.log(posNum1 + " is a multiple of 3");
}
if (posNum1 % 7 === 0) {
    console.log(posNum1 + " is a multiple of 7");
}
if ((posNum1 % 3 !== 0) && (posNum1 % 7 !== 0)) {
    console.log(posNum1 + " is not a multiple of 3 or 7");
}



