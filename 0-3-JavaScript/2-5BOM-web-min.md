## BOM-Window 

![img](./md-min-BOM-window.jpg)

Window ：顶层对象集合

每个独立的浏览器窗口都会产生一个window对象。

是JavaScript的全局对象，可以访问全局函数和全局变量。

| 集合     | 描述                                                         |
| :------- | :----------------------------------------------------------- |
| frames[] | 返回窗口中所有命名的框架。该集合是 Window 对象的数组，每个 Window 对象在窗口中含有一个框架或 iframe。属性 frames.length 存放数组 frames[] 中含有的元素个数。注意，frames[] 数组中引用的框架可能还包括框架，它们自己也具有 frames[] 数组。 |

## Window 对象属性

| 属性                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| window                                                       | window 属性等价于 self 属性，它包含了对窗口自身的引用。默认顶层省略 |
| screen                                                       | 对 Screen 对象的只读引用。请参数 Screen 对象。               |
| navigator                                                    | 对 Navigator 对象的只读引用。请参数 [Navigator 对象。        |
| history                                                      | 对 History 对象的只读引用。请参数 History 对象。             |
| location                                                     | 用于窗口或框架的 Location 对象。请参阅 Location 对象。       |
| document                                                     | 对 Document 对象的只读引用。(获取整个网页)                   |
| innerHeight                                                  | 返回窗口的文档显示区的高度。                                 |
| innerWidth                                                   | 返回窗口的文档显示区的宽度。获取浏览器窗口的内部宽度(可视宽度 展示页面的内容区宽度)。 |
| outerHeight                                                  | 返回窗口的外部高度，包含工具条与滚动条，获取浏览器窗口的内部高度（展示页面的内容区宽度）。获取浏览器宽度。包括边框栏。 |
| outerWidth                                                   | 返回窗口的外部宽度，包含工具条与滚动条。获取浏览器高度，包括边框栏。 |
| [closed](https://www.runoob.com/jsref/prop-win-closed.html)  | 返回窗口是否已被关闭。                                       |
| [defaultStatus](https://www.runoob.com/jsref/prop-win-defaultstatus.html) | 设置或返回窗口状态栏中的默认文本。                           |
| [frames](https://www.runoob.com/jsref/prop-win-frames.html)  | 返回窗口中所有命名的框架。该集合是 Window 对象的数组，每个 Window 对象在窗口中含有一个框架。 |
| [localStorage](https://www.runoob.com/jsref/prop-win-localstorage.html) | 在浏览器中存储 key/value 对。没有过期时间。                  |
| [length](https://www.runoob.com/jsref/prop-win-length.html)  | 设置或返回窗口中的框架数量。                                 |
| [name](https://www.runoob.com/jsref/prop-win-name.html)      | 设置或返回窗口的名称。                                       |
| [opener](https://www.runoob.com/jsref/prop-win-opener.html)  | 返回对创建此窗口的窗口的引用。                               |
| [pageXOffset](https://www.runoob.com/jsref/prop-win-pagexoffset.html) | 设置或返回当前页面相对于窗口显示区左上角的 X 位置。          |
| [pageYOffset](https://www.runoob.com/jsref/prop-win-pagexoffset.html) | 设置或返回当前页面相对于窗口显示区左上角的 Y 位置。          |
| [parent](https://www.runoob.com/jsref/prop-win-parent.html)  | 返回父窗口。                                                 |
| [screenLeft](https://www.runoob.com/jsref/prop-win-screenleft.html) | 返回相对于屏幕窗口的x坐标                                    |
| [screenTop](https://www.runoob.com/jsref/prop-win-screenleft.html) | 返回相对于屏幕窗口的y坐标                                    |
| [screenX](https://www.runoob.com/jsref/prop-win-screenx.html) | 返回相对于屏幕窗口的x坐标                                    |
| [sessionStorage](https://www.runoob.com/jsref/prop-win-sessionstorage.html) | 在浏览器中存储 key/value 对。 在关闭窗口或标签页之后将会删除这些数据。 |
| [screenY](https://www.runoob.com/jsref/prop-win-screenx.html) | 返回相对于屏幕窗口的y坐标                                    |
| [self](https://www.runoob.com/jsref/prop-win-self.html)      | 返回对当前窗口的引用。等价于 Window 属性。                   |
| [status](https://www.runoob.com/jsref/prop-win-status.html)  | 设置窗口状态栏的文本。                                       |
| [top](https://www.runoob.com/jsref/prop-win-top.html)        | 返回最顶层的父窗口。                                         |
| screenLeftscreenTopscreenXscreenY                            | 只读整数。声明了窗口的左上角在屏幕上的的 x 坐标和 y 坐标。IE、Safari 和 Opera 支持 screenLeft 和 screenTop，而 Firefox 和 Safari 支持 screenX 和 screenY。 |

## Window 对象方法

 

| 方法                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| 弹窗相关--alert()                                            | 显示带有一段消息和一个确认按钮的警告框。                     |
| 弹窗相关--prompt()                                           | 显示用户输入-提示对话框。用户点击确认，取消返回null          |
| 弹窗相关--confirm()                                          | 显示对话框。参数要显示的消息，返回值boolean，点击确定为true，取消或关闭为false |
| 打开关闭相关--open()                                         | 打开一个新的浏览器窗口或查找一个已命名的窗口。返回新窗口的信息（类似超链接新开页面） |
| 打开关闭相关--close()                                        | 关闭浏览器窗口。可以设置open的信息作为关闭                   |
| 定时器相关--setInterval(fun,time)                            | 按照指定的周期（以毫秒计）来调用函数或计算表达式。返回值编号 |
| 定时器相关--clearInterval()                                  | 取消(暂停)由 setInterval() 设置的 timeout。，参数定时器编号  |
| 延时器相关--setTimeout()                                     | 在指定的毫秒数后调用函数或计算表达式,(一次性延时执行)        |
| 延时器相关--clearTimeout()                                   | 取消由 setTimeout() 方法设置的 timeout。                     |
| [atob()](https://www.runoob.com/jsref/met-win-atob.html)     | 解码一个 base-64 编码的字符串。                              |
| [btoa()](https://www.runoob.com/jsref/met-win-btoa.html)     | 创建一个 base-64 编码的字符串。                              |
| [blur()](https://www.runoob.com/jsref/met-win-blur.html)     | 把键盘焦点从顶层窗口移开。                                   |
| [createPopup()](https://www.runoob.com/jsref/met-win-createpopup.html) | 创建一个 pop-up 窗口。                                       |
| [focus()](https://www.runoob.com/jsref/met-win-focus.html)   | 把键盘焦点给予一个窗口。                                     |
| [getSelection](https://www.runoob.com/jsref/met-win-getselection.html)() | 返回一个 Selection 对象，表示用户选择的文本范围或光标的当前位置。 |
| [getComputedStyle()](https://www.runoob.com/jsref/jsref-getcomputedstyle.html) | 获取指定元素的 CSS 样式。                                    |
| [matchMedia()](https://www.runoob.com/jsref/met-win-matchmedia.html) | 该方法用来检查 media query 语句，它返回一个 MediaQueryList对象。 |
| [moveBy()](https://www.runoob.com/jsref/met-win-moveby.html) | 可相对窗口的当前坐标把它移动指定的像素。                     |
| [moveTo()](https://www.runoob.com/jsref/met-win-moveto.html) | 把窗口的左上角移动到一个指定的坐标。                         |
| [print()](https://www.runoob.com/jsref/met-win-print.html)   | 打印当前窗口的内容。                                         |
| [resizeBy()](https://www.runoob.com/jsref/met-win-resizeby.html) | 按照指定的像素调整窗口的大小。                               |
| [resizeTo()](https://www.runoob.com/jsref/met-win-resizeto.html) | 把窗口的大小调整到指定的宽度和高度。                         |
| scroll()                                                     | 已废弃。 该方法已经使用了 [scrollTo()](https://www.runoob.com/jsref/met-win-scrollto.html) 方法来替代。 |
| [scrollBy()](https://www.runoob.com/jsref/met-win-scrollby.html) | 按照指定的像素值来滚动内容。                                 |
| [scrollTo()](https://www.runoob.com/jsref/met-win-scrollto.html) | 把内容滚动到指定的坐标。                                     |
| [stop()](https://www.runoob.com/jsref/met-win-stop.html)     | 停止页面载入。                                               |
| [postMessage()](https://www.runoob.com/jsref/met-win-postmessage.html) | 安全地实现跨源通信。                                         |



## History 对象属性

| 属性   | 说明                                             |
| :----- | :----------------------------------------------- |
| length | 返回历史列表中的网址数，多次打开一个就算多次记录 |

## History 对象方法

| 方法      | 说明                                                         |
| :-------- | :----------------------------------------------------------- |
| back()    | 加载 history 列表中的前(上)一个 URL                          |
| forward() | 加载 history 列表中的下一个 URL                              |
| go()      | 加载 history 列表中的某个具体页面有参数当前为0，负为上几个（之前的记录），正为下几个 |



## Location 对象属性（重点）

| 属性                                                         | 描述                                                  |
| :----------------------------------------------------------- | :---------------------------------------------------- |
| href                                                         | 返回正在展示的完整URL                                 |
| search                                                       | 返回一个URL的查询部分(？号后面的部分，重要，用于传参) |
| protocol                                                     | 返回一个URL协议http部分                               |
| host                                                         | 返回一个URL的主机名(IP)和端口                         |
| hostname                                                     | 返回URL的主机名                                       |
| port                                                         | 返回一个URL服务器使用的端口号                         |
| [hash](https://www.runoob.com/jsref/prop-loc-hash.html)      | 返回一个URL的锚部分                                   |
| [pathname](https://www.runoob.com/jsref/prop-loc-pathname.html) | 返回的URL路径名。                                     |

## Location 对象方法

| 方法      | 说明                                                         |
| :-------- | :----------------------------------------------------------- |
| assign()  | 载入一个新的文档（会创建历史记录）                           |
| reload()  | 重新载入当前文档（刷新）                                     |
| replace() | 用新的文档替换当前文档，同assign()，但是不会生成新的历史记录，无法back返回 |



## Screen 对象属性

screen.orientation.angle==0   //竖屏
screen.orientation.angle==90   //横屏

| 属性                                                         | 描述                                                       |
| :----------------------------------------------------------- | :--------------------------------------------------------- |
| orientation.angle                                            | 获取屏幕角度信息，0是竖直，90水平,Screen.orientation.angle |
| [availHeight](https://www.w3school.com.cn/jsref/prop_screen_availheight.asp) | 返回显示屏幕的高度 (除 Windows 任务栏之外)。               |
| [availWidth](https://www.w3school.com.cn/jsref/prop_screen_availwidth.asp) | 返回显示屏幕的宽度 (除 Windows 任务栏之外)。               |
| [bufferDepth](https://www.w3school.com.cn/jsref/prop_screen_bufferdepth.asp) | 设置或返回调色板的比特深度。                               |
| [colorDepth](https://www.w3school.com.cn/jsref/prop_screen_colordepth.asp) | 返回目标设备或缓冲器上的调色板的比特深度。                 |
| [deviceXDPI](https://www.w3school.com.cn/jsref/prop_screen_devicexdpi.asp) | 返回显示屏幕的每英寸水平点数。                             |
| [deviceYDPI](https://www.w3school.com.cn/jsref/prop_screen_deviceydpi.asp) | 返回显示屏幕的每英寸垂直点数。                             |
| [fontSmoothingEnabled](https://www.w3school.com.cn/jsref/prop_screen_fontsmoothingenabled.asp) | 返回用户是否在显示控制面板中启用了字体平滑。               |
| [height](https://www.w3school.com.cn/jsref/prop_screen_height.asp) | 返回显示屏幕的高度。                                       |
| [logicalXDPI](https://www.w3school.com.cn/jsref/prop_screen_logicalxdpi.asp) | 返回显示屏幕每英寸的水平方向的常规点数。                   |
| [logicalYDPI](https://www.w3school.com.cn/jsref/prop_screen_logicalydpi.asp) | 返回显示屏幕每英寸的垂直方向的常规点数。                   |
| [pixelDepth](https://www.w3school.com.cn/jsref/prop_screen_pixeldepth.asp) | 返回显示屏幕的颜色分辨率（比特每像素）。                   |
| [updateInterval](https://www.w3school.com.cn/jsref/prop_screen_updateinterval.asp) | 设置或返回屏幕的刷新率。                                   |
| [width](https://www.w3school.com.cn/jsref/prop_screen_width.asp) | 返回显示器屏幕的宽度。                                     |





Navigator 对象集合

| 集合      | 描述                                                         |
| :-------- | :----------------------------------------------------------- |
| plugins[] | 返回对文档中所有嵌入式对象的引用。该集合是一个 Plugin 对象的数组，其中的元素代表浏览器已经安装的插件。Plug-in 对象提供的是有关插件的信息，其中包括它所支持的 MIME 类型的列表。虽然 plugins[] 数组是由 IE 4 定义的，但是在 IE 4 中它却总是空的，因为 IE 4 不支持插件和 Plugin 对象。 |

## Navigator 对象属性

| 属性                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| userAgent                                                    | 返回由客户机发送服务器的 user-agent 头部的值。（获取浏览器平台信息，可被代理伪造，不可信） |
| [appCodeName](https://www.w3school.com.cn/jsref/prop_nav_appcodename.asp) | 返回浏览器的代码名。                                         |
| [appMinorVersion](https://www.w3school.com.cn/jsref/prop_nav_appminorversion.asp) | 返回浏览器的次级版本。                                       |
| [appName](https://www.w3school.com.cn/jsref/prop_nav_appname.asp) | 返回浏览器的名称。                                           |
| [appVersion](https://www.w3school.com.cn/jsref/prop_nav_appversion.asp) | 返回浏览器的平台和版本信息。                                 |
| [browserLanguage](https://www.w3school.com.cn/jsref/prop_nav_browserlanguage.asp) | 返回当前浏览器的语言。                                       |
| [cookieEnabled](https://www.w3school.com.cn/jsref/prop_nav_cookieenabled.asp) | 返回指明浏览器中是否启用 cookie 的布尔值。                   |
| [cpuClass](https://www.w3school.com.cn/jsref/prop_nav_cpuclass.asp) | 返回浏览器系统的 CPU 等级。                                  |
| [onLine](https://www.w3school.com.cn/jsref/prop_nav_online.asp) | 返回指明系统是否处于脱机模式的布尔值。                       |
| [platform](https://www.w3school.com.cn/jsref/prop_nav_platform.asp) | 返回运行浏览器的操作系统平台。                               |
| [systemLanguage](https://www.w3school.com.cn/jsref/prop_nav_systemlanguage.asp) | 返回 OS 使用的默认语言。                                     |
| [userLanguage](https://www.w3school.com.cn/jsref/prop_nav_userlanguage.asp) | 返回 OS 的自然语言设置。                                     |

## Navigator 对象方法

| 方法                                                         | 描述                                      |
| :----------------------------------------------------------- | :---------------------------------------- |
| [javaEnabled()](https://www.runoob.com/jsref/met-nav-javaenabled.html) | 指定是否在浏览器中启用Java                |
| [taintEnabled()](https://www.runoob.com/jsref/met-nav-taintenabled.html) | 规定浏览器是否启用数据污点(data tainting) |



## Console 对象方法

Console 对象提供了访问浏览器调试模式的信息到控制台。

| 方法                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [assert()](https://www.w3school.com.cn/jsref/met_console_assert.asp) | 如果 assertion(断言) 为 false，则将错误消息写入控制台。      |
| [clear()](https://www.w3school.com.cn/jsref/met_console_clear.asp) | 清空控制台。                                                 |
| [count()](https://www.w3school.com.cn/jsref/met_console_count.asp) | 记录这个对 count() 的特定调用已被调用的次数。                |
| [error()](https://www.w3school.com.cn/jsref/met_console_error.asp) | 将错误消息输出到控制台。                                     |
| [group()](https://www.w3school.com.cn/jsref/met_console_group.asp) | 在控制台中创建新的分组。一个完整的信息分组以 console.group() 开始，console.groupEnd() 结束 |
| [groupCollapsed()](https://www.w3school.com.cn/jsref/met_console_groupcollapsed.asp) | 在控制台中创建新的行内组。但是新组是折叠创建的。用户需要使用按钮将其展开。 |
| [groupEnd()](https://www.w3school.com.cn/jsref/met_console_groupend.asp) | 退出控制台中的当前分组。                                     |
| [info()](https://www.w3school.com.cn/jsref/met_console_info.asp) | 将信息性消息输出到控制台。                                   |
| log()                                                        | 将消息输出到控制台。                                         |
| [table()](https://www.w3school.com.cn/jsref/met_console_table.asp) | 将表格式的数据显示为表。                                     |
| [time()](https://www.w3school.com.cn/jsref/met_console_time.asp) | 启动计时器（可跟踪操作需要多长时间）。                       |
| [timeEnd()](https://www.w3school.com.cn/jsref/met_console_timeend.asp) | 停止以前由 console.time() 启动的计时器。                     |
| [trace()](https://www.w3school.com.cn/jsref/met_console_trace.asp) | 将堆栈跟踪输出到控制台。                                     |
| [warn()](https://www.w3school.com.cn/jsref/met_console_warn.asp) | 将警告消息输出到控制台。                                     |

## Geolocation 对象属性

| 属性                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [coordinates](https://www.w3school.com.cn/jsref/prop_geo_coordinates.asp) | 返回设备在地球上的位置和海拔。                               |
| [position](https://www.w3school.com.cn/jsref/prop_geo_position.asp) | 返回在给定时间相关设备的位置。                               |
| positionError                                                | 返回使用地理定位设备时发生错误的原因。                       |
| positionOptions                                              | 描述包含选项属性的对象，该对象作为 Geolocation.getCurrentPosition() 和 Geolocation.watchPosition() 的参数传递。 |

## Geolocation 对象方法

| 方法                 | 描述                                                         |
| :------------------- | :----------------------------------------------------------- |
| clearWatch()         | 注销先前使用 Geolocation.watchPosition() 安装的位置/错误监视处理程序。 |
| getCurrentPosition() | 返回设备的当前位置。                                         |
| watchPosition()      | 返回监听 ID 值，然后将其传递给 Geolocation.clearWatch() 方法即可用于注销处理程序。 |



## Storage 对象属性和方法

| 属性/方法                                                    | 描述                                         |
| :----------------------------------------------------------- | :------------------------------------------- |
| [key(*n*)](https://www.w3school.com.cn/jsref/met_storage_key.asp) | 返回存储中第 n 个键的名称。                  |
| [length](https://www.w3school.com.cn/jsref/prop_storage_length.asp) | 返回存储在 Storage 对象中的数据项的数量。    |
| [getItem(*keyname*)](https://www.w3school.com.cn/jsref/met_storage_getitem.asp) | 返回指定键名的值。                           |
| [setItem(*keyname*, *value*)](https://www.w3school.com.cn/jsref/met_storage_setitem.asp) | 将键添加到存储中，或更新键的值（若已存在）。 |
| [removeItem(*keyname*)](https://www.w3school.com.cn/jsref/met_storage_removeitem.asp) | 从存储中删除键。                             |
| [clear()](https://www.w3school.com.cn/jsref/met_storage_clear.asp) | 清空存储中的所有键。                         |

## Web Storage API 相关页面

| 属性                                                         | 描述                                                     |
| :----------------------------------------------------------- | :------------------------------------------------------- |
| [window.localStorage](https://www.w3school.com.cn/jsref/prop_win_localstorage.asp) | 允许将键/值对保存在Web浏览器中。存储没有到期日期的数据。 |
| [window.sessionStorage](https://www.w3school.com.cn/jsref/prop_win_sessionstorage.asp) | 允许将键/值对保存在 Web 浏览器中。为会话存储数据。       |

