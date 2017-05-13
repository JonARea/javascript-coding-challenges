function binaryAgent(str) {
  function binarytodecimal (num) {
    console.log(num);
    var a = 0;
    for (var i = 0; i < 8; i++) {
      if (num.charCodeAt(i) === 49) {
        a += Math.pow(2, 7 - i);
        console.log(a);
      }
    }
  letter = String.fromCharCode(a);
  return letter;
  }
  
  
  newStr = str.replace(/(\d+)\s*/g, binarytodecimal);
  
  return newStr;
}

binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');
