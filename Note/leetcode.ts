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
    let left = 0;
    let right = 0;
    let biggestLength = 0;

    for (let i = 0; right < arrLength; --i) {
        const subArr = nums.slice(left, right + 1);
        const sum = Math.max(...subArr) - Math.min(...subArr);

        if (sum <= limit) {
            const length = subArr.length;

            if (length > biggestLength) {
                biggestLength = length;
            }
        }
        else {
            ++left;
        }

        ++right
    } 

    return biggestLength;
};
console.log(longestSubarray([24,12,71,33,5,87,10,11,3,58,2,97,97,36,32,35,15,80,24,45,38,9,22,21,33,68,22,85,35,83,92,38,59,90,42,64,61,15,4,40,50,44,54,25,34,14,33,94,66,27,78,56,3,29,3,51,19,5,93,21,58,91,65,87,55,70,29,81,89,67,58,29,68,84,4,51,87,74,42,85,81,55,8,95,39], 87));

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

// function checkInclusion(s1: string, s2: string): boolean {
//     if (s1.split('').sort().join('') === s2.split('').sort().join('')) return true;

//     interface ILetters {
//         [key: string]: number[];
//     }

//     const s1Len = s1.length;
//     const s2Len = s2.length;
//     const arr: number[] = [];
//     const letterIndexes: ILetters = {};
//     let bestSum = 500;
//     let bestSumKey = '';

//     for (let i = s2Len; i > 0; --i) {
//         if (s2.substr(i, s1Len) === s1) return true
//         if (s2.substr(i, s1Len) === s1.split('').reverse().join('')) return true
//     }

//     for (let i = 0; i < s2.length; ++i) {
//         if (!(s2.includes(s1[i])) && s1[i]) return false;
//         if (s1.includes(s2[i])) {
//             if (letterIndexes[s2[i]]) {
//                 letterIndexes[s2[i]].push(i);
//             }
//             else {
//                 letterIndexes[s2[i]] = [i];
//             }
//         }
//     }

//     console.log(letterIndexes);

//     const copy: ILetters = structuredClone(letterIndexes);

//     for (const [key, value] of Object.entries(letterIndexes)) {
//         if (value.length > 1 && value.length !== s1.match(new RegExp(key, 'g'))?.length) {
//             value.forEach(val => {
//                 const arrSum = [];
//                 let i = 1;

//                 while (Object.values(letterIndexes)[i]) {
//                     let j = 0;

                    
//                     while (Object.values(letterIndexes)[i][j]) {
//                         if (val !== Object.values(letterIndexes)[i][j]) {
//                             const sum = val - Object.values(letterIndexes)[i][j];
//                             arrSum.push(sum);
//                             // console.log(sum);
//                             // console.log(copy[key]);
                            
//                             console.log(sum);
//                             console.log(arrSum);
//                             arrSum.every(elem => {
//                                 if (sum < elem) {
//                                     copy[key] = [val];
//                                     // console.log(val, Object.values(letterIndexes)[i][j], elem);
//                                     // console.log(copy);
//                                 }
//                             });
//                         }
//                         // console.log(copy[key]);
//                         // bestSumKey = key;

//                         j++;
//                     }

//                     i++
//                 }
//             });
//         }
//     }

//     if (bestSum !== 500) {
//         letterIndexes[bestSumKey] = [bestSum];
//     }

//     for (const value of Object.values(copy)) {
//         arr.push(...value);
//     }

//     const indexes = Array.from(new Set(arr));
//     const indexLen = indexes.length;

//     if (indexLen < s1Len) return false;
//     if (indexLen === 1) return true;
    
//     indexes.sort((a, b) => a - b);

//     console.log(indexes);

//     for (let i = 1; i < indexLen; ++i) {
//         console.log(indexes[i - 1], indexes[i]);
//         if (Math.abs(indexes[i - 1] - indexes[i]) !== 1) return false; 
//     }

//     return true;
// };
// console.log(checkInclusion('osmzg', 'diyhaywtgpzosgmuxvidndouo'));

// function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    
// };
// console.log(floodFill([ [1,1,1],
//                         [1,1,0],
//                         [1,0,1]], 1, 1, 2));

// function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
//     let rootNode = root2;
//     let secondRootNode = root1;
//     const queue1 = [rootNode];
//     const queue2 = [secondRootNode];

//     while(queue1.length !== 0 && queue2.length !== 0) {
//         const currentNode1 = queue1[0];
//         const currentNode2 = queue2[0];

//         if (currentNode1 && currentNode2) {
//             currentNode1.val += currentNode2.val;
//         }
//         else if (currentNode2) {
//             currentNode1.val = currentNode2.val;
//         }

//         if (currentNode1.left !== null) {
//             queue1.push(currentNode1.left);
//         }
//         else {
//             if (currentNode1.left || currentNode2.left) {
//                 currentNode1.left = currentNode2.left;
//                 queue1.shift();
//                 queue2.shift();
//                 continue;
//             }
//         }

//         if (currentNode2.left !== null) {
//             queue2.push(currentNode2.left);
//         }

//         if (currentNode1.right !== null) {
//             queue1.push(currentNode1.right);
//         }
//         else {
//             if (currentNode1.right || currentNode2.right) {
//                 currentNode1.right = currentNode2.right;
//                 queue1.shift();
//                 queue2.shift();
//                 continue;
//             }
//         }


//         if (currentNode2.right !== null) {
//             queue2.push(currentNode2.right);
//         }

//         queue1.shift();
//         queue2.shift();
//     }

//     return rootNode;
// };
// console.log(mergeTrees([1,3,2,5], [2,1,3,null,4,null,7]));