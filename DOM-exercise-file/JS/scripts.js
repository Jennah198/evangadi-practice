/* =========================
   Question 1.1
   Select the element with an id of "sample1".
========================= */

/*
PSEUDOCODE:
1. Access the document object.
2. Use getElementById method.
3. Store the element in a variable.
*/

const sample1 = document.getElementById('sample1')

/* =========================
   Question 1.2
   Print the element itself on the console upon page refresh.
========================= */

/*
PSEUDOCODE:
1. Wait for the DOM to fully load.
2. Select element with id "sample1".
3. Log the element object to console.
*/

document.addEventListener('DOMContentLoaded', function () {
  const sample1 = document.getElementById('sample1')
  console.log(sample1)
})

/* =========================
   Question 1.3
   Print the content of the element on the console upon page refresh.
========================= */

/*
PSEUDOCODE:
1. Wait for DOM content to load.
2. Select element with id "sample1".
3. Access textContent property.
4. Print text content to console.
*/

document.addEventListener('DOMContentLoaded', function () {
  const sample1 = document.getElementById('sample1')
  console.log(sample1.textContent)
})

/* =========================
   Question 2.1
   Select the element with an ID of "techCompanies" 
   and display it on console (without querySelector).
========================= */

/*
PSEUDOCODE:
1. Use getElementById method.
2. Store element in variable.
3. Log to console.
*/

const techCompanies = document.getElementById('techCompanies')
console.log(techCompanies)

/* =========================
   Question 2.2
   Use querySelector to select the element 
   with ID "techCompanies" and display it.
========================= */

/*
PSEUDOCODE:
1. Use querySelector with #techCompanies.
2. Store in variable.
3. Log to console.
*/

const techCompaniesQS = document.querySelector('#techCompanies')
console.log(techCompaniesQS)

/* =========================
   Question 2.3
   How many tech companies are listed under 
   ul with id "techCompanies"?
   Use querySelectorAll.
========================= */

/*
PSEUDOCODE:
1. Select all li elements inside #techCompanies.
2. Count total length.
3. Print count.
*/

const companyList = document.querySelectorAll('#techCompanies li')
console.log(companyList.length)

/* =========================
   Question 2.4
   Select all elements with class "red"
   using both querySelectorAll and getElementsByClassName
========================= */

/*
PSEUDOCODE:
1. Use querySelectorAll(".red").
2. Log result.
3. Use getElementsByClassName("red").
4. Log result.
*/

const redElementsQS = document.querySelectorAll('.red')
console.log(redElementsQS)

const redElementsClass = document.getElementsByClassName('red')
console.log(redElementsClass)

/* =========================
   Question 2.5
   Create new li element with content "Facebook"
   and display it on console.
========================= */

/*
PSEUDOCODE:
1. Create new li element.
2. Set textContent to "Facebook".
3. Log new element.
*/

const newCompany = document.createElement('li')
newCompany.textContent = 'Facebook'
console.log(newCompany)

/* =========================
   Question 2.6
   Give the newly created element 
   a class of "blue".
========================= */

/*
PSEUDOCODE:
1. Use classList.add method.
2. Add "blue" class to new element.
*/

newCompany.classList.add('blue')

/* =========================
   Question 2.7
   Append the newly created element 
   next to the "Sony" li element.
========================= */

/*
PSEUDOCODE:
1. Select all li elements under #techCompanies.
2. Loop through elements.
3. Find element with textContent "Sony".
4. Insert newCompany after it.
*/

const companies = document.querySelectorAll('#techCompanies li')

companies.forEach(function (company) {
  if (company.textContent.trim() === 'Sony') {
    company.insertAdjacentElement('afterend', newCompany)
  }
})

/* =========================
   Question 2.8
   How many tech companies are labeled blue?
   Display result inside the "blueCompanies" div.
========================= */

/*
PSEUDOCODE:
1. Select all elements with class "blue".
2. Count total length.
3. Select div with id "blueCompanies".
4. Set its textContent to the count.
*/

const blueCompanies = document.querySelectorAll('#techCompanies .blue')
const blueCount = blueCompanies.length

const blueDiv = document.getElementById('blueCompanies')
blueDiv.textContent = blueCount
