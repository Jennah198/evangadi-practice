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

function reverseCompare(num) {
  if (typeof num !== 'number' || num < 10 || num > 99) {
    console.log('Invalid input: must be a two-digit number')
    return
  }

  const reversed = Number(String(num).split('').reverse().join(''))

  if (num > reversed) {
    console.log('Ok')
  } else {
    console.log('Not ok')
  }
}

reverseCompare(72)
reverseCompare(23)
