"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
var some_1 = require("./some");
function map(x) {
    return function (fn) {
        return (0, some_1.Some)(fn(x));
    };
}
exports.map = map;
//# sourceMappingURL=map.js.map