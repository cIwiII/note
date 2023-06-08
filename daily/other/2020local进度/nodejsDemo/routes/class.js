let express=require('express');
let router=express.Router();
let classArr=[
    {
        id:1,
        name:'web21'
    },
    {
        id:2,
        name:'Java99'
    },
    {
        id:3,
        name:'UI17'
    }
];
let nextId=4;
//查
// router.get('/findAll',function(req,res){
//     //查询所有班级数据，并响应到浏览器
// });
router.get('/',function(req,res){
    //查询所有班级数据，并响应到浏览器
    // console.log('查询');
    // res.send('查询成功');
    res.send({
        code:200,
        message:'查询成功!',
        data:classArr
    });
});
//删除
// router.post('/delById',function(req,res){
//     //根据编号删除班级数据，并将处理结果响应给浏览器
//     req.body.id
// });
router.delete('/:cid',function(req,res){
    //根据编号删除班级数据，并将处理结果响应给浏览器
    // req.body.id
    // console.log(req.params.cid);
    // console.log('删除');
    //根据编号查找索引
    let index=-1;
    classArr.forEach(function(val,i){
        if(val.id==req.params.cid){
            index=i;
        }
    });
    classArr.splice(index,1);
    res.send({
        code:200,
        message:'删除成功!',
        data:classArr
    });
});
//新增
// router.post('/add',function(req,res){
//     //添加班级数据，并将处理结果响应给浏览器
// });
router.post('/:cname',function(req,res){
    //添加班级数据，并将处理结果响应给浏览器
    // console.log('添加');
    classArr.push({
        id:nextId++,
        name:req.params.cname
    });
    res.send({
        code:200,
        message:'添加成功!',
        data:classArr
    });
});
//修改
// router.post('/updateById',function(req,res){
//     //根据编号修改班级名称，并将处理结果响应给浏览器
// });
router.put('/:id/:name',function(req,res){
    //根据编号修改班级名称，并将处理结果响应给浏览器
    // console.log('修改');
    // console.log(req.params.id,req.params.name);
    let re=classArr.filter(val=>val.id==req.params.id);
    re[0].name=req.params.name;
    res.send({
        code:200,
        message:'修改成功!',
        data:classArr
    });
});

module.exports=router;