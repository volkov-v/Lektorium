function waterVolume (arr) {
  var rightHighest = []
  var leftHighest = []
  leftHighest[0] = arr[0]
  rightHighest[arr.length - 1] = arr[arr.length - 1]
  for (var i = 1; i < arr.length; i++) {
    leftHighest[i] = Math.max(leftHighest[i - 1], arr[i])
  }
  for ((i = arr.length - 2); i >= 0; i--) {
    rightHighest[i] = Math.max(rightHighest[i + 1], arr[i])
  }
  var totalWaterVolume = 0
  for (i = 0; i < arr.length; i++) {
    totalWaterVolume += (Math.min(leftHighest[i], rightHighest[i]) - arr[i])
  }
  return totalWaterVolume
}
console.log(`Volume of water is ${waterVolume([2, 5, 1, 3, 1, 2, 1, 7, 7, 6])}`)
console.log(`Volume of water is ${waterVolume([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0])}`)
console.log(`Volume of water is ${waterVolume([7, 0, 1, 3, 4, 1, 2, 1])}`)
console.log(`Volume of water is ${waterVolume([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0])}`)
console.log(`Volume of water is ${waterVolume([2, 2, 1, 2, 2, 3, 0, 1, 2])}`)
console.log(`Volume of water is ${waterVolume([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8])}`)
console.log(`Volume of water is ${waterVolume([2, 2, 2, 2, 2])}`)
