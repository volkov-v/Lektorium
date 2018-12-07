function isPrime (number) {
  var rez = true
  if (number > 0) {
    for (var i = 2; i < number; i++) {
      if (number % i === 0) {
        rez = false
        break
      }
    }
  }
  return rez
}

function factorial (number) {
  return number ? number * factorial(number - 1) : 1
}

function fib (number) {
  var a = 1
  var b = 1
  for (var i = 3; i <= number; i++) {
    var c = a + b
    a = b
    b = c
  }
  return b
}

function isSorted (arr) {
  var rez = true
  if (arr.length > 2) {
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        rez = false
        break
      }
    }
  }
  return rez
}

function reverse (str) {
  var arr = []
  var rez = []
  if (str.length > 0) {
    arr = str.split('')
    for (var i = 0; i < arr.length; i++) {
      rez[arr.length - 1 - i] = arr[i]
    }
  }
  return rez.join('')
}

function indexOf (arr, value) {
  rez = -1
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      rez = i
      break
    }
  }
  return rez
}

function isPalindrome (str) {
  str = str.toLowerCase().replace(/ /g, '')
  let reverseStr = str.split('').reverse().join('')
  return str === reverseStr
}

function missing (arr) {
  if (!arr.length) {
    return undefined
  }
  let total = (arr.length + 1) * (arr.length + 2) / 2
  for (let i = 0; i < arr.length; i++) {
    total -= arr[i]
  }
  return (total === arr.length + 1) ? undefined : total
}

function isBalanced (str) {
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{' || str[i] === '}') {
      newStr += str[i]
    }
  }
  if (newStr.length % 2 !== 0) {
    return false
  }
  for (let i = 0; i < newStr.length / 2; i++) {
    if (newStr[i] !== '{' || newStr[newStr.length - i - 1] !== '}') {
      return false
    }
  }
  return true
}

console.log('isPrime')
console.log(isPrime(0))
console.log(isPrime(1))
console.log(isPrime(17))
console.log(isPrime(10000000000000))
console.log('factorial')
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(6))
console.log(fib(20))
console.log('isSorted')
console.log(isSorted([]))
console.log(isSorted([-Infinity, -5, 0, 3, 9]))
console.log(isSorted([3, 9, -3, 10]))
console.log('reverse')
console.log(reverse(''))
console.log(reverse('abcdef'))
console.log('indexOf')
console.log(indexOf([1, 2, 3], 1))
console.log(indexOf([1, 2, 3], 4))
console.log('isPalindrome')
console.log(isPalindrome(''))
console.log(isPalindrome('abcdcba'))
console.log(isPalindrome('abcd'))
console.log(isPalindrome('A man a plan a canal Panama'))
console.log('missing')
console.log(missing([]))
console.log(missing([1, 4, 3]))
console.log(missing([2, 3, 4]))
console.log(missing([5, 1, 4, 2]))
console.log(missing([1, 2, 3, 4]))
console.log('isBalanced')
console.log(isBalanced('}{'))
console.log(isBalanced('{{}'))
console.log(isBalanced('{}{}'))
console.log(isBalanced('foo { bar { baz } boo }'))
console.log(isBalanced('foo { bar { baz }'))
console.log(isBalanced('foo { bar } }'))
