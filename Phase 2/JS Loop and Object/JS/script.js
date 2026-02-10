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

// Question 5
// Problem:
// Print the total number of elements in an array.

// Input Validation:
// - Input must be an array

// Pseudocode:
// 1. Check input is array
// 2. Print array.length

function printArrayLength(arr) {
  if (!Array.isArray(arr)) {
    console.error('Input must be an array')
    return
  }

  console.log(arr.length)
}

// Question 6
// Problem:
// Print the sum of all numbers in an array.

// Input Validation:
// - Input must be an array
// - All elements must be numbers

// Pseudocode:
// 1. Validate array
// 2. Initialize sum = 0
// 3. Loop through array
// 4. Add each number
// 5. Print sum

function sumArrayNumbers(arr) {
  if (!Array.isArray(arr)) {
    console.error('Input must be an array')
    return
  }

  let sum = 0

  for (let num of arr) {
    if (typeof num !== 'number') {
      console.error('Array must contain only numbers')
      return
    }
    sum += num
  }

  console.log(sum)
}

// Question 7
// Problem:
// Subtract sum of odd numbers from sum of even numbers.

// Input Validation:
// - Input must be array
// - Elements must be numbers

// Pseudocode:
// 1. Initialize evenSum and oddSum
// 2. Loop through array
// 3. Check even or odd
// 4. Subtract oddSum from evenSum
// 5. Print result

function evenMinusOdd(arr) {
  if (!Array.isArray(arr)) {
    console.error('Input must be an array')
    return
  }

  let evenSum = 0
  let oddSum = 0

  for (let num of arr) {
    if (typeof num !== 'number') {
      console.error('Array must contain only numbers')
      return
    }

    num % 2 === 0 ? (evenSum += num) : (oddSum += num)
  }

  console.log(evenSum - oddSum)
}
