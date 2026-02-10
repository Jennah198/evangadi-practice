// // ==========================
// // Question 1
// // PSEUDOCODE:
// // START
// //   DEFINE a function named myFirst
// //     PRINT "Hello"
// // END
// function myFirst() {
//   console.log('Hello')
// }
// myFirst()

// // ==========================
// // Question 2
// // PSEUDOCODE:
// // START
// //   DEFINE a function mySecond with parameter
// //     PRINT the parameter
// // END
// function mySecond(parameter) {
//   console.log(parameter)
// }
// mySecond('Evangadi')

// // ==========================
// // Question 3
// // PSEUDOCODE:
// // START
// //   DEFINE a function myThird with value
// //     CALL mySecond and pass value
// // END
// function myThird(value) {
//   mySecond(value)
// }
// myThird('hi')

// // ==========================
// // Question 4
// // PSEUDOCODE:
// // START
// //   DEFINE a function myFourth with array
// //     RETURN first element of array
// // END
// function myFourth(myArray) {
//   return myArray[0]
// }
// console.log(myFourth([1, 2, 3, 4, 5]))

// // ==========================
// // Question 5
// // PSEUDOCODE:
// // START
// //   DEFINE a function myFifth with array
// //     ADD first and second elements
// //     PRINT the result
// // END
// function myFifth(sum) {
//   console.log(sum[0] + sum[1])
// }
// myFifth([5, 3])

// // ==========================
// // Convert Minutes into Seconds
// // PSEUDOCODE:
// // START
// //   DEFINE function MinutesToSeconds with value
// //     MULTIPLY value by 60
// //     PRINT result
// // END
// function MinutesToSeconds(value) {
//   console.log(value * 60)
// }
// MinutesToSeconds(5)
// MinutesToSeconds(3)
// MinutesToSeconds(2)

// // ==========================
// // Return the Next Number
// // PSEUDOCODE:
// // START
// //   DEFINE function ReturnNextNumber with value
// //     ADD 1 to value
// //     PRINT result
// // END
// function ReturnNextNumber(value) {
//   console.log(value + 1)
// }
// ReturnNextNumber(0)
// ReturnNextNumber(9)
// ReturnNextNumber(-3)

// // ==========================
// // Area of a Triangle
// // PSEUDOCODE:
// // START
// //   DEFINE function returnArea with base and height
// //     CALCULATE (base * height) / 2
// //     PRINT result
// // END
// function returnArea(value1, value2) {
//   console.log((value1 * value2) / 2)
// }
// returnArea(3, 2)
// returnArea(7, 4)
// returnArea(10, 10)

// // ==========================
// // The Farm Problem
// // PSEUDOCODE:
// // START
// //   DEFINE function animals with chickens, cows, pigs
// //     CALCULATE total legs:
// //       chickens * 2 + cows * 4 + pigs * 4
// //     PRINT result
// // END
// function animals(value1, value2, value3) {
//   console.log(value1 * 2 + value2 * 4 + value3 * 4)
// }
// animals(2, 3, 5)
// animals(1, 2, 3)
// animals(5, 2, 8)

// // ==========================
// // Question 10
// // PSEUDOCODE:
// // START
// //   DEFINE function multiplyFirstArray with array
// //     check whether the input is number or not
// //     MULTIPLY first element by 3
// //     PRINT result
// // END
// function multiplyFirstArray(myArray) {
//   if (isNaN(myArray[0])) {
//     return 'please provide a number'
//   }
//   return myArray[0] * 3
// }
// console.log(multiplyFirstArray([3, 4]))

// // ==========================
// // Are the Numbers Equal?
// // PSEUDOCODE:
// // START
// //   DEFINE function isSameNum with two values
// //   IF values are strictly equal
// //     PRINT true
// //   ELSE
// //     PRINT false
// // END
// function isSameNum(num1, num2) {
//   if (num1 === num2) {
//     return num1 === num2
//   } else {
//     return 'false'
//   }
// }
// console.log(isSameNum(4, 8))
// console.log(isSameNum(2, 2))
// console.log(isSameNum(2, '2'))

function isSameNum(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'please insert correct number'
  }
  return num1 === num2
}

console.log(isSameNum(4, 8))
console.log(isSameNum(2, 2))
console.log(isSameNum(2, '2'))

// // ==========================
// // Multiple of 100
// // PSEUDOCODE:
// // START
// //   DEFINE function divisible with value
// //   IF value modulo 100 equals 0
// //     PRINT true
// //   ELSE
// //     PRINT false
// // END
// function divisible(value) {
//   if (value % 100 == 0) {
//     console.log('true')
//   } else {
//     console.log('false')
//   }
// }
// divisible(1)
// divisible(1000)
// divisible(100)

// // ==========================
// // Is the Number Even or Odd?
// // PSEUDOCODE:
// // START
// //   DEFINE function isEvenOrOdd with value
// //   IF value modulo 2 equals 0
// //     PRINT "even"
// //   ELSE
// //     PRINT "odd"
// // END
// function isEvenOrOdd(value) {
//   if (value % 2 == 0) {
//     console.log('even')
//   } else {
//     console.log('odd')
//   }
// }
// isEvenOrOdd(3)
// isEvenOrOdd(146)
// isEvenOrOdd(-19)

// // ==========================
// // Question 14 – Grade Checker
// // PSEUDOCODE:
// // START
// //   DEFINE function getGrade with score
// //   IF score < 0 OR score > 100
// //     RETURN "Invalid score"
// //   ELSE IF score >= 90
// //     RETURN "Grade A"
// //   ELSE IF score >= 80
// //     RETURN "Grade B"
// //   ELSE
// //     RETURN "Grade C"
// // END
// function getGrade(score) {
//   if (score < 0 || score > 100) {
//     return 'Invalid score'
//   } else if (score >= 90 && score <= 100) {
//     return 'Grade A'
//   } else if (score >= 80 && score <= 89) {
//     return 'Grade B'
//   } else {
//     return 'Grade C'
//   }
// }

// console.log(getGrade(-5))
// console.log(getGrade(95))
// console.log(getGrade(85))
