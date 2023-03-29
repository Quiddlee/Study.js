'use strict';
function deepCount(a) {
    console.log(a.flat());
    return a.flat().length;
}
console.log(deepCount(["x", "y", ["z"]]));
