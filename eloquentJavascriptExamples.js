function min(a, b) {
    if (a < b) return a;
    else return b;
}

min(3, 5);
min(70000, 0);

//recursion

function isEven(num) {
    if (num === 0) return true;
    if (Math.abs(num) === 1) return false;
    else return isEven(Math.abs(num) - 2);
}

//abstract out a part of the function
function countBs(str) {
    return countChar(str, "B");
}

function countChar(str, character) {
    var counter = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == character) {
            counter++;
        }
    }
    return counter;
}

countBs("EFEIJFEWVBBBjfbbb");


//make a table that tallies totals of properties in an array of objects

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) / Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]));
}

function hasEvent(event, entry) {
    return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
    var table = [0, 0, 0, 0];
    for (var i = 0; i < journal.length; i++) {
        var entry = journal[i],
            index = 0;
        if (hasEvent(event, entry)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}


function remove(array, index) {
    return array.slice(0, index)
        .concat(array.slice(index + 1));
}

//using trim
console.log(" okay /n ".trim()); // -> okay


//using for in loops to loop through object keys
var obj = {
    cat: "Fifi",
    dog: ["Stella", "Beau"],
};

function printPets(object) {
    for (var pet in object)
        console.log("My pets are " + object[pet]);
}



printPets(obj);

//return a range

function range(start, end, step) {
    var arr = [];
    var i = start;
    if (step < 0) {
        while (i >= end) {
            arr.push(i);
            i += step;
        }
    } else {
        while (i <= end) {
            arr.push(i);
            if (!step)
                i++;
            else i += step;
        }
    }

    return arr;
}
range(3, 78);


//reverse an Array without using reverse

function reverseArray(arr) {
    var newArr = [];
    while (arr.length > 0) {
        newArr.push(arr.pop());
    }
    return newArr;
}
reverseArray([1, 2, 3, 4, 5]);

function reverseArrayInPlace(arr) {
    for (var i = 0; i <= Math.floor(arr.length / 2); i++) {
        var f2l = arr[i];
        var l2f = arr[arr.length - 1 - i];

        arr[i] = l2f;
        arr[arr.length - 1 - i] = f2l;
    }
    return arr;
}
reverseArrayInPlace([1, 2, 3, 4, 5]);

//make a deep equals function that compares two objects
function deepEqual(objA, objB) {
    //make sure they're objects and of the same size
    if (areObjects(objA, objB) && (Object.keys(objA).length == Object.keys(objB).length)) {

        //console.log('Type of A and B are ' + typeof objA + typeof objB + 'OK, length is ' + Object.keys(objA).length);

        for (var properties in objA) {

            if (areObjects(objA[properties], objB[properties])) {

                deepEqual(objA[properties], objB[properties]);
            } else return objA[properties] === objB[properties];
        }

    } else return objA == objB;

}

function areObjects(a, b) {
    if ((typeof a == 'object' && a != null) && (typeof b == 'object' && b != null)) {
        return true;
    } else return false;
}
//
//function doesntWork (a, b) {
//    _.isEqual(a , b);
//}

var obj = {
    here: {
        is: "an"
    },
    object: 2
};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {
    here: 1,
    object: 2
}));
// → false
console.log(deepEqual(obj, {
    here: {
        is: "an"
    },
    object: 2
}));

//flatten array of arrays

function flattenArrays(arrayOfArrays) {
    arrayOfArrays = arrayOfArrays.reduce(function (a, b) {
        return a.concat(b);
    });
    return arrayOfArrays;
}

var array1 = [[1, 2, 3], [4, 5], [6]];

flattenArrays(array1); //[1,2,3,4,5,6];

//em6 notation

const flatten = arr => arr.reduce(
    (acc, val) => acc.concat(
        Array.isArray(val) ? flatten(val) : val
    ), []
);
var array1 = [[1, 2, 3], [4, 5], [6]];
flatten(array1);


//use filter and map to search an array and return a new list