function matrix (r, c, r0, c0) {
  var arrRow = [0, 1, 0, -1]
  var arrColumn = [1, 0, -1, 0]

  var arrRez = []

  arrRez.push([r0, c0])

  if (r === 1 && c === 1) return arrRez

  for (var k = 1; k < 2 * (r + c); k += 2) {
    for (var i = 0; i < 4; i++) {
      var step = Math.floor(k + i / 2)
      for (var j = 0; j < step; j++) {
        r0 += arrRow[i]
        c0 += arrColumn[i]
        if (r0 >= 0 && r0 < r && c0 >= 0 && c0 < c) {
          arrRez.push([r0, c0])
          if (arrRez.length === r * c) return arrRez
        }
      }
    }
  }
}

console.log(matrix(1, 4, 0, 0))
console.log(matrix(5, 6, 1, 4))
