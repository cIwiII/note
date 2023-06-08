//删除数组中最后一个元素
// arr.length--;
//将指定元素置为空
// delete arr[1];

/** Array-api-unshift 数组添加到首位 */
function unshift(arr, newEle) {
    // 往后移动，空出首位
    for (var index = arr.length - 1; index > -1; index--) {
        arr[index + 1] = arr[index];
    }
    //添加到首位，返回长度
    arr[0] = newEle;
    return arr.length;
}

/** Array-api-shift 数组删除首位 */
function shift(arr) {
    var oldEle = arr[0];//存储旧元素
    //挪位
    for (var index = 0; index < arr.length - 1; index++) {
        arr[index] = arr[index + 1];
    }
    //删除最后一个空间，返回被删数组
    arr.length--;
    return oldEle;
}

/** concat 两个数组元素进行合并，并将新数组返回 */
function concat(arr1, arr2) {
    var newArr = [];
    //遍历第一个数组，并将元素添加到新数组
    for (var e of arr1) {
        newArr[newArr.length] = e;
    }
    //遍历第二个数组，并将元素添加到新数组
    for (var e2 of arr2) {
        newArr[newArr.length] = e2;
    }
    return newArr;
}
/** 数组indexOf实现 */
var indexOf = function (arr, ele) {
    for (var index in arr) {
        if (arr[index] === ele) {
            return index;
        }
    }
    return -1;
}

// 数组去重
function noRepeat(arr) {
    var newArr = [];
    for (var e of arr) {
        var isAdd = true;//存储是否添加
        for (var ne of newArr) {  //判断当前元素是否存在于新数组
            if (ne == e) { isAdd = false; break; }
        }
        if (isAdd) { newArr[newArr.length] = e; }//将元素存储到数组末尾
    }
    return newArr;
}

// 删除数组对应索引值
function delIndex(arr, index) {
    for (var i = index; i < arr.length - 1; i++) { //移动后面值，覆盖前面
        arr[i] = arr[i + 1];
    }
    arr.length--;//删除最后一个空间
    return arr;
}


/**
 * 删除指定索引的指定数组元素
 * @params：  arr:目标数组 index:目标索引
 * @return: 返回新的数组长度
 */
function deleteByIndex(arr, index) {
    //挪位置
    for (var i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    //删除最后一个元素
    arr.length--;
    return arr.length;
}

/**
 * 替换指定数组中指定索引值为指定值
 * @params: arr:目标数组 index:目标索引 newValue:替换后的新值
 * @return  替换前的旧值
 */
function replace(arr, index, newValue) {
    //存储旧的值
    var oldValue = arr[index];
    //将旧值替换成新值
    arr[index] = newValue;
    return oldValue;
}

