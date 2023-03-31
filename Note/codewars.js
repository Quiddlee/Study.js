'use strict';
Array.prototype.map = function (callback, thisArg) {
    console.log(this);
    const newArr = [];
    for (let i = 0, arrLeng = this.length; i < arrLeng; ++i) {
        const currElem = this[i];
        currElem && newArr.push(callback.call(thisArg, currElem, i, this));
    }
    return newArr;
};
