/**
 * navigator 全对象属性
 */

// ------------------------
const navigator = {
  // 蓝牙原型方法
  bluetooth: {
    getAvailability: getAvailability(),
    requestDevice: requestDevice()
  },

  // 剪切、复制和粘贴功能,原型方法
  clipboard: {
    read: read(), //有安全限制
    readText: readText(), //有安全限制
    write: write(),
    writeText: writeText("文本") // 复制文本
  },
  /* navigator.clipboard访问系统剪贴板以读取剪贴板的内容
        navigator.clipboard.readText().then(
        (clipText) => document.querySelector(".cliptext").innerText = clipText);
        */

  //(存在兼容性) NetworkInformation类型对象，包含有关系统连接的信息，例如用户设备的当前带宽或连接是否按流量计费。
  connection: {
    // 自身和原型属性
    onchange: null,
    effectiveType: "3g",
    rtt: 400,
    downlink: 0.85,
    saveData: false,
    // 原型方法
    "get downlink": downlink(),
    "get effectiveType": effectiveType(),
    "get onchange": onchange(),
    "set onchange": onchange(),
    "get rtt": rtt(),
    "get saveData": saveData()
  },

  // 只读属性，返回一个布尔值，指示是否启用 cookie
  cookieEnabled: true,

  // CredentialsContainer对象（可能是一个弹出界面），公开请求凭据，例如成功登录或注销时，通知用户代理。该接口可用于特征检测
  credentials: {
    // 原型方法
    create: create(),
    get: ƒ(),
    preventSilentAccess: preventSilentAccess(),
    store: store()
  },

  // (存在兼容性) 返回以千兆字节为单位的设备内存的大概数量
  deviceMemory: 8,
  /* 
        报告的值不精确以减少指纹识别。它的近似值是向下舍入到最接近的 2 的幂，
        然后将该数字除以 1024。然后将其限制在下限和上限内，
        以保护非常低或高内存设备所有者的隐私。
        存在以下值：0.25, 0.5, 1, 2, 4, 8 之一。 
        const memory = navigator.deviceMemory
        console.log (`This device has at least ${memory}GiB of RAM.`)
        */

  // Geolocation对象，允许 Web 内容访问设备的位置，navigator.geolocation是否支持定位
  geolocation: {
    clearWatch: clearWatch(),
    // 位置经纬度，可接受三个回调函数
    getCurrentPosition: getCurrentPosition(),
    watchPosition: watchPosition()
  },
  /* 
        navigator.geolocation.getCurrentPosition(showPosition);
        function showPosition(position) {
            x.innerHTML = "纬度: " + position.coords.latitude +
                "<br>经度: " + position.coords.longitude;
        }
        */

  // 返回可用于在用户计算机上运行线程的逻辑处理器数 。1-用户代理数之间
  hardwareConcurrency: 8,
  /*  根据浏览器逻辑处理器数建立线程
    let workerList = [];

    for (let i = 0; i < window.navigator.hardwareConcurrency; i++) {
      let newWorker = {
        worker: new Worker('cpuworker.js'),
        inUse: false
      };
      workerList.push(newWorker);
    }
  */

  // (存在兼容性) HID对象，HID 设备连接信息
  hid: {
    onconnect: null,
    ondisconnect: null,
    // 原型方法
    getDevices: getDevices(),
    onconnect: null,
    ondisconnect: null,
    requestDevice: requestDevice(),
    "get onconnect": onconnect(),
    "set onconnect": onconnect(),
    "get ondisconnect": ondisconnect(),
    "set ondisconnect": ondisconnect()
  },
  /* 
        Navigator.hid 只读属性返回一个对象， 该HID对象提供用于连接到 HID 设备、
        列出连接的 HID 设备以及连接的 HID 设备的事件处理程序的方法。
        如果定义的权限策略阻止 WebHID 使用，则该Navigator.hid属性将不可用。
        */

  // (存在兼容性) Ink对象，原型方法,返回Ink当前文档的对象，提供对Ink API功能的访问
  ink: {
    requestPresenter: requestPresenter()
  },
  /* 
        async function inkInit() {
          const ink = navigator.ink;
          let presenter = await ink.requestPresenter({presentationArea: canvas});
          //...
        }
        */

  // (存在兼容性) 返回一个Keyboard对象，该对象提供对检索键盘布局图和切换物理键盘按键捕获的功能的访问。
  keyboard: {
    getLayoutMap: getLayoutMap(),
    lock: lock(),
    unlock: unlock()
  },

  // 只读属性返回表示用户首选语言的字符串，通常是浏览器 UI 的语言
  language: "zh-CN",
  /* 
        if (/^en\b/.test(navigator.language)) {
          doLangSelect(window.navigator.language);
        }
        */

  // 数组中，它们按偏好排序，最喜欢的语言在前,navigator.language是返回数组的第一个元素
  languages: ["zh-CN", "zh"],
  /*      navigator.language   //"en-US"
                navigator.languages  //["en-US", "zh-CN", "ja-JP"] */

  // LockManager对象 ，提供请求新Lock对象和查询现有Lock对象的方法。
  locks: {
    query: query(),
    request: request()
  },

  // (文档不存在) NavigatorManagedData对象，
  managed: {
    onmanagedconfigurationchange: null,
    // 原型方法
    getManagedConfiguration: getManagedConfiguration(),
    onmanagedconfigurationchange: null,
    "get onmanagedconfigurationchange": onmanagedconfigurationchange(),
    "set onmanagedconfigurationchange": onmanagedconfigurationchange()
  },

  // 返回当前设备支持的最大同时触摸接触点数。
  maxTouchPoints: 0,

  // MediaCapabilities对象，原型方法
  mediaCapabilities: {
    decodingInfo: decodingInfo(),
    encodingInfo: encodingInfo()
  },
  /* Navigator.mediaCapabilities只读属性返回一个对象，
        该MediaCapabilities对象可以公开有关给定格式的解码和编码功能以及Media Capabilities API定义的输出功能的信息。
        句法：
            mediaCapabilitiesObj = globalObj.navigator.mediaCapabilities
        el：
        navigator.mediaCapabilities.decodingInfo({
            type : 'file',
            audio : {
                contentType : "audio/mp3",
                channels : 2,
                bitrate : 132700,
                samplerate : 5200
            }
        }).then((result) => {
          console.log(`This configuration is ${result.supported ? '' : 'not '}supported,`);
          console.log(`${result.smooth ? '' : 'not '}smooth, and`);
          console.log(`${result.powerEfficient ? '' : 'not '}power efficient.`);
        });
        */

  // MediaDevices对象,提供对连接的媒体输入设备（如相机和麦克风）以及屏幕共享的访问。
  mediaDevices: {
    ondevicechange: null,
    // 原型方法
    enumerateDevices: enumerateDevices(),
    getDisplayMedia: getDisplayMedia(),
    getSupportedConstraints: getSupportedConstraints(),
    getUserMedia: getUserMedia(),
    ondevicechange: null,
    setCaptureHandleConfig: setCaptureHandleConfig(),
    "get ondevicechange": ondevicechange(),
    "set ondevicechange": ondevicechange()
  },
  /* 返回值：单MediaDevices例对象。通常，您只需直接使用该对象的成员，例如通过调用 navigator.mediaDevices.getUserMedia(). */

  //MediaSession， 可用于与浏览器共享元数据以及有关文档正在处理的媒体的当前播放状态的其他信息。
  mediaSession: {
    metadata: null,
    playbackState: "none",
    // 原型方法
    metadata: null,
    playbackState: "none",
    setActionHandler: setActionHandler(),
    setCameraActive: setCameraActive(),
    setMicrophoneActive: setMicrophoneActive(),
    setPositionState: setPositionState(),
    "get metadata": metadata(),
    "set metadata": metadata(),
    "get playbackState": playbackState(),
    "set playbackState": playbackState()
  },
  /* 该信息又可以与设备和/或操作系统共享，
           以便设备的标准媒体控制用户体验来描述和控制媒体的回放。
        if ("mediaSession" in navigator){
          navigator.mediaSession.metadata = new MediaMetadata({
            title: "Podcast Episode Title",
            artist: "Podcast Host",
            album: "Podcast Name",
            artwork: [{src: "podcast.jpg"}]
          });
        }
         */

  // 返回浏览器的在线状态。该属性返回一个布尔值， true表示在线，false表示离线
  onLine: true,
  /* 只要浏览器连接到网络的能力发生变化，该属性就会发送更新。
        当用户点击链接或脚本请求远程页面时，就会发生更新。
        例如，当用户在失去互联网连接后不久单击链接时，该属性应该返回false。
         */

  // 确定是否支持内联查看 PDF 文件，返回boolean值
  pdfViewerEnabled: true,

  // Permissions对象，用于查询和更新 Permissions API 涵盖的 API 的权限状态。原型方法
  permissions: { query: query() },
  /* 
        navigator.permissions.query({name:'geolocation'}).then((result) => {
          if (result.state === 'granted') {
            showMap();
          } else if (result.state === 'prompt') {
            showButtonToEnableMap();
          }
          // Don't do anything if the permission was denied.
        });
         */

  // PluginArray对象，列出Plugin描述应用程序中安装的插件的对象 ,改用pdfViewerEnabled
  plugins: {
    // PluginArray列表...若支持将包含此五项：“PDF 查看器”|“Chrome PDF 查看器”|“铬 PDF 查看器” |
    // “Microsoft Edge PDF 查看器”|“WebKit 内置 PDF”如果不支持内联查看 PDF，则返回一个空对象。
    // 原型方法
    item: item(),
    length: 5,
    namedItem: namedItem(),
    refresh: refresh()
  },
  /* 是否可内联显示检查pdf文件
        if ('PDF Viewer' in navigator.plugins) {
          // browser supports inline viewing of PDF files.
        }
         */

  // （存在兼容性） Presentation对象，在上下文中定义为两种可能的用户代理：控制用户代理和接收用户代理。
  presentation: {
    defaultRequest: null,
    receiver: null,
    // 原型方法
    defaultRequest: null,
    receiver: null,
    "get defaultRequest": defaultRequest(),
    "set defaultRequest": defaultRequest(),
    "get receiver": receiver()
  },
  /* 内容较多：https://developer.mozilla.org/en-US/docs/Web/API/Presentation */

  // (文档不存在) Scheduling对象，。
  scheduling: { isInputPending: isInputPending() },

  // (存在兼容性) Serial对象，代表Web Serial API，Serial获取时，总是返回对象的同一个实例
  serial: {
    onconnect: null,
    ondisconnect: null,
    // 原型方法
    getPorts: getPorts(),
    onconnect: null,
    ondisconnect: null,
    requestPort: requestPort(),
    "get onconnect": onconnect(),
    "set onconnect": onconnect(),
    "get ondisconnect": ondisconnect(),
    "set ondisconnect": ondisconnect()
  },
  /* 使用该getPorts()方法来初始化可用端口列表
        navigator.serial.getPorts()
        .then((ports) => {
          // Initialize the list of available ports with `ports` on page load.
        });
         */

  // ServiceWorkerContainer对象 ,提供对注册、删除、升级和与 的通信的访问
  serviceWorker: {
    controller: null,
    ready: Promise,
    oncontrollerchange: null,
    onmessage: null,
    onmessageerror: null,
    // 原型方法
    controller: null,
    getRegistration: getRegistration(),
    getRegistrations: getRegistrations(),
    oncontrollerchange: null,
    onmessage: null,
    onmessageerror: null,
    ready: Promise,
    register: register(),
    startMessages: startMessages(),
    "get controller": controller(),
    "get oncontrollerchange": oncontrollerchange(),
    "set oncontrollerchange": oncontrollerchange(),
    "get onmessage": onmessage(),
    "set onmessage": onmessage(),
    "get onmessageerror": onmessageerror(),
    "set onmessageerror": onmessageerror(),
    "get ready": ready()
  },
  /* 检查是否支持 serviceWorker
        if ('serviceWorker' in navigator) {
          // Supported!
        }
        */

  // StorageManager对象 原型方法,用于访问当前站点或应用程序的浏览器整体存储功能的单例对象 ,
  // 检查和配置数据存储的持久性,查看浏览器还有多少空间可用于本地存储。
  storage: {
    estimate: estimate(),
    getDirectory: getDirectory(),
    persist: persist(),
    persisted: persisted()
  },

  // (文档不存在) USB对象
  usb: {
    onconnect: null,
    ondisconnect: null,
    // 原型方法
    getDevices: getDevices(),
    onconnect: null,
    ondisconnect: null,
    requestDevice: requestDevice(),
    "get onconnect": onconnect(),
    "set onconnect": onconnect(),
    "get ondisconnect": ondisconnect(),
    "set ondisconnect": ondisconnect()
  },

  // (存在兼容性)UserActivation 对象,包含有关当前窗口的用户激活状态的信息。
  userActivation: {
    hasBeenActive: true,
    isActive: false,
    // 原型方法
    hasBeenActive: true,
    isActive: false,
    "get hasBeenActive": hasBeenActive(),
    "get isActive": isActive()
  },
  /* // 用户当前是否正在与页面交互（瞬时激活）
        if (navigator.userActivation.isActive) {
          // proceed to request playing media, for example
        }
        // 检查是否曾经执行过用户手势，是否曾与页面进行过交互
        if (navigator.userActivation.hasBeenActive) {
          // proceed with auto-playing an animation, for example
        }
        */

  // 只读属性返回当前浏览器的用户代理字符串，用户代理字符串是用户可配置的,不可靠
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",

  // (存在兼容性) NavigatorUAData对象,用于访问User-Agent Client Hints API.
  userAgentData: {
    brands: Array(3),
    mobile: false,
    platform: "Windows",
    // 原型方法
    brands: Array(3),
    getHighEntropyValues: getHighEntropyValues(),
    mobile: false,
    platform: "Windows",
    toJSON: toJSON(),
    "get brands": brands(),
    "get mobile": mobile(),
    "get platform": platform()
  },

  // (存在兼容性) VirtualKeyboard对象，退出、显示、隐藏、当前位置、大小等虚拟键盘行为。
  virtualKeyboard: {
    boundingRect: DOMRect,
    // boundingRect: { bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0, x: 0, y: 0, },
    overlaysContent: false,
    ongeometrychange: null,
    // 原型方法
    boundingRect: DOMRect,
    hide: hide(),
    ongeometrychange: null,
    overlaysContent: false,
    show: show(),
    "get boundingRect": boundingRect(),
    "get ongeometrychange": ongeometrychange(),
    "set ongeometrychange": ongeometrychange(),
    "get overlaysContent": overlaysContent(),
    "set overlaysContent": overlaysContent()
  },

  // (存在兼容性) WakeLock对象，原型方法,允许文档阻止屏幕息屏锁屏等操作，语法：navigator.wakeLock
  wakeLock: { request: request() },

  // 指示用户代理是否由自动化控制
  webdriver: false,

  // (文档不存在，未说明)  DeprecatedStorageQuota对象，
  webkitPersistentStorage: {},

  // (文档不存在，未说明)  DeprecatedStorageQuota对象，
  webkitTemporaryStorage: {},

  // WindowControlsOverlay对象，窗口标题栏隐藏覆盖
  windowControlsOverlay: { visible: false, ongeometrychange: null },
  /* 
        if ('windowControlsOverlay' in navigator) {
          const rect = navigator.windowControlsOverlay.getTitlebarAreaRect();
          // Do something with the title bar area rectangle.
        } else {
          // The Window Controls Overlay feature is not available.
        };
         */

  // (存在兼容性) XRSystem对象
  xr: { ondevicechange: null }
  /* WebXR 是否可用
        if ("xr" in window.navigator) {
            //WebXR can be used!
        } else {
            //WebXR isn't available
        }
       */
};

