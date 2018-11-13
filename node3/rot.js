/**
 * Created by liqin on 2018/11/11.
 */
const express=require('express');
const app=express();

app.get('/',(req,res)=>{
  // console.log(req.params);
  console.log(res.json('这是服务器返回的响应'));
});





app.listen(3000,(err)=>{
  if(!err) console.log('服务器连接成功');
  else  console.log(err);
});
