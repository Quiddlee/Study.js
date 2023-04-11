'use strict';
var func = function () {
    return this.prop;
};
var obj1 = { prop: 1 }, obj2 = { prop: 2 };
Function.prototype.bind = function (ctx) {
    const fn = this;
    console.log(this);
    return () => {
        return fn.call(ctx);
    };
};
func = func.bind(obj1);
console.log(func());
func = func.bind(obj2);
console.log(func());
