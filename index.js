var fs = require('fs');
var archiver = require('archiver');

archiver.registerFormat('zip-encryptable', require('archiver-zip-encryptable'));

var output = fs.createWriteStream(__dirname + '/example.zip');

var archive = archiver('zip-encryptable', {
    zlib: { level: 9 },
    password: 'test'
});

archive.pipe(output);

archive.file("./test.csv", { name: 'test5.csv' });

archive.finalize();