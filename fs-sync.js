
const {readFileSync,writeFileSync}=require('fs')

console.log("starting");
const text=readFileSync('./file/file.txt','utf-8')


writeFileSync('./file/write.txt',"This is sigma to alpha")
const text2=readFileSync('./file/write.txt','utf-8')


writeFileSync('./file/file.txt',`${text + text2} `)
const text3=readFileSync('./file/file.txt','utf-8')
console.log(text3);
console.log("Done with this task");
console.log("Starting new one");



