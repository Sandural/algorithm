/*
* 一个整型数组里除了两个数字之外，其他的数字都出现了两次。
* 请写程序找出这两个个出现一次的数字。
* */

let arr = [1, 2, 3, 2, 3, 4]

let obj = {}

for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = obj[arr[i]] + 1 || 1
}

for (let i in obj) {
  if (obj[i] === 1) {
    console.log(i)
  }
}
