/**
 * Created by liqin on 2018/11/12.
 */
const express =require('express');
const db=require('./db');
const Users=require('./moshi/moshi');
const app=express();
app.use(express.static('yemian'));
app.use(express.urlencoded({extended:true}));
db.then(()=>{
  app.post('/tijiao',async(req,res)=>{
    const {username,pwd,repwd,email} = req.body;
    const usernamereg=/0-9/;
    const pwdreg=/0-9/;
    const emailreg=/0-9/;
    if(!usernamereg.test(username)){
      res.send('用户名错误');
      return;
    }else if(!pwdreg.test(pwd)){
      res.send('密码错误');
      return;
    }else if(pwd!==repwd){
      res.send('两次密码不一致');
      return;
    }else if(!email.test(emailreg)){
      res.send('邮箱错误')
      return;
    }
    try{
      const user=await Users.findOne({username});
      if(user){
        res.send('用户名已存在请重新输入')
      }else {
        await Users.creat({username,pwd,email});
        res.send('恭喜注册成功')
      }
    }catch (e){
      console.log(e);
      res.send('网络不稳定，请刷新重试')
    }
  })
});
app.listen(3000,err=>{
  if(!err) console.log('服务器启动成功了');
  else console.log(err);
})