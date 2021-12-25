"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatMap = void 0;
var option_1 = require("./option");
function flatMap(x) {
    return function (fn) {
        return (0, option_1.Option)(fn(x));
    };
}
exports.flatMap = flatMap;
//# sourceMappingURL=flatmap.js.map