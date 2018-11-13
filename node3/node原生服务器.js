/**
 * Created by liqin on 2018/11/10.
 */
//引入http模块
const {createServer}=require('http');
//引入querystring模块
const {parse}=require('querystring');
//创建服务用来接收请求，请求处理，返回响应
const server=createServer((request,response)=>{
//  request请求对象
//   response

  const str =request.url.split('?')[1];
  const qs=parse(str);
  //设置响应头
  response.setHeader('content-type','text/html;charset=utf-8');
  //返回响应
  response.end('<h1>这是node原生服务器返回的响应</h1>>')
});
//监听端口号 访问http://localhost:3000
server.listen(3000,err=>{
  if(!err)console.log('成功');
  else console.log('失败')
})