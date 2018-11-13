/**
 * Created by liqin on 2018/11/10.
 */
const express=require('express');
const app =express();

app.get('/qq',(request,response)=>{
  console.log(request.query);
  response.send('<h1>这是服务器返回的数据</h1>>')
});
app.listen(3000,err=>{
  if(!err) console.log('服务器启动成功了');
  else console.log(err);
});