// 打印存在，将放弃，不推荐使用----------------------------------------
const navigatorUp = {
  // (已弃用)返回真实的产品名称,出于兼容性考虑，都返回 "Mozilla"
  appCodeName: "Mozilla",

  //(已弃用)返回真实的浏览器名称,出于兼容性考虑，都返回 "Netscape"
  appName: "Netscape",

  //(已弃用)返回正确的浏览器版本
  appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",

  // (已弃用) 返回用户的 Do Not Track 设置，指示用户是否请求网站和广告商不要跟踪它们。
  doNotTrack: null,
  /* 
        值，即"1" | "0" | "unspecified"。
        */

  // (已弃用) MimeTypeArray,一个类数组对象，查看如pdf文件，改用pdfViewerEnabled
  mimeTypes: {
    //MimeType类型，0: MimeType, 1: MimeType, application / pdf: MimeType, text / pdf: MimeType, length: 2,
    // 原型方法
    item: item(),
    length: 2,
    namedItem: namedItem()
  },
  /* MimeTypeArray其中包含MimeType代表浏览器识别和支持的 MIME 类型的对象列表。
        可以查询该数组以获取有关用于处理指定类型文件的已启用插件的信息。
        返回对象的命名属性不可枚举（除了非常旧的浏览器版本）。
        if ('application/pdf' in navigator.mimeTypes) {
          // browser supports inline viewing of PDF files.

          const { description, suffixes } = navigator.mimeTypes['application/pdf'];
          console.log(`Description: ${description}, Suffix: ${suffixes}`);
          // expected output: Description: Portable Document Format, Suffix: pdf
        }
        */

  // （弃用）返回一个字符串，标识用户浏览器运行的平台 "MacIntel", "Win32", "Linux x86_64", "Linux x86_64"。
  platform: "Win32",

  //(已弃用)返回真实的产品名称,出于兼容性考虑，都返回 "Gecko"
  product: "Gecko",

  //(已弃用)返回当前浏览器的内部版本号,出于兼容性考虑，都返回 "Gecko",在 Apple Safari 和 Google Chrome 上，此属性始终返回20030107。
  productSub: "20030107",

  // （弃用） 返回代理供应商，" Google Inc."、" Apple Computer, Inc." 或（在 Firefox 中）空字符串。
  vendor: "Google Inc.",

  // （弃用）二级供应商，始终为空
  vendorSub: ""
};

