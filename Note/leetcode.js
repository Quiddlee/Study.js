// function runningSum(nums) {
//     const res = [];
//     res.push(nums[0]);
//
//     for (let i = 1; i < nums.length; i++) {
//         res.push(nums[i] + res[i - 1]);
//     }
//
//     return res;
// }
// console.log(runningSum([3,1,2,10,1]));
//
// function largestAltitude(gain: number[]): number {
//     gain.reduce((acc, curr, i): number => gain[i] = acc + curr);
//     return Math.max(0, ...gain);
// }
// console.log(largestAltitude([-5,1,5,0,-7]));
// function search(nums: number[], target: number): number {
//     return nums.indexOf(target);
// };
// console.log(search([-1,0,3,5,9,12], 2));
// function bad(n: number): number {
//     const numHalf = Math.round(n / 2);
//     if (isBadVersion(numHalf)) {
//         for (let i = numHalf; i >= 0; i--) {
//             if (!isBadVersion(i)) return i + 1;
//         }
//     }
//     else {
//         return bad(n + numHalf);
//     }
// };
// console.log(bad(5));
function searchInsert(nums, target) {
    if (nums.includes(target)) {
        return nums.indexOf(target);
    }
    else {
        if (nums.includes(target - 1)) {
            return nums.indexOf(target - 1) + 1;
        }
        else if (nums.includes(target + 1)) {
            return nums.indexOf(target + 1);
        }
    }
}
;
console.log(searchInsert([3, 6, 7, 8, 10], 5));
