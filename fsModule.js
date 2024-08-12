const fs = require('fs');

//exists
fs.exists('fsModule.js',(data)=>{
    console.log(data);
});
fs.exists('drashti.js',(data)=>{
    console.log(data);
});

//stat
fs.stat('fsModule.js',(err,data)=>{
    console.log(data);
});

//readFile
// fs.readFile('fsModule',(err,data)=>{
//     console.log(data.toString());
// });

//writeFile
fs.writeFile('demo.js','Drashti Rathod',(err,data)=>{});

//appendFile
fs.appendFile('demo.js','sleepyhead',(err,data)=>{});

//readFilesync
data = fs.readFileSync('fsModule.js');
console.log(data);

//default async
// data = fs.readFile('fsModule.js','xyz');
// console.log(data);

//unlink
// fs.unlink('drashti.txt',(err)=>{});

//rename
