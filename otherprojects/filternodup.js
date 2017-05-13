//combine the arrays and reduce by a !== b to find the union, arr.length
//

function jaccardSim(arr1, arr2) {
    
    var union = arr1.concat(arr2).filter(
        function(item, index, arr) {
            return arr.indexOf(item) == index;
        });
    
    var intersect = arr1.concat(arr2).filter(
        function(item, index, arr) {
            return arr.indexOf(item) !== index;
        });
        
    //console.log(union); 
    //console.log(intersect);
    var sim = intersect.length / union.length;
}
jaccardSim([1, 3, 4, 7], [2, 3, 7, 8]);

//combine the arrays and reduce by a === b to find the intersection arr.length
