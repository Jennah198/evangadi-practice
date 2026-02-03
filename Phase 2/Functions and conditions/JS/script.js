// Question 1
function myFirst() {
  console.log('Hello')
}
myFirst()

// Question 2
function mySecond(parameter) {
  console.log(parameter)
}
mySecond('Evangadi')

// Question 3
function myThird(value) {
  mySecond(value)
}
myThird('hi')

// Question 4
function myFourth(myArray) {
  console.log(myArray[0])
}
myFourth([1, 2, 3, 4, 5])

// Question 5
function myFifth(sum) {
  console.log(sum[0] + sum[1])
}
myFifth([5, 3])

// Convert Minutes into Seconds
function MinutesToSeconds(value) {
  console.log(value * 60)
}
MinutesToSeconds(5)
MinutesToSeconds(3)
MinutesToSeconds(2)

// Return the Next Number from the Integer Passed
function ReturnNextNumber(value) {
  console.log(value + 1)
}
ReturnNextNumber(0)
ReturnNextNumber(9)
ReturnNextNumber(-3)

// Area of a Triangle
function returnArea(value1, value2) {
  console.log((value1 * value2) / 2)
}
returnArea(3, 2)
returnArea(7, 4)
returnArea(10, 10)

//The Farm Problem
function animals(value1, value2, value3) {
  console.log(value1 * 2 + value2 * 4 + value3 * 4)
}
animals(2, 3, 5)
animals(1, 2, 3)
animals(5, 2, 8)

// Question 10
function multiplyFirstArray(myArray) {
  console.log(myArray[0] * 3)
}
multiplyFirstArray([3, 4])

// Are the Numbers Equal?
function isSameNum(value1, value2) {
  if (value1 === value2) {
    console.log('true')
  } else {
    console.log('false')
  }
}
isSameNum(4, 8)
isSameNum(2, 2)
isSameNum(2, '2')

// Multiple of 100
function divisible(value) {
  if (value % 100 == 0) {
    console.log('true')
  } else {
    console.log('false')
  }
}
divisible(1)
divisible(1000)
divisible(100)

// Is the Number Even or Odd?
function isEvenOrOdd(value) {
  if (value % 2 == 0) {
    console.log('even')
  } else {
    console.log('odd')
  }
}
isEvenOrOdd(3)
isEvenOrOdd(146)
isEvenOrOdd(-19)

// Question 14
function getGrade(score) {
  if (score < 0 || score > 100) {
    return 'Invalid score'
  } else if (score >= 90 && score <= 100) {
    return 'Grade A'
  } else if (score >= 80 && score <= 89) {
    return 'Grade B'
  } else {
    return 'Grade C'
  }
}

console.log(getGrade(-5)) // "Invalid score"
console.log(getGrade(95)) // "Grade A"
console.log(getGrade(85)) // "Grade B"
