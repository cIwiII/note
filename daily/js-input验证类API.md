

### input的属性和方法
```html
<input id="id1" type="number" min="100" max="300" required>
<button onclick="myFunction()">验证</button>
 
<p id="demo"></p>
 
<script>
function myFunction() {
    var inpObj = document.getElementById("id1");
    if (inpObj.checkValidity() == false) {
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    }
}
</script>
```
#### 验证方法（）
##### checkValidity()	
如果 input 元素中的数据是合法的返回 true，否则返回 false。
##### setCustomValidity()	
设置 input 元素的 validationMessage 属性，用于自定义错误提示信息的方法。

使用 setCustomValidity 设置了自定义提示后，validity.customError 就会变成true，则 checkValidity 总是会返回false。如果要重新判断需要取消自定义提示，方式如下：
```js
setCustomValidity("") 
setCustomValidity(null) 
setCustomValidity(undefined)
```
#### 验证属性
##### validity	
布尔属性值，返回 input 输入值是否合法
- customError	   设置为 true, 如果设置了自定义的 validity 信息。

- patternMismatch 设置为 true, 如果元素的值不匹配它的模式属性。

- rangeOverflow	设置为 true, 如果元素的值大于设置的最大值。

- rangeUnderflow  设置为 true, 如果元素的值小于它的最小值。

- stepMismatch	 设置为 true, 如果元素的值不是按照规定的 step 属性设置。

- tooLong	         设置为 true, 如果元素的值超过了 maxLength 属性设置的长度。

- typeMismatch	 设置为 true, 如果元素的值不是预期相匹配的类型。

- valueMissing	  设置为 true，如果元素 (required 属性) 没有值。

- valid	             设置为 true，如果元素的值是合法的。
##### validationMessage	
浏览器错误提示信息
##### willValidate	
指定 input 是否需要验证

案例
```html
<input id="id1" type="number" min="100" required>
<button onclick="myFunction()">OK</button>
 
<p id="demo"></p>
<script>
function myFunction() {
    var txt = "";
    var inpObj = document.getElementById("id1");
    if(!isNumeric(inpObj.value)) {
        txt = "你输入的不是数字";
    } else if (inpObj.validity.rangeOverflow) {
       txt = "输入的值太大了";
    } else if (inpObj.validity.rangeUnderflow) {
        txt = "输入的值太小了";
    } else {
        txt = "输入正确";
    }
    document.getElementById("demo").innerHTML = txt;
}
 
// 判断输入是否为数字
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
</script>
```