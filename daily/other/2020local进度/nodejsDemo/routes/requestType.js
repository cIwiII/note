let express=require('express');
let router=express.Router();

router.get('/demo',function(req,res){
    console.log('代码执行-get',req.query);
    res.send('成功-get');
});
router.post('/demo',function(req,res){
    console.log('代码执行-post',req.body);
    res.send('成功-post');
});

module.exports=router;
