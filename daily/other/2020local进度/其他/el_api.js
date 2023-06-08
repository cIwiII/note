
//计算机存储单位 位(bit) -> 字节(Byte) -> KB -> MB -> GB ->TB
//1Byte=8bit
//1KB=1024Byte
//1MB=1024KB
//1GB=1024MB
//1TB=1024BG

// document.write 文档后续写入
window.onload = function () {
    console.log('初始化');
}


//----参数处理--------------
//获取用户输入的搜索内容
function getParam(dataName) {
    var search = location.search.substring(1).split('&');
    var value;
    search.forEach(val => {
        var re = val.split('=');
        if (re[0] == dataName) {
            value = re[1];
        }
    });
    return value;
}

//ajax应用
function getPromise(url) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url,
            success: function (data) {
                resolve(data);
            },
            error: function () {
                reject();
            }
        });
    });
}

/* //获取类型数据的Promise对象
let typePromise=getPromise('https://www.fastmock.site/mock/40e170f960701a834866a0bc956002f6/tickets/getAllTypes');
//获取演艺数据的Promise对象
let artPromise=getPromise('https://www.fastmock.site/mock/40e170f960701a834866a0bc956002f6/tickets/getAllArts');

typePromise.then(function(type){
  //   数据处理
    return artPromise;
}).then(function(art){
  //   数据处理
}); */


class Random {
    //随机[s,e）范围
    static nextInt(start, end) {
        return Math.floor(Math.random() * (end - start)) + start;
    }
    //随机[s,e]范围
    static nextInt(start, end) {
        return Math.floor(Math.random() * (end - start + 1)) + start;
    }
}

//正则表达式
class RegexUtil {
    //手机号
    static telReg = /^1[3-9]\d{9}$/;
    //密码
    static passwordReg = /^[a-zA-Z][0-9A-Za-z]{5,11}$/;

    //判断手机号正则
    static checkTel(str) {
        return this.telReg.test(str);
    }

    static checkPassword(str) {
        return this.passwordReg.test(str);
    }
}
/**
 * 产生指定位数验证码字符串
 * @param vcount:number
 * @returns 
 */
function getPictureCode(vcount = 6) {
    // console.log(Math.random().toString(36).substr(2).slice(0,36));//存在弊端tostring（2-36）
    //定义数组存储可能的字符
    var charsArray = [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
        'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    //存储验证码值
    var realCode = '';
    for (var count = 1; count <= vcount; count++) {
        //随机产生索引值 [0,len)
        var index = Math.floor(Math.random() * charsArray.length);
        realCode += charsArray[index];
    }
    return realCode;
}
/**
 * 图片判断
 */
function imgType(fileName) {
    if (fileName.endsWith('.jpg') || fileName.endsWith('.png') || fileName.endsWith('.gif')) {
        return true;
    }
    return false;
}

/**
 * 1至指定范围内能被参数二整除的数
 * @params number, @params number, @return number[]
 * @el divisionInt(100,4),100内能被4整除的数；
 */
function divisionInt(num1, num2) {
    let arr = [];
    for (var i = 1; i <= num1; i++) {
        if (i % num2 == 0) {
            arr.push(i)
        }
    }
    return arr;
}

/** 
* 100内整除3或包含3的整数
*/
function divisionTh() {
    let arr = [];
    for (var i = 1; i <= 100; i++) {
        if (i < 10) {//只有个位数
            if (i % 3 == 0 || i == 3) { arr.push(i) };
        } else if (i < 100) {//2位数
            //个位
            var unit = i % 10;
            //十位  12
            var decade = parseInt(i / 10);
            if (i % 3 == 0 || unit == 3 || decade == 3) { arr.push(i) };
        }
    }
    return arr;
}
/** 
 * 输出斐波拉契咧数前n项；
 * @params num  @return number[]
 */
function fibonacci(num = 10) {
    //存储前2位
    var one = 1, two = 1, arr = [];
    //循环输出对应位数数列
    for (var i = 1; i <= num; i++) {
        if (i == 1 || i == 2) {
            arr.push(1);
        } else {
            var temp = two + one;
            arr.push(temp);
            two = one;
            one = temp;
        }
    }
}

/** 
 * 101~200之间存在多少个素数(只能被1和本身整除的数),能被1和其本身以外的其他数整除，则不是素数
 * 存储素数个数
 */
function primeNum() {
    var re = 0;
    for (var i = 101; i < 201; i++) {
        //存储是否为素数的状态
        var state = true;
        //可能整除的除数
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                //不是素数
                state = false;
                //结束循环
                break;
            }
        }
        //state==true
        if (state) {
            document.write(i + '<br/>');
            re++;
        }
    }
}

