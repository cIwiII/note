/**
 * Created by NewRed on 2017/8/26.为单步计算，如执行2+2*2=8
 * Updata buy NewRed on 2022/12/29.
 * 更新为多步计算，最终按下=开始计算，2+2*2=6
 * 将多个变量替换为正则表达式，减少变量
 */

let formula = '';//将要计算的公式，在=按下时计算
let showFormula = '';//显示给用户的公式
const regexp = /[\+\-\*\/\%\.]$/

/** @name 数字键入 字符拼接并回显 */
function command(num) {
    formula += num;
    showFormula += num;
    if (regexp.test(formula) && num === 0) {
        formula += '.';
        showFormula += '.';
    }
    document.calculator.numScreen.value = showFormula;
}

/** @name 特殊键入 00 点 退格 清楚数据 */
function special(str) {
    if (str === '退格') {
        formula = formula.slice(0, -1);
        showFormula = showFormula.slice(0, -1);
    }
    if (str === '00') {
        if (!formula || regexp.test(formula)) return;
        formula += '00';
        showFormula += '00';
    }
    if (str === '点') {
        if (!formula || /\./.test(formula)) return;
        formula += '.'
        showFormula += '.';
    }
    if (str === '清空') {
        formula = '';
        showFormula = '';
    }
    document.calculator.numScreen.value = showFormula;
}

/** @name 运算符点击 */
function operate(op) {
    if (!formula) return;//运算前，不能直接写入运算符，
    console.log(regexp.test(formula));
    if (regexp.test(formula)) formula = formula.slice(0, -1);//多次输入运算符将替换

    if (op === '=') {//计算
        formula = eval(formula);
        document.calculator.numScreen.value = formula;
        formula = '';
        showFormula = '';
        return
    }
    formula += op;
    showFormula = formula.replaceAll('*', 'x').replaceAll('/', '÷');
    document.calculator.numScreen.value = showFormula;
}