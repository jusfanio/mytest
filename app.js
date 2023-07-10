let num = 42
let firstName = 'Alesia'
const isProgrammer = true

firstName = 'Mjau'
// isProgrammer = false // error bc of const

/* Can do
let $ = 'test'
let $num = 42
let num$ - 42
let _ = 49
let _num = 12
let num_ = 12
let first_name = 'John' - BAD
let myNum = 12 - GOOD
let num42 = 10
*/
/* Restricted
let 42num = '11'
let my-num = 1
let false =
let let =
let const = 

*/

// console.log('Test:', firstName, isProgrammer)

// console.log(num + 10)
// console.log(num - 10)
// console.log(num / 10) //float number with decimal
// console.log(num)
// console.log(num === 47)

// let num2 = num + 10
// console.log(num, num2)
// num = num2 - num
// num2 = num2 + 1
// console.log(num, num2)

// let num3 = num + (10 * 2) / (5 - 1)
// console.log(num3)

// const fullName = firstName + ' Darsht'
// console.log(fullName)

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const divideBtn = document.getElementById('divide')
let action = '+'

// console.log(input2.value)
// console.log(resultElement.textContent)
// resultElement.textContent = 42 - 2 / num
// console.log(typeof sum)

plusBtn.onclick = function () {
  action = '+'
}

minusBtn.onclick = function () {
  action = '-'
}

multiplyBtn.onclick = function () {
  action = '*'
}

divideBtn.onclick = function () {
  action = '/'
}

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = 'red'
  } else {
    resultElement.style.color = 'green'
  }
  resultElement.textContent = result
}

function computeNumbersWithAction(input1, input2, actionSymbol) {
  const num1 = Number(input1.value)
  const num2 = Number(input2.value)

  // return actionSymbol = '+' ? num1 + num2 : num1 - num2

  const result =
    actionSymbol === '+'
      ? num1 + num2
      : actionSymbol === '-'
      ? num1 - num2
      : actionSymbol === '*'
      ? num1 * num2
      : num1 / num2

  return result

  // switch (actionSymbol) {
  //   case '+':
  //     return num1 + num2
  //   case '-':
  //     return num1 - num2
  //   case '*':
  //     return num1 * num2
  //   default:
  //     return num1 / num2
  // }

  // if (actionSymbol == '+') {
  //   return num1 + num2
  // } else if (actionSymbol == '-') {
  //   return num1 - num2
  // } else if (actionSymbol == '*') {
  //   return num1 * num2
  // } else {
  //   return num1 / num2
  // }
}

submitBtn.onclick = function () {
  const result = computeNumbersWithAction(input1, input2, action)
  printResult(result)

  // if (action == '+') {
  //   const sum = Number(input1.value) + Number(input2.value)
  //   printResult(sum)
  // } else {
  //   const sum = Number(input1.value) - Number(input2.value)
  //   printResult(sum)
  // }
}
