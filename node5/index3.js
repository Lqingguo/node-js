/**
 * Created by liqin on 2018/11/13.
 */
const express= require('express');
const app= express();
app.use(express.static('public'));
app.get('/text',(req,res)=>{
  console.log(req.query);
  res.send('这是服务器返回的数据');
});
app.listen(3000,err=>{
  if(!err) console.log('连接服务器成功');
  else console.log(err);
})