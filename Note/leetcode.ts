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

// function longestSubarray(nums: number[], limit: number): number {
//     const arrLength: number = nums.length;
//     let longestSize: number = 0;
//     let count: number = 0;
//     let subArr: number[];
//     let memo: {[key: string]: number} = {};

//     for (let i = 0; i < arrLength; i++) {
//         for(let j = i; j < arrLength; j++) {
//             subArr = nums.slice(i, j + 1);
//             if (`${Math.max(...subArr)}, ${Math.min(...subArr)}` in memo) {
//                 if (subArr.length > longestSize) {
//                     longestSize = subArr.length;
//                 }
//                 break;
//             }
//             count = Math.max(...subArr) - Math.min(...subArr);

//             // console.log(subArr);

//             memo[`${Math.max(...subArr)}, ${Math.min(...subArr)}`] = count;
//             console.log(memo);
//             if (count <= limit) {
//                 if (subArr.length > longestSize) {
//                     longestSize = subArr.length;
//                 }
//             }
//             else break;
//         }
//     }

//     return longestSize;
// };
// console.log(longestSubarray());

// function moveZeroes(nums: number[]): void {
//     const zeros = nums.filter(num => num === 0);
//     const numbers = nums.filter(num => num !== 0);
//     nums.splice(0);
//     nums.push(...numbers, ...zeros);
// };
// moveZeroes([0,1,0,3,12]);

// function twoSum(numbers: number[], target: number): number[] {
//     const length = numbers.length;

//     for (let i = length - 1; i > 0; --i) {
//         for (let j = length - 2; j >= 0; --j) {

//             console.log(numbers[i], numbers[j]);
//             if (numbers[i] + numbers[j] === target && i !== j) {
//                 return [++j, ++i];
//             }
//         }
//     }

//     return [];
// };
// console.log(twoSum([0,0,3,4], 0));