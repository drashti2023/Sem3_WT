const child_process = require('child_process');

child_process.exec('dir',(err,stdout,stdin)=>{
    console.log(stdout)
});