来源背景：
https://blog.csdn.net/qq_38157825/article/details/115727874（Node.js文件系统fs扩展fs-extra）



### fs-extra

概念:fs-extra 是fs 的扩展，继承了 fs 所有方法并为这些方法添加了 promise 语法,完全替代了fs模块

作用，比如rename方法，传入原始路径和目标路径就可以修改文件名，甚至还可以实现文件移动的功能。
api/方法
```js
//扩展方法
copy
emptyDir
ensureFile
ensureDir
ensureLink
ensureSymlink
mkdirp
mkdirs
move
outputFile
outputJson
pathExists
readJson
remove
writeJson

```

- `readFile(xgmPc)`:async异步，读取文件
    - 参数1： （不可省略）读取文件的存放路径
    - 参数2： 读取文件时候采用的编码格式 一般默认认定 utf8,可省略，省略后读出的文件就是buffer数据格式
    - 参数3： （不可省略）回调函数，拿到读取失败和成功的结果 err  dataStr
```js
fs.readFile('./files/11.txt','utf-8',function(err,dataStr){

  // 打印失败的结果

  // 如果读取成功 则err值为 null

  // 如果读取失败 则err的值为 错误对象 dataStr的值为undefined

  console.log(err)

  console.log('-----');

  // 打印成功的结果

  console.log(dataStr);
  if(err){
        return console.log('读取文件失败'+err.message);
    }
    else if{
        console.log('读取文件成功'+dataStr);
    }

})

```
- `outputFile`(xgmPc)：
    - outputFile(file:string, data:string|Buffer|Uint8Array, options:String|object, callback:func)
写入文件数据，如果父级目录不存在，则创建它。file 必须是文件路径，不允许使用缓冲区或文件描述符，
    - outputFile()函数将数据写入给定文件。它与writeFile()函数相似，不同之处在于，如果不存在必须向其写入数据的文件，则该文件将由该函数本身创建。即使该文件位于不存在的目录中，它也将由函数本身创建。
    - 解读：
    - 参数
        - file:（文件名或路劲字符串）
        - data:（将写入文件的文本字符串），Buffer，TypedArray或DataView。
        - options:它是用于指定可选参数的字符串或对象。可用的选项有：
        - callback:函数完成任务后将调用它。这将导致错误或成功。也可以用Promise代替回调函数。
encoding:它是一个定义文件编码的字符串。默认情况下，该值为 utf-8。

mode:它是一个定义文件模式的整数值。默认情况下，该值为 0o666。

flag:它是一个字符串值，用于定义写入文件时使用的标志。默认情况下，该值为 ‘w’。您可以在此处检查标志。

signal:AbortSignal 允许中止 in-progress 输出文件。


```js
//实例1
fse.outputFile('newutil/seq.js', 'hello, Node.js', err => {
  if (err) throw err
  console.log('success')
})
//实例2
fs.outputFile(file, data, (err) => {
  if (err) return console.log(err);
  console.log("Data successfully written onto the file");
  console.log("Written data is:");
  //   Reading data after writing on file
  console.log(fs.readFileSync(file, "utf-8"));
});
```
- fs.`readFileSync`(file, "utf-8")：同步读取文件()等待阻塞
    - 可传入两个参数
        - 第一个参数代表文件路径（不可省略）
        - 第二个参数代表读出文件的编码方式（可省略，省略后读出的数据是buffer数据格式）
```js
const fs = require('fs');

let res = fs.readFileSync('../../static/txt/a.txt', 'utf-8');

console.log(res);
```
- readFileSync和readFile区别详解:
    - 由同步和异步引起的第三参数差异
    - 执行顺序
```js
const fs = require('fs');
const fs = require('fs-extra')

fs.readFile('../../static/txt/a.txt', 'utf-8', (err, data) => {
    console.log(data);
});

fs.readFile('../../static/txt/b.txt', 'utf-8', (err, data) => {
    console.log(data);
});

fs.readFile('../../static/txt/c.txt', 'utf-8', (err, data) => {
    console.log(data);
});
//执行三次，顺序由执行时长随机来定，123,132，..

const fs = require('fs');

let resA = fs.readFileSync('../../static/txt/a.txt', 'utf-8');
console.log(resA);

let resB = fs.readFileSync('../../static/txt/b.txt', 'utf-8');
console.log(resB);

let resC = fs.readFileSync('../../static/txt/c.txt', 'utf-8');
console.log(resC);

//顺序永远是编写顺序
```

