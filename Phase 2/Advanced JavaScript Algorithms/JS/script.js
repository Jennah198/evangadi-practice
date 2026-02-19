// Question 1
// Given an array of numbers, print another array that contains
// only EVEN numbers that also have EVEN indexes.

// PSEUDOCODE:
// 1. Check input is an array
// 2. Create empty result array
// 3. Loop through array indexes
// 4. If index even AND value even → push to result
// 5. Print result

function getOnlyEvens(arr) {
  if (!Array.isArray(arr)) {
    console.log('Invalid input: must be an array')
    return
  }

  const result = []

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') continue

    if (i % 2 === 0 && arr[i] % 2 === 0) {
      result.push(arr[i])
    }
  }

  console.log(result)
}

getOnlyEvens([1, 2, 3, 6, 4, 8])
getOnlyEvens([0, 1, 2, 3, 4])
