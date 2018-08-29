var fs = require('fs');

// create file

fs.writeFile('testfile.txt', 'Text in file. Hello!',
 function (err) 
 { if (err) throw err;
    console.log('File create and saved');

 }
);

// update use appendFile
fs.appendFile('testfile.txt', 'NEW Text in file. GOOD LUCK!',
 function (err) 
 { if (err) throw err;
    console.log('File is update by appendFile and saved');

 }
);

// update use writeFile
fs.writeFile('testfile.txt', ' Super NEW Text in file. Hello!',
 function (err) 
 { if (err) throw err;
    console.log('File update by writeFile and saved');

 }
);
// read and print file

let content = fs.readFile('/testfile.txt','utf8',
 function read(err, content) {
    if (err) {
        throw err;
    }
    console.log(content);
});
