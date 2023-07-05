

# 数据库(mongodb)

## 背景

- 存储在数组中的数据属于`瞬时数据`，一旦程序重启，数据被销毁，数据不能被永久保存;
- 数据库+持久化技术实现数据永久保存;
  - 数据库:`mongodb`
  - 持久化技术:`mongoose`
- 数据库
  - 存储数据的仓库。
  - 主流的数据库类型:
    - 关系型数据库
      - 数据以表的形式存储数据。
      - 比如:mysql、oracle等。
      - 适用于数据存储量较大的情况。
    - 非关系型数据库
      - 数据以对象的形式存储数据。
      - 比如:mongodb、Redis等。
      - 适用于数据存储量较小的情况。

## 概述

- mongodb是一个开源的非关系型数据库。

- 存储数据的方式:

  - 一个对象以一个

    ```
    文档
    ```

    的形式存在;

    - 张三的数据以一个文档形式存储;
    - 李四的数据以一个文档形式存储;

  - 一个

    ```
    集合
    ```

    负责管理存储一类对象数据。

    - 所有学生数据是以一个集合形式存储；
    - 所有班级数据是以一个集合形式存储;

## 环境搭建

1. 下载安装数据库;
   - 下载网址`https://www.mongodb.com/try/download/enterprise`
   - 安装mongodb时，在最后一个安装界面`install MongoDB compass`,去掉前面的多选框的`√`;
2. 安装图形化界面软件(Navicat);



# mongoose

## 概述

- 一个可以在Nodejs环境下操作mongodb的第三方包。
- 安装mongoose后，可以使用其提供的API对mongodb数据库中的数据进行增删查改(CRUD)操作。

## 安装mongoose

```
npm i mongoose
```

## 操作数据库

1. 连接数据库

   - 新建JavaScript文件，并添加以下JavaScript代码，并配置目标数据库名称

     ```js
     //建立数据库连接代码
     //引入mongoose模块
     let mongoose=require('mongoose');
     //连接数据库
     //数据库的URL
     let dbURL='mongodb://127.0.0.1:27017/数据库名称';
     mongoose.connect(dbURL,{
         useNewUrlParser:true,
         useUnifiedTopology:true
     });
     //设置连接成功时要执行的回调函数
     mongoose.connection.on('connected',function(){
         console.log('数据库连接成功!');
     });
     ```

   - 在app.js文件中引入新建的JavaScript文件

     ```
     require('新建的JavaScript文件路径');
     ```

2. 操作目标数据库集合

   - 引入`mongoose`模块

     ```
     let mongoose=require('mongoose');
     ```

   - 创建目标集合的模型对象(系统自动生成的`_id`不需要声明)

     ```js
     let 模型名称=new mongoose.Schema({
         属性名称:属性类型(类型的首字母大写),
         ......
     });
     ```

     ```js
     let userSchema=new mongoose.Schema({
         account:String,
         password:String
     });
     ```

   - 建立模型对象与数据库中数据集合的关联关系

     ```
     let 变量名称=mongoose.model('名称',模型对象,'目标集合名称');
     ```

     ```
     let userModel=mongoose.model('userModel',userSchema,'user');
     ```

   - 操作集合(查询)

     - 方式一:

       ```
       async function(){
           let re=await mongoose.model('名称').find({});
       }
       ```

       ```js
       router.get('/',async function(req,res){
           //查询user集合的所有数据
           let re=await mongoose.model('userModel').find({});
           console.log(re);
       });
       ```

     - 方式二:

       ```
       async function(){
           let re=await 变量名称.find({});
       }
       ```

       ```js
       router.get('/',async function(req,res){
           //查询user集合的所有数据
           let re=await userModel.find({});
           console.log(re);
       });
       ```

20220607-mongoose之API

# mongoose之API

## 基础查询

- 查询所有

  ```
  let re=await 名称.find({});
  ```

  ```js
  let re=await userModel.find({});
  ```

- 分页查询：limit()和skip()

- 根据指定属性值查询

  ```js
  let re=await 名称.find({    目标属性名称:值});
  ```

  ```js
  let re=await studentModel.find({
      gender:'男'
  });
  ```

- 大于指定属性值

  ```js
  let re=await 名称.find({    目标属性名称:{        $gt:值    }});
  ```

  ```js
  let re=await studentModel.find({    age:{        $gt:25    }});
  ```

