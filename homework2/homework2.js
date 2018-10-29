function minNumber (arr) {
  var min = arr[0]
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] != null && arr[i] !== undefined && isFinite(arr[i])) {
      if (arr[i] < min) {
        min = arr[i]
      }
    }
  }
  return min
}

function maxNumber (arr) {
  var max = arr[0]
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] != null && arr[i] !== undefined && isFinite(arr[i])) {
      if (arr[i] > max) {
        max = arr[i]
      }
    }
  }
  return max
}

function sumNumber (arr) {
  var sum = 0
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== null && arr[i] !== undefined && isFinite(arr[i])) {
      sum += arr[i]
    }
  }
  return sum
}

function minMaxSumArray (FunctionName, arr) {
  var result
  switch (FunctionName) {
    case 'min':
      result = minNumber(arr)
      break
    case 'max':
      result = maxNumber(arr)
      break
    case 'sum':
      result = sumNumber(arr)
      break
  }
  return result
}

var initialArray = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2, -3, -1]
console.log(`Minimal value of array [${initialArray}] is ${minMaxSumArray('min', initialArray)}`)
initialArray = [-1, -8, -2]
console.log(`Maximal value of array [${initialArray}] is ${minMaxSumArray('max', initialArray)}`)
initialArray = [1, undefined, 3, 5, -3, null]
console.log(`Sum of values of array [${initialArray}] is ${minMaxSumArray('sum', initialArray)}`)
