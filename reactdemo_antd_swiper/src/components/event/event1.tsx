import React from 'react'

function event1() {
    const scrolls = (eleId: string) => {
        const anchorElement = document.getElementById(eleId); //找到滚动到的元素
        if (anchorElement) {
            anchorElement.scrollIntoView({ behavior: 'smooth', block: 'center' }); // 让页面滚动到元素所在位置

            // behavior: "auto" （直接跳转） | "smooth" （滚动）, // 默认 auto
            // block: "start" （贴着顶部） | "center" | "end" （贴着底部刚好能见） | "nearest" （暂时同end）, // 默认 center
            // inline: "start" | "center" | "end" | "nearest", // 默认 nearest


        }

    }


    return (
        <div >
            <a onClick={() => scrolls('asd')}>点击跳转</a>
            <br />   // 让页面滚动到元素所在位置

            <br />   // behavior: "auto" （直接跳转） | "smooth" （滚动）, // 默认 auto
            <br />   // block: "start" （贴着顶部） | "center" | "end" （贴着底部刚好能见） | "nearest" （暂时同end）, // 默认 center
            <br />   // inline: "start" | "center" | "end" | "nearest", // 默认 nearest
            <p>
                <br />   document.write    console.log    alert   prompt()   Symbol
                <br />   parseFloat()    toString()  switch()   case  break  continue   default  arguments
                <br />   var 变量名= String.fromChatCode(ASCII码);
                <br />   var 变量名= 字符.charCodeAt(0);
                <br />   Hyper Text Markup Language;简单/可扩展/跨平台/通用
            </p>
            <p>
                <br />   target _self(默认) _blank
                <br />   table：cellspacing(td间距 border-spacing)
                <br />   cellpadding(td-border间距)
                <br />   border-collapse:collapse
                <br />   td: rowspan  colspan
                <br />   placeholder  type=radio|button|--submit|reset  checked   select   multiple(多选)
                <br />   textarea   dl、dt、dd  marquee iframe del fieldset  legend
                <br />   contain|cover  attachment(固定)：scroll|fixed
            </p>
            <p>
                <br />  decoration：none|overline|line-through|underline|
                <br />  letter-spacing：字符间距  word-spacing：空格间距  text-indent：首行缩进
                <br />  text-transform：none|lowercase|uppercase|capitalize
                <br />  text-indent(文本缩进)：0|%父宽
                <br />  weight 400(normal)|lighter|bold|bolder
                <br />  font-style:normal|italic斜体|oblique倾斜
                <br />  a:link  a:visited   a:hover  a:active  :focus焦点样式
                <br />  list-style--position:outside | inside
                <br />  outline：宽度  类型  颜色`；
            </p>
            <p>

                <br />  # style="clear: left | right | both;"
                <br />  # br clear="all"
                <br />  # 空div隔开
                <br />  #  .clearfix::after{`{content: "";   clear: both;  display: block;} `}
                <br />  # overflow:hidden;清除塌陷
                <br />  可继承：color  line-height   letter-spacing  word-spacing     text-align   text-decoration  text-indent  text-transform
                <br />  font-size   font-style  font-family   font-weight
                <br />  cursor:pointer;
                <br />  --------------
            </p>

            <button>sss</button><button id='asd'>动画调到此处</button>
            <br />  flex-direction：row | row-reverse | column | column-reverse
            <br />  content:between：之间 around：环绕,四周  evenly：均分
            <br />  align-items/align-self:stretch：延伸,拉伸
            <br />  shrink:压缩 1 | number  grow:弹性 0 | number  order:顺序(可为负)
            <br />  flex-basis：基准(宽) auto |
            <br />  优先级： flex-basis 》 witdth》内容
            <br />  flex：弹性 压缩 基准宽度 0 1 auto|
            <br />  IFC:字体大小/类型/行高/vertical-align影响
            <br />  vertical-align：top | middle(td) | baseline(text) | bottom(img)
            <br />  input(H5):type=email/number/url/search/range/color/date/month/week/time/file(multiple上传多个)
            <br />  datalist(id)→option(预选input-list)
            <br />  linear-gradient:线性梯度
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br />
            <p>文档到底部时就不会显示在顶部位置</p>
        </div>
    )
}

export default event1