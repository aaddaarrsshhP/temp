const { log } = require('console');
const path=require('path')

const seprator=path.sep
console.log(seprator);

const pathh=path.join(`.${seprator}file`,'file.txt')
console.log(pathh);

module.exports=pathh

const base=path.basename(pathh)
console.log(base);


const data=path.resolve(__dirname,'file','file.txt')
console.log(data);

const bas=path.basename(__dirname)
console.log(bas);

const dat=path.resolve('file')
console.log(dat);

const relpath=path.relative(__dirname,'../../Downloads/The.Boys.S03E01.720p.WEB.x265-MiNX[TGx]')
console.log(relpath);