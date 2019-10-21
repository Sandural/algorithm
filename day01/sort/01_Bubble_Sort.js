// let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
// let arr = [ 2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50 ]
let arr = [ 50, 48, 47, 46, 44, 38, 36, 27, 26, 19, 15, 5, 4, 3, 2 ]

console.log('数组长度: ', arr.length)
let switchCount = 0
let count = 0

do {
  switchCount = 0
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      /*temp = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = temp*/

      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
      console.log(count++)
      switchCount = i + 1
    }
  }
} while (switchCount !== 0)

console.log(arr)
