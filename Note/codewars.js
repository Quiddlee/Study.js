'use strict';
function sortByBit(arr) {
    const nums = [];
    let sorted;
    for (let i = 0; i < arr.length; i++) {
        nums.push([
            arr[i],
            parseInt(arr[i].toString()).toString(2)
                .replace(/0/gi, '')
        ]);
    }
    sorted = nums
        .sort(([num1, bit1], [num2, bit2]) => +bit1 === +bit2 ? +num1 - +num2 : +bit1 - +bit2).flat();
    arr.splice(0);
    for (let i = 0; i < sorted.length; i += 2)
        arr.push(+sorted[i]);
    return arr;
}
console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1]));
