/**
 * @description 如何获取文档中任意一个元素距离文档document顶部的距离
 * offset 方法 返回的对象包含两个整型属性：top 和 left
 * 手动实现一下：
 *  1. 通过递归实现
 *  2. 通过 getBoundingClientRect API 实现
 *  3. offsetTop 访问一个DOM节点上边框相对距离其本身最近，且 position 值
 *      为非 static 的祖先元素的垂直偏移量
 */


/**
 * @description 通过递归实现方案 遍历目标元素的父节点，父节点的父节点...
 * @param 传入节点，返回改节点的位置对象，
 * @param ele 
 * @returns  { left: 0, top: 0}
 */
export const offset = (ele: Element) => {
    if (!ele) {
        console.log('未传入节点');
    }
    const result = {
        left: 0, top: 0
    };
    const getOffset = (node: Element, init?: boolean) => {
        /* 如果不是一个元素节点 */
        if (node.nodeType != 1) {
            return;
        }
        /* 获取定位类型 */
        const position = window.getComputedStyle(node)['position'];
        /* 如果定位类型等于static */
        if (typeof (init) === "undefined" && position === "static") {
            //递归父节点
            getOffset(node.parentNode as Element);
            return;
        }
        //累计计算该元素到父元素之间的距离
        result.top = (node as any).offsetTop + result.top - node.scrollTop;
        result.left = (node as any).offsetLeft + result.left - node.scrollLeft;
        if (position === 'fixed') {
            return;
        }
        getOffset(node.parentNode as Element);
        if (window.getComputedStyle(ele)['display'] === 'none') {
            return result;
        }
    }
    getOffset(ele, true);
    console.info(result);
    return result;
}


//方式2（js）  getBoundingClientRect API 实现
export const offset1=ele=>{
	let result={
		left:0,top:0
	}
	if(!ele.getClientRects().length){
		return result
	}
	if(window.getComputedStyle(ele)["display"]==='none'){
		return result
	}
	result=ele.getBoundingClientRect()
	var docElement=ele.ownerDocument?.documentElement
	console.info("top",result.top+window.pageYOffset-docElement.clientTop,'left',result.left+window.pageXOffset-docElement.clientLeft)
	return{
		top:result.top+window.pageYOffset-docElement.clientTop,
		left:result.left+window.pageXOffset-docElement.clientLeft
	}
}


// html、js使用


/* 
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<script src="./distance.js"></script>
	</head>
	<style>
		#box1{
			background-color: aqua;
			width:500px;
			height:1200px;
			position:relative;
			left:10px;
			top:10px;
		}
		#box2{
			background-color: pink;
			width:400px;
			position:absolute;
			top:50px;
			left:50px;
			height:50px;
		}
	</style>
	<body>
		<div id="box1">
			<div id="box2"></div>
		</div>
		<script>
			window.addEventListener("load",function(){
				 let element=document.getElementById('box2')
				 console.info(element)
				 offset1(element)
				 // offset(element)
			})
		</script>
	</body>
</html>

*/


//扩展参考

const distanceToTop = (ele) => {
  let x = 0
  while ((ele = ele.parentElement)) {
    x += ele.offsetTop
  }
  return x
}