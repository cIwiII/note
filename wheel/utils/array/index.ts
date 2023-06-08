
/**
 * 排序 (将直接在target上进行操作，若想保留原target请先解构或克隆后再传进来)
 * @param target 目标数组
 * @param newIndex 新序号
 * @param oldIndex 旧序号
 * @return 排序结果数组
 */
export function sort<T = any>(target: T[], newIndex: number, oldIndex: number): T[]{
  if (newIndex === oldIndex) return target;

  if (newIndex < oldIndex) {
    target.splice(newIndex, 0, target[oldIndex]);
    target.splice(oldIndex + 1, 1);
  } else {
    target.splice(newIndex + 1, 0, target[oldIndex]);
    target.splice(oldIndex, 1);
  }

  return target;
}


/**
 * 数组元素互换位置
 * @param target 数组
 * @param currentIndex 元素1的索引
 * @param changeIndex 元素2的索引
 * @return 元素互换后数组
 */

export function swap<T = any>(target: T[], currentIndex: number, changeIndex: number): T[]{
  /* splice 返回删除元素组成的数组 */
  // target[currentIndex] = target.splice(changeIndex, 1, target[currentIndex])[0];
  [target[currentIndex], target[changeIndex]] = [target[changeIndex], target[currentIndex]];
  return target;
}

// =============================

/**
 * 一个数组中第k大和m大之和
 * @param array 
 * @param k 
 * @param m 
 * @returns 
 */
export function getMaxSum<T = any>(array:T[] = [], k:number, m:number):number {
  let newArray = [...new Set(array)],
    sum = 0;
  if (!isFinite(k) || !isFinite(m)) {
    return sum;
  }

  if (newArray.length < m || newArray.length < k || m < 1 || k < 1) {
    return sum;
  }
  newArray.sort((a:any, b:any) => b - a);
  sum = array.reduce(v => {
    if (v == newArray[k - 1] || v == newArray[m - 1]) {
      return v;
    }
    return 0
  }, sum);
  // console.log(`第${k}大和第${m}大数字之和为:${sum}`);
  return sum;
}
// let getMaxSums = [1, 3, 4, 5, 4, 6];
// getMaxSum(array1,1,4)
