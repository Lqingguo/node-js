/**
 * Created by liqin on 2018/11/7.
 */
const fs=require('fs');
const ws=fs.createWriteStream('./c.html');
ws.write('woshi sdsdjaksdj');
ws.write('nijiushi yige zhu');
ws.on('open',()=>{
  console.log('哈哈哈哈哈哈哈');
});
ws.on('close',()=>{
  console.log('你追不上我吧');
});
ws.end();