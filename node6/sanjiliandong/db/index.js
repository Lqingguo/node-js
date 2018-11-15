/**
 * Created by liqin on 2018/11/14.
 */
const mongoose= require('mongoose');
module.exports = new Promise((resolve,reject)=>{
  mongoose.connect('mongodb://localhost:27017/ajax', {useNewUrlParser: true});
  mongoose.connection.once('open',err=>{
    if(!err){
      console.log('连接数据库成功')
      resolve();
    }else {
      console.log('数据库连接失败');
      reject(err);
    }
  })
})