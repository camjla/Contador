var currentNumberWrapper =
  document.getElementById('currentNumber') /*elemento span*/
var currentNumber = 0

function increment() {
  currentNumber = currentNumber + 1
  currentNumberWrapper.innerHTML = currentNumber
  document.getElementById('currentNumber').style.color = 'white'
} /*muda conforme o numero atual. */

function decrement() {
  currentNumber = currentNumber - 1
  currentNumberWrapper.innerHTML = currentNumber
  document.getElementById('currentNumber').style.color = 'red'
}

//podia ter o aaddeventlistener se nao tivesse o "onclick" no html
