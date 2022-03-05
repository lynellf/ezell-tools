"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tap = void 0;
var option_1 = require("./option");
function tap(x) {
    return function (f) {
        f(x);
        return (0, option_1.Option)(x);
    };
}
exports.tap = tap;
//# sourceMappingURL=tap.js.map