'use strict';

const path = require("path")
const fs = require("fs")

let ext = "." + process.argv[3]
//console.log(ext)
fs.readdir(process.argv[2], function (err, files){
  if (err) {console.log(err)}
  let aofF = files.filter(function(file){
    return path.extname(file) == ext
  })
aofF.forEach(a => console.log(a))
})
