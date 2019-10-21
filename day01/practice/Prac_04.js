/*
* 输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，
* 如果有多对数字的和等于S，输出两个数的乘积最小的。
* */

let arr = [1.1, 2, 3, 4.5, 5.5, 6, 7, 8.9, 9]
let num = 8
let middle = Math.floor(num / 2)
let index = 0
for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= middle) {
    index = i
    break
  }
}

let left = arr.slice(0, arr[index])
let right = arr.slice(arr[index])
console.log("left", left)
console.log("right", right)

let arr_len = left.length < right.length ? left : right


console.log(arr_len)

/*
for (let j = 0; j < arr.length; j++) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[j] + arr[i] === num) {
     res.push([arr[j], arr[i]])
    }
  }
}
*/

// console.log(res)
