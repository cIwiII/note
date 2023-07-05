// （1）接收切片
//app.js
const { mergeFileChunk, resolvePost, UPLOAD_DIR } = require('./function');
const http = require('http');
const multiparty = require('multiparty'); // （1.1）中间件，处理FormData对象的中间件
const path = require('path');
const fse = require('fs-extra'); //文件处理模块

const server = http.createServer();

server.on('request', async (req, res) => {
  // （1.3）处理跨域问题，允许所有的请求头和请求源
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  //前端访问的地址正确,上传文件
  if (req.url === '/upload') {
    const multipart = new multiparty.Form(); // 解析FormData对象
    multipart.parse(req, async (err, fields, files) => {
      if (err) {
        //解析失败
        return;
      }
      console.log('fields=', fields); //{ fileName: [ '完整文件名' ], chunkName: [ '完整文件名-0'=分片文件名 ] }
      console.log('files=', files); //分片文件对象信息

      const [file] = files.file;
      const [fileName] = fields.fileName;
      const [chunkName] = fields.chunkName;

      //（1.2）创建 UPLOAD_DIR/fileName-chunks 文件夹，存放接收到的所有切片
      const chunkDir = path.resolve(UPLOAD_DIR, `${fileName}-chunks`);
      if (!fse.existsSync(chunkDir)) {
        //（1.4）文件夹不存在，新建该文件夹
        await fse.mkdirs(chunkDir);
      }

      // （1.5）把切片移动进 chunkDir 下, 分片文件已存在会报错，读取时将已经读取的删除
      await fse.move(file.path, `${chunkDir}/${chunkName}`);
      res.end(
        JSON.stringify({
          //向前端输出
          code: 0,
          message: '切片上传成功'
        })
      );
    });
  }

  // 后端接受请求，开始合并
  if (req.url === '/merge') {
    // 合并切片,解构文件名和分片大小
    const { fileName, size } = await resolvePost(req);
    const filePath = path.resolve(UPLOAD_DIR, fileName); //获取合并后的文件完整路径
    await mergeFileChunk(filePath, fileName, size);
    console.log('合并成功');
    res.end(
      JSON.stringify({
        code: 0,
        message: '文件合并成功'
      })
    );
  }
});

server.listen(3000, () => {
  console.log('服务已启动');
});
