/**
 * Created by liqin on 2018/11/13.
 */
const express= require('express');
const app = express();
app.use(express.static('public'));
// app.use(express.urlencoded({extended:true}))
app.get('/text',(req,res)=>{
  console.log(req.query);
  res.send('123456')
});
app.post('./text',(req,res)=>{
  console.log(req.body);
  res.send('22343234')
});
app.listen('3000',err=>{
  if(!err) console.log('服务器连接成功~')
  else console.log(err);
});