
/**
 * 传入时间戳，返回时分秒
 * @param {*} timestamp 时间戳
 * @returns 标准时间 yyyy-mm-dd HH:mm:ss
 */
export function formatTime(timestamp:number) {
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

// 日期处理
const formatDate = function (date) {
  let y = date.getFullYear();
  let m = date.getMonth();
  m = m < 10 ? "0" + (m + 1) : m + 1;
  let d = date.getDate();
  d = d < 10 ? "0" + d : d;
  return y + "-" + m + "-" + d;
};