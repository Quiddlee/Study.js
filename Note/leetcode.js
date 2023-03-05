"use strict";
function longestSubarray(nums, limit) {
    const arrLength = nums.length;
    let left = 0;
    let right = 0;
    let biggestLength = 0;
    for (let i = 0; right < arrLength; --i) {
        const subArr = nums.slice(left, right + 1);
        const sum = Math.max(...subArr) - Math.min(...subArr);
        console.log(subArr);
        if (sum <= limit) {
            const length = subArr.length;
            if (length > biggestLength) {
                biggestLength = length;
            }
        }
        else {
            ++left;
        }
        ++right;
    }
    return biggestLength;
}
;
console.log(longestSubarray([24, 12, 71, 33, 5, 87, 10, 11, 3, 58, 2, 97, 97, 36, 32, 35, 15, 80, 24, 45, 38, 9, 22, 21, 33, 68, 22, 85, 35, 83, 92, 38, 59, 90, 42, 64, 61, 15, 4, 40, 50, 44, 54, 25, 34, 14, 33, 94, 66, 27, 78, 56, 3, 29, 3, 51, 19, 5, 93, 21, 58, 91, 65, 87, 55, 70, 29, 81, 89, 67, 58, 29, 68, 84, 4, 51, 87, 74, 42, 85, 81, 55, 8, 95, 39], 87));
