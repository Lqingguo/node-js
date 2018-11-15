/**
 * Created by liqin on 2018/11/14.
 */
const express= require('express');

const db= require('./db');
const Cities= require('./moudle/cities');
const app = express();
app.use(express.static('public'))
;(async ()=>{
  await db;
  app.get('/sheng',async(req,res)=>{
    try{
      const provice = await Cities.find({level:1},{province: 1, name: 1, _id: 0});
      res.json({code:1,data:provice});
    } catch (e){
      res.json({code:0,data:'网络有问题请重试'})
    }
  });
  app.get('/shi',async(req,res)=>{
    const {province} =req.query;
    if(!province){
      res.json({code:2,data:'请选择省份'})
    }else{
      const city = await  Cities.find({level:2,province},{city:1,name: 1, _id: 0});
      res.json({code:1,data:city})
    }

  });
  app.get('/xian',async(req,res)=>{
      const {province,city} =req.query;
      if(!city){
        res.json({code:2,data:'请选择城市'});
      }else {
        const xian = await Cities.find({level:3,province,city},{city:1,name:1,_id:0});
        res.json(({code:1,data:xian}));
      }
  });
})();
    app.get('/textred',(req,res)=>{
      const {callback} = req.query;
      const data= [{name:'xiaoming',age:18},{name:'xiis',age:48}];
      res.end(callback+'('+JSON.stringify(data)+')');
    })
    app.post('/text',(req,res)=>{
      res.set('Access-Control-Allow-Origin','http://localhost:63342');
      const data = [{name:'xiaomign',age:16},{name:'xiais',age:18}]
      res.json(data)
    })

    app.get('/ajax',(req,res)=>{
      const  {callback} = req.query;
      const data = [{name:'xiaoming',age:16},{name:'xiaohong',age:17}];
      res.end(callback+'('+JSON.stringify(data)+')');
    })
app.listen('4000',err=>{
  if(!err) console.log('服务器连接成功');
  else console.log(err);
});