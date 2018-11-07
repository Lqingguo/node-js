/**
 * Created by liqin on 2018/11/7.
 */
const fs=require('fs');
const ws=fs.createWriteStream('./c.html');

ws.write('woshi sdsdjaksdj');
ws.write('nijiushi yige zhu');


ws.on('open',()=>{
  console.log('你就是个猪')
});
ws.on('close',()=>{
  console.log('你追不上我吧')
});
ws.end();