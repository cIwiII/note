//二分法查找
/**
 * 查找对应元素所在索引
 * @param {Number[]} arr
 * @param {Number} target
 * @return {number} index
 */
function halfSearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}
console.log(halfSearch([3, 5, 7, 9, 11, 14], 5));
