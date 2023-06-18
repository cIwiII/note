
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
export const formatDate = function (date) {
  let y = date.getFullYear();
  let m = date.getMonth();
  m = m < 10 ? "0" + (m + 1) : m + 1;
  let d = date.getDate();
  d = d < 10 ? "0" + d : d;
  return y + "-" + m + "-" + d;
};

/**
 * 日期处理
 * @param date 日期时间
 * @param form 格式 yyyy-MM-dd
 * @returns 
 */
export function format(date:any, form: string): string {
   const year = date.getFullYear();
   let month = date.getMonth() + 1;
   if(month<10){month='0'+month}
   let day = date.getDate();
   if(day<10){day='0'+day}
   let ymd=form.replace('yyyy',year).replace('MM',month).replace('dd',day)
   return ymd
}
// let date: object = new Date()
// let dates = format(date,"yyyy-MM-dd")
// console.log(dates)