function difference (a, b) {
        
    var newArr = [];
    
      for (var i = 0; i < b.length; i++) { 
       newArr.push(a.filter(
        function(val, ind, arr) {
                return val !== b[i];
            } 
        ));
      }
   
   
    return newArr;
}
    


difference([1,2,2,2,3], [2]);