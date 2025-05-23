// Log a statement using console.log()
// console.log('Hello from main.js');

// VARIABLES

// let age = 25;
// console.log(age);

// const salary = 0;
// salary = 80000;
// console.log(salary);

// Difference between let and const declarations

// All const declarations must be initialised and once initialised you cannot reassign a new value

// All let declarations do not have to be initialised and once initialised you can reassign a new variable

// let sum = 0;
// sum = 5;
// console.log(sum);

// DATA TYPES

// const name = 'Vishwas';
// const language = 'JavaScript';
// const channel = `Codevolution`;

// const total = 0;
// const PI = 3.14;

// const isPrimaryNumber = true;
// const isNewUser = false;

// let result;
// console.log(result);

// const res = null;

// const data = null;

// const person = {
//   firstName: 'Bruce',
//   lastName: 'Wayne',
//   age: 30,
// };

// console.log(person.firstName);

// const oddNumbers = [1, 3, 5, 7, 9];
// console.log(oddNumbers[2]);

// let a = 10;
// a = 'Vishwas';
// a = true;
// console.log(a);

// let x = 10;
// let y = 5;

// console.log(x % y);

// console.log(++x);
// console.log(--y);

// console.log(y <= x);

// const isValidNumber = x > 20 || 8 > y;
// console.log(isValidNumber);

// const isValid = false;
// console.log(!isValid);

// console.log('Bruce ' + 'Wayne');

// const isEven = 10 % 2 === 0 ? 'Number is even' : 'Number is odd';
// console.log(isEven);

// Type Conversions

// Implicit conversion also known as type coercion where JavaScript itself will automatically convert the type

// Explicit conversion where you manually convert the type

// console.log(true + '3');
// console.log('4' - '2');
// console.log('3' * '2');
// console.log('8' / '4');
// console.log('Bruce' - 'Wayne');
// console.log('5' - true);
// console.log('Bruce' - 'Wayne');
// console.log('5' - null);
// console.log(5 + undefined);

// console.log(Number(''));
// console.log(parseInt('5'));
// console.log(parseFloat('3.14'));

// console.log(String(undefined));
// console.log((500).toString());
// console.log(Boolean(10)); // null undefined 0 '' NaN all return false when converted to Boolean. Everything else will return true

// const var1 = null;
// const var2 = undefined;

// console.log(var1 == var2);
// console.log(var1 === var2);

// const num = 0;

// if (num > 0) {
//   console.log('Number is positive');
// } else if (num < 0) {
//   console.log('Number is negative');
// } else {
//   console.log('Number is zero');
// }

// const color = 10;

// switch (color) {
//   case 'red':
//     console.log('Color is red');
//     break;
//   case 'blue':
//     console.log('Color is blue');
//     break;
//   case 'green':
//     console.log('Color is green');
//     break;
//   default:
//     console.log('Not a valid color');
// }

// LOOPS (for loop, while loop, do..while loop, for..of loop)

// For Loop

// for (initialiser; condition; final-expression) {
// code to run
//}

// for (let i = 1; i <= 5; i++) {
//   console.log('Iteration number ' + i);
// }

// While Loop

// initialiser
// while (condition) {
// code to run

// final-expression
//}

// let i = 1;
// while (i <= 5) {
//   console.log('Iteration number ' + i);
//   i++;
// }

// Do..While loop

// initialiser
// do {
// code to run

// final-expression
//} while (condition)

// The do..while is always executed at least once. That is because the condition comes after the code inside the loop

// let i = 6;
// do {
//   console.log('Iteration number ' + i);
//   i++;
// } while (i <= 5);

// For..of loop

// for (const item of array) {
//   code to run
// }

// const numArray = [1, 2, 3, 4, 5];

// for (const num of numArray) {
//   console.log('Iteration number ' + num);
// }

// Functions

// A JavaScript function is a block of code designed to perform a particular task

// Ex: Add two numbers, multiply two numbers etc

// Functions are reusable as they can be defined once and can be called with different values resulting in different results

// Functions help divide a complex problem into smaller chunks and makes your program easy to understand and maintain

// function name(parameter1, parameter2, parameter3) {
// code to be executed
//}

// function greet(username) {
//   console.log('Good morning ' + username);
// }

// greet('Bruce');
// greet('Clark');
// greet('Diana');

// In the function definition, the input username is called a parameter.
// When invoking the function, Bruce, Clark and Diana, are called function arguments

// function add(a, b) {
//   return a + b;
// }

// const sum = add(25, 25);
// console.log(sum);

// ARROW FUNCTIONS

// const arrowSum = (a, b) => {
//   return a + b;
// };

// const arrowSum = (a, b) => a + b;
// const addFive = (num) => num + 5;
// const newSum = arrowSum(25, 25);
// console.log(newSum);

// Scope

// Scope basically determines the accessibility or visibility of variables

// Block scope

// Function scope

// Global scope

// Block scope dictates that variables declared inside a pair of curly braces cannot be accessed from outside the block

const myNum = 100;
const myName = 'Superman';
if (true) {
  const myName = 'Vishwas';
  console.log(myName);
  console.log(myNum);
  // let and const variables can only be accessed inside the block they are declared in
}

// Function Scope
// Function scope dictates that variables delared inside a function are not accessible from outside the function.

function testFn() {
  const myName = 'Batman';
  console.log(myName);
  console.log(myNum);
}

testFn();

// Global Scope
// Global scope is any scope outside a block or a function.
// Global scope variable is accessible within a block or a function

// A globally scoped variable will not overwrite block or function scoped variables
