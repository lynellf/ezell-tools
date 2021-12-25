"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tap = void 0;
var some_1 = require("./some");
function tap(x) {
    return function (f) {
        f(x);
        return (0, some_1.Some)(x);
    };
}
exports.tap = tap;
//# sourceMappingURL=tap.js.map