Array.prototype.mySort = function () {
  arr = this
  var len = arr.length
  for (var i = 0; i < len ; i++) {
    for(var j = 0 ; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j]
        arr[j] = arr[j+1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

Array.prototype.myFilter = function (func) {
  arr = this
  context = this
  var rez = []
  var count = 0
  for (var i = 0; i < arr.length ; i++) {
    var val = arr[i]
    if (func.call(context, val, i, arr)) {
      rez[count] = val
      count ++
    }
  }
  return rez
}

Array.prototype.myMap = function (func) {
  arr = this
  context = this
  for (var i = 0; i < arr.length ; i++) {
    var val = arr[i]
    arr[i] = func.call(context, val, i, arr)
  }
  return arr
}

Array.prototype.myForEach = function (func) {
  arr = this
  context = this
  for (var i = 0; i < arr.length ; i++) {
    var val = arr[i]
    func.call(context, val, i, arr)
  }
}

console.log('mySort:')
console.log([5, 5, 6, 3, 0, -3, 9, 6, 4, -1, 8, 13, 654, 98, -45].mySort())
console.log('myFilter:')
console.log([5, 5, 6, 3, 0, -3, 9, 6, 4, -1, 8, 13, 654, 98, -45].myFilter(function (item) {
  return item > 0
}))
console.log('myForMap:')
console.log([5, 5, 6, 3, 0, -3, 9, 6, 4, -1, 8, 13, 654, 98, -45].myMap(function (item) {
  item *= 2
  return item
}))
console.log('myForEach:');
[5, 6, 3, 0, -3, 4, -1, 8, 13, 654].myForEach(function (item, i, arr) {
  console.log(i + ': ' + item + ' (массив:' + arr + ')')
})