- 小于指定属性值

  ```js
  let re=await 名称.find({    目标属性名称:{        $lt:值    }});
  ```

  ```js
  let re=await studentModel.find({    age:{        $lt:25    }});
  ```

- 大于等于指定属性值

  ```js
  let re=await 名称.find({    目标属性名称:{        $gte:值    }});
  ```

  ```js
  let re=await studentModel.find({    age:{        $gte:25    }});
  ```

- 小于等于指定属性值

  ```js
  let re=await 名称.find({    目标属性名称:{        $lte:值    }});
  ```

  ```js
  let re=await studentModel.find({    age:{        $lte:25    }});
  ```

- 满足任意一个指定条件

  ```js
  let re=await 名称.find({    $or:[        {            条件1        },        {            条件2        },        ......    ]});
  ```

  ```js
  let re=await studentModel.find({    $or:[        {            age:{                $lt:25            }         },        {            gender:'女'        }    ]});
  ```

- 指定属性为指定值中任意一个值

  ```js
  let re=await 名称.find({    目标属性名称:{        $in:[值1,值2,......]    }})
  ```

  ```js
  let re=await studentModel.find({    age:{        $in:[22,25,28]    }});
  ```

- 指定属性不为指定值中任意一个值

  ```js
  let re=await 名称.find({    目标属性名称:{        $nin:[值1,值2,......]    }})
  ```

  ```js
  let re=await studentModel.find({    age:{        $nin:[22,25,28]    }});
  ```

- 满足指定的所有条件

  ```js
  let re=await 名称.find({    
      $and:[        
          {            条件1        },       
          {            条件2        },      
          ......    
      ]});
  ```

  ```js
  let re=await studentModel.find({    
      $and:[        {            age:{                $gt:24          }       },        
            {            age:{                $lt:27            }        }    ]
  });
  ```

- 查询指定属性值满足指定正则表达式规则

  ```js
  let re=await 名称.find({    目标属性名称:{        $regex:'正则表达式'    }});
  ```

  ```js
  let re=await studentModel.find({    name:{        $regex:'^张'    }});
  ```

## 新增

```js
let re=mongoose.model('名称').create({    属性名称:属性值,    ......});
let re=await mongoose.model('courseModel').create({    
    name:'NodeJS',    
    credit:8,    
    period:15
});
```

## 删除

- 返回结果对象中`deleteCount`属性为删除的对象个数，可以根据该值判断是否删除成功。

```js
let re=mongoose.model('名称').deleteMany({    条件})
let re=await mongoose.model('courseModel').deleteMany({    
    name:{        $regex:'^a'    }
});
```

## 修改

- 返回结果对象中`modifiedCount`属性为修改的对象个数，可以根据该值判断是否修改成功。

```js
let re=mongoose.model('名称').updateMany({    要修改的查找条件},{    新对象内容})
let re=await mongoose.model('courseModel').updateMany(
    {   name:'bootstrap框架'},
    {    credit:1}
);
```

20220608-mongoose多集合关联查询

# 多集合关联查询

## 一对一(A集合中的一条数据关联B集合中的一条数据)

- 设置关联集合的模型，建立集与集之间的关联关系

  ```js
  属性名称:{
      type:mongoose.SchemaTypes.ObjectId,
      ref:'关联的目标集合在程序中注册的名称'
  }
  ```

  ```js
  let mongoose=require('mongoose');
  let classSchema=new mongoose.Schema({
      name:String
  });
  mongoose.model('classModel',classSchema,'class');
  let studentSchema=new mongoose.Schema({
      name:String,
      age:Number,
      gender:String,
      classId:{
          type:mongoose.SchemaTypes.ObjectId,
          ref:'classModel'
      }
  });
  mongoose.model('studentModel',studentSchema,'student');
  ```

- 查询结果

  ```
  mongoose.model('名称').find({查询条件}).populate('属性名称')
  ```

  ```
  let re=await mongoose.model('studentModel').find({}).populate('classId');
  ```

## 一对多(A集合中的一条数据关联B集合中的多条数据)

