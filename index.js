const path = require('path');

console.log(__filename);

console.log(path.basename(__filename));//returns the last portion of a path

console.log(path.extname(__filename));//returns the extension of the path

console.log(path.dirname(__filename));//returns the directory name of a path

console.log(path.parse(__filename));//returns an object whose properties represent significant elements of the path

console.log(path.isAbsolute(__filename));//determines if path is an absolute path

console.log(path.join(__dirname, 'test', 'second.html'));//accepts an unlimited number of path components

console.log(path.resolve(__dirname, './test', 'second.html'));