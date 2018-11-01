function arrayToObject (arr) {
  var obj = {}
  arr.forEach(function (item, i, arr) {
    if (item in obj) {
      if (Array.isArray(obj[item])) {
        obj[item].push(i)
      } else {
        let arr = []
        arr.push(obj[item])
        arr.push(i)
        obj[item] = arr
      }
    } else {
      obj[item] = i
    }
  })
  return obj
}
console.log(arrayToObject([2, 'apple', 5, 2, 2, 0, true, 4, 7, 5, null, 3, 1, -2, undefined]))
