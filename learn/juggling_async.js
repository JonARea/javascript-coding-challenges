var http = require('http')
var bl = require('bl')
var after = require('after')

var allData = []
var urls = process.argv.slice(2, process.argv.length)
var done = after(3, printAllData)

function printAllData () {
  allData.forEach(function(data) {
    console.log(data)
  })
}


urls.forEach(function(url) {
    var index = urls.indexOf(url)

    http.get(url, function(response){
      response.setEncoding('utf8')
      response.pipe(bl(function(err,data){
        if (err) throw err
          allData[index] = data.toString()
          done()
      }))
    })

})
