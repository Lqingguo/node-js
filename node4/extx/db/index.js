/**
 * Created by liqin on 2018/11/12.
 */
const mongoose=require('mongoose');
module.exports=new Promise((resolev,reject)=>{
  mongoose.connect('mongodb://localhost:27017/exec', {useNewUrlParser: true});
  mongoose.connection.once('open',err=>{
    if(!err) {
      resolev();
      console.log('数据库连接成功')
    }else {
      reject();
      console.log(err);
    }
  })
});