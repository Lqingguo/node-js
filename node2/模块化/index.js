/**
 * Created by liqin on 2018/11/9.
 */
const db=require('./db');
const students=require('./student/studentss');
(async()=>{
  await db;
  const sum=await students.find({});
  console.log(sum);
})();