// 文档存在，但打印没有--------------------------------------------------
const navigatorNull = {
  activeVRDisplays, //非标准，弃用
  buildID, //非标准，弃用
  contacts, //存在兼容性，返回一个ContactsManager接口,从联系人选择条目
  globalPrivacyControl,
  //非标准，存在兼容性，属性返回用户的全局隐私控制设置。此设置表明用户是否同意网站或服务出售或与第三方共享他们的个人信息。
  /* Sec-GPC 值	意义
            1个	        用户不同意出售或共享他们的数据。
            0	        用户确实同意出售或共享他们的数据。
            未指定      用户尚未就其数据提供同意。
        console.log(navigator.globalPrivacyControl); */
  oscpu //弃用, 属性返回一个标识当前操作系统的字符串。
};

// 文档-其他实例方法--------
/* navigator.canShare */

// 是否能共享
canShare();
/* canShare():boolean  canShare(data):boolean  通常 data :{url:string, text:string, title:string, files:{file}[]} */

let testShare = { someNewProperty: "Data to share" };
let shareData = {
  title: "MDN",
  text: "Learn web development on MDN!",
  url: "https://developer.mozilla.org",
  someNewProperty: "Data to share"
};
navigator.canShare(shareData); //true | false

// 清除当前应用程序图标上的徽章nothing。该值nothing表示当前没有设置badge，badge状态为cleared。
实验性的;
clearAppBadge();
navigator.clearAppBadge();

