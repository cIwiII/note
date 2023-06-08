const fse = require('fs-extra'); //文件处理模块
const path = require('path');
/**
 * 读取根目录，创建一个文件夹qiepian存放切片
 */
const UPLOAD_DIR = path.resolve(__dirname, '.', 'qiepian');

/**
 * 将切片转换成流进行合并
 * @param {*} path
 * @param {*} writeStream
 * @return
 */
function pipeStream(path, writeStream) {
  return new Promise(resolve => {
    // 获取当前可读流
    const readStream = fse.createReadStream(path);
    readStream.on('end', () => {
      // 读取完毕后，删除已经读取过的切片路径，由于是异步，总是在pipe之后执行
      fse.unlinkSync(path);
      resolve();
    });
    readStream.pipe(writeStream); //将可读流流入可写流
  });
}

/**
 * 文件合并
 * @param {*} filePath
 * @param {*} fileName
 * @param {*} size  分片文件大小
 */
async function mergeFileChunk(filePath, fileName, size) {
  const chunkDir = path.resolve(UPLOAD_DIR, `${fileName}-chunks`);
  // 解析 UPLOAD_DIR/文件名-chunks 文件夹下文件信息
  let chunkPaths = await fse.readdir(chunkDir);
  chunkPaths.sort((a, b) => a.split('-')[1] - b.split('-')[1]);

  const arr = chunkPaths.map((chunkPath, index) => {
    return pipeStream(
      path.resolve(chunkDir, chunkPath),
      // 在指定的位置创建可写流
      fse.createWriteStream(filePath, {
        start: index * size,
        end: (index + 1) * size
      })
    );
  });
  await Promise.all(arr); //保证所有的切片都被读取
}

/**
 * 解析POST请求传递的参数
 * @param {*} req
 * @returns
 */
function resolvePost(req) {
  return new Promise(resolve => {
    let chunk = '';
    req.on('data', data => {
      //req接收到了前端的数据
      chunk += data; //将接收到的所有参数进行拼接
    });
    req.on('end', () => {
      resolve(JSON.parse(chunk)); //将字符串转为JSON对象
    });
  });
}

module.exports = {
  UPLOAD_DIR,
  mergeFileChunk,
  resolvePost
};

/* 
  合并的关键在于：
    前端通过POST请求向后端传递的合并数据是通过JSON.stringify()将数据转换成字符串，所以后端合并之前，需要进行以下操作：

    解析POST请求传递的参数，自定义函数resolvePost，目的是将每个切片请求传递的数据进行拼接，
    拼接后的数据仍然是字符串，然后通过JSON.parse()将字符串格式的数据转换为JSON对象；
    接下来该去合并了，拿到上个步骤解析成功后的数据进行解构，通过path.resolve获取每个切片所在的路径；
    自定义合并函数mergeFileChunk，只要传入切片路径，切片名字和切片大小，就真的将所有的切片进行合并。
    在此之前需要将每个切片转换成流stream对象的形式进行合并，
    自定义函数pipeStream，目的是将切片转换成流对象，在这个函数里面创建可读流，
    读取所有的切片，监听end事件，所有的切片读取完毕后，销毁其对应的路径，保证每个切片只被读取一次，不重复读取，最后将汇聚所有切片的可读流汇入可写流；
    最后，切片被读取成流对象，可读流被汇入可写流，
    那么在指定的位置通过createWriteStream创建可写流，同样使用Promise.all()的方法，保证所有切片都被读取，最后调用合并函数进行合并。
*/

/* 
  参考：
  https://juejin.cn/post/7177045936298786872
  https://juejin.cn/post/7176277368276385829?share_token=3042536b-6aef-4cb8-a5f0-65ca5186b1e4
  https://github.com/Wkb2317/big-file-upload-demo
*/
