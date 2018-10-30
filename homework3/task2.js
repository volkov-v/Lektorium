function arrayToObject (arr) {
  var obj = {}
  arr.forEach(function (item, i, arr) {
    obj[i] = item
  })
  return obj
}
console.log(arrayToObject([2, 'apple', 5, 0, true, 4, 7, null, 3, 1, -2, undefined]))
