let express=require('express');
let router=express.Router();


router.get('/demo',function(req,res){
    console.log('代码执行-get');
    let re=require('./a');
    console.log(re);
    res.send('成功-get');
});

module.exports=router;