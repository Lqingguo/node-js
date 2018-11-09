/**
 *  连接入数据库
 */
const mongoose = require('mongoose');

module.exports=new Promise((resolve,reject)=>{
  mongoose.connect('mongodb://localhost:27017/students');
  mongoose.connection.once('open',err=>{
      if(!err){
        console.log('连接上数据库');
        resolve();
      }else{
        console.log('连接数据库失败');
        reject(err);
      }
    }
  );
});