/** 
 * @name 体脂率计算  输入身高(m)、体重(kg)、年龄,性别(女：0，男：1)
 * @return 体脂率
 */
function bodyfat(height, weight, age, sex) {
    //计算出女性的体脂率
    var num = 1.2 * (weight / (height * height)) + 0.23 * age - 5.4;
    if (sex) { num -= 10.8 }
    return num.toFixed(2);
}

/** 函数isLeapYear,判断指定年份是否为闰年 */
var isLeapYear = year => (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;

/** 
 * 抓球问题：有红球5个，黑球7个，白球9个，随机取出12个，计算可能的颜色组合有多少种,返回数组？
 * @return {}[]
 */
function ball() {
    //存储种数
    var arr = [];
    //控制红球个数
    for (var red = 0; red <= 5; red++) {
        //控制黑球个数
        for (var black = 0; black <= 7; black++) {
            ////控制白球个数
            for (var white = 0; white <= 9; white++) {
                if (red + black + white == 12) {
                    arr.push({ red, black, white });
                }
            }
        }
    }
}

/** 
 * 用1元纸币兑换1分，2分和5分的硬币，要求兑换总数为50枚，问可以有多少种组合，每种组合对应1分，2分，5分分别是多少？
 * @return {}[]
 */
function combination() {
    //存储种数
    var arr = [];
    //控制1分
    for (var one = 0; one < 51; one++) {
        //控制2分
        for (var two = 0; two < 51; two++) {
            //控制5分
            for (var five = 0; five < 21; five++) {
                if (one + two * 2 + five * 5 == 100 && one + two + five == 50) {
                    arr.push({ one, two, five });
                }
            }
        }
    }
    return arr;
}

/** 
 * 系统随机生成[0,100]整数,提示用户"猜大了"，小于真实值，提示用户"猜小了,猜对了"，游戏结束
 */
function one() {
    var num = Math.ceil(Math.random() * 100);
    var state = true;
    while (state) {
        //用户输入猜的数字
        var n = parseInt(prompt('请输入所猜数字:'));
        //判断用户输入的数与真实数的关系
        if (n < num) {
            alert('猜小了!');
        } else if (n > num) {
            alert('猜大了');
        } else {
            alert('恭喜，猜对了!');
            // break;
            state = false;
        }
    }
}

/**
 * js轮播图切换
 */
function banner() {
    // <img src="./woniubanner-1.png" alt="" id="img64" style="margin: 0 auto;display: block;">
    var index = 2;
    setInterval(function () {
        if (index > 4) { index = 1; }
        document.getElementById('img64').src = `./woniubanner-${index++}.png`
    }, 1000);
}

//--年月问题----------------------------------------
/** 
 * 输入年份格式，输入对应当前时间
 */
function dateas(sdate = "yyyy年MM月dd日HH时mm分ss秒sm毫秒 星期weeks") {
    var date = new Date(), year = date.getFullYear(), month = date.getMonth() + 1,
        days = date.getDate(), hours = date.getHours(), minutes = date.getMinutes(),
        seconds = date.getSeconds(), milliseconds = date.getMilliseconds(), daya = date.getDay(),
        arr = ['日', '一', '二', '三', '四', '五', '六'], day = arr[daya];

    // var time=date.getTime(); 
    sdate = sdate.replace("yyyy", year); sdate = sdate.replace("MM", month);
    sdate = sdate.replace("dd", days); sdate = sdate.replace("HH", hours);
    sdate = sdate.replace("mm", minutes); sdate = sdate.replace("ss", seconds);
    sdate = sdate.replace("sm", milliseconds); sdate = sdate.replace("weeks", day);
    return sdate;
}


/**
 * 输入一个年份和月份，输出该年的该月共有多少天
 */
function day1(year, month) {
    if (month == 4 || month == 6 || month == 9 || month == 11) {
        return 30;
    } else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        return 31;
    } else if (month == 2) {
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            return 29;
        } else {
            return 28;
        }
    }
    return '非法月份';
}
function day2(year, month) {
    switch (month) {
        case 1:
            return 31;
        case 2:
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                return 29;
            } else {
                return 28;
            }
        case 3:
            return 31;
        case 4:
            return 30;
        case 5:
            return 31;
        case 6:
            return 30;
        case 7:
            return 31;
        case 8:
            return 31;
        case 9:
            return 30;
        case 10:
            return 31;
        case 11:
            return 30;
        case 12:
            return 31;
        default:
            return '非法月份';
    }
}
function day3(year, month) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                return 29;
            } else {
                return 28;
            }
        default:
            return '非法月份';
    }
}

