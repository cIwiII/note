let express=require('express');
let router=express.Router();
let student=[
    {
        id:1,
        name:'admin',
        age:22,
        gender:'男',
        classId:1
    },
    {
        id:2,
        name:'张三',
        age:25,
        gender:'女',
        classId:2
    }
];
let nextId=3;
router.get('/',function(req,res){
    console.log('获取学生数据');
    res.send({
        code:200,
        message:'获取成功!',
        data:student
    });
});
router.delete('/:sid',function(req,res){
    //根据id查找对应的索引
    let index=-1;
    student.forEach((val,i)=>{
        if(val.id==req.params.sid){
            index=i;
        }
    });
    student.splice(index,1);
    res.send({
        code:200,
        message:'删除成功!',
        data:student
    });
});
router.put('/:sid/:sname/:sage/:sgender/:classId',function(req,res){
    //根据id查找目标对象
    let stu=student.filter(val=>val.id==req.params.sid)[0];
    //替换对应属性值
    stu.name=req.params.sname;
    stu.age=req.params.sage;
    stu.gender=req.params.sgender;
    stu.classId=req.params.classId;
    res.send({
        code:200,
        message:'修改成功!',
        data:student
    });
});

router.post('/:sname/:sage/:sgender/:classId',function(req,res){
    let {sname,sage,sgender,classId}=req.params;
    // console.log(sname,sage,sgender,classId);
    student.push({
        id:nextId++,
        name:sname,
        age:sage,
        gender:sgender,
        classId
    });
    res.send({
        code:200,
        message:'新增成功!',
        data:student
    });
});
module.exports=router;