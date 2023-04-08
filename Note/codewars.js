'use strict';
var obj1 = { prop: 1 }, obj2 = { prop: 2 };
Function.prototype.myBind = function (ctx) {
    const fn = this;
    const context = { ...ctx };

    context.func = function () {
        return (() => {
            return fn.call(this);
        })()
    }

    // ctx.func = function() {
    //     return () => {
    //         return this.prop;
    //     }
    // }
    // return ctx.func()

    // return function () {
    //     return fn.call(context);
    // };
};

let check = function () {
    console.log(this.prop);
};

console.log('sup');
check = check.myBind(obj1);
check();
check = check.myBind(obj2);
check();