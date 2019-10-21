let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

/*
* 找出最小值与第一个交换值
* 已经排好序的不参与下次排序
* 数据量特别大, 且数据量重复性高的不建议用选择排序
* */

for (let j = 0; j < arr.length; j++) {
  let minVal = arr[j];
  let minIndex = j

  // 在一组数据中选出最小值
  for (let i = j + 1; i < arr.length; i++) {
    if (arr[i] < minVal) {
      minVal = arr[i];
      minIndex = i;
    }
  }
  [arr[j], arr[minIndex]] = [arr[minIndex], arr[j]]
}


console.log(arr)
