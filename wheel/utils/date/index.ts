
/**
 * 传入时间戳，返回时分秒
 * @param {*} timestamp 时间戳
 * @returns 标准时间 yyyy-mm-dd HH:mm:ss
 */
export function formatTime(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  // return `${hours}:${minutes}:${seconds}`;
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}