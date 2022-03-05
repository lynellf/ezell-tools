"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
var option_1 = require("./option");
function map(x) {
    return function (fn) {
        return (0, option_1.Option)(fn(x));
    };
}
exports.map = map;
//# sourceMappingURL=map.js.map