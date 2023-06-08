时效原因，仅作参考


### 媒体渲染前判断是否有效

对H5player播放器做了部分封装，在去渲染播放器的时候，一旦遇到一个url地址存在，但是实际的服务器文件不存在的时候，再去取渲染播放器就会失败，因此在渲染之前判断url地址是否有效，方法如下

```js
let video = document.createElement('video');
video.src=_this.detailData.url//获取到的服务器地址
video.onload = ()=>{
    alert('success')
}
video.onerror = function() {
    _this.$message.error('url地址渲染失败的回调')
}
video.oncanplaythrough = function() {
    alert('渲染成功后会执行的回调函数，一旦渲染成功过，逻辑可以卸载这里')
}
```

### audio标签-基础API


HTML5 <audio>音频元素<video>视频元素的属性、方法、事件的基本使用。

#### 一、audio使用基本案例

//早年

<audio controls>
  <source src="audiofile.mp3" type="audio/mpeg">
  <source src="audiofile.ogg" type="audio/ogg">
  <!-- 如果浏览器不支持，则会呈现下面内容 -->
  <p>你的浏览器不支持HTML5音频，你可以<a href="audiofile.mp3">下载</a>这个音频文件。</p>
</audio>
借助<source>元素同时引用多个不同格式的音频文件，通过type属性指定mime type避免重复加载情况出现。

//当前
<audio src="audiofile.mp3" controls></audio>
**常见音频格式：**

`.ogg` Safari浏览器不支持（目前版本13），IE到Edge16都不支持；
`.wav` 则是IE-IE11不支持；
`.mp3`IE9+都支持。

`zxx`:也可以使用MP4视频文件，因为MP4视频也包含ACC编码音频，不过就是体积大了很多，不建议这么使用。

#### 二、Audio HTML属性

下面看下<audio>元素属性相关的一些细节。

<audio src="audiofile.mp3" autoplay loop muted preload="auto" controls type="audio/mpeg"></audio>
##### autoplay:自动播放(boolean)

表示声音是否自动播放，默认false不自动播放，大部分浏览器包括Chrome不支持自动播放。自动播放有声音，影响用户体验，浏览器通常只允许在特定情况下成功地进行自动播放（如，静音下偶尔自动播放）。

##### loop:循环播放(boolean)

表示声音是否循环播放，默认不循环播放。loop属性适合用在可以不断循环的bgm背景音乐上。
JS设置: element.loop = true;

##### muted:是否静音(boolean)

表示音频是否静音，默认不静音播放。
JS设置音: element.muted = true;

##### preload:加载策略(string)

指定音频的预加载策略，也就是在播放之前需要提前加载好音频的哪些资源。支持下面3个属性值：

- `none`：表示在点击播放按钮之前不加载任何信息。
- `metadata`: 下载音频的meta信息，就是视频长度，类型，还有作者（如果有）等信息。
- `auto`: 尝试下载整个音频，建议使用。
- `note`: preload属性在iOS Safari浏览器下是被禁止的（桌面端无此问题）. 对音频播放时间实际要求比较高的场合，通常解决方法是，第一次触摸的时候，音频静音，同时触发音频play()然后很快再pause()，实现类似preload的预加载行为。

##### controls:控件显示(boolean)

表示声音是否显示音频播放暂停等控制器，默认是不显示的。
不同浏览器，以及不同版本浏览器，其UI都不一样。如果是开发to用户侧产品，需要自定义音频播放器的UI，让各个浏览器下长相一致。

##### src:文件地址(string)

表示音频的文件地址。可以用在<audio>元素上，也可以用在<source>元素上。<audio>元素上只能一个音频地址，使用<source>可以并列多个不同格式的音频文件。

```html
<audio src="audiofile.mp3" ></audio>
```

##### type:文件类型(unkown)

指定音频文件的mime type类型。虽然不加type类型，浏览器也能正确播放音频文件，但通常建议加上type属性。当然，如果src音频格式不固定，则type属性反而推荐不加，错误的type不如没有type。

#### 三、在JS中调用的audio属性

