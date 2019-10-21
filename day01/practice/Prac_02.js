/*
* 在一个二维数组中，每一行都按照从左到右递增的顺序排序，
* 每一列都按照从上到下递增的顺序排序。
* 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
* */
let arr = [
  [1, 2, 8, 10],
  [2, 4, 9, 11],
  [6, 8, 13, 15],
  [10, 12, 14, 18],
]

/*function testArray (arr, num) {
  return arr.join().split(',').indexOf(num.toString()) >= 0
}

console.log(testArray(arr, 6))*/

/*
* 首先选取数组中右上角的数字。如果该数字等于要查找的数字，查找过程结束；
* 如果该数字大于要查找的数组，剔除这个数字所在的列；
* 如果该数字小于要查找的数字，剔除这个数字所在的行。
* 也就是说如果要查找的数字不在数组的右上角，
* 则每一次都在数组的查找范围中剔除一行或者一列，
* 这样每一步都可以缩小查找的范围，直到找到要查找的数字，或者查找范围为空。
*
* */

function find(target, arr) {
  let rows = arr.length
  let cols = arr[0].length
  if (rows > 0 && cols > 0) {
    // 这里的 row 和 col 指定了右上角的数字
    let row = 0
    let col = cols - 1
    while (row < rows && col >= 0) {
      console.log('选中的数字: ', arr[row][col])
      if (target === arr[row][col]) {
        return true
      } else if (target < arr[row][col]) {
        col -= 1
      } else {
        row += 1
      }
    }
  }
}

console.log(find(8, arr))


