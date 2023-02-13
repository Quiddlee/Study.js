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

// function searchInsert(nums: number[], target: number): number {
//     nums.push(target);
//     return nums.sort((a, b) => a - b).indexOf(target);
// };
// console.log(searchInsert([3,6,7,8,10], 5));

// function sortedSquares(nums: number[]): number[] {
//     return nums.map(e => e**2).sort((a, b) => a - b);
// };
// console.log(sortedSquares([-4,-1,0,3,10]));

// function rotate(nums: number[], k: number): void {
//     while (k !== 0) {
//         nums.unshift(...nums.splice(nums.length - 1));
//         k -= 1;
//     }
// };
// rotate([1,2,3,4,5,6,7], 3);

function longestSubarray(nums: number[], limit: number): number {
    const arrLength = nums.length;
    let longestSize = 0;
    let count = 0;

    for (let i = 0; i < arrLength; i++) {
        for(let j = i + 1; j < arrLength; j++) {
            const indexI = nums.indexOf(nums[i]);
            const indexJ = nums.indexOf(nums[j] + 1);

            console.log(nums.slice(indexI, indexJ));

            if (nums[i] < nums[j]) {
                count = Math.abs(nums[i] - nums[j]);

                if (count <= limit && nums.slice(indexI, indexJ).length > longestSize) {
    
                    console.log(nums.slice(indexI, indexJ), nums[i], nums[j]);
                    longestSize = nums.slice(indexI, indexJ).length;
                    console.log(longestSize);
                }
            }
            
        }
    }

    return longestSize;
};
console.log(longestSubarray([4,2,2,2,4,4,2,2], 0));