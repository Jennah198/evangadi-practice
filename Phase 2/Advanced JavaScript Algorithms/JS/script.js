// Question 1
// Given an array of numbers, write a function that prints in the console another array
// which contains all the even numbers in the original array, which also have even indexes only.
// ○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
// ○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]

// PSEUDOCODE:
// 1. Create empty result array
// 2. Loop through the input array using index
// 3. If index is even AND number is even → add to result
// 4. Print result array

function getOnlyEvens(arr) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0 && arr[i] % 2 === 0) {
      result.push(arr[i])
    }
  }

  console.log(result)
}

getOnlyEvens([1, 2, 3, 6, 4, 8])
getOnlyEvens([0, 1, 2, 3, 4])
