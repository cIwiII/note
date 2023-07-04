
- note1：node_modues/.bin文件夹下，对于一个npm包，有两个可执行文件，

没有后缀名的是是对应unix系的shell脚本，

.cmd文件对应的是windows bat脚本，内容都是用node执行一个js文件

- note2：地址（作者只写了两篇文章）：https://www.ruanyifeng.com/blog/2016/10/npm_scripts.html

- note2：npm 脚本就是 Shell 脚本，任何可执行文件都可以写在里面，node是Shell是一部分，
- npm 脚本的退出码，也遵守 Shell 脚本规则。如果退出码不是0，npm 就认为这个脚本执行失败。
    - npm 脚本的退出码，也遵守 Shell 脚本规则。如果退出码不是0，npm 就认为这个脚本执行失败。
    - 通配符（*表示任意文件名，**表示任意一层子目录）
    - 传参使用 --  --参数
    - 执行顺序
        - 并行执行（即同时的平行执行，使用&符号） $ npm run script1.js & npm run script2.js
        - 继发执行（即只有前一个任务成功，才执行下一个任务），可以使用&&符号。
        - 这两个符号是 Bash 的功能。此外，还可以使用 node 的任务管理模块：script-runner、npm-run-all、redrun。
    - 默认值："start": "node server.js"，"install": "node-gyp rebuild" 不用定义（前提是存在相关文件）
    
note3："test": "mocha test" 指的是 "test": "./node_modules/.bin/mocha test"





### shell相关


### cmd文件
```js
@ECHO off
SETLOCAL
CALL :find_dp0  //不停止父批处理程序,调用另一个批处理程序。dp 是驱动器+路径,0:bat 文件本身的路径

IF EXIST "%dp0%\node.exe" ( //检查当前批处理文件的同级目录下，是否存在 node.exe 文件。
  SET "_prog=%dp0%\node.exe"
) ELSE (
  SET "_prog=node"
  SET PATHEXT=%PATHEXT:;.JS;=;%  //将系统环境变量中的PATHEXT的扩展名中的JS替换掉
)

"%_prog%"  "%dp0\..\webpack\bin\webpack.js" %*  
ENDLOCAL
EXIT /b %errorlevel%
:find_dp0
SET dp0=%~dp0  //前面已经调用，此处实现，把当前批处理文件所在的绝对路径，设置给批处理文件执行时临时声明的环境变量 dp0
EXIT /b
```

#### echo回显
```html
- @echo回显概念：echo并不是DOS程序中的，
    而是DOS批处理中的，执行批处理时，
    执行的命令是否显示在终端，
    不显示时使用echo off，
    但echo off本身也是命令，
    如果也不需要显示前面加@，


- 批处理概念：当年的DOS，所有操作都用键盘命令来完成，
    当你每次都要输入相同的命令时，
    可以把这么多命令存为一个批处理，
    从此以后，只要运行这个批处理，
    就相当于打了几行、几十行命令。

```
```json
@echo off
关闭回显

@echo on
打开回显

pause
使显示器停下，并显示“请按任意键继续_ _ _”

例：
@echo off
@echo hello!
pause

hello!
请按任意键继续_ _ _

@echo on
@echo hello!
pause

hello!
C:Desktop>pause
请按任意键继续_ _ _

```
#### SETLOCAL

Setlocal命令将启动批处理文件中环境变量的本地化。本地化将持续到出现匹配的 endlocal 命令或者到达批处理文件结尾为止。

语法

setlocal {enableextension | disableextensions} {enabledelayedexpansion | disabledelayedexpansion}

参数

enableextension

启用命令扩展，直到出现匹配的 endlocal 命令，无论 setlocal 命令之前的设置如何。

disableextensions

禁用命令扩展，直到出现匹配的 endlocal 命令，无论 setlocal 命令之前的设置如何。

注1：在XP中并没有看到命令扩展的使用.

enabledelayedexpansion

启用变量延迟，直到出现匹配的 endlocal 命令，无论 setlocal 命令之前的设置如何。

disabledelayedexpansion

禁用变量延迟，直到出现匹配的 endlocal 命令，无论 setlocal 命令之前的设置如何。

注意1：关于变量延迟的使用请参照《变量延迟（上）》

使用Setlocal让变量本地化

运行批处理文件时使用 setlocal 更改环境变量。运行 setlocal 后所做的环境更改是批处理文件的本地更改。Cmd.exe 在遇到 endlocal 命令或者到达批处理文件的结尾时将恢复上一次的设置。

```js
示例1

@echo off

setlocal path=g:\programs\superapp;%path%

call superapp>c:\superapp.out

endlocal

start notepad c:\superapp.out

实例1：

@echo off

set name=robin

echo before setLocal,name is:%name%

setlocal enableextensions

set name=hb

echo In the set local:name is :%name%

endlocal

echo after end setLocal name is:%name%

pause
```

注意1：在批处理程序中可以包含多个 setlocal 或 endlocal 命令（即嵌套命令），但是最多只能嵌套32层，否则就会提示 “以达到最大递归层”的错误信息。

注意2：您在脚本或批处理文件外使用 setlocal 时，将没有效果。

