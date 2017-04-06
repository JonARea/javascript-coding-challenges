//combine the arrays and reduce by a !== b to find the union, arr.length
//

function jaccardSim(arr1, arr2) {
    
    var union = [arr1.push(arr2)];
    var intersect = [];
    
    union.sort(
        function(a, b) {
            return a - b;
        }
    );
    console.log(union);        
}

jaccardSim([1, 3, 4, 7], [2, 3, 7, 8]);

//combine the arrays and reduce by a === b to find the intersection arr.length
