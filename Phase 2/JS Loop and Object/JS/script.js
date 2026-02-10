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

// Question 8
// Problem:
// Print elements at even indexes only.

// Input Validation:
// - Input must be array

// Pseudocode:
// 1. Loop using index
// 2. If index % 2 === 0, print element

function printEvenIndexElements(arr) {
  if (!Array.isArray(arr)) {
    console.error('Input must be an array')
    return
  }

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      console.log(arr[i])
    }
  }
}

// Question 9
// Problem:
// Remove last element, add 32, print array.

// Input Validation:
// - Input must be array

// Pseudocode:
// 1. Remove last element using pop
// 2. Add 32 using push
// 3. Print array

function modifySampleArray(arr) {
  if (!Array.isArray(arr)) {
    console.error('Input must be an array')
    return
  }

  arr.pop()
  arr.push(32)
  console.log(arr)
}

// Question 10
// Problem:
// Sort array numerically ascending.

// Input Validation:
// - Input must be array of numbers

// Pseudocode:
// 1. Validate array
// 2. Sort using compare function
// 3. Print array

function sortArrayAscending(arr) {
  if (!Array.isArray(arr)) {
    console.error('Input must be an array')
    return
  }

  arr.sort(function (a, b) {
    return a - b
  })

  console.log(arr)
}

let evangadiClass = {
  lengthOfCourse: '1 Month',
  website: 'https://www.evangadi.com/',
  isChallenging: false,
  topicsCovered: ['HTML', 'CSS', 'Media Query', 'JavaScript'],
  students: [
    { name: 'Abebe', age: 34, sex: 'M' },
    { name: 'Kebede', age: 44, sex: 'M' },
    { name: 'Almaz', age: 27, sex: 'F' },
    { name: 'Challa', age: 22, sex: 'M' },
    { name: 'Chaltu', age: 19, sex: 'F' },
  ],
}

// Question 11
// Problem:
// Change lengthOfCourse to "5 Month"

// Pseudocode:
// 1. Update property
// 2. Print object

evangadiClass.lengthOfCourse = '5 Month'
console.log(evangadiClass)

// Question 12
// Problem:
// Add Bootstrap to topicsCovered

// Pseudocode:
// 1. Use push method
// 2. Print object

evangadiClass.topicsCovered.push('Bootstrap')
console.log(evangadiClass)

// Question 13
// Problem:
// Calculate average age of students

// Input Validation:
// - Object must contain students array

// Pseudocode:
// 1. Loop students
// 2. Sum ages
// 3. Divide by total students
// 4. Print result

function averageAge(obj) {
  if (!obj.students || !Array.isArray(obj.students)) {
    console.error('Invalid object structure')
    return
  }

  let total = 0

  for (let student of obj.students) {
    total += student.age
  }

  console.log(total / obj.students.length)
}

// Question 14
// Problem:
// Calculate percentage of male students

// Pseudocode:
// 1. Count males
// 2. Divide by total
// 3. Multiply by 100
// 4. Print result

function malePercentage(obj) {
  if (!obj.students || !Array.isArray(obj.students)) {
    console.error('Invalid object structure')
    return
  }

  let maleCount = 0

  for (let student of obj.students) {
    if (student.sex === 'M') maleCount++
  }

  console.log((maleCount / obj.students.length) * 100 + '%')
}

// Question 15
// Problem:
// Print numbers between low and high and mark divisible by 3

// Input Validation:
// - low & high must be numbers
// - low < high

function divisorsOfThree(low, high) {
  if (typeof low !== 'number' || typeof high !== 'number' || low >= high) {
    console.error('Invalid inputs')
    return
  }

  for (let i = low; i <= high; i++) {
    if (i % 3 === 0) {
      console.log(i + ' div3')
    } else {
      console.log(i)
    }
  }
}

// Question 16
// Problem:
// Classic FizzBuzz from 1 to 100

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz')
    else if (i % 3 === 0) console.log('Fizz')
    else if (i % 5 === 0) console.log('Buzz')
    else console.log(i)
  }
}

// Question 19
// Problem:
// Print 1 if all digits are even, else print 0

// Input Validation:
// - Input must be a positive integer

function isEvens(num) {
  if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
    console.error('Input must be a positive integer')
    return
  }

  let digits = num.toString()

  for (let digit of digits) {
    if (digit % 2 !== 0) {
      console.log(0)
      return
    }
  }

  console.log(1)
}
