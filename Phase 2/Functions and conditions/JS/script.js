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