// 系统电池的信息，受权限策略影响
getBattery();
let batteryIsCharging = false;

navigator.getBattery().then(battery => {
  batteryIsCharging = battery.charging;

  battery.addEventListener("chargingchange", () => {
    batteryIsCharging = battery.charging;
  });
});

// 游戏手柄都连接到设备，受权限策略影响
getGamepads();
window.addEventListener("gamepadconnected", e => {
  const gp = navigator.getGamepads()[e.gamepad.index];
  console.log(
    `Gamepad connected at index ${gp.index}: ${gp.id} with ${gp.buttons.length} buttons, ${gp.axes.length} axes.`
  );
});

// 提示用户允许使用最多一个视频输入设备,getUserMedia(constraints, successCallback, errorCallback):void
弃用, //使用 navigator.mediaDevices.getUserMedia()
  getUserMedia();
function successCallback(stream) {
  const video = document.querySelector("video");
  video.srcObject = stream;
  video.onloadedmetadata = e => {
    // Do something with the video here.
  };
}

// 新方法修改为：
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

if (navigator.getUserMedia) {
  navigator.getUserMedia(
    { audio: true, video: { width: 1280, height: 720 } },
    stream => {
      const video = document.querySelector("video");
      video.srcObject = stream;
      video.onloadedmetadata = e => {
        video.play();
      };
    },
    err => {
      console.error(`The following error occurred: ${err.name}`);
    }
  );
} else {
  console.log("getUserMedia not supported");
}

