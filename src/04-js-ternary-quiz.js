//  * This quiz is to test your knowledge of Teranary Operator.

//  * Question 1
//  * Declare a variable isSunny with a value of true.
const isSunny = true;
// Use a ternary operator to set a variable activity to "Go to the beach"
// if isSunny is true and "Stay indoors" otherwise.
const activity = isSunny ? "Go to the beach" : "Stay indoors";
console.log("[Question 1]:", activity);

//  * Question 2
//  * Given a variable age = 20,
const status = "Adult";
const age = 20;
age > 18 ? "Adult" : "Minor";

// * use a ternary operator to determine if the
// //  * age is greater than 18. If so, set a variable status to "Adult",
// otherwise set it to "Minor".
console.log("[Question 2]:", status);

//  * Question 3
//  * Using a ternary operator, check if the length of the array [1, 2, 3, 4]
const numbers = [1, 2, 3, 4];
numbers.length / 2 === 0 ? "isEvenLength" : false;
console.log("[Question 3]:", numbers.length);

//  * is even. If true, set a variable isEvenLength to true, otherwise set it to
//  *  false.

//  * Question 4
//  * Given a variable score = 45,
const score = 45;
const result = score >= 50 ? "Pass" : "Fail";
console.log("[Question 4]:", result);
//  use a ternary operator to set a variable
//  * result to "Pass" if score is greater than or equal to 50 and "Fail"
//  * otherwise.

//  * Question 5
//  * Use a ternary operator to determine whether the number 15 is even or odd.
const number = 15;
result / 2 === 0 ? "even" : "odd;";
console.log("[Question 5]:", result);
//  * Set a variable parity to the result.
//  */

//  * Question 6
//  * Given a variable temperature = 22,
const tempeture = 22;
const outfit = tempeture < 22 ? "Wear a jacket" : "T-shir is fine";
console.log("[Question 6]:", outfit);
//  *  use a ternary operator to set a variable
//  * outfit to "Wear a jacket" if temperature is below 20 and "T-shirt is fine"
//  * otherwise.

//  * Question 7
const fruits = ["apple", "banana", "cherry"];
let isApple = fruits[0] === "apple" ? true : false;

console.log("[Question 7]:", isApple);
//  * Using a ternary operator, determine if the first element of the array
//  * ["apple", "banana", "cherry"] is "apple". If true, set a variable isApple
//  *  to true, otherwise set it to false.

//  * Question 8
//  * Given a variable height = 180,
const height = 180;
const basketball =
  height > 175 ? "You're tall enough to play" : "Might be a bit short";
console.log("[Question 8]:", basketball);
//  * use a ternary operator to set a variable basketball to "You're tall enough to play"
// if height is greater than 175
//  * and "Might be a bit short" otherwise.

//  * Question 9
//  * Given a variable day = "Sunday",
const day = "Sunday";
const workday = "weekend" === "Sunday" || "Saturday" ? "weekend" : "workday";
console.log("[question 9]:", workday);
// use a ternary operator to set a variable
//  * workday to "Weekend" if day is either "Saturday" or "Sunday" and "Workday"
//  * otherwise.

//  * Question 10
const string = "hello";
string.length === 5 ? "isLengthFive" : false;
console.log("[Question 10]:", string.length);
//  * Use a ternary operator to determine if the string "hello" is of length 5.
//  * If true, set a variable isLengthFive to true, otherwise set it to false.
