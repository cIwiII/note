//编写后端代码实现用户模块功能
//引入express模块
let express=require('express');
//获取路由对象
let router=express.Router();
//存储用户数据
let users=[
    {
        account:'admin',
        password:'ad123'
    }
];
//二级路由配置:为当前后端程序取个名字
router.post('/login',function(request,response){
    //request获取请求相关数据
    // console.log(request.body);
    //判断用户输入的账号密码是否正确
    let re=users.some(function(val){
        return val.account==request.body.acc && val.password==request.body.pwd;
    });
    if(re){
        response.send({
            code:200,
            message:'登录成功!'
        });
    }else{
        response.send({
            code:250,
            message:'登录失败!账号或密码有误!'
        });
    }
    //response响应
    // console.log('执行login-post');
    // response.send({
    //     message:'登录成功!'
    // })
});


router.post('/reg',function(req,res){
    console.log('注册');
    //获取请求数据
    // console.log(req.body);
    let {acc,pwd}=req.body;
    console.log(acc,pwd);
    //判断账号是否已经存在
    let re=users.some(val=>val.account==acc);
    if(re){
        res.send({
            code:250,
            message:'注册失败!账号已经存在，请直接登录!'
        });
    }else{
        users.push({
            account:acc,
            password:pwd
        });
        res.send({
            code:200,
            message:'注册成功!'
        });
    }
    //生成响应正文
    // res.send({
    //     code:200,
    //     message:'注册成功'
    // });
});

router.post('/changePwd',function(req,res){
    let {acc,oldPwd,newPwd}=req.body;
    let re=users.filter(val=>val.account==acc);
    if(re.length<1){
        return;
    }
    //判断密码是否正确
    if(oldPwd==re[0].password){
        //替换旧密码
        re[0].password=newPwd;
        res.send({
            code:200,
            message:'密码修改成功!'
        });
    }else{
        res.send({
            code:250,
            message:'旧密码输入错误!'
        });
    }
});

module.exports=router;