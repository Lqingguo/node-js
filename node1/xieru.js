/**
 * Created by liqin on 2018/11/7.
 */
let fs=require('fs');
console.log(fs);
fs.writeFile('./a.txt','我是一颗小小的石头深深的埋在泥土之中',err=>{
  if(!err){
    console.log('我要飞得更高')
  }else{
    console.log(err);
  }
});


