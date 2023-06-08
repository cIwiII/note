let express=require('express');
let router=express.Router();

//引入mongoose
let mongoose=require('mongoose');
//创建目标集合的模型对象
// let userSchema=new mongoose.Schema({
//     account:String,
//     password:String
// });
// let studentSchema=new mongoose.Schema({
//     name:String,
//     age:Number,
//     gender:String,
//     classId:mongoose.SchemaTypes.ObjectId
// });
// let courseSchema=new mongoose.Schema({
//     name:String,
//     credit:Number,
//     period:Number
// });
//建立模型对象与数据库中数据集合的关联关系
// let userModel=mongoose.model('userModel',userSchema,'user');
// let studentModel=mongoose.model('studentModel',studentSchema,'student');
// let courseModel=mongoose.model('courseModel',courseSchema,'course');

router.get('/',async function(req,res){
    //查询user集合的所有数据
    // let re=await mongoose.model('userModel').find({});
    // let re=await userModel.find({});

    //根据属性值查询
    // let re=await studentModel.find({
    //     gender:'男'
    // });
    //大于指定属性值
    // let re=await studentModel.find({
    //     age:{
    //         $gt:25
    //     }
    // });

    //小于指定属性值
    // let re=await studentModel.find({
    //     age:{
    //         $lt:25
    //     }
    // });
    //大于等于指定属性值
    // let re=await studentModel.find({
    //     age:{
    //         $gte:25
    //     }
    // });
    // 小于等于指定属性值
    // let re=await studentModel.find({
    //     age:{
    //         $lte:25
    //     }
    // });
    //满足任意一个条件
    //年龄小于25获取性别为女
    // let re=await studentModel.find({
    //     $or:[
    //         {
    //            age:{
    //                $lt:25
    //            } 
    //         },
    //         {
    //             gender:'女'
    //         }
    //     ]
    // });
    //查询指定属性值为任意一个指定值
    //查询年龄为22/25/28岁的学生
    // let re=await studentModel.find({
    //     age:{
    //         $in:[22,25,28]
    //     }
    // });
    //查询年龄不为22/25/28岁的学生
    // let re=await studentModel.find({
    //     age:{
    //         $nin:[22,25,28]
    //     }
    // });
    //查询年龄在24到27之间
    // age>24 && age<27
    // let re=await studentModel.find({
    //     $and:[
    //         {
    //             age:{
    //                 $gt:24
    //             }
    //         },
    //         {
    //             age:{
    //                 $lt:27
    //             }
    //         }
    //     ]
    // });
    //查询张姓的学生
    // let re=await studentModel.find({
    //     name:{
    //         $regex:'^张'
    //     }
    // });

    /*
        1、新建集合课程，包含:课程名称、学分、课时属性
        2、查询以下结果:
            查询课程名称为JavaScript的课程数据
            查询课时为[5,9)的课程数据
            查询学分为3分或者课时小于5的课程数据
            查询框架相关课程数据
        3、利用数据库配合实现登录功能
    */

    //查询课程名称为JavaScript的课程数据
    // let re=await mongoose.model('courseModel').find({
    //     name:'JavaScript'
    // });
    //查询课时为[5,9)的课程数据
    // let re=await mongoose.model('courseModel').find({
    //     $and:[
    //         {
    //             period:{
    //                 $gte:5
    //             }
    //         },
    //         {
    //             period:{
    //                 $lt:9
    //             }
    //         }
    //     ]
    // });

    //查询学分为3分或者课时小于5的课程数据
    // let re=await mongoose.model('courseModel').find({
    //     $or:[
    //         {
    //             credit:3
    //         },
    //         {
    //             period:{
    //                 $lt:5
    //             }
    //         }
    //     ]
    // });

    //查询框架相关课程数据
    // let re=await mongoose.model('courseModel').find({
    //     name:{
    //         $regex:'框架'
    //     }
    // });


    //新增课程数据
    // let re=await mongoose.model('courseModel').create({
    //     name:'NodeJS',
    //     credit:8,
    //     period:15
    // });

    //删除名称以a开头的课程
    // let re=await mongoose.model('courseModel').deleteMany({
    //     name:{
    //         $regex:'^a'
    //     }
    // });

    //修改bootstrap框架课程的学分为1分
    // let re=await mongoose.model('courseModel').updateMany({
    //     name:'bootstrap框架'
    // },{
    //     credit:1
    // });
    //修改学分为8的课程改为7
    // let re=await mongoose.model('courseModel').updateMany({
    //     credit:8
    // },{
    //     credit:7
    // });

    /*
    练习
        1、将自己的信息添加到学生集合
        2、删除姓名为'张三三'的学生信息
        3、根据性别分班，男生一个班，女生一个班
        4、完成注册功能
    */
                //将自己的信息添加到学生集合
    // let re=await mongoose.model('studentModel').create({
    //     name:'冯泰铭',
    //     age:23,
    //     gender:'男',
    //     classId:'629dc15c53370000bc000e76'
    // });

    //删除姓名为'张三三'的学生信息
    // let re=await mongoose.model('studentModel').deleteMany({
    //     name:'张三三'
    // });

    // 根据性别分班，男生一个班，女生一个班
    let re=await mongoose.model('studentModel').updateMany({
        gender:'女'
    },
    {
        classId:'629dc15c53370000bc000e76'
    });
    console.log(re);
    re=await mongoose.model('studentModel').updateMany({
        gender:'男'
    },
    {
        classId:'629dc16c53370000bc000e78'
    });
    console.log(re);
    res.send({
        code:200,
        message:'成功!',
        data:re
    });
});
module.exports=router;