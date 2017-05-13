'use strict';

const path = require("path")
const fs = require("fs")


module.exports = function readDir(dirname, ext, callback){
  fs.readdir(err, files)
  if (err) {return callback(err)}
  files.filter(function(file){
    return (path.extname(file) == "." + ext)
  })
  return callback(null, files)
}
