/*
* 输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，
* 如果有多对数字的和等于S，输出两个数的乘积最小的。
* */
/*
for (let j = 0; j < arr.length; j++) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[j] + arr[i] === num) {
     res.push([arr[j], arr[i]])
    }
  }
}
*/
let arr = [1.1, 2, 3, 4.5, 5, 6, 7, 8.9, 9]
let num = 8

let left = 0, right = arr.length - 1;
while (left < right) {
  if (arr[left] + arr[right] === num) {
    console.log([arr[left], arr[right]])
    // 这个可以找出所有的
    right -= 1
    left += 1
    // break 只找出最小乘积
    // break
  } else if (arr[left] + arr[right] > num){
    right -= 1
  } else {
    left += 1
  }
}