```js
//元素还有一些属性只能通过JavaScript设置： 
<audio id="myAudio" src="audiofile.mp3"></audio>
```

##### currentTime:播放时长s

是一个可读兼可写的属性，用来设置或获取当前已经播放的时长，单位是秒。

```js
// 获取音频已经播放时长
var playedTime = myAudioEle.currentTime;
//如果音频尚未开始播放，则playedTime的返回值是0。
// 跳到5秒那里
myAudioEle.currentTime = 5;
```

##### volume:音量大小

也是一个可读兼可写的属性，用来设置或获取音频的音量大小，范围是0-1。如果音频文件设置了muted为true，则myAudio.volume的返回值是0。
例如，设置音量50%，则：

```js
// 设置音量50%
myAudio.volume = 0.5;
```

##### playbackRate:播放速率

是一个可读兼可写的属性，用来设置或获取当前媒体文件的播放速率，值为数值，例如：

```js
// 获取音频播放速率
var audioSpeed = audio.playbackRate;
// 设置音频设置播放速率为正常速度的1.5倍
audio.playbackRate = 1.5;
```


速率范围，Gecko内核浏览器速率范围是0.25到5.0，超出这个范围就静音。对于Chrome浏览器，我自己实地测试了下，速率上限居然可以到16。

##### paused:是否暂停

是一个只读属性，表示当前音频是否处于暂停状态。

```js
// true或false
console.log(myAudioEle.paused);
//未播放或者播放暂停都会返回true。
```

#### 四、播放与暂停等JS方法

##### myAudioEle.play() 播放

音频播放示意，没有额外参数；目前执行play()不总是有效果的。web网页需要至少又一次可信任的用户行为后，才能myAudioEle.play()播放才可以执行，否则会报错。
可信任的用户行为包括`touchstart`触摸或者`click`点击。
Chrome浏览器50之后的版本， <video>或者<audio>执行play()方法后返回的是一个Promise。
`note`: 

- play()方法是一个异步过程，如果先play()方法然后立即执行pause()方法会报错：
  `Uncaught (in promise) DOMException: The play() request was interrupted by a call to pause().`

即使加一个定时器（时间如果不是很足够），也会报这个错误，此时可以使用下面的语法：

```js
  // 播放开始，可能会显示loading
var playPromise = audio.play();
if (playPromise !== undefined) {
    playPromise.then(_ => {
        // 这里就已经开始播放了
        // 播放UI会出现（如果控件显示的话）
        // 此时可以安全的暂停音视频了
        audio.pause();
    }).catch(error => {
        // 无法自动播放
        // 显示暂停的UI
    });
}
```

##### myAudioEle.pause() 暂停

pause()音频暂停示意，没有额外参数：

音频元素是没有stop()方法的，如果你想要实现音频的stop()效果，可以先设置currentTime属性值为0，然后在执行pause()方法。

##### myAudioEle.canPlayType() 是否支持某种音频文件

检测浏览器是否支持某种类型的音频文件，支持一个mime type值作为参数。使用示意：

```js
if (myAudio.canPlayType('audio/mpeg')) {
    // 如果支持mp3
}
canPlayType()：probably | maybe | ""（空字符串）
只要不是空字符串都认为是支持的

var myAudio = document.createElement('audio');
if (myAudio.canPlayType('audio/mpeg')) {
    myAudio.setAttribute('src','audiofile.mp3');
}
if (myAudio.canPlayType('audio/ogg')) {
    myAudio.setAttribute('src','audiofile.ogg');
}
```



##### myAudioEle.load() 加载

触发音频文件的加载。如果浏览器不支持preload属性，则此方法也不会有效果。



#### 五、音频媒体加载事件

这类加载事件在移动端，尤其iOS Safari并不总能触发，因为preload以及autoplay等属性的限制。

##### loadstart 开始加载

事件简单告知加载过程已经开始，浏览器正在连接到媒体。

```js
myAudio.addEventListener("loadstart", function() {
  // 抓取文件
});
```



##### durationchange 文件时长

可以用于获取文件时长，因为音频文件默认duration初始值是NaN，当准确时长返回时候，会触发durationchange，可以快速显示音频播放时间。
通常实际开发，我们会使用00:00占位，durationchange事件触发后在替换为准确的总播放时间。

