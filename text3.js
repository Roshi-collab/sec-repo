Part 2: Implementation Exercises

Variables and Data Types: Declare three separate variables using let, const, and var to store your full name (string), your age (number), and whether you are enrolled in a class (boolean). Log each variable and its corresponding typeof result to the console.


a)  let fullName = "Roshi Mohamed";
const age = 20;
var enrolled = true;

console.log(fullName, typeof fullName);
console.log(age, typeof age);
console.log(enrolled, typeof enrolled);

b)
let numericString = "5";
let number = 10;

console.log(numericString + number);
console.log(numericString * number);

c)

let age = 20;

if (age < 5) {
    console.log("Free");
} else if (age >= 5 && age <= 17) {
    console.log("Child discount");
} else if (age >= 18 && age <= 64) {
    console.log("Full price");
} else {
    console.log("Senior discount");
}

d)

Conditional (Ternary) Operator: Create a variable holding a user's account balance. Use the ternary operator to evaluate whether the balance is less than zero; if true, assign the string "Account Overdrawn", otherwise assign "Account Active".


let balance = -50;

let accountStatus = balance < 0 ? "Account Overdrawn" : "Account Active";

console.log(accountStatus);




what to understand 

condition ? valueIfTrue : valueIfFalse

So here:

balance < 0
     ↓
  true? ="Account Overdrawn"
  false? ="Account Active"

If balance is -50, the output is= Account Overdrawn






e) - **Comprehensive Challenge:** Write a short script using variables, arithmetic operators, and a `switch` statement that calculates a final grade based on a numeric score out of 100 divided into ranges for grades A, B, C, D, and F.






let score = 85;
let grade;

switch (true) {
    case score >= 90:
        grade = "A";
        break;

    case score >= 80:
        grade = "B";
        break;

    case score >= 70:
        grade = "C";
        break;

    case score >= 60:
        grade = "D";
        break;

    default:
        grade = "F";
}

console.log("Grade:", grade);

