'use strict';

function sumArgs (arr) {
  console.log(arr.slice(2).reduce((a, b) => parseInt(a) + parseInt(b)
  ))
}

sumArgs(process.argv)
