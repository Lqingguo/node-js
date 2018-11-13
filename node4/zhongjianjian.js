/**
 * Created by liqin on 2018/11/12.
 */
const express=require('express');
const app=express();
app.get('/',middleware,(req,res)=>{
  console.log('跟路由被触发了');
});


app.listen(3000,err=>{
  if(!err) console.log('服务器连接成功');
  else console.log(err);
});
