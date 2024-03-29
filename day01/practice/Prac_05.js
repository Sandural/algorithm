/*
* 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
* 使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，
* 并保证奇数和奇数，偶数和偶数之间的相对位置不变。
* 思路: 开一个临时容器，遍历两次，第一次保存奇数列，第二次保存偶数列，
* 最后再赋值，有点空间换时间的思想
* */

let arr = [22, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

let border = -1
for (let i = 0; i < arr.length - i; i++) {
  if (arr[i] % 2 === 0) {
    border += 1
    console.log(arr[i])
    // console.log('odds: ', arr.splice(i, 1))
    arr.splice(border, 0, arr.splice(i, 1)[0])
    // console.log(arr)
  }
}

console.log(arr)
