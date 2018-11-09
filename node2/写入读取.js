/**
 * Created by liqin on 2018/11/9.
 */
const fs=require('fs');
const ws=fs.createReadStream('../node1/变色游戏.html');
const as=fs.createWriteStream('./a.html');
ws.pipe(as);