SETLOCAL:
开始批处理文件中环境改动的本地化操作。在执行 SETLOCAL 之后所做的环境改动只限于批处理文件。要还原原先的设置，必须执行 ENDLOCAL。

在批处理文件中开始环境变量的本地化。 本地化一直持续到遇到匹配的 endlocal 命令或到达批处理文件的末尾。

更多细节见 windows  文档。

#### CALL
在不停止父批处理程序的情况下从另一个调用一个批处理程序。 call 命令接受标签作为调用的目标

CALL :find_dp0
魔法变量 %n 包含用于调用文件的参数：%0 是 bat 文件本身的路径，%1 是后面的第一个参数，%2 是第二个，依此类推。

由于参数通常是文件路径，所以有一些额外的语法来提取部分路径。 ~d 是驱动器，~p 是路径（不含驱动器），~n 是文件名。 它们可以组合，所以 ~dp 是驱动器+路径。

因此 %~dp0 在 bat 中非常有用：它是执行 bat 文件所在的文件夹。

您还可以获得有关文件的其他类型的元信息：~t 是时间戳，~z 是大小。

dp0 意思是批处理文件所在的驱动器和路径。

第五行调用的 :find_dp0, 实现在第18行。

set: 设置环境变量。
SET dp0=%~dp0

意思是把当前批处理文件所在的绝对路径，设置给批处理文件执行时临时声明的环境变量 dp0

IF EXIST “%dp0%\node.exe”
检查当前批处理文件的同级目录下，是否存在 node.exe 文件。

### package.json-scripts命令
- 原地址 https://www.thedailychina.news/showArticle?main_id=da413e4f2bf5e5a9d73fa80ff58fb532
//package.json
```json

{
  "scripts":{
     "dev":"webpack-dev-server --inline --progress --config build/webpack.dev.conf.js"
  }
}
```
npm run dev：执行内容，
- 如windows下：实际上调用的是 node_modules下的 .bin 文件夹下的 npm.cmd 的批处理命令

如上命令，找到文件node_module\.bin\webpack-dev-server.cmd //(windows命令脚本)

cmd文件内容如下（旧版）针对webpack-dev-server.cmd的批处理程序进行解析说明：
```cmd
rem GOTO是一个流程控制转向命令，用于控制批处理中的命令执行流程，这里的含义是指直接跳过GOTO start与 :start 之间的命令
GOTO start

:find_dp0

rem set用来创建、设置、查看或删除环境变量
rem ~为扩展符号，它和不同的字母结合时所代表的含义不同，%0 代表批处理文件名本身，而 %~dp0 则表示了 %0 文件的路径信息
SET dp0=%~dp0
EXIT /b

rem :start 以冒号开头并紧跟标识符的单独一行，作为GOTO start中的start位置标记
:start


rem setlocal命令在批处理程序运行时设置自身的临时变量环境，并且不会影响到系统的变量环境设置
SETLOCAL


rem call在这里调用的是指定标号处后面的所有命令，这里的 :find_dp0 也是作为一种 call 调用的标记，上面的 :find_dp0 相呼应
CALL :find_dp0

rem 批处理文件中使用变量时，应该在变量名前后分别加上一个百分号，否则无法正确使用变量
rem EXIST语句可与IF语句结合起来使用，用来检验当前子目录或当前磁盘上某些文件是否存在
IF EXIST "%dp0%\node.exe" (
  SET "_prog=%dp0%\node.exe") ELSE (
  SET "_prog=node"
  SET PATHEXT=%PATHEXT:;.JS;=;%)rem setlocal必须与endlocal命令联合使用，endlocal命令用于结束临时变量环境并且回到系统变量环境
rem "<"、">"、">>" 是批处理程序中的3个重定向符号，用于控制数据的输入或输出方式。"<" 符号的右边是数据源，左边代表数据目的地；">" 及 ">>" 符号的左边是数据源，">" 会替换目的数据，而">>" 符号只是将数据源添加到目标数据后

endLocal & goto #_undefined_# 2>NUL || title %COMSPEC% & "%_prog%"  "%dp0%\..\webpack\bin\webpack.js" %*rem 关键是endLocal后面的这一部分是什么意思
rem &为组合命令，顺序执行多条命令，不管命令是否执行成功
rem 2>NUL 是屏蔽操作失败显示的信息，如果成功依旧显示
rem || 连接两个命令时，仅当符号前面的命令执行失败后，才继续执行符号后的命令
rem 批处理title命令用于设置控制台窗口中显示的标题
rem >NUL 表示前面命令产生的信息发送给空设备，避免直接显示在命令行窗口
rem %* 表示命令行中的所有参数，当要将命令从批处理文件转发到另一个程序时会用到
```
### node环境下调试webpack的详细步骤：
- ①在package.json中配置npm scripts，如下：
```json

{
  "scripts":{
    "origin":"node --inspect-brk=9229 ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --progress --config build/webpack.dev.conf.js"
  }
}
```

### package发现
npm run dev是怎么解析package.json并且找到 scripts 下 dev 

npm run 实际上是衔接 node 和 webpack 的连接点

通过 npm.cmd 的执行达到的目的就是执行 node 项目根路径\node_modules\npm\bin\npm-cli.js run dev 。

npm run dev 传递这三个参数分别就是：

项目根路径\node_modules\npm\bin\npm-cli.js

run

dev