其他解析





#### fs.createWriteStream(filePath,option?)

在指定位置创建可写流（文件文本写入）默认覆盖内容	

创建可写流 fs.WriteStream 类的对象，继承自 <stream.Writable>

```js
/** fs-extra": "^11.1.0" 源码  fs.d.ts */
//line 3566
export function createWriteStream(
   path: PathLike, 
   options?: BufferEncoding | StreamOptions
): WriteStream;
// line 3458
interface StreamOptions {
    flags?: string | undefined;
    encoding?: BufferEncoding | undefined;
    fd?: number | promises.FileHandle | undefined;
    mode?: number | undefined;
    autoClose?: boolean | undefined;
    /** @default false */
    emitClose?: boolean | undefined;
    start?: number | undefined;
    highWaterMark?: number | undefined;
}
interface ReadStreamOptions extends StreamOptions {
    end?: number | undefined;
}
```



`option` 对象选项：

- `flags`  **默认值:** `'w'` start无效。r+  修改文件而不是覆盖，a 追加，此时start无效
- `encoding` **默认值:** `'utf8'`。能被 [`Buffer`](https://links.jianshu.com/go?to=http%3A%2F%2Fnodejs.cn%2Fapi%2Fbuffer.html%23buffer_buffer) 接受的任何一种字符编码
- `fd`  **默认值:** `null`。与 [`ReadStream`](https://links.jianshu.com/go?to=http%3A%2F%2Fnodejs.cn%2Fapi%2Ffs.html%23fs_class_fs_readstream) 一样，如果指定了 `fd`，则 [`WriteStream`](https://links.jianshu.com/go?to=http%3A%2F%2Fnodejs.cn%2Fapi%2Ffs.html%23fs_class_fs_writestream) 会忽略 `path` 参数，并且会使用指定的文件描述符。 这意味着不会触发 `'open'` 事件。 `fd` 必须是阻塞的，非阻塞的 `fd` 应该传给 [`net.Socket`](https://links.jianshu.com/go?to=http%3A%2F%2Fnodejs.cn%2Fapi%2Fnet.html%23net_class_net_socket)。
- `mode` **默认值:** `0o666`。
- `autoClose` **默认值:** `true`。`'error'` 或 `'finish'` 事件时，文件描述符会被自动地关闭(流被销毁不会触发close)，为false不会关闭。
- `emitClose` **默认值:** `false`。autoClose：流被销毁后是否触发close
- `start`：开始写入的位置，允许的值在 [0,`Number.MAX_SAFE_INTEGER`]的范围内。
- `end`：结束写入的位置，允许的值在 [0,`Number.MAX_SAFE_INTEGER`]的范围内。
- `highWaterMark`：

```js
const fs = require('fs')

const writer = fs.createWriteStream('./a.txt');
//写入数据到流, 直接覆盖
writer.write('aaa')

// r+模式时===============
const writer = fs.createWriteStream('./a.txt', {
    flags: 'r+', //如果要修改文件内容，而不是覆盖文件原有的所有内容，则设置flags为'r+'
    start: 24, //从文件内容的第24个字节开始修改
})

//写入数据到流
writer.write('适合去郊游,', 'utf8')
//再次向文件写入数据，会从当前位置开始写入
writer.write('咱们出发把！', 'utf8')

//关闭写入流，表明已没有数据要被写入可写流
writer.end()

// a 追加===========
const fs = require('fs')

const writer = fs.createWriteStream('./a.txt', {flags: 'a', })
//写入数据到流
writer.write('，适合去郊游,', 'utf8')
//再次向文件写入数据，会从当前位置开始写入
writer.write('咱们出发把！', 'utf8')
//关闭写入流，表明已没有数据要被写入可写流
writer.end()

writer.on('open', () => {
    console.log('文件已被打开', writer.pending);//false
})
writer.on('ready', () => {
    console.log('文件已为写入准备好', writer.pending);//false
})
writer.on('close', () => {
    console.log('文件已被关闭')
    console.log("总共写入了%d个字节", writer.bytesWritten)
    console.log('写入的文件路径是'+ writer.path)
})
```

