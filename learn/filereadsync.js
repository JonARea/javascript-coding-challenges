'use strict';

const fs = require('fs');


function read (file) {

  fs.readFile(file, 'utf-8', function(err, data) {
    if (err) {
      console.log('error');
    }
      let foo = data.split('\n')
      console.log(foo.length - 1)

  })




}
read(process.argv[2])