- 设置关联集合的模型，建立集与集之间的关联关系

  ```js
  属性名称:[{
      type:mongoose.SchemaTypes.ObjectId,
      ref:'关联的目标集合在程序中注册的名称'
  }]
  ```

  ```js
  //引入mongoose
  let mongoose=require('mongoose');
  let courseSchema=new mongoose.Schema({
      name:String,
      credit:Number,
      period:Number
  });
  mongoose.model('courseModel',courseSchema,'course');
  
  let teacherSchema=new mongoose.Schema({
      name:String,
      tel:String,
      salary:Number,
      courseId:[{
          type:mongoose.SchemaTypes.ObjectId,
          ref:'courseModel'
      }]
  });
  mongoose.model('teacherModel',teacherSchema,'teacher');
  ```

- 查询结果

  ```
  mongoose.model('名称').find({查询条件}).populate('属性名称')
  ```

  ```
  let re=await mongoose.model('teacherModel').find({}).populate('courseId');
  ```

## 集合嵌套(A集合关联B集合，B集合关联C集合)

- 设置关联集合的模型，建立集与集之间的关联关系

- 查询结果

  ```js
  mongoose.model('名称').find({查询条件}).populate({
      path:'属性名称',
      populate:{
          path:'属性名称'
      }
  })
  ```

  ```js
  let re=await mongoose.model('scoreModel').find({
      score:{
          $lt:60
      }
  }).populate({
      path:'studentId',
      populate:{
          path:'classId'
      }
  });
  ```

20220608-MVC

# MVC

## 概念

- 是一种设计模式。
- MVC
  - Model
    - 模型。数据模型。
  - View
    - 视图。用于展示数据。比如:HTML、JSP等。
  - Controller
    - 控制器。接收客户端请求，将业务处理结果对应的数据模型发送给视图进行展示。比如:路由代码等。

20220608-文件上传

# 文件上传

## 前端

1. 让用户选择要上传的文件;

   ```js
   <input type="file" id="myPicture">
   ```

2. 确定上传文件的契机;

   ```js
   //点击上传按钮时发送(上传)文件
   $('#uploadBtn').on('click',function(){}
   ```

3. 将文件数据发送到服务器;

   - 获取上传的文件对象

   ```js
   //获取选中的文件对象
   let file=document.querySelector('#myPicture').files[0];
   ```

   - 检查上传文件的合法性

   ```js
   if(!file){
       //没有选择上传的文件
       alert('请选择要上传的文件!');
       return;
   }
   //确定上传的文件类型是否为目标类型
   //图片的正则
   let picRegex=/\.(png|jpg|jpeg|gif)$/;
   if(!picRegex.test(file.name)){
       alert('头像只能是图片类型哦~');
       return;
   }
   ```

   - 通过ajax将文件数据以表单格式上传

   ```js
   //创建表单数据对象
   let form=new FormData();
   //将要上传的文件对象添加到表单数据中，并取一个名称
   form.append('pic',file);
   //通过ajax将数据发送到服务器
   $.ajax({
       url:'/upload',
       type:'post',
       data:form,
       success:function(data){
           console.log(data);
       },
       //防止jQuery对传输到后端的数据进行自动格式处理
       contentType:false,
       processData:false,
       cache:false
   });
   ```

## 后端

1. 下载`multer`插件(工具包)

   ```
   npm i multer
   ```

2. 在要接收文件数据的后端模块引入`handleFile.js`

   ```js
   let {uploadFiles}=require('../util/handleFile');
   ```

3. 编写后端逻辑代码接收文件内容

   - 配置上传的文件信息

     ```js
     let uploadMethod=uploadFiles({
         path:'./public/images',//上传文件保存路径
         key:'pic',//上传文件在表单数据中的名称，要与前端取的名称对应
         size:1024//上传文件的大小限制，单位为KB
     });
     ```

   - 获取上传的文件数据

     ```js
     uploadMethod(req,res,function(err){
         //有接收结果后要执行的回调函数(成功或失败)
         if(err){
             //接收失败
             res.send({
                 code:250,
                 message:'上传失败!'
             });
         }else{
             //获取上传的文件信息
             console.log(req.files[0]);
             //接收成功
             res.send({
                 code:200,
                 message:'上传成功!',
                 data:`http://127.0.0.1:3000/images/${req.files[0].filename}`
             });
         }
     });
     ```

【完】