// 返回连接到计算机的任何可用 VR 显示器 Navigator的对象数组
非标 - 完全弃用;
getVRDisplays();

// 始终返回 false。
弃用;
javaEnabled();
if (window.navigator.javaEnabled()) {
  // code will never be executed; the condition is always false
}

// Navigator接口的扩展
非标;
msLaunchUri();
/* 语法：
        msLaunchUri(uri)
        msLaunchUri(uri, successCallback)
        msLaunchUri(uri, successCallback, noHandlerCallback)
 */

// 允许网站注册其打开或处理特定 URL 方案（又名协议）的能力。
registerProtocolHandler();
/* 语法
        registerProtocolHandler(scheme, url)
        registerProtocolHandler(scheme, url, title)
*/

// 可用于访问特定的媒体密钥系统，创建用于解密媒体流的密钥
requestMediaKeySystemAccess();

// 回一个Promise表示访问用户系统上的 MIDI 设备的请求
requestMIDIAccess();
navigator.requestMIDIAccess().then(access => {
  // Get lists of available MIDI controllers
  const inputs = access.inputs.values();
  const outputs = access.outputs.values();
  // …
});

// 将包含少量数据 的HTTP POST请求异步发送到 Web 服务器。
sendBeacon();
/* 语法：sendBeacon(url)   sendBeacon(url, data) */
/* url：将接收数据的地址（可用相对，也可以绝对） data：要发送的数据的对象*/

