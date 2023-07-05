

### Lottie

作用：复杂帧动画的解决方案。

安装：npm install lottie-web

使用：**1、如何实现一个 Lottie 动画** 

1. 设计师使用 AE 制作动画。
2. 通过 Lottie 提供的 AE 插件 Bodymovin 把动画导出 JSON 数据文件。
3. 加载 Lottie 库结合 JSON 文件和下面几行代码就可以实现一个 Lottie 动画

```js
import lottie from 'lottie-web';
import animationJsonData from 'xxx-demo.json';  // json 文件

const lot = lottie.loadAnimation({
   container: document.getElementById('lottie'), 
   renderer: 'svg',
   loop: true,
   autoplay: false,
   animationData: animationJsonData,
 });

// 另一种写法
const lot = lottie.loadAnimation({
    container: this.animationRef.current,
    renderer: 'svg',        // 渲染方式:svg：支持交互、不会失帧、canvas、html：支持3D，支持交互
    loop: true,             // 循环播放，默认：true
    autoplay: true,         // 自动播放 ，默认true
    path: ''                // json 路径
})

// 开始播放动画
lot.play();
```

#### 常用方法

```js
animation.play(); // 播放，从当前帧开始播放

animation.stop(); // 停止，并回到第0帧

animation.pause(); // 暂停，并保持当前帧

animation.goToAndStop(value, isFrame?); // 跳到某个时刻/帧并停止, isFrame单位(默认false:毫秒，true为帧)
animation.goToAndStop(30, true); // 跳转到第30帧并停止
                      
animation.goToAndPlay(value, isFrame); // 跳到某个时刻/帧并进行播放
animation.goToAndPlay(300); // 跳转到第300毫秒并播放

animation.playSegments(arr, forceFlag); // 以帧为单位，播放指定片段， arr可以包含两个数字或者两个数字组成的数组，forceFlag表示是否立即强制播放该片段
animation.playSegments([10,20], false); // 播放完之前的片段，播放10-20帧
animation.playSegments([[0,5],[10,18]], true); // 直接播放0-5帧和10-18帧

animation.setSpeed(speed); // 设置播放速度，speed为1表示正常速度

animation.setDirection(direction); // 设置播放方向，1表示正向播放，-1表示反向播放

animation.destroy(); // 删除该动画，移除相应的元素标签等。在`unmount`的时候，需要调用该方法

```



#### 常用钩子(事件)

动画执行过程中的钩子，可以对动画有一定的控制权，前四个即使事件方法，也是监听方法

- complete: 播放完成（循环播放下不会触发）
* loopComplete: 当前循环下播放（循环播放/非循环播放）结束时触发
* enterFrame: 每进入一帧就会触发，播放时每一帧都会触发一次，stop方法也会触发
* segmentStart: 播放指定片段时触发，playSegments、resetSegments等方法刚开始播放指定片段时会发出，如果playSegments播放多个片段，多个片段最开始都会触发。
* config_ready：完成初始配置后触发
* data_ready: 动画json文件(数据)加载完毕触发
* DOMLoaded: 动画相关的dom已经被添加到html后触发(将元素添加到`DOM`时)
* destroy: 将在动画删除时触发

- `data_failed`：当无法加载动画的一部分时

- `loaded_images`：当所有图像加载成功或错误时


```js
// 动画播放完成触发
anm.addEventListener('complete', anmLoaded);

// 当前循环播放完成触发 
anm.addEventListener('loopComplete', anmComplete);

// 播放一帧动画的时候触发 
anm.addEventListener('enterFrame', enterFrame);

animation.addEventListener('data_ready', () => {}) // 动画数据加载完毕
animation.addEventListener('config_ready', () => {}) // 完成初始配置后
animation.addEventListener('data_failed', () => {}) // 加载动画数据失败
animation.addEventListener('loaded_images', () => {}) // 所有图片加载成功或者失败
animation.addEventListener('DOMLoaded', () => {}) // 将元素添加到DOM后
```



### AE 设计：

AE：可视化动画设计，自动生成JSON数据，属性字段：

#### 全局信息

- `w` 和 `h`： 宽 200、高 200

- `v`：Bodymovin 插件版本号 4.5.4

- `fr`：[帧率](https://link.zhihu.com/?target=https%3A//baike.baidu.com/item/%E5%B8%A7%E7%8E%87) 30fps

- `ip` 和 `op`：开始帧 0、结束帧 180

- `assets`：静态资源信息（如图片）

- `layers`：图层信息（动画中的每一个图层以及动作信息）

- `ddd`：是否为 3d

- `comps`：合成图层

  ```js
  {
      "v": "5.1.13",       // bodymovin 版本
      "fr": 30,            // 帧率
      "ip": 0,             // 起始关键帧
      "op": 20,            // 结束关键帧
      "w": 150,            // 视图宽
      "h": 130,            // 视图高
      "nm": "鹅头收起动画",  // 名称
      "ddd": 0,             // 3d
      "assets": [],        // 资源集合 
      "layers": [],        // 图层集合
      "masker": []         // 蒙层集合
  }
  ```

  

其中 `fr`、`ip`、`op` 在 Lottie 动画过程中尤为重要，前面提到我们的动画 Demo 是 0 - 6s，但是 Lottie 是以帧率计算动画时间的。Demo 中设置的帧率为 30fps，那么 0 - 6s 也就等同于 0 - 180 帧。

#### 图层相关信息 layers

主要是 3 个区域：

- 内容区域，包含形状图层的大小、位置、圆度等信息。
- 变化区域，包含 5 个变化属性（锚点、位置、缩放、旋转、不透明度）。
- 缩放 3 帧（图中绿色区域），在 0 帧、90 帧、180 帧对缩放属性进行了修改，其中图中所示为第 90 帧，图层缩放至 50%。

内容区：

- ddd：是否3D
- ind：图层id
- ty：图层类型
- nm：图层名字

变化区ks：

- o：opacity 透明度
- r：rotation 旋转
- p：position 位置
- a：anchor 锚点
- s：scale 缩放

shaps：图层宽高等

#### 属性变化信息

 `ks`（变化属性） 中的 `s` 展开，也就是缩放信息：如下

其中:

- `t` 代表关键帧数
- `s` 代表变化前（图层为二维，所以第 3 个值 固定为 100）。
- `e` 代表变化后（图层为二维，所以第 3 个值 固定为 100）。



u”:“images/” 这个代表图片的源路径
“p”:“btn_1.png” 这个代表图片的名字，`注意` 这个要放到本地跟cos的名字都要一致



### 扩展

#### Lottie 如何把 JSON 数据动起来

链接：[文档下部分源码逻辑示例](https://zhuanlan.zhihu.com/p/342477231?utm_source=weibo&utm_medium=social&utm_oi=27124941455360&utm_content=snapshot) 



#### react项目使用react-lottie

- 默认点击动画实现播放和暂停

#### 下载冲突使用 --force强制下载