```js
myAudio.addEventListener("durationchange", function() {
  // 可以显示播放时长了哟
});
```

##### loadedmetadata 第一文件字节到达

当第一个音频文件字节数据到达时，会触发loadeddata事件。虽然播放头已经就位，但还没有准备好播放。

```js
myAudio.addEventListener("loadeddata", function() {
  // 可以显示播放头
});
```

##### progress 在下载中

事件在媒体文件仍然在下载中的时候触发，通常各种loading效果的显示就是在这个事件中。

```js
myAudio.addEventListener("progress", function() {
  // 你可以让用户知道媒体文件正在下载
});
```

##### canplay 可以播放

当媒体文件可以播放的时候会触发canplay事件。
自定义音频播放器的时候，可以默认把一些按钮disabled禁用，当触发canplay可以播放的时候再恢复为enabled。

```js
myAudio.addEventListener("canplay", function() {
  // 音频可以播放了
});
```

##### canplaythrough 从头播放到尾时

在音频文件可以从头播放到尾时候触发。这种情况包括音频文件已经从头到尾加载完毕了，或者浏览器认为一定可以按时下载，不会发生缓冲停止。

```js
myAudio.addEventListener("canplaythrough", function() {
  // 音频可以不发生缓冲从头播放到结束
});
```

音频事件触发的顺序，媒体事件加载顺序如下：
loadstart → durationchange → loadedmetadata → loadeddata → progress → canplay → canplaythrough

##### 加载中断事件 5个

还有一些事件是在媒体加载过程出现某种中断时将触发。
suspend   即使文件尚未完全下载，也不再拉取媒体数据。
abort     不是因为出错而导致的媒体数据下载中止。
error     媒体下载过程中错误。例如突然无网络了。或者文件地址不对。
emptied   媒体缓冲区已被清空，可能是由于错误或调用了load()方法重新加载。
stalled   媒体数据意外地不再可用。

#### 六、音频媒体播放事件

下面介绍一些与媒体文件播放状态相关的一些事件。

##### timeupdate  播放进度发生变化

每次currentTime属性值发生变化的时候会触发timeupdate事件。
实际开发的时候，这个事件每250毫秒出发一次。这个事件可用来实时显示播放进度。

```js
myAudio.addEventListener("timeupdate", function() {
  // 更新与播放进度相关的内容
});
```



##### playing 被迫停止启动后

音频文件在缺少媒体信息（如时长等）的时候，播放会被迫停止，如果之后在启动播放，会触发playing事件。

##### waiting 被迫停止时

音频文件因为缺少媒体信息（如时长等）导致播放停止时会触发waiting事件。

##### play 方法play()生效后

play事件在play()方法生效，或者autoplay导致播放开始时候触发，此事件触发的播放状态一定是一个从暂停到播放。

##### pause 方法pause()生效后

pause事件在pause()方法执行并生效后触发，此事件触发需要一个从播放到暂停的状态变化。

##### ended 播放完毕

当整个音频文件播放完毕的时候触发ended事件。
myAudio.addEventListener("ended", function() {
  // 当音轨播放完毕时候做你想做的事情
});

##### volumechange 音量变化

音量发生变化的时候会触发volumechange事件，包括静音行为。

##### ratechange 播放速率变化

播放速率发生变化的时候会触发ratechange事件。

#### 七、缓冲相关的属性和方法

##### 播放进度

- 使用currentTime和duration属性获取，

##### 缓冲加载进度

###### buffered 属性

让我们知道音频的哪些部分已被缓冲（提前下载）。它返回一个称为TimeRanges的对象。
myBufferedTimeRanges = myAudio.buffered;

###### seekable 可跳转而无需缓冲

 属性通知您是否可以直接跳到媒体的该部分，而不需要进一步缓冲。
mySeekableTimeRanges = myAudio.seekable;

###### Buffering相关事件

- seeking ：当媒体资源正在请求是会触发seeking事件。

- seeked ：当seeking属性变成false时候会触发seeked事件。