/** 
 * 输入一个年份和月份，输出该年该月的1号是当年的第多少天;
 */
function dd(year, month) {
    var feb = 28;
    //如果是闰年，则二月多一天
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        feb++;
    }
    var days = 1;
    switch (month) {
        case 1:
            break;
        case 2:
            days += 31;
            break;
        case 3:
            days += 31 + feb;
            break;
        case 4:
            days += 31 + feb + 31;
            break;
        case 5:
            days += 31 + feb + 31 + 30;
            break;
        case 6:
            days += 31 + feb + 31 + 30 + 31;
            break;
        case 7:
            days += 31 + feb + 31 + 30 + 31 + 30;
            break;
        case 8:
            days += 31 + feb + 31 + 30 + 31 + 30 + 31;
            break;
        case 9:
            days += 31 + feb + 31 + 30 + 31 + 30 + 31 + 31;
            break;
        case 10:
            days += 31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + 30;
            break;
        case 11:
            days += 31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31;
            break;
        case 12:
            days += 31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30;
            break;
    }
    switch (month) {
        case 12:
            //加上11月天数
            days += 30;
        case 11:
            //加上10月天数
            days += 31;
        case 10:
            //加上9月天数
            days += 30;
        case 9:
            //加上8月天数
            days += 31;
        case 8:
            //加上7月天数
            days += 31;
        case 7:
            //加上6月天数
            days += 30;
        case 6:
            //加上5月天数
            days += 31;
        case 5:
            //加上4月天数
            days += 30;
        case 4:
            //加上3月天数
            days += 31;
        case 3:
            //加上2月天数
            days += feb;
        case 2:
            //加上1月天数
            days += 31;
        case 1:
            break;
    }
    return days;
}


/**
 * 判断是否为水仙花数
 * @params: num:目标数据，要判断的数
 * @return: 布尔值，true表示目标数为水仙花数，false表示目标数不是水仙花数
 */
function narcissisticNumber(num) {
    //存储是否为水仙花数
    var re = false;
    // var num = 153;
    if (num > 99 && num < 1000) {
        //个位
        var unit = num % 10;
        //十位
        var decade = parseInt(num / 10) % 10;
        //百位
        var hundred = parseInt(num / 100);
        if (unit * unit * unit + decade * decade * decade + hundred * hundred * hundred == num) {
            re = true;
        }
    }
    return re;
}