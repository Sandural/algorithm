/*
* 一个整型数组里除了两个数字之外，其他的数字都出现了两次。
* 请写程序找出这两个个出现一次的数字。
* */
/*let obj = {}

for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = obj[arr[i]] + 1 || 1
}

for (let i in obj) {
  if (obj[i] === 1) {
    console.log(i)
  }
}*/

let arr = [1, 2, 3, 2, 3, 4]
let left = [], right = []

for (let i = 0; i < arr.length; i++) {
  let num = parseInt(arr[i]).toString(2).padStart(4, '0')
  if (num[3] === '1') {
    left.push(arr[i])
  } else {
    right.push(arr[i])
  }
}

function findOne(arr) {
  return arr.reduce((pre, cur, index, arr) => {
    return pre ^ cur
  }, 0)
}

console.log(findOne(left))
console.log(findOne(right))
