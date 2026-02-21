// Question 1
// Given an array of numbers, print another array that contains
// only EVEN numbers that also have EVEN indexes.

// PSEUDOCODE:
// 1. Check input is an array
// 2. Create empty result array
// 3. Loop through array indexes
// 4. If index even AND value even → push to result
// 5. Print result

// function getOnlyEvens(arr) {
//   if (!Array.isArray(arr)) {
//     console.log('Invalid input: must be an array')
//     return
//   }

//   const result = []

//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== 'number') continue

//     if (i % 2 === 0 && arr[i] % 2 === 0) {
//       result.push(arr[i])
//     }
//   }

//   console.log(result)
// }

// getOnlyEvens([1, 2, 3, 6, 4, 8])
// getOnlyEvens([0, 1, 2, 3, 4])

// Question 2
// Compare a two-digit number with its reversed version

// PSEUDOCODE:
// 1. Validate input is a number between 10–99
// 2. Reverse digits
// 3. Compare
// 4. Print result

// function reverseCompare(num) {
//   if (typeof num !== 'number' || num < 10 || num > 99) {
//     console.log('Invalid input: must be a two-digit number')
//     return
//   }

//   const reversed = Number(String(num).split('').reverse().join(''))

//   if (num > reversed) {
//     console.log('Ok')
//   } else {
//     console.log('Not ok')
//   }
// }

// reverseCompare(72)
// reverseCompare(23)

// Question 3
// Return factorial of a positive integer

// PSEUDOCODE:
// 1. Validate input is non-negative integer
// 2. If 0 → return 1
// 3. Multiply numbers from 1 to n
// 4. Return result

// function returnFactorial(n) {
//   if (!Number.isInteger(n) || n < 0) {
//     console.log('Invalid input: must be non-negative integer')
//     return
//   }

//   if (n === 0) return 1
//   // Recursive case: n! = n * (n-1)!
//   return n * returnFactorial(n - 1)
// }

// console.log(returnFactorial(5))
// console.log(returnFactorial(6))
// console.log(returnFactorial(0))

// Question 4 (Meera array)
// Check if array contains n and n*2

// PSEUDOCODE:
// 1. Validate input is array of numbers
// 2. Loop through elements
// 3. If n*2 exists → NOT Meera
// 4. Otherwise → Meera

// function checkMeera(arr) {
//   if (!Array.isArray(arr)) {
//     console.log('Invalid input: must be an array')
//     return
//   }

//   for (let num of arr) {
//     if (typeof num !== 'number') {
//       console.log('Invalid input: array must contain only numbers')
//       return
//     }

//     if (arr.includes(num * 2)) {
//       console.log('I am NOT a Meera array')
//       return
//     }
//   }

//   console.log('I am a Meera array')
// }

// checkMeera([10, 4, 0, 5])
// checkMeera([7, 4, 9])
// checkMeera([1, -6, 4, -3])

// Question 5 (Dual array)
// Every number must appear exactly twice

// PSEUDOCODE:
// 1. Validate input is array
// 2. Count frequency of each value
// 3. If any count ≠ 2 → return 0
// 4. Otherwise return 1

// function isDual(arr) {
//   if (!Array.isArray(arr)) {
//     console.log('Invalid input')
//     return 0
//   }

//   const freq = {}

//   for (let num of arr) {
//     if (typeof num !== 'number') return 0

//     // (value || 0) + 1 = “Initialize or increment.”
//     freq[num] = (freq[num] || 0) + 1
//   }

//   // Keys = numbers in array
//   // Values = how many times they appear
//   for (let key in freq) {
//     if (freq[key] !== 2) return 0
//   }

//   return 1
// }

// console.log(isDual([1, 2, 1, 3, 3, 2]))
// console.log(isDual([2, 5, 2, 5, 5]))
// console.log(isDual([3, 1, 1, 2, 2]))

// Question 6
// Convert seconds into HH:MM:SS digital clock

// PSEUDOCODE:
// 1. Validate input is positive integer
// 2. Convert into hours, minutes, seconds
// 3. Handle next day using modulo
// 4. Format with leading zeros
// 5. Return string

// function digitalClock(totalSeconds) {
//   if (!Number.isInteger(totalSeconds) || totalSeconds < 0) {
//     console.log('Invalid input: must be positive integer seconds')
//     return
//   }

//   // 24 × 3600 = 86400 seconds
//   totalSeconds = totalSeconds % 86400

//   const hours = Math.floor(totalSeconds / 3600)
//   const minutes = Math.floor((totalSeconds % 3600) / 60)
//   const seconds = totalSeconds % 60

//   //   function pad(n) {
//   //     return String(n).padStart(2, '0')
//   //   }

//   const pad = (n) => String(n).padStart(2, '0')

//   return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
// }

// console.log(digitalClock(5025))
// console.log(digitalClock(61201))
// console.log(digitalClock(87000))

// visual flow
// Total Seconds
//      ↓
// Remove full days (%86400)
//      ↓
// Split into:
//   Hours → /3600
//   Minutes → remainder /60
//   Seconds → remainder %60
