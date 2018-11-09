/**
 * 创建模块模型.
 */
//引入monpoose
const monpoose=require('mongoose');
const Schema=monpoose.Schema;
const studentsSchema=new Schema({
  name:{
    type:String,
    unique:true
  },
  age:Number,
  sex:String
});
const students=monpoose.model('students',studentsSchema);
module.exports=students;
