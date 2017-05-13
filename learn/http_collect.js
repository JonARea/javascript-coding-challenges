var http = require('http')
var bufferlist = require('bl')

var url = process.argv[2]

http.get(url, function(response){
  response.setEncoding('utf8')
  response.on('error', console.error)

  response.pipe(bufferlist(function(err, data){
      if (err) throw console.err
      console.log(data.toString().length)
      console.log(data.toString())
    }))
})
