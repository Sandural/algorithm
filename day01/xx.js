let arr = [3, 5, 8, 5, 4, 5, 6, 6, 7, 2, 4, 4, 9, 3]

let res = []
for (let j = 0; j < arr.length; j++) {
  for (let i = 0; i < arr.length; i++) {
    // console.log(i)
    if (arr[j] ^ arr[i] === 0) {
      console.log('j ------> ', arr[j])
      console.log('i ------> ', arr[i])

      res.push(arr[i])
    }
  }
}
// console.log(res)
// console.log(0 ^ 4)
console.log(3 ^ 8)
