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
//     const arrLength = nums.length - 1;
//     let subArr: number[];
//     let longestSize = 0;
//     let left = 0;
//     let right = arrLength;
//     let sum = 0;
//
//     while (right < left) {
//         sum = right - left;
//
//         console.log(nums.slice(right, left + 1))
//
//         if (sum === limit) {
//             return nums.slice(right, left + 1).length;
//         }
//         else if (sum < limit) {
//             ++left;
//         }
//         else {
//             right++
//         }
//     }
//
//     return longestSize;
// };
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
// function reverseString(s: string[]): void {
//     s.reverse();
// };
// console.log(reverseString(["h","e","l","l","o"]));
// function reverseWords(s: string): any {
//     return s.split(' ').map(elem => elem.split('').reverse().join('')).join(' ');
// };
// console.log(reverseWords("Let's take LeetCode contest"));
// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val);
//         this.next = (next===undefined ? null : next);
//     }
// };
// const listNode = new ListNode(1); 
// function middleNode(head: ListNode | null): ListNode | null {
//     let halfLength = 0;
//     let node = head;
//     for (halfLength;; --halfLength) {
//         if (node === null) {
//             halfLength = Math.round(halfLength / 2);
//             break;
//         }
//         else node = node.next;
//     }
//     node = head;
//     for (let i = 0;; --i) {
//         if (i === halfLength) return node;
//         else node = node.next;
//     }
// }
// middleNode();
// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//     let dummyHead = new ListNode(-Infinity);
//     dummyHead.next = head;
//     let resultHead = dummyHead;
//     let tail = head;
//     let i = n;
//     for(i; i > 0; --i) {
//         tail = tail.next;
//     }
//     let removedNode = head;
//     let prev = dummyHead;
//     for(i;;--i) {
//         if (tail) {
//             tail = tail.next;
//             removedNode = removedNode.next;
//             prev = prev.next;
//         }
//         else break;
//     }
//     prev.next = removedNode.next;
//     return resultHead.next
// }
// function lengthOfLongestSubstring(s: string): number {
//     let strLength = s.length - 1;
//     let temp: string[] = [];
//     let biggestLength = 0;
//     for (let i = strLength; i >= 0; --i) {
//         if (!temp.includes(s[i])) {
//             temp[temp.length] = s[i];
//             const length = temp.length;
//             if (length > biggestLength) {
//                 biggestLength = length;
//             }
//         }
//         else {
//             i = strLength--;
//             temp = [];
//         }
//     }
//     return biggestLength;
// };
// console.log(lengthOfLongestSubstring("cdd"));  //"abcb"
function checkInclusion(s1, s2) {
    // for (let i = 0; i < s2.length; i++) {
    //     console.log(s2.substr(i, s1.length));
    //     if (s2.substr(i, s1.length) === s1) return true;
    // };
    for (var i = 0; i <= s1.length; i++) {
        var index = s2.indexOf(s1[i]);
        console.log(index);
        if (index === -1)
            continue;
        console.log(index, s2.indexOf(s1[i + 1]), index, s2.indexOf(s1[i - 1]));
        console.log(index === s2.indexOf(s1[i + 1]) || index === s2.indexOf(s1[i - 1]));
        if (index === s2.indexOf(s1[i + 1]) || index === s2.indexOf(s1[i - 1])) {
            return true;
        }
    }
    return false;
}
;
console.log(checkInclusion('ab', 'eidbaooo'));
