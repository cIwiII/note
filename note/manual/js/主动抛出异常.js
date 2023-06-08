var newArr = 1;
try {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8]
    newArr = arr.map(v => {
        if (v == 4) {
            console.log('v=' + v)
        }
        return v + 1
    })
    throw new TypeError('1122');
} catch (e) {
    console.log('1' + newArr)
} finally {
    console.log(newArr)
}