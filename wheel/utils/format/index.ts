
/**
 * 格式化key对象
 * @param namespace 命名空间
 * @param keys key对象
 */
export function formatKey<T>(namespace: T, keys: any): any {
  var result = {};
  Object.keys(keys).forEach(function (key) {
    result[key] = namespace + "_" + keys[key];
  });
  return result;
}