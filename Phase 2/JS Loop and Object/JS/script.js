// Question 1
// Problem:
// Print the first 10 integers starting from 1 using a for loop.

// Input Validation:
// - No input required

// Pseudocode:
// 1. Loop from 1 to 10
// 2. Print each number

function printFirstTenIntegers() {
  for (let i = 1; i <= 10; i++) {
    console.log(i)
  }
}

// Question 2
// Problem:
// Take a number and print the next 5 numbers, each on a new line.

// Input Validation:
// - Input must exist
// - Input must be a number

// Pseudocode:
// 1. Validate input is a number
// 2. Loop from number + 1 to number + 5
// 3. Print each value

function printNextFiveNumbers(num) {
  if (typeof num !== 'number') {
    console.error('Input must be a number')
    return
  }

  for (let i = 1; i <= 5; i++) {
    console.log(num + i)
  }
}

// Question 3
// Problem:
// Print the sum of the next 10 numbers after a given number.

// Input Validation:
// - Input must be a number

// Pseudocode:
// 1. Validate input
// 2. Initialize sum = 0
// 3. Loop from num + 1 to num + 10
// 4. Add to sum
// 5. Print sum

function sumNextTenNumbers(num) {
  if (typeof num !== 'number') {
    console.error('Input must be a number')
    return
  }

  let sum = 0

  for (let i = 1; i <= 10; i++) {
    sum += num + i
  }

  console.log(sum)
}

// Question 4
// Problem:
// Print every element in an array.

// Input Validation:
// - Input must be an array

// Pseudocode:
// 1. Check input is array
// 2. Loop through array
// 3. Print each element

function printArrayElements(arr) {
  if (!Array.isArray(arr)) {
    console.error('Input must be an array')
    return
  }

  for (let item of arr) {
    console.log(item)
  }
}
