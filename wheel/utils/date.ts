function pad(value: any, length: number = 2) {
  return value.toString().padStart(length, "0");
}

/**
 * 日期处理，传入时间戳
 * @param {*} timestamp 时间戳
 * @param {*} form 时间格式
 * @returns 标准时间 yyyy-MM-dd HH:mm:ss
 */
export function formatTime(timestamp: number, form: string = "yyyy-MM-dd HH:mm:ss") {
  try {
    const date = new Date(timestamp);
    const year = pad(date.getFullYear(), 4);
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());

    return form
      .replace("yyyy", year)
      .replace("MM", month)
      .replace("dd", day)
      .replace("HH", hours)
      .replace("mm", minutes)
      .replace("ss", seconds);
  } catch (error) {
    throw new TypeError(`formatTime 参数错误`);
  }
}

/**
 *
 * @param date 时间
 * @param format 格式
 * @returns
 *
 * @example
 *
 * const date = new Date();
 * console.log(formatDateTime(date, 'yyyy-MM-dd HH:mm:ss')); // 2023-02-18 21:49:05
 * console.log(formatDateTime(date, 'yyyy年MM月dd日 a hh:mm:ss')); // 2023年02月18日 下午 9:49:05
 * console.log(formatDateTime(date, 'yyyy-MM-dd HH:mm:ss S')); // 2023-02-18 21:49:05 950
 * console.log(formatDateTime(date, 'yyyy-MM-dd A hh:mm:ss')); // 2023-02-18 PM 21:49:05 
 */
export function formatDateTime(date: Date, format: string) {
  const o = {
    "M+": date.getMonth() + 1, // 月份
    "d+": date.getDate(), // 日
    "h+": date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 小时
    "H+": date.getHours(), // 小时
    "m+": date.getMinutes(), // 分
    "s+": date.getSeconds(), // 秒
    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
    a: date.getHours() < 12 ? "上午" : "下午", // 上午/下午
    A: date.getHours() < 12 ? "AM" : "PM" // AM/PM
  };
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return format;
}

{
  const date = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", { dateStyle: "short" });
  const formattedDate = formatter.format(date);
  console.log(formattedDate);
  // 输出：5/30/23
  // 使用Intl.DateTimeFormat，您可以指定所需的区域设置和各种选项以根据需要精确地格式化日期
}

{
  // 时区偏移量：对象getTimezoneOffset()的方法Date返回本地时区和 UTC 之间的分钟差值。您可以使用此偏移来调整特定时区的日期。
  // 显示时区：要在日期旁边显示时区信息，您可以使用toLocaleString()带有适当选项的方法。
  // 例如：

  const date = new Date();
  const formattedDate = date.toLocaleString("en-US", { timeZoneName: "short" });
  console.log(formattedDate);
  // 输出：5/30/2023, 12:00:00 AM PDT
}

{
  //   .特定日期格式：要以特定格式显示日期，例如DD/MM/YYYY，您可以使用Intl.DateTimeFormat适当的选项。

  // 例如：

  const date = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", { day: "2-digit", month: "2-digit", year: "numeric" });
  const formattedDate = formatter.format(date);
  console.log(formattedDate);

  // 输出：30/05/2023。
  {
    const date = new Date();
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    });
    console.log(formatter.format(date)); // 2/18/2023, 9:49:05 PM
  }
}

{
  //   2.时间格式：要格式化日期的时间部分，您可以使用hour、minute和second选项。

  // 例如：
  const date = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  const formattedTime = formatter.format(date);
  console.log(formattedTime);

  // 输出：12:00:00 AM
}

{
  // 三方库
  const date = new Date();
  console.log(moment(date).format("YYYY-MM-DD HH:mm:ss")); // 2023-02-18 21:49:05
  console.log(dateFns.format(date, "yyyy-MM-dd HH:mm:ss")); // 2023-02-18 21:49:05
}
