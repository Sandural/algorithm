/*
* 1. 在一个长度为n的数组里的所有数字都在0到n-1的范围内。
数组中某些数字是重复的，但不知道有几个数字是重复的。
也不知道每个数字重复几次。请找出数组中任意一个重复的数字。
例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2
提示：数组长度为n, 并且每个数字都是0至n-1, 那么必然会有一个数字重复的。
* */

let arr = [1, 3, 4, 0, 2, 5, 4, 2]
/*let obj = {}
let C = []

for (let i = 0; i < arr.length; i++){
  // 变量赋默认值的常用写法
  obj[arr[i]] = obj[arr[i]] + 1 || 1
}
console.log(obj)

for (let key in obj) {
  C.push(parseInt(key))
  if (obj[key] >= 2) {
    for (let i = 0; i < obj[key] - 1; i++){
      C.push(parseInt(key))
    }

  }
}
console.log(C)*/
for (let i = 0; i < arr.length; i++) {
  if (i !== arr[i]) {
    if(arr[arr[i]] !== arr[i]) {
       [arr[arr[i]], arr[i]] = [arr[i], arr[arr[i]]]
    } else {
      console.log(arr[i])
      break
    }
  }
}