// 应用程序关联的图标上设置一个徽章
实验性的;
setAppBadge();
/* 值传递给方法，这将被设置为徽章的值。否则，徽章将显示为点或平台定义的其他指示符。
   setAppBadge()     setAppBadge(contents)    contents 选修的
   Anumber将用作徽章的值。如果contents是0，则将显示不包含计数的徽章。
   */

// 调用设备的本机共享机制来共享文本、URL 或文件等数据
share();
/* 可用的共享目标取决于设备，但可能包括剪贴板、联系人和电子邮件应用程序、网站、蓝牙等 */

// 总是返回 false，存在仅为保持兼容性
弃用;
taintEnabled();

// 使设备上的振动硬件产生脉冲（震动），用户必须在此页面，如游戏匹配，只有在页面上才会，在后台不会有效果
vibrate();
/* 如果设备不支持振动，则此方法无效。如果在调用此方法时振动模式已经在进行中，则先前的模式将停止并开始新的模式。
参数：
测是否可用：目前，只有Chrome和Firefox的Android平台最新版本支持它。 */
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
if (navigator.vibrate) {
  // 支持
}
navigator.vibrate(200); // 单个值为在多少ms内交替震动暂停，传递值0、空数组或包含全零的数组将取消
const boolean = navigator.vibrate([100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30, 100]); //'SOS' 莫尔斯-震动.
// 偶数位置的数组成员表示振动的毫秒数，奇数位置的数组成员表示等待的毫秒数。
// 上述：震动100ms，等待30ms，在震动100ms，以此类推
