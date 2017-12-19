//Insertion Sort
var normaltest = false

function resetarr(norm) {
    return norm ? [3, 2, 1, 45, 6, -7, 54, 9, 90, 5] : [-1, 0, 24, 1, 3, 5, 8, 2, 5, 4, 6, 76, 45, , 3, 23, 45, 56, 7, 8, , 9, 7, 6, 56, 5, 5, 3, , 2, 12, 1, 3, 4, 6, 7, 8, 9, 0, , 45, 4, 4, 4, 3, 3, 2, 2, 1, 1, 2, 4, 5, 6, 76, 5, , 4, 4, 3, 6, , 8, 9, , , 6, 56];
}

//bubble sort
function bubbleSortArr(arr) {
    let itr = 0;
    let count = 0;
    Number(arr[0]) ? '' : arr.splice(0, 1);
    while (itr < arr.length) {
        count++
        for (var i = 0; i < arr.length - 1; i++) {
            count++
            let current = arr[i];
            let next = Number(arr[i + 1]);
            if (isNaN(next) || (current === next)) {
                arr.splice(i + 1, 1)
                i--;
            } else if (arr[i] > arr[i + 1]) {
                arr[i] = next;
                arr[i + 1] = current;
            }
        }
        itr++;
    }
    return { arr, count };
}

var t1 = performance.now();
console.log("bubbleSortArr - count", bubbleSortArr(resetarr(normaltest)).count);
console.log("bubbleSortArr - array", bubbleSortArr(resetarr(normaltest)).arr);
var t2 = performance.now();
console.log("bubble sort execution time", (t2 - t1));

//Selection sort
function selectionSort(arr) {
    let itr = 0, temp, minInd, count = 0;
    let arrLength = arr.length;
    while (itr < arr.length) {
        count++
        minInd = itr;
        temp = arr[itr]
        for (var i = itr + 1; i < arr.length; i++) {
            count++
            if (isNaN(Number(arr[i])) || arr[minInd] === arr[i] || arr[itr] === arr[i]) {
                arr.splice(i, 1);
                i--;
            } else if (arr[i] < arr[minInd]) {
                minInd = i;
            }
        }
        arr[itr] = arr[minInd];
        arr[minInd] = temp;
        itr++;
    }
    return { arr, count };
}

var t1 = performance.now();
let afterSelectionSort = selectionSort(resetarr(normaltest));
console.log("selectionSort - count", afterSelectionSort.count);
console.log("selectionSort - array", afterSelectionSort.arr);
var t2 = performance.now();
console.log("selection sort execution time", (t2 - t1));

function mySort(arr) {
    let count = 0; tempArr = [], minInd, minVal, len = arr.length;
    while (arr.length > 0) {
        count++
        minInd = 0;
        for (var i = 1; i < arr.length; i++) {
            count++
            if (isNaN(Number(arr[i])) || arr[i] === arr[minInd]) {
                arr.splice(i, 1);
                i--;
            }
            if (arr[i] < arr[minInd]) {
                minInd = i;
                minVal = arr[minInd];
            }
        }
        tempArr.push(arr[minInd]);
        arr.splice(minInd, 1);
    }
    return { count, tempArr };
}
let aftermySort = mySort(resetarr(normaltest));
console.log(aftermySort.count);
console.log(aftermySort.tempArr);

function insertionSort(arr) {
    let itr = 1, tempArr = [arr[0]], count = 0;
    while (itr < arr.length) {
        count++
        const current = arr[itr];
        if (!isNaN(Number(current))) {
            for (var i = (tempArr.length - 1); i > -1; i--) {
                count++
                if (tempArr[i] < current) {
                    tempArr.splice(i + 1, 0, current);
                    break
                } else if (tempArr[i] === current) {
                    arr.splice(itr, 1);
                    break;
                }
            }
        }
        itr++;
    }
    return { arr: tempArr, count };
}
var t1 = performance.now();
let afterinsertionSort = mySort(resetarr(normaltest));
console.log("insertion - count", afterinsertionSort.count);
console.log("insertion - array", afterinsertionSort.arr);
var t2 = performance.now();
console.log("insertion sort execution time", (t2 - t1));

7
[0, 1, 1, 2, 3, 5, 8]

    (function fib(n) {
        let itr = 2, tempArr = [0, 1];
        while (itr <= n) {
            tempArr.push(tempArr[itr - 1] + tempArr[itr - 2]);
            itr++;
        }
        return tempArr;
    })(7)


    (function fibrec(n, temp = [0, 1]) {
        if (n <= 1) return 1
        temp[n] = fibrec(n - 1, temp) + fibrec(n - 2, temp);
        return temp;
    })(7)

var t1 = performance.now();

(function quickSort(arr) {
    if (arr.length < 2) return arr;
    let pivot = arr[Math.round(arr.length / 2)], itr = 0, leftArr = [], rightArr = [];
    while (itr < arr.length) {
        temp = arr[itr];
        if (temp > pivot) {
            rightArr.push(temp);
        } else if (temp < pivot) {
            leftArr.push(temp);
        }
        itr++;
    }
    return quickSort(leftArr).concat(pivot, quickSort(rightArr));
})(resetarr(true));
var t2 = performance.now();
console.log("insertion sort execution time", (t2 - t1));


(function findSubstring(str, substr, subsequent = false) {
    let itr = 0, matched = false;
    if (substr.length === 1) {
        return str[0] === substr[0];
    }
    while (itr < str.length) {
        matched = str[subsequent ? 0 : itr] === substr[0] ?
            findSubstring(str.slice(itr + 1), substr.slice(1), true) : false;
        if (matched || subsequent) {
            break;
        }
        itr++
    }
    return matched;
})("vamsi", "am");