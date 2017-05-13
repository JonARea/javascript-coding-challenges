var mydir = require('./filterbyext.js')
var path = require('path')

var dir = process.argv[2]
var ext = process.argv[3]
var callback = function(err, data){
  if (err) throw err;
  data.forEach(function(file){
    console.log(file)
  })
}
mydir(dir, ext, callback);
