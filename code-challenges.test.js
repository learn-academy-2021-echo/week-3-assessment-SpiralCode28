// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// a describe method that lists a function with expect statements

describe("fibonacciLength", () => {
  it("takes in a number >2 and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    // expected input: 6, expected output: our example values above
    // expected input: 10, expected output: our example values above

    expect(fibonacciLength(6)).toEqual([1, 1, 2, 3, 5, 8]);
    expect(fibonacciLength(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});

// Run file in jest
// RED: failed test - fibonacciLength is not defined

// b) Create the function that makes the test pass.

// create a function that takes in a num as a parameter

var input1 = 6;
var input2 = 10;

// create a function that takes in a number and iterates through it

// create a variable that will hold our finished array

const fibonacciLength = (num) => {
  let fibArray = [1, 1];

  // iterate through the new array and have its index value equal the index's previous iteration and add the two iterations before.

  for (let i = 2; i < num; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }
  return fibArray;
};

// console.log(fibonacciLength(input1));

// Run file in jest
// GREEN: passed test

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"];
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"];
// Expected output: [-823, 7, 23]

// a describe method that lists a function with expect statements

describe("oddNums", () => {
  it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
    // input will be our fullArr variables. The output will be the expected output arrays.

    expect(oddNums(fullArr1)).toEqual([-9, 7, 9, 199]);
    expect(oddNums(fullArr2)).toEqual([-823, 7, 23]);
  });
});

// Run file in jest
//RED: failed test - oddNums is not defined

// b) Create the function that makes the test pass.

// create a function that takes in an array then filters out other data except numbers, store in variable

// filter out even numbers and keep only odd, store in new variable

// take newest array and .sort from lowest to highest

// refactor code (applied .filter twice the first variable and deleted the second)

const oddNums = (array) => {
  let newArr = array
    .filter((value) => typeof value === "number")
    .filter((value) => {
      return value % 2 !== 0 ? value : null;
    });
  return newArr.sort((firstItem, secondItem) => firstItem - secondItem);
};

// console.log(oddNums(fullArr1));
// console.log(oddNums(fullArr2));

// Run file in jest
// GREEN: passed test

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9];
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12];
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = [];
// Expected output: []

describe("addArray", () => {
  it("function that takes in an array and returns an array of the accumulating sum, empty array should return an empty array", () => {
    // input will be our example variables (numbersToAdd). The output will be our expected output values.

    expect(addArray(numbersToAdd1)).toEqual([2, 6, 51, 60]);
    expect(addArray(numbersToAdd2)).toEqual([0, 7, -1, 11]);
    expect(addArray(numbersToAdd3)).toEqual([]);
  });
});

// Run file in jest
// RED: failed test - addArray is not defined

// b) Create the function that makes the test pass.

const addArray = (array) => {
  // declare a variable containing an empty array.

  let newArr = [];
  // use reduce method to iterate through the array

  // declare the use of previous, current, and index values

  // have newArr index value equal the arrays previous value plus the current iteration value

  // function will return empty if no values are present in the array

  array.reduce(
    (previousVal, currentVal, i) => (newArr[i] = previousVal + currentVal),
    0
  );
  return newArr;
};
// console.log(plusArray(numbersToAdd1));
// console.log(plusArray(numbersToAdd2));
// console.log(plusArray(numbersToAdd3));

// Run file in jest
// GREEN: passed test
