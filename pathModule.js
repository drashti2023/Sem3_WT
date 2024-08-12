const path = require('path');

//normalize
 ans1 = path.normalize('/abc/..ddd/../drashti.js');
 console.log(ans1);

//join
ans2 = path.join('/drashti','rathod','aug');
console.log(ans2);

//resolve
ans3 = path.resolve('hell','xyz');
console.log(ans3);

//relative
ans4 = path.relative('/foo/path1','/foo/path2');
console.log(ans4);

//dirname
ans5 = path.dirname('/drashti/abc.txt');
console.log(ans5);

//basename
ans6 = path.basename('/foo/drashti.txt');
console.log(ans6);

// extname
ans7 = path.extname('/foo/abc.txt');
console.log(ans7);

//parse
ans8 = path.parse('C:\\path\\dir\\file.txt');
console.log(ans8);

//format
ans9 = path.format({
        dir: 'C:\\path\\dir',
        base: 'drashti.txt',
    });
console.log(ans9);

//isAbsoulte
ans10 = path.isAbsolute('C:/foo/..');
console.log(ans10);
ans11 = path.isAbsolute('.');
console.log(ans11);

//posix
ans12 = 'rathod/drashti/jk'.split(path.sep);
console.log(ans12);

// delimiter
console.log(process.env.PATH);
 