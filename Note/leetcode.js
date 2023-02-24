"use strict";
function checkInclusion(s1, s2) {
    if (s1.split('').sort().join('') === s2.split('').sort().join(''))
        return true;
    const s1Len = s1.length;
    const s2Len = s2.length;
    const arr = [];
    const letterIndexes = {};
    let bestSum = 500;
    let bestSumKey = '';
    for (let i = s2Len; i > 0; --i) {
        if (s2.substr(i, s1Len) === s1)
            return true;
        if (s2.substr(i, s1Len) === s1.split('').reverse().join(''))
            return true;
    }
    for (let i = 0; i < s2.length; ++i) {
        if (!(s2.includes(s1[i])) && s1[i])
            return false;
        if (s1.includes(s2[i])) {
            if (letterIndexes[s2[i]]) {
                letterIndexes[s2[i]].push(i);
            }
            else {
                letterIndexes[s2[i]] = [i];
            }
        }
    }
    console.log(letterIndexes);
    const copy = structuredClone(letterIndexes);
    for (const [key, value] of Object.entries(letterIndexes)) {
        if (value.length > 1 && value.length !== s1.match(new RegExp(key, 'g'))?.length) {
            value.forEach(val => {
                const arrSum = [];
                let i = 1;
                while (Object.values(letterIndexes)[i]) {
                    let j = 0;
                    while (Object.values(letterIndexes)[i][j]) {
                        if (val !== Object.values(letterIndexes)[i][j]) {
                            const sum = val - Object.values(letterIndexes)[i][j];
                            arrSum.push(sum);
                            console.log(sum);
                            console.log(arrSum);
                            arrSum.every(elem => {
                                if (sum < elem) {
                                    copy[key] = [val];
                                }
                            });
                        }
                        j++;
                    }
                    i++;
                }
            });
        }
    }
    if (bestSum !== 500) {
        letterIndexes[bestSumKey] = [bestSum];
    }
    for (const value of Object.values(copy)) {
        arr.push(...value);
    }
    const indexes = Array.from(new Set(arr));
    const indexLen = indexes.length;
    if (indexLen < s1Len)
        return false;
    if (indexLen === 1)
        return true;
    indexes.sort((a, b) => a - b);
    console.log(indexes);
    for (let i = 1; i < indexLen; ++i) {
        console.log(indexes[i - 1], indexes[i]);
        if (Math.abs(indexes[i - 1] - indexes[i]) !== 1)
            return false;
    }
    return true;
}
;
console.log(checkInclusion('osmzg', 'diyhaywtgpzosgmuxvidndouo'));
