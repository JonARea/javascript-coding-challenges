function uncompress(music) {
    let str = "";
    str = music;
    console.log('input is ' + music + " with type " + typeof (music));
    let arr = [];

    function replaceCount(match, p1, p2) {
        console.log(p1 + 'count');
        let num = parseInt(p1);
        console.log(num);
        let repeated = "";
        for (let i = 0; i < p2; i++) {
            repeated += num + ",";
        }
        console.log(repeated);
        return repeated;
    }
    let output = str.replace(/(-?\d+)\*(\d+),?/g, replaceCount);

    function replaceListInterval(match, p1, p2, p3) {

        let interval = parseInt(p3);
        let first = parseInt(p1);
        let second = parseInt(p2);
        console.log(interval == 2);
        let list = "";
        if (first < second) {

            for (let i = 0; i <= second - first; i += interval) {
                list += first + i + ",";
            }
        } else {
            for (let j = 0; j <= first - second; j += interval) {
                list += first - j + ",";
            }
        }

        console.log(list);
        return list;
    }

    function replaceList(match, p1, p2) {
        let list = "";
        let first = parseInt(p1);
        let second = parseInt(p2);
        if (first < second) {
            for (let i = 0; i <= second - first; i++) {
                list += first + i + ",";
            }
        } else {
            for (let i = 0; i <= first - second; i++) {
                list += p1 - i + ",";
                console.log(i);
            }
        }
        return list;

    }
    output = output.replace(/(\d+)-(-?\d+)\/(\d),?/gi, replaceListInterval);

    output = output.replace(/(\d+)-(-?\d+),?/gi, replaceList);
    arr = output.split(',');
    if (arr[arr.length - 1] == "") {
        arr.pop();
    }
    arr = arr.map(function (a) {
        return parseInt(a, 10);
    });
    return arr;
}