var net = require('net')
var moment = require('moment')

var port = process.argv[2]
var newline = '\n'

var server = net.createServer(
  function (socket) {
    socket.end(moment().format('YYYY-MM-DD hh:mm') + '\n')

  }
)

server.listen(port)
