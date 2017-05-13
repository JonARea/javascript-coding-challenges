'use strict';

const path = require("path")
const fs = require("fs")


module.exports = function (dirname, ext, callback){
  fs.readdir(dirname, function(err, files){
  if (err) {return callback(err)}
  else {
  files = files.filter(function(file){
    return (path.extname(file) == "." + ext)
  })
  return callback(null, files)
  }

})
}
