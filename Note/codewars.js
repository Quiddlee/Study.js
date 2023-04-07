'use strict';

Function.prototype.myBind = function (ctx) {
    console.log(this, ctx);
    ctx.func = this;
    return check.func;
};

let wassup = function () {
    return this.prop;
};

const check = { prop: 'cool' };

wassup = wassup.myBind(check);
console.log(wassup());
console.log(check);