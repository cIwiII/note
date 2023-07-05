

#### 拖动元素大小
```css
/*  三个属性必须, 包括宽和高 */

div {
    width: 300px;
    resize: both;
    overflow: auto;
}
```

#### 溢出隐藏

```css
.box {
  overflow: hidden;
  text-overflow: ellipsis;
   /* 溢出不换行 */
  white-space: nowrap;
}
```

#### 字符串\n处理

```css
/* 字符串中 \n为换行 */
.pre {
  white-space: pre-line;
}
```

#### placeholder样式

```css
input::-webkit-input-placeholder {
  color: palevioletred;
}
input::placeholder {
  color: palevioletred;
}
```

#### 文本是否可选

```css
/* 文本不可选中，具有继承性 */
.noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
```

#### 背景虚化-滤镜

```css
/* 关键点：一个盒子模糊，另一个盒子脱离文档流处于它之上 */

.outer-box {
  position: relative;
  height: 400px;
  width: 100%;
  .div1 {
    width: 100%;
    height: 400px;
     /* blur值 越大 模糊程度也越大 */
    -webkit-filter: blur(15px);
    -moz-filter: blur(15px);
    -o-filter: blur(15px);
    -ms-filter: blur(15px);
    filter: blur(15px);
  }

  .div2 {
    position: absolute;
  }
}
```

#### mask遮罩

```css
/* mask遮罩，应用如：弹幕位于人物后方 */
/* mask缩写包含以下属性，mask指定的图片等位于元素上方
https://www.zhangxinxu.com/wordpress/2017/11/css-css3-mask-masks/
mask-image
mask-mode
mask-repeat
mask-position
mask-clip
mask-origin
mask-size
mask-type
mask-composite
 */

.mask-image {
  width: 250px;
  height: 187.5px;
  -webkit-mask-image: url(loading.png);
  mask-image: url(loading.png);
}
```

