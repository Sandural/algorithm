let arrNeed = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
// let arr = [3, 44, 38, 55, 47, 16]

/*
* <1>.把长度为n的输入序列分成两个长度为n/2的子序列；
* <2>.对这两个子序列分别采用归并排序；
* <3>.将两个排序好的子序列合并成一个最终的排序序列。
* */

function mergeSort(arr) {
  /*
  * 把数组递归的一分为二
  * */
  let len = arr.length
  if (len < 2) return arr

  // Math.floor 舍去小数取整
  let middle = Math.floor(len / 2)

  let left = arr.slice(0, middle)
  let right = arr.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

// 数组合并
function merge(left, right) {
  let result = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  while (left.length)
    result.push(left.shift());

  while (right.length)
    result.push(right.shift());

  return result
}

console.log(mergeSort(arrNeed))
