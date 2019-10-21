let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

console.time('start')
/*
* 将第一个元素标记为已排序
* 遍历每个没有排过序的元素
*
* */

for (let i = 1; i < arr.length; i++) {
  let index = i - 1
  while (arr[index] > arr[index + 1]) {
    [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]]
    index--
  }
}

console.timeEnd('start')
console